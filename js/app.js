import { get } from "./request.js";
import { renderAdvice } from "./ui.js";

const recommendAdvice = function () {

// Variables
const BASE_URL = "https://api.adviceslip.com/advice";
const advice = document.querySelector('.js-advice');

// Event Listeners

const _eventListeners = function () {
    document.addEventListener('click', function (e) {
        const elementTarget = e.target;
        _newAdvice(elementTarget); 
    });
    
}

// FunC

const _newAdvice = function (target) {
    if(target.closest('.js-change-advice-button')) {
        _getData();
    }
    
}

const _getData = function () {
    get(BASE_URL).then((datas) => {
        const data = datas.slip;
        renderAdvice(advice, data);
    });
}


    return {
        init: function () {
            _eventListeners();
            _getData();
        }
    }
}();

document.addEventListener('DOMContentLoaded', function () {
    recommendAdvice.init();
});