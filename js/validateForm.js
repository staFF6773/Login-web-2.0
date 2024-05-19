function validateForm() {
    const rememberMe = document.getElementById('remember-me');
    if (!rememberMe.checked) {
        alert('You must agree to remember me.');
        return false;
    }   
    return true;
}
