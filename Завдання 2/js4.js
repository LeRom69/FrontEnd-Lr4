document.body.addEventListener('click',
function (event){
    let tag = event.target;
    let nextTag = tag.nextElementSibling;
    if(nextTag !==null && nextTag.tagName === 'UL'){
        nextTag.classList.toggle('active');
        event.preventDefault();
    }
})