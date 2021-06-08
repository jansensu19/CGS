const loginform = document.querySelector('#LoginForm');
const msglog = document.querySelector('.msg-log');
const userlog = document.querySelector('#UserLog');
const passlog = document.querySelector('#PassLog');


loginform.addEventListener('submit', onsubmit);

function onsubmit(e){
    e.preventDefault();

    if(userlog.value === '' || passlog.value === ''){
        msglog.classList.add('error');
        msglog.innerHTML = 'Please enter all fields';
    
        setTimeout(()=>msg.remove(), 7000);
    }else{
        console.log('success');
    }
}