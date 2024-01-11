// Star Widget

var stars = document.querySelectorAll;
('.starWidget a');

stars.forEach((item, index1) => {
  item.addEventListener('click', () => {
    stars.forEach((starWidget, index2) => {
      index1 >= index2 ? starWidget.classList.add('active') : starWidget.classList.remove('active');
    })
  })
})