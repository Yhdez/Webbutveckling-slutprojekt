
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('Namn_av_sändare').value;
    const email = document.getElementById('Email_av_sändare').value;
    const comment = document.getElementById('Text_av_sändare').value;


    if (fullName && email && comment) {
        const subject = encodeURIComponent(`Message from ${fullName}`);
        const body = encodeURIComponent(`Comment: ${comment}\n\nFrom: ${fullName}\nEmail: ${email}`);
        window.location.href = `mailto:Alexander.yhde@skola.taby.se?subject=${subject}&body=${body}`;
      } else {
        alert('Please fill in all fields before sending.');
      }
})
