const items = Array.from(document.querySelectorAll('#slider-container img')),
    prvBtn = document.getElementById("previous"),
    nextBtn = document.getElementById("next");
    
let currentItem = 0,
    listItems=[],
    paginationList = document.createElement("ul");

paginationList.setAttribute("id","pagination-list");
document.getElementById("pagination-container").appendChild(paginationList);

for (let i=0;i<items.length;i++){
    listItems[i] = document.createElement('li');
    paginationList.appendChild(listItems[i]);
    listItems[i].textContent = `${i+1}`;
    if(i==0)listItems[i].classList.add("active");
}

listItems.forEach((element,index)=>{
    element.onclick = () => {
        remover();
        active(index);
        currentItem=index;
    }
});

nextBtn.onclick = ()=>{
    if(currentItem==items.length-1)currentItem=-1;
    remover();
    active(++currentItem);
}

prvBtn.onclick = ()=>{
    if(currentItem==0)currentItem=items.length
    remover();
    active(--currentItem);
}

remover = ()=>{
    items.forEach(element=>element.classList.remove("active"))
    listItems.forEach(element=>element.classList.remove("active"))
}

active = currentItem =>{
    items[currentItem].classList.add("active");
    listItems[currentItem].classList.add("active");
}