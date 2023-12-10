let my_form=document.querySelector('.forget_password_form');

my_form.addEventListener('submit',forgetPassword);

function forgetPassword(e){
    e.preventDefault();
    let user={
        "email": document.querySelector('.u_email').value
    }
    axios.post('http://54.252.183.134:8000/password/forgotpassword',user)
}