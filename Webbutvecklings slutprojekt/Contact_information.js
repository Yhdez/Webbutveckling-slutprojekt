
document.getElementById('contactForm').addEventListener('submit', function(event) { //Denna ser ifall submit knappen i Contact_information_page.html är submittad
    event.preventDefault();
    const fullName = document.getElementById('Namn_av_sändare').value;
    const Reason_to_comment = document.getElementById('Ämne_av_sändare').value;
    const comment = document.getElementById('Text_av_sändare').value;

    const subject = encodeURIComponent(`${Reason_to_comment} Mail from ${fullName}`); /*Enkodar meddelandet så att meddelandet säkert kan inplementeras i URLen */
    const body = encodeURIComponent(`${comment}\n\nFrom: ${fullName}\n`);
    window.location.href = `mailto:Alexander.yhde@skola.taby.se?subject=${subject}&body=${body}`; //Öppnar då den väljer min email som mottagare och sätter in det du skrev innan i subject och body
    
})