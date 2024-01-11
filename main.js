window.addEventListener('scroll', function(){
  var nav = document.querySelector('nav');
  nav.classicList.toggle('sticky', window.scrollY > 0);
})