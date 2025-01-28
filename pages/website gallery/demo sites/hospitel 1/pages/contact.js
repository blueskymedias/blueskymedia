function submitForm(event) {
    event.preventDefault();
    
    // Fetch input values
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    // Construct email message
 

    // Send email using SMTPJS
    Email.send({
        SecureToken: "ca9c94b3-a42e-467d-84fa-f2e9411ea772", // Get your secure token from SMTPJS.com
        To:'loginsa80@gmail.com',
        From: "loginsa80@gmail.com", // Replace with your email address
        Subject: 'New submission from your website',
        Body:  `Name: ${name}\nPhone Number: ${phone}\nMessage:\n${message}`
    }).then(
        function(response) {
            console.log('Email sent successfully:', response);
            showSuccessPopup();
        },
        function(error) {
            console.error('Error:', error);
            alert('There was an error sending the message. Please try again later.');
        }
    );
}

function showSuccessPopup() {
    document.getElementById('successPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('successPopup').style.display = 'none';
}
