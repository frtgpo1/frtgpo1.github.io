// window.location.replace('https://registrierung.web.de/#.pc_page.tarifvergleich.index.teaser_1v1.registierung');

setTimeout(() => {
    document.querySelector("input[data-test=check-email-availability-email-input]").value = "frtgpo18";
    document.querySelectorAll("i.pos-input-radio__border")[1].click();
    document.querySelector("input[data-test=first-name-input]").value = "Olaf";
    document.querySelector("input[data-test=last-name-input]").value = "Egbers";
    document.querySelector("input[data-test=postal-code-input]").value = "49838";


    document.querySelector("input[data-test=town-input]").value = "Lengerich";
    document.querySelector("input[data-test=street-and-number-input]").value = "Am Bürgerpark 26";
    document.querySelector("input[data-test=day]").value = "09";
    document.querySelector("input[data-test=month]").value = "02";
    document.querySelector("input[data-test=year]").value = "1989";
    document.querySelector("input[data-test=choose-password-input]").value = "13Tfhmwff18931972";



    document.querySelector("input[data-test=choose-password-confirm-input]").value = "13Tfhmwff18931972";
    document.querySelector("i.pos-input-checkbox__checker").click();
    document.querySelectorAll("i.pos-input-checkbox__border")[1].click();

    document.querySelector("input[data-test=contact-email-input]").value = "frtgpo2@web.de";
}, 3000)
