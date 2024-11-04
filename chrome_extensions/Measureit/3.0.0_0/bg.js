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

const drawMeasurIt = (preferences) => {
  let x1 = 0;
  let x2 = 0;
  let y1 = 0;
  let y2 = 0;
  let drawIt = false;

  const getColor = (sec, fallback) => {
    try {
      const hex = preferences[sec];
      const opacity = preferences[`${sec}Opacity`];
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      const r = parseInt(result[1], 16);
      const g = parseInt(result[2], 16);
      const b = parseInt(result[3], 16);
      return `${r}, ${g}, ${b}, ${opacity}`;
    } catch(e) {
      return fallback;
    }
  }

  const manipulators = {
    selector: document.createElement('div'),
    upperLabel: document.createElement('span'),
    lowerLabel: document.createElement('span'),
    overlay: document.createElement('div'),

    init: () => {
      manipulators.initializeOverlay();
      manipulators.initializeSelector();
      manipulators.initializeLabels();
    },

    initializeSelector(){
      manipulators.selector.setAttribute("id", 'tslSelector');
      manipulators.selector.style.cssText=`
        background: rgba(${getColor('popup', '255, 255, 0, 0.3')});
        border: 1px dashed #444;
        position: absolute;
        z-index: 9999;
      `;
      manipulators.overlay.appendChild(manipulators.selector);
      manipulators.selector.addEventListener('mousedown',manipulators.mDown,false);
      manipulators.selector.addEventListener('mouseup',manipulators.mUp,false);
      manipulators.selector.addEventListener('mousemove',manipulators.mMove,false);
    },

    initializeOverlay: () => {
      manipulators.overlay.setAttribute("id", 'tslOverlay');
      manipulators.overlay.style.cssText=`
        height: 100vh;
        left: 0;
        right: 0;
        top:0;
        position: fixed;
        cursor: crosshair;
        z-index: 9998;
        background: rgba(${getColor('background', '0, 0, 0, 0.4')});
      `;
      document.body.appendChild(manipulators.overlay);

      manipulators.overlay.addEventListener('mousedown',manipulators.mDown,false);
      manipulators.overlay.addEventListener('mouseup',manipulators.mUp,false);
      manipulators.overlay.addEventListener('mousemove',manipulators.mMove,false);
    },

    initializeLabels: () => {
      manipulators.lowerLabel.setAttribute("id", 'tslLowerLabel');
      manipulators.upperLabel.setAttribute("id", 'tslUpperLabel');
      const labelStyles = `
        position: absolute;
        font-size: 12px !important;
        font-family: Arial !important;
        background: #fff;
        color: black !important;
        line-height: 16px;
        padding: 0 2px;
        min-width: 37px;
        text-align: center;
        box-sizing: border-box !important;
      `;
      manipulators.lowerLabel.style.cssText=`
        ${labelStyles}
        bottom: 0;
        left: -37px;
      `;
      manipulators.upperLabel.style.cssText=`
        ${labelStyles}
        top: 0;
        right: -37px;
      `;
      manipulators.selector.appendChild(manipulators.lowerLabel);
      manipulators.selector.appendChild(manipulators.upperLabel);
    },

    destroy: () => {
      manipulators.overlay.remove();
    },

    drawSelector: () => {
      if(!drawIt)
        return false;

      const height = Math.abs(parseInt(y2, 10) - parseInt(y1, 10));
      const width = Math.abs(parseInt(x2, 10) - parseInt(x1, 10));
      let left = x1+"px";
      let top = y1+"px";

      if(x2 < x1)
        left = x2+"px";

      if(y2 < y1)
        top = y2+"px";

      manipulators.selector.style.left=left;
      manipulators.selector.style.top=top;
      manipulators.selector.style.height=height+"px";
      manipulators.selector.style.width=width+"px";

      if(width > 3 && height > 3){
        manipulators.upperLabel.textContent = width+"px";
        manipulators.lowerLabel.textContent = height+"px";  
      }else{
        manipulators.upperLabel.textContent = "";
        manipulators.lowerLabel.textContent = "";    
      }

      const screenWidth = window.innerWidth;
      // move bottom label inside if no space in left
      if (x1 < 37 || x2 < 37) {
        manipulators.lowerLabel.style.left = 0;
        if (width < 40) manipulators.lowerLabel.style.bottom = "-21px";
      } else {
        manipulators.lowerLabel.style.left = '-37px';
        manipulators.lowerLabel.style.bottom = 0;
      }

      // move upper label inside if no space in right
      if ((screenWidth - x1) < 40 || (screenWidth - x2) < 40) {
        manipulators.upperLabel.style.right = 0;
        if (width < 40) manipulators.upperLabel.style.top = "-21px";
      } else {
        manipulators.upperLabel.style.right = '-37px';
        manipulators.upperLabel.style.top = 0;
      }

      // ensure no label is vertically away if enough width
      if(width >= 40){
        manipulators.upperLabel.style.top = 0;
        manipulators.lowerLabel.style.bottom = 0;
      }
    },

    mDown: (e) => {
      drawIt = true;
      x1 = e.clientX;
      y1 = e.clientY;
      manipulators.drawSelector();
    },

    mUp: (e) => {
      drawIt = false;
    },

    mMove: (e) => {
      x2 = e.clientX;
      y2 = e.clientY;

      if(drawIt)
        manipulators.drawSelector();
    }
  }

  letsGo = () => {
  	
  	if(document.getElementById('tslOverlay'))
      document.getElementById('tslOverlay').remove();
  	else
  		manipulators.init();

  	document.body.addEventListener('keyup',(e)=>{
  	  if (e.keyCode === 27)
  	    manipulators.destroy();
  	});
  	
  }

  letsGo();
};

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

chrome.action.onClicked.addListener(tab => {
  getChoicesFromStorage()
  .then(choices => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: drawMeasurIt,
      args: [choices],
    });
  });
});
