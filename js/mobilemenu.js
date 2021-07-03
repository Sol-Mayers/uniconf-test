/*Появление блока выдвигающегося меню*/
let menuTrigger = document.querySelector('.item-logo__inner-menu');
let menuTouch = document.querySelectorAll('.slide-menu');
let shiftBlock = document.querySelector('.shift__down');
for(let i = 0; i <= menuTouch.length - 1; i++) {
  menuTouch[i].addEventListener('mouseover', function() {
    shiftBlock.classList.add('shift-show');
  });
  menuTouch[i].addEventListener('mouseout', function() {
    shiftBlock.classList.remove('shift-show');
  });
}
