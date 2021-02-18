var $ = jQuery.noConflict();
        
        $(function(){
        let scroller;
        let scrollLeft;
        let maxScrollLeft;
        let menu;
        let head;
        let mhead;
        let scrollSpeed = 1500;
        let scrollDirection;
        window.addEventListener('wheel', (e) => {
        const body = document.body;
        scrollDirection = (e.deltaY > 0) ? 1 : -1;
        
        head = $('section#head');
        mhead = $('div#head');
        scroller = document.getElementById("gentags");
        scrollLeft = Math.round(scroller.scrollLeft);
        maxScrollLeft = Math.round(scroller.scrollWidth - scroller.clientWidth);
        
        menu = $('#sp-header');
        let scrollTopPos = $(window).scrollTop();
        let gentagsOffset = $('#gentags').offset().top;
        if($('section#head').is(':visible'))
        {
        if(scrollDirection == 1)
        {
        if(scrollTopPos >= head.outerHeight() && scrollTopPos+(scrollTopPos*.108) < $('#foot').offset().top)
        {
        if(scrollLeft < maxScrollLeft)
        {
        $(window).scrollTop(head.outerHeight());
        body.style.height = '100vh';
        body.style.overflowY = 'hidden';
        }
        if(body.style.overflowY == 'hidden'){
        scroller.scrollBy({
        top: 0,
        left: scrollSpeed * scrollDirection,
        behavior: "smooth"
        });
        if(scrollLeft==maxScrollLeft){
        body.style.height = 'auto';
        body.style.overflowY = 'auto';
        }
        }
        }
        
        } else{
        if(scrollTopPos <= head.outerHeight())
        {
        if(scrollLeft > 0)
        {
        menu.addClass('bgnew');
        $(window).scrollTop(head.outerHeight());
        body.style.height = '100vh';
        body.style.overflowY = 'hidden';
        scroller.scrollBy({
        top: 0,
        left: scrollSpeed * scrollDirection,
        behavior: "smooth"
        });
        } else {
        body.style.height = 'auto';
        body.style.overflowY = 'auto';
        }
        }
        }
        }
        
        }, {
        passive: false
        });
        
        });
        
        $(window).scroll(function() {
        head = document.getElementById('head')[0];
        mhead = document.getElementById('head')[1];
        scroller = document.getElementById("gentags");
        scrollLeft = Math.round(scroller.scrollLeft);
        console.log(scroller.scrollWidth + ' ' + scroller.clientWidth);
        maxScrollLeft = parseFloat(scroller.scrollWidth - scroller.clientWidth);
        menu = document.getElementById('sp-header');
        let scrollTopPos = $(window).scrollTop();
        // if(document.getElementById('column-id-1611256829015').is(":visible"))
        // {
        //     if(scrollTopPos >= document.getElementById('column-id-1611256829015').outerHeight() && scrollTopPos * 1.02 < document.getElementById('foot').offset().top)
        //         menu.addClass('bgnew');
        //     else
        //         menu.removeClass('bgnew');
        // } else
        // {
        //     if(scrollTopPos >= document.getElementById('head')[0].outerHeight() && scrollTopPos+(scrollTopPos * 0.12) < document.getElementById('foot').offset().top)
        //         menu.addClass('bgnew');
        //     else
        //         menu.removeClass('bgnew');
        //     }
        });