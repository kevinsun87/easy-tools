/*******************************************************************************
    Measure=it - A browser extension to measure parts of page.
    Copyright (C) 2017-2019 Trishul Goel

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/tsl143/measure-it
*******************************************************************************/

const getChoicesFromStorage = () => {
	return new Promise(resolve => {
		chrome.storage.local.get(['choices']).then((res = {}) => {
			const {choices = {}} = res;
			choices.background = choices.background || '#000000';
			choices.popup = choices.popup || '#ffff00';
			choices.popupOpacity = choices.popupOpacity || '0.3';
			choices.backgroundOpacity = choices.backgroundOpacity || '0.4';
			resolve(choices);
		})
	});
}

const saveData = (key, val) => {
	getChoicesFromStorage()
		.then((choices) => {
			choices[key] = val;
			chrome.storage.local.set({ choices });
		});
}

const setVal = (key, val, saveToo = true) => {
	switch (key) {
		case 'background': {
			if(saveToo) saveData('background', val);
			document.getElementById('backgroundLabel').textContent = val;
			if(!saveToo) document.getElementById('background').value = val;
			break;
		}
		case 'popup': {
			if(saveToo) saveData('popup', val)
			document.getElementById('popupLabel').textContent = val;
			if(!saveToo) document.getElementById('popup').value = val;
			break;
		}
		case 'popupOpacity': {
			if(saveToo) saveData('popupOpacity', val);
			document.getElementById('popupOpacityLabel').textContent = val;
			if(!saveToo) document.getElementById('popupOpacity').value = val;
			break;
		}
		case 'backgroundOpacity': {
			if(saveToo) saveData('backgroundOpacity', val);
			document.getElementById('backgroundOpacityLabel').textContent = val;
			if(!saveToo) document.getElementById('backgroundOpacity').value = val;
			break;
		}
	}
}

getChoicesFromStorage()
	.then((choices) => {
		setVal('background', choices.background, false);
		setVal('popup', choices.popup, false);
		setVal('popupOpacity', choices.popupOpacity, false);
		setVal('backgroundOpacity', choices.backgroundOpacity, false);
	});

document.getElementById('optionTable').addEventListener('change', e => {
	const ele = e.target;
	setVal(ele.getAttribute('id'), ele.value);
})
