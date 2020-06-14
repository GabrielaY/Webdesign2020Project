const rangeSelector = document.getElementsByClassName('slider');
    for (let i = 0; i < rangeSelector.length; i++) {
      rangeSelector[i].style.setProperty('--val', + rangeSelector[i].value);
      rangeSelector[i].style.setProperty('--max', + rangeSelector[i].max);
      rangeSelector[i].style.setProperty('--min', + rangeSelector[i].min);
     
      rangeSelector[i].addEventListener('input', e => {
        rangeSelector[i].style.setProperty('--val', + rangeSelector[i].value);
      }, false);
    }
document.documentElement.classList.add('js');

