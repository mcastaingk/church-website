emailjs.init('1Tc6ywEmuFXgCjRWB');

document.querySelector(".contact-form").addEventListener("submit", function (e) {
    sendEmail(e);
});

function sendEmail(event) {
    event.preventDefault();

    const form = event.target;

    emailjs.sendForm('contact_form_gmail', 'Church_Contact_Form', form)
        .then(() => {
            alert('Formulario enviado con éxito!');
            form.reset();
        })
        .catch((err) => {
            console.error('Failed to send email:', err);
            alert('Hubo un problema al enviar el formulario. Por favor, intente nuevamente.');
        });
}