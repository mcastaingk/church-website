import emailjs from 'emailjs-com';

function sendEmail(event) {
    event.preventDefault();
    emailjs.sendForm('service_gyrqfzp', 'template_bcgngbd', event.target, '1Tc6ywEmuFXgCjRWB')
        .then(() => alert('Email sent successfully!'))
        .catch((err) => console.error('Failed to send email:', err));
}