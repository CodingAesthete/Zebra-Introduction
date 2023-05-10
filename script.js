(function () {
  "use strict";

  const tabs = document.querySelectorAll('#tabs > ul > li > a');

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function(event) {
      event.preventDefault();

      for (let i = 0; i < tabs.length; i++) {
        tabs[i].removeAttribute('class');
      }

      event.target.className = 'active';

      const thistab = event.target.getAttribute('href');
      const thiscontent=document.querySelector(thistab);

      let oldcontent = document.querySelector('#tabs .visible');
      oldcontent.className = 'visuallyhidden';

      oldcontent.addEventListener('transitionend', function() {
        oldcontent.className = 'hidden';
        thiscontent.className = 'visible visuallyhidden';

        setTimeout(function(){
          thiscontent.classList.remove('visuallyhidden');
        }, 20);

      }, {capture: false, once:true, passive:false});

    });
  }

})();