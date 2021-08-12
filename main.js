const items = Array.from(document.querySelectorAll('#slider-container img')),
    prvBtn = document.getElementById("previous"),
    nextBtn = document.getElementById("next");
let currentItem = 0;
nextBtn.onclick = ()=>{
    if(currentItem==items.length)currentItem=0
    remover;
    items[currentItem++].classList.add("active");
}
prvBtn.onclick = ()=>{
    if(currentItem==-1)currentItem=items.length-1
    remover;
    items[currentItem--].classList.add("active");
}
remover = ()=>{items.forEach(element=>element.classList.remove("active"))}