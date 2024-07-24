document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Clear previous errors
    clearErrors();

    // Get form values
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Validate fields
    let isValid = true;

    if (username === '') {
        showError('usernameError', 'Username is required');
        isValid = false;
    }

    if (email === '') {
        showError('emailError', 'Email is required');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('emailError', 'Invalid email format');
        isValid = false;
    }

    if (password === '') {
        showError('passwordError', 'Password is required');
        isValid = false;
    } else if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters long');
        isValid = false;
    }

    // If all validations pass, submit the form
    if (isValid) {
        alert('Form submitted successfully!');
        // Here you can actually submit the form or process the data
        // For example: document.getElementById('registrationForm').submit();
    }
});

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
}

function validateEmail(email) {
    // Simple email validation regex
    let re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
