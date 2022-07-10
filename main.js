let listElements = document.querySelectorAll('.button-click');
listElements.forEach((listElement) => {
  listElement.addEventListener('click', () =>{
    listElement.classList.toggle('arrow');

    let altura = 0;
    let submenu = listElement.nextElementSibling;
    if(submenu.clientHeight === 0){
      altura = submenu.scrollHeight;
    }

    submenu.style.height = `${altura}px`;
  })
})