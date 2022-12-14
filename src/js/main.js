window.addEventListener('resize', function () {  
    "use strict";

    if(!navigator.userAgent.match(/Android/i)
    || !navigator.userAgent.match(/webOS/i)
    || !navigator.userAgent.match(/iPhone/i)
    || !navigator.userAgent.match(/iPad/i)
    || !navigator.userAgent.match(/iPod/i)
    || !navigator.userAgent.match(/BlackBerry/i)
    || !navigator.userAgent.match(/Windows Phone/i)
    ){
        if (window.innerWidth > 768 && window.innerWidth <= 1024) window.location.reload();
    }
});

// NAVBAR MENU
(() => {
    let bt_open = document.querySelector('nav.navbar .bt-open');
    let menu = document.querySelector('aside.menu');
    let bt_close = document.querySelector('aside.menu .bt-close');
    let anchors = document.querySelectorAll('aside.menu a');
    //let li = document.querySelectorAll('aside.menu .lst li');

    bt_open.addEventListener('click', () => {
        menu.classList.add('active');
    });

    bt_close.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    anchors.forEach((a) => {
        a.addEventListener('click', () => {
            setTimeout(() => {
                menu.classList.remove('active');
            }, 500);
            
        });
    });

})();

// GET SECTION AND ACTIVE MENU ITEM
(() => {
    let navLi = '';
    const sections = document.querySelectorAll("section");
    
    if (window.innerWidth <= 640) {
        navLi = document.querySelectorAll("aside.menu .lst li");
    } else {
        navLi = document.querySelectorAll(".navbar-menu .navigation li");
    }

    window.onscroll = () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id"); 
        }
    });

    navLi.forEach((li, i, arr) => {

        li.classList.remove("active");

        if (li.classList.contains(current)) {
            li.classList.add("active");
            
            arr.forEach((el, j) => {
                if (j > i) {
                    el.classList.remove("active");
                } else {
                    el.classList.add("active");
                }
            })
        } 
    });
    };
})();

// TOGGLE NAVBAR IN SCROLL
(() => {
    var lastScrollTop;

    navbar = document.querySelector('.navbar-menu');

    window.addEventListener('scroll',function(){
    
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if(scrollTop > lastScrollTop || scrollTop == 0) {
            navbar.style.marginTop='-80px'; 
        } else {
            navbar.style.marginTop = '0';
        }
        
        lastScrollTop = scrollTop;
    });
})();
 
// SCROLL ANIMATION ON 'sec-employees-importance'
(() => {
    const lst = document.querySelector('.sec-employees-importance .lst');
    const circle = document.querySelector('.sec-employees-importance .circle')

    lst.addEventListener('scroll', () => {
        const current = lst.scrollTop;
        if (window.innerWidth <= 1024) {
            circle.setAttribute('style', `width: calc(100vh - (${current}px / 10)); height: calc(100vh - (${current}px / 10)); border-radius: ${current}px;`);
        } else {
            circle.setAttribute('style', `width: calc(250vh - (${current}px / 3.2)); height: calc(250vh - (${current}px / 3.2)); border-radius: ${current}px;`);
        }
        
    });
})();

// SLICK CAROUSEL
(() => {
    
    if(window.innerWidth <= 640) {
        
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            dots: false,
            infinite: false,
            centerMode: true,
            centerPadding: '32px',
            adaptiveHeight: true
        });

        $('.slider-vert').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            dots: true,
            infinite: false,
            centerMode: true,
            centerPadding: '20px',
            adaptiveHeight: false,
            vertical: true,
            verticalSwiping: true,
        });

        $('.slider-vert-full-width').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            dots: true,
            infinite: false,
            centerMode: false,
            centerPadding: '0',
            adaptiveHeight: false,
            vertical: false,
            verticalSwiping: true,
        });

    } else {

        $('.slider-vert-full-width').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            dots: true,
            infinite: false,
            centerMode: false,
            centerPadding: '0',
            adaptiveHeight: false,
            vertical: false,
            verticalSwiping: true,
        }); 
        
    }

})(); 

// SPINNERS ANIMATION
(() => {
    const counters = document.querySelectorAll('.value');
    
    function counterAnima() {
        const speed = 300;

        counters.forEach( counter => {
            const animate = () => {
            const value = +counter.getAttribute('data-counter');
            const data = +counter.innerText;
            const time = value / speed;
 
            if(data < value) {
                counter.innerText = Math.ceil(data + time);

                setTimeout(animate, 100); 
            } else {
                counter.innerText = value;
            }
        }
        
        animate();
        });
    }

    const bar01 = new ProgressBar.Circle('.circle-progress-01', {
        strokeWidth: 3,
        easing: 'easeInOut',
        duration: 1000,
        color: '#FF874C',
        trailColor: '#F5F5FA',
        trailWidth: 1,
        svgStyle: null
    });

    const bar02 = new ProgressBar.Circle('.circle-progress-02', {
        strokeWidth: 3,
        easing: 'easeInOut',
        duration: 1000,
        color: '#FF874C',
        trailColor: '#F5F5FA',
        trailWidth: 1,
        svgStyle: null
    });

    function execute() {
        const target = document.querySelector('.sec-mind .dir .spinners');
        var windowHeight = window.innerHeight;
        var elementTop = target.getBoundingClientRect().top;
        var elementVisible = 750;

        if (elementTop < windowHeight - elementVisible) {
            bar01.animate(0.36);
            bar02.animate(0.85);
            counters.forEach((el, i, arr) => {
                arr[0].setAttribute('data-counter', '36')
                arr[1].setAttribute('data-counter', '85')
            })

            counterAnima()
        } else {
            bar01.animate(0);
            bar02.animate(0);

            counters.forEach((el) => {
                el.setAttribute('data-counter', '0')
            })
            
            counterAnima()
        }
 
    }

    window.addEventListener('scroll', execute);

    execute();
  
})();

// SCROLL ANIMATION
(() => {

    function reveal() {
        const target = document.querySelectorAll('[data-anima]');
        const animationClass = 'animate';

        target.forEach((el) => {
            var windowHeight = window.innerHeight;
            var elementTop = el.getBoundingClientRect().top;
            var elementVisible = 10;

            if (elementTop < windowHeight - elementVisible) {
                el.classList.add(animationClass);
            } else {
                el.classList.remove(animationClass);
            }
        });
    }

    window.addEventListener('scroll', reveal);

    reveal();
    
})();

// 'MORE' ANIMATION
(() => {
    let target = document.querySelector('.sec-articles-more');
    let zoomElement = document.querySelector('.sec-articles-more .container');
    let zoom = 0;
    let ZOOM_SPEED = 0.005;
    let lastScrollTop = 0;
/*
    if (window.innerWidth > 992) { 
        document.addEventListener('wheel', (e) => {
            
            if(e.deltaY > 0) {
                zoomElement.style.transform = `scale(${Math.abs(zoom += ZOOM_SPEED)})`;
            } else {
                zoomElement.style.transform = `scale(${Math.abs(zoom -= ZOOM_SPEED)})`;
            }
        })
    }
*/
    window.addEventListener('scroll', () => {
        let windowHeight = window.innerHeight;
        let elementTop = target.getBoundingClientRect().top;
        let st = window.pageYOffset;

        if (elementTop > windowHeight) { 
            zoom = 1;
        }

        //if (window.innerWidth <= 992) {

        if (elementTop < windowHeight && st > lastScrollTop) { 
            zoomElement.style.transform = `scale(${Math.abs(zoom += ZOOM_SPEED)})`;
        } else if (elementTop < windowHeight && st < lastScrollTop) {
            zoomElement.style.transform = `scale(${Math.abs(zoom -= ZOOM_SPEED)})`;
        } else {
            zoom = 1;
        }

        lastScrollTop = st <= 0 ? 0 : st; 
            
        //}
    })
})();

// PT-BR COLLAPSES

(() => {
    const btShow = document.querySelectorAll('.sec-articles .bt-show');
    const btHidden = document.querySelectorAll('.sec-articles .bt-hidden');
    const dataCamilla = document.querySelectorAll('[data-hidden-xs="camilla"]');
    const dataJosh = document.querySelectorAll('[data-hidden-xs="josh"]');

    if (btShow != null && btHidden != null && dataCamilla != null & dataJosh != null) {
        btShow.forEach((bt, i) => {
            bt.addEventListener('click', () => {
                bt.classList.remove('active');
                btHidden[i].classList.add('active');
    
                if (bt.classList.contains('camilla')) {
                    dataCamilla.forEach((el) => {
                        el.classList.add('active');
        
                        setTimeout(() => {
                            el.classList.add('show');  
                        }, 1000)
                    });
                } else if (bt.classList.contains('josh')) {
                    dataJosh.forEach((el) => {
                        el.classList.add('active');
        
                        setTimeout(() => {
                            el.classList.add('show');  
                        }, 1000)
                    });
                }
            })
        });
    
        btHidden.forEach((bt, i) => {
            bt.addEventListener('click', () => {
                bt.classList.remove('active');
                btShow[i].classList.add('active');
                
                if (bt.classList.contains('camilla')) {
                    dataCamilla.forEach((el) => {
                        el.classList.remove('active');
        
                        setTimeout(() => {
                            el.classList.remove('show');  
                        }, 1000)
                    });
                } else if (bt.classList.contains('josh')) {
                    dataJosh.forEach((el) => {
                        el.classList.remove('active');
        
                        setTimeout(() => {
                            el.classList.remove('show'); 
                        }, 1000)
                    });
                }
            })
        });
    }

    

    

})();



