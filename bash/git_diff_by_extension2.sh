#!/bin/bash

# 用法: ./git_diff_by_extension.sh <commit1> <commit2> [output_dir]

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

# 获取变更文件列表(包括新增、修改和删除的文件)
files=$(git diff --name-only --diff-filter=ACMRDT "$commit1" "$commit2")
deleted_files=$(git diff --name-only --diff-filter=D "$commit1" "$commit2")

# 处理新增/修改的文件
for file in $files; do
    # 提取文件后缀
    filename=$(basename "$file")
    extension="${filename##*.}"
    
    # 如果文件没有后缀，使用"no_extension"
    if [ "$extension" == "$filename" ]; then
        extension="no_extension"
    fi
    
    # 创建对应后缀的目录
    mkdir -p "$output_dir/$extension"
    
    # 生成差异文件名
    # diff_file="$output_dir/$extension/$filename.diff"
    diff_file="$output_dir/$extension/$file.diff"
    
    # 生成差异文件
    git diff "$commit1" "$commit2" -- "$file" > "$diff_file"
    
    echo "Generated diff for $file -> $diff_file"
done

# 处理删除的文件
for file in $deleted_files; do
    # 提取文件后缀
    filename=$(basename "$file")
    extension="${filename##*.}"
    
    # 如果文件没有后缀，使用"no_extension"
    if [ "$extension" == "$filename" ]; then
        extension="no_extension"
    fi
    
    # 创建对应后缀的目录
    mkdir -p "$output_dir/$extension"
    
    # 生成差异文件名
    diff_file="$output_dir/$extension/$filename.diff"
    
    # 生成删除文件的差异
    git diff "$commit1" "$commit2" -- "$file" > "$diff_file"
    
    echo "Generated diff for deleted file $file -> $diff_file"
done

# 创建汇总报告
summary_file="$output_dir/SUMMARY.txt"
{
    echo "Git Diff Summary"
    echo "================="
    echo "Compared: $commit1 -> $commit2"
    echo "Generated: $(date)"
    echo ""
    echo "Modified/Added Files:"
    echo "$files" | sed '/^$/d' | while read -r line; do echo "  $line"; done
    echo ""
    echo "Deleted Files:"
    echo "$deleted_files" | sed '/^$/d' | while read -r line; do echo "  $line"; done
} > "$summary_file"

echo ""
echo "All diffs have been saved to $output_dir/"
echo "Summary report: $summary_file"