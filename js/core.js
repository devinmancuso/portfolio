var clickCounter = 0;

document.querySelectorAll('.inex a').forEach(function(link) {
    link.addEventListener('click', reveal)
  })
  
  function reveal(e) {
    
    clickCounter = clickCounter + 1;
    console.log(clickCounter);

    if (e.target.classList.contains('follow')) return
    e.preventDefault()
    var openId = e.target.dataset.o
    //var openEl = document.querySelector(".inex [data-ob='" + openId + "']") //Single method
    var openEl = document.querySelectorAll(".inex [data-ob='" + openId + "']")


    var closeId = e.target.dataset.c
    var closeEl = document.querySelector(".inex [data-cb='" + closeId + "']")
    
    if (closeEl) {
      closeEl.remove()
    }
    
    //Single method
    /*if (openEl) {
      openEl.classList.add('on')
    }*/ 
   
    openEl.forEach(function(element) {
      element.classList.add('on')
    });


    if(e.target.className !== 'nightmode-toggle-me') {
      // replace link if it still exists
      if (e.target) {
        var replacement = document.createElement('span')
        replacement.classList.add('on')
        replacement.innerText = e.target.innerText
        e.target.parentNode.replaceChild(replacement, e.target)
      }
    }

  }

  var nmt = document.querySelector('.nightmode-toggle-me');
  var nmp = document.querySelector('.nightmode-para');
  //var normalHello = document.querySelector('.normal-hello-para');

  var nowMoment = moment().format('HH')

  if ( nowMoment >= 19 || nowMoment <= 5) {
      nmp.classList.remove("hidden");
      //normalHello.classList.add("hidden");
  }

  nmt.onclick = function() {
      document.body.classList.toggle('nightmode');
  }