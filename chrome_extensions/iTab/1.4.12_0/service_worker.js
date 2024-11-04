/*
 * @Author: itab.link
 * @Date: 2023-11-30 14:26:26
 * @LastEditors: itab.link
 * @LastEditTime: 2024-07-28 21:03:48
 * @Description: file content
 */

// let audio = new Audio('https://www.ppbzy.com/audio/Locations/Basketball%20court_fa-basketball/Basketball%20game_64.m4a'); // 替换成您要播放的音频文件的URL
// audio.play();
chrome.runtime.onInstalled.addListener((detail) => {
	if (detail.reason == chrome.runtime.OnInstalledReason.INSTALL) {
		if (navigator.userAgent.includes("Firefox")) {
			chrome.tabs.create({
				url: "dist/index.html",
			});
		} else {
			chrome.tabs.create({
				url: "chrome://newtab",
			});
		}

	}
});


