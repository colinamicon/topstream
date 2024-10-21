// handleSubmit.js
export default async function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target); // Get the form data

    // Extract values from the form data
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Example: Log the values to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Here you can add logic to send this data to your server or API
    try {
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            body: JSON.stringify({ name, email, message }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            console.log('Email sent successfully!');
            showToast('Email sent successfully!', 'success'); // Show success toast
            window.location.href = '/email-sent'; // Redirect to the email-sent page
        } else {
            console.error('Error sending email:', response.statusText);
            showToast('Error sending email. Please try again.', 'error'); // Show error toast
        }
    } catch (error) {
        console.error('Error:', error);
        showToast('An unexpected error occurred. Please try again.', 'error'); // Show error toast
    }
}

// Function to show toast messages
function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`; // Add a class based on the type (success/error)
    toast.innerText = message;

    // Style the toast (you can customize this)
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.padding = '10px 20px';
    toast.style.borderRadius = '5px';
    toast.style.color = '#fff';
    toast.style.zIndex = '1000';
    toast.style.transition = 'opacity 0.5s ease-in-out';
    toast.style.opacity = '1';

    // Set background color based on type
    toast.style.backgroundColor = type === 'success' ? 'green' : 'red';

    document.body.appendChild(toast);

    // Fade out and remove the toast after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 500); // Wait for fade out to complete before removing
    }, 3000);
}