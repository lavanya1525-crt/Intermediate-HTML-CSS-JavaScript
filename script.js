document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    // You can add other inputs here if needed (e.g., subjectInput)

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    // Add corresponding error spans if you add more inputs

    // Basic Email Regex (adjust if needed for stricter rules)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', (event) => {
        // Prevent default form submission behavior
        event.preventDefault();

        // Reset previous errors
        resetErrors();

        let isValid = true; // Flag to track overall validity

        // --- 1. Validate Name (Required) ---
        const nameValue = nameInput.value.trim(); // Remove leading/trailing whitespace
        if (nameValue === '') {
            setError(nameInput, nameError, 'Name is required.');
            isValid = false;
        }

        // --- 2. Validate Email (Required & Format) ---
        const emailValue = emailInput.value.trim();
        if (emailValue === '') {
            setError(emailInput, emailError, 'Email is required.');
            isValid = false;
        } else if (!emailRegex.test(emailValue)) {
            setError(emailInput, emailError, 'Please enter a valid email address.');
            isValid = false;
        }

        // --- 3. Validate Message (Required) ---
        const messageValue = messageInput.value.trim();
        if (messageValue === '') {
            setError(messageInput, messageError, 'Message is required.');
            isValid = false;
        }

        // --- (Optional) Add validation for other fields here ---
        // Example for subject (if it were required):
        // const subjectValue = subjectInput.value.trim();
        // if (subjectValue === '') {
        //     setError(subjectInput, subjectError, 'Subject is required.');
        //     isValid = false;
        // }

        // --- 4. If all validations pass ---
        if (isValid) {
            console.log('Form Data:', {
                name: nameValue,
                email: emailValue,
                message: messageValue,
                // subject: subjectValue // if included
            });

            alert('Form submitted successfully!'); // Placeholder for actual submission

            // **Option 1: Actually submit the form (if using standard HTML form submission)**
            // form.submit(); // Uncomment this line to allow the form to submit traditionally

            // **Option 2: Send data using AJAX (Fetch API example)**
            // sendDataWithFetch(); // Call a function to handle AJAX submission

            // **Option 3: Reset the form after successful virtual submission**
            // form.reset(); // Clears the form fields
        } else {
            console.log('Form validation failed.');
            // Errors are already displayed by setError function
        }
    });

    // --- Helper Function to Set Error ---
    function setError(inputElement, errorElement, message) {
        inputElement.classList.add('error'); // Add CSS class for error styling
        errorElement.textContent = message; // Display the error message
    }

    // --- Helper Function to Reset Errors ---
    function resetErrors() {
        // Clear text content of all error message elements
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        // Clear text for other error elements if added

        // Remove the 'error' class from all input/textarea elements
        nameInput.classList.remove('error');
        emailInput.classList.remove('error');
        messageInput.classList.remove('error');
        // Remove error class from other inputs if added
    }

    // --- (Optional) Example AJAX Submission Function ---
    /*
    async function sendDataWithFetch() {
        const formData = new FormData(form);
        // Optional: Convert FormData to JSON if your backend expects JSON
        // const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('YOUR_SERVER_ENDPOINT_URL', { // Replace with your actual endpoint
                method: 'POST',
                body: formData // or JSON.stringify(data) if sending JSON + set 'Content-Type': 'application/json' header
                // headers: {
                //     'Content-Type': 'application/json' // Uncomment if sending JSON
                // }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json(); // or response.text() depending on server response
            console.log('Success:', result);
            alert('Data sent successfully via Fetch!');
            form.reset(); // Reset form on successful AJAX submission

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting the form. Please try again.');
        }
    }
    */

}); // End DOMContentLoaded