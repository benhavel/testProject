  (function(){
          function onTabClick(event){
            var actives = document.querySelectorAll('.active');
 
            // deactivate existing active tab and panel
            for (var i=0; i < actives.length; i++){
              actives[i].className = actives[i].className.replace('active', '');
            }
 
            // activate new tab and panel
            event.target.parentElement.className += ' active';
            document.getElementById(event.target.href.split('#')[1]).className += ' active';
          }
 
          var el = document.getElementById('nav-tab');
 
          el.addEventListener('click', onTabClick, false);
        })();




var images = [

  {
    path:"./img/photo5.png",

    desc: "photo of the city"
  },
  {
    path:"./img/photo4.png",

    desc: "picture of a girl"
  },
  {
    path:"./img/photo3.png",

    desc: "picture of a girl"
  }

];

var image = document.getElementById("inc");

var counter = 0;

function changeImage() {
  counter ++;

  if(counter >= images.length) {
    counter = 0;
  }
  image.src = images[counter].path;
  image.alt = images[counter].desc;
}












