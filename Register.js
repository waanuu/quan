// Define an object to store user information
const userInfo = ['email', 'name', 'phone', 'password'];

// Define a function to validate user information
function validateUserInfo() {
    for (const field of userInfo) {
        const input = document.getElementById(field);
        const value = input.value;

        // Check if the field is required and empty
        if (input.required && value === '') {
            alert(`Please enter your ${input.placeholder}.`);
            return false;
        }

        // Validate based on the field type
        switch (input) {
            case 'email':
                if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
                    alert(`Please enter a valid ${input.placeholder}.`);
                    return false;
                }
                break;
            case 'password':
                if (field === 'confirm_password' && value !== document.getElementById('password').value) {
                    alert(`Your passwords do not match.`);
                    return false;
                }
                break;
        }
    }
    return true;
}

// Define a function to validate and submit the form
function validateAndSubmitForm() {
    event.preventDefault();

    if (!validateUserInfo()) {
        return;
    }

    // Create a user object from user input
    const user = {
        email: document.getElementById('email').value,
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        password: document.getElementById('password').value,
    };

    // Store the user object in local storage
    localStorage.setItem('userInfo', JSON.stringify(user));

    // Display success message
    alert('Bạn đã đăng ký thành công!!!');
    window.location.href = "/view/login.html";
}

function retrieveUserInfo() {
    // Get the user information from local storage
    const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));

    // Check if user information exists
    if (!storedUserInfo) {
        return;
    }

    console.log(storedUserInfo)

    // Populate the form with retrieved information
    Object.keys(storedUserInfo).forEach(key => {
        console.log(`${key}: ${storedUserInfo[key]}`);
    });
}

// Call the retrieveUserInfo() function on page load
window.onload = retrieveUserInfo;