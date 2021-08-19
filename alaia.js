let hidden = document.getElementById('hidden');
let email = document.getElementById('email');
function display(){
    if(hidden.style.display='none'){
        hidden.style.display='block';
    }
    else {
        hidden.style.display = 'none';
    }
}
email.addEventListener('input',display);
