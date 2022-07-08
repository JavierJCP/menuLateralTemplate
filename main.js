let listElements = document.querySelectorAll('.click');

listElements.forEach(listElements => {
  listElements.addEventListener('click', () => {
    
    listElements.classList.toggle('arrow');

    let height = 0;
    let menu = listElements.nextElementSibling;
    console.log(menu.scrollHeight) 
    if(menu.clientHeight == "0") {
      height = menu.scrollHeight;
    }

    menu.style.height = `${height}px`;
  })
})