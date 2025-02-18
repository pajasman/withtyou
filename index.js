const YesBtn = document.querySelector('#YesBtn');

YesBtn.addEventListener('click',function () {
    alert('Te vere miercoles por la tarde cuando estes libre uwu 6 o 7')
});

const NoBtn = document.querySelector('#NoBtn');

NoBtn.addEventListener('mouseover',function() {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    NoBtn.style.setProperty('top',randomY+'%');
    NoBtn.style.setProperty('left',randomX+'%');
    NoBtn.style.setProperty('transform',`transalate(-${randomX}%,-${randomY}%)`);
    })