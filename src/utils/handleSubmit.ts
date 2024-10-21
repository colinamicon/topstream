// handleSubmit.js

export default async function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target); // Get the form data
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Validate form data
    if (!name || !email || !message) {
        showToast('All fields are required.', 'error');
        return;
    }

    // Send the data to the server
    try {
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            body: JSON.stringify({ name, email, message }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Check if the response is OK
        if (response.status == 200) {
            showToast('Email sent successfully!', 'success');
            window.location.href = '/email-sent'; // Redirect to the email-sent page
        } else {
            const errorData = await response.json(); // Parse the JSON response
            showToast(`Error sending email: ${errorData}`, 'error'); // Use the error message
        }
    } catch (error) {
        console.error('Error:', error);
        showToast('An unexpected error occurred. Please try again.', 'error');
    }
}

function showToast(message, type) {
    // Create a toast element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`; // Add a class based on the type (success/error)
    toast.innerText = message;

    // Style the toast
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.padding = '10px 20px';
    toast.style.borderRadius = '5px';
    toast.style.color = '#fff';
    toast.style.zIndex = '1000';
    toast.style.transition = 'opacity 0.5s ease-in-out';
    toast.style.opacity = '1';
    toast.style.backgroundColor = type === 'success' ? 'green' : 'red'; // Set background color based on type

    // Append the toast to the body
    document.body.appendChild(toast);

    // Fade out and remove the toast after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0'; // Start fade out
        setTimeout(() => {
            document.body.removeChild(toast); // Remove from DOM after fade out
        }, 500); // Wait for fade out to complete before removing
    }, 3000); // Duration before fading out
}

