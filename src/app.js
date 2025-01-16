const rating= document.querySelector('.rating');
const thanks= document.querySelector('.thanks');
thanks.style.display='none';

const submitBtn= document.querySelector('.submit');
const ratingBtns= document.querySelectorAll('button');
let input=0;
ratingBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        input= btn.value;
    document.querySelector('.inputValue').textContent= input;

    });
});
submitBtn.addEventListener('click',()=>{
    rating.style.display='none';
    thanks.style.display='flex';
})

