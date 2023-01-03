var menu = document.querySelector('.mobile_toggle > img');
menu.addEventListener('click', ()=>{
    var mobile = document.querySelectorAll('#menu_mobile');
    for(var i = 0; i < mobile.length; i++){
        if(mobile[i].style.display === 'flex'){
            mobile[i].style.display = 'none';
        }else {
            mobile[i].style.display = 'flex';
        }
    }
 
})