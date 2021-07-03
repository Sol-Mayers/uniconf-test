/*Показ дополнительных картинок*/
let more = document.querySelectorAll('.news__deeper');
let box = document.querySelectorAll('.news__img');
for(let i = 0; i < more.length; i++) {
  more[i].addEventListener('click', function() {
    let showPerClick = 3;
    let hidden = this.parentNode.querySelectorAll('img.hidden');
    if(hidden.length > 0) {
      for(let i = 0; i < showPerClick; i++) {
        if(!hidden[i]) return this.outerHTML = "";
        hidden[i].classList.add('news__img');
        hidden[i].classList.remove('hidden');
      }
    };
  });
}
