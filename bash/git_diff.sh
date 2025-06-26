#!/bin/bash

# 用法: ./git_flatten_diff_no_src.sh <commit1> <commit2> [output_dir]

if [ $# -lt 2 ]; then
    echo "Usage: $0 <commit1> <commit2> [output_dir]"
    echo "Example: $0 HEAD~1 HEAD diffs"
    exit 1
fi

commit1=$1
commit2=$2
output_dir=${3:-"git_diffs"}  # 默认输出目录为 git_diffs

# 创建输出目录
mkdir -p "$output_dir"

# 获取变更文件列表
files=$(git diff --name-only --diff-filter=ACMRT "$commit1" "$commit2")
deleted_files=$(git diff --name-only --diff-filter=D "$commit1" "$commit2")

# 处理新增/修改的文件
for file in $files; do
    # 去除开头的src/前缀
    no_src_file=${file#src/}
    # 将路径中的/替换为__
    safe_filename=$(echo "$no_src_file" | sed 's/\//__/g')
    
    # 生成差异文件名
    diff_file="$output_dir/${safe_filename}.diff"
    
    # 生成差异文件
    git diff "$commit1" "$commit2" -- "$file" > "$diff_file"
    
    echo "Generated diff for $file -> $diff_file"
done

# 处理删除的文件
for file in $deleted_files; do
    # 去除开头的src/前缀
    no_src_file=${file#src/}
    # 将路径中的/替换为__
    safe_filename=$(echo "$no_src_file" | sed 's/\//__/g')
    
    # 生成差异文件名
    diff_file="$output_dir/${safe_filename}.diff"
    
    # 生成删除文件的差异
    git diff "$commit1" "$commit2" -- "$file" > "$diff_file"
    
    echo "Generated diff for deleted file $file -> $diff_file"
done

# 创建汇总报告
summary_file="$output_dir/SUMMARY.txt"
{
    echo "Git Flattened Diff Summary (no src/)"
    echo "=================================="
    echo "Compared: $commit1 -> $commit2"
    echo "Generated: $(date)"
    echo ""
    echo "All Diffs:"
    find "$output_dir" -name "*.diff" -maxdepth 1 | sed "s|^$output_dir/||" | while read -r line; do
        orig_file=$(echo "$line" | sed 's/\.diff$//' | sed 's/__/\//g')
        echo "  $line -> src/$orig_file"
    done
    echo ""
    echo "Modified/Added Files:"
    echo "$files" | sed '/^$/d' | while read -r line; do echo "  $line"; done
    echo ""
    echo "Deleted Files:"
    echo "$deleted_files" | sed '/^$/d' | while read -r line; do echo "  $line"; done
} > "$summary_file"

echo ""
echo "All diffs have been saved to $output_dir/"
echo "Flat structure with src/ prefix removed"
echo "Summary report: $summary_file"