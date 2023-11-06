

$(window).scroll(function() {
    if ( $(this).scrollTop() >= 60 ) {
        //console.log('Dark Logo');
        $(".header").addClass('scroll');   
    } else {
        //console.log('White logo');
        $(".header").removeClass('scroll');
    }
});



$( ".menuBars, .menuLink" ).click(function() {
  $('header').toggleClass('menuOpen');
});


var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    
    init: function() {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        
        this.setupEventListeners();
    },
    
    setupEventListeners: function() {
        var self = this;
        
        // Anchor hovering
        document.querySelectorAll('a').forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });
        
        // Click events
        document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
  
  
        document.addEventListener('mousemove', function(e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
        });
        
        // Hide/show cursor
        document.addEventListener('mouseenter', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
        });
        
        document.addEventListener('mouseleave', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
        });
    },
    
 
    
    toggleCursorSize: function() {
        var self = this;
        
        if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(3)';
        } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },
    
    toggleCursorVisibility: function() {
        var self = this;
        
        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
        }
    }
}

cursor.init();


/*
// Rotating text
window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("warped");
    image.style.transform = "rotate(" + window.pageYOffset/10 + "deg)";
}
*/

/*
var white = $('.whiteSection, .workPageCon, .blogBody').offset().top;
var dark = $('.darkSection').offset().top;

$(window).scroll(function() {
    if ( $(this).scrollTop() >= white ) {
        $(".header").addClass('scrollState');  
        $("#warped").addClass('scrollState');   
    } else if ( $(this).scrollTop() >= dark ) {
        $(".header").removeClass('scrollState');
        $("#warped").removeClass('scrollState'); 
    } else {
        $(".header").removeClass('scrollState');
        $("#warped").removeClass('scrollState'); 
    }
});
*/










