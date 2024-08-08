let successMsg = `<i class="fa-solid fa-circle-check"></i> Successfully submited` ;
let errorMsg = `<i class="fa-solid fa-circle-xmark"></i> Please fix the error!`;
let invalidMsg = `<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again`;

function showToast(msg){
    let toast = document.createElement(`div`);
    let box = document.getElementById(`toast-box`);
    toast.classList.add(`toast`);
    toast.innerHTML= msg;

    if(msg.includes(`error`)){
        toast.classList.add(`error`);
    }
    if(msg.includes(`Invalid`)){
        toast.classList.add(`invalid`);
    }

    box.appendChild(toast);

    setTimeout(()=>{
        toast.remove();
    },5000);
}