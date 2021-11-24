var layer1 = document.getElementById('layer1')
        scroll = window.pageYOffset;
        document.addEventListener('scroll', 
        function(e){
            var offset = window.pageYOffset;
            scroll = offset;
            layer1.style.width = (27 + scroll/30)-300+'%';
            layer1.style.left = (-12 + scroll/10)-100+'%';
        });

        var layer2 = document.getElementById('layer2')
        scroll = window.pageYOffset;
        document.addEventListener('scroll', 
        function(e){
            var offset = window.pageYOffset;
            layer2.style.width = (40 + scroll/44)-300+'%';
            layer2.style.left = (112 - scroll/10)+100+'%';
        });


        var text = document.getElementById('text')
        scroll = window.pageYOffset;
        document.addEventListener('scroll', 
        function(e){
            var offset = window.pageYOffset;
            text.style.top = - scroll/3+'%';
        });

        // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}