function validateForm() {
    const rememberMe = document.getElementById('remember-me');
    if (!rememberMe.checked) {
        alert('You must agree to remember me.');
        return false;
    }   
    return true;
}

document.getElementById('register-form').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        event.preventDefault();
        document.getElementById('error-message').style.display = 'block';
    }
});

document.getElementById('password').addEventListener('input', function() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    if (password === confirmPassword) {
        document.getElementById('error-message').style.display = 'none';
    }
});

document.getElementById('confirm-password').addEventListener('input', function() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    if (password === confirmPassword) {
        document.getElementById('error-message').style.display = 'none';
    }
});
