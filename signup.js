regform = document.querySelector('#RegForm');
const msgreg = document.querySelector('.msg-reg');
const userreg = document.querySelector('#UserReg');
const emailreg = document.querySelector('#EmailReg');
const passreg = document.querySelector('#PassReg');
regform.addEventListener('submit', onsubmit);

function onsubmit(e){
    e.preventDefault();

    if(userreg.value === '' || passreg.value === '' || emailreg.value === ''){
        msgreg.classList.add('error');
        msgreg.innerHTML = 'Please enter all fields';
    
        setTimeout(()=>msg.remove(), 7000);
    }else{
        console.log('success');
    }
}