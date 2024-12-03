// Cookie consent functionality

document.addEventListener('DOMContentLoaded', function() {
    // Zobraziť cookie banner, ak používateľ ešte neakceptoval cookies
    if (!getCookie('cookieConsent')) {
        document.getElementById('cookie-consent-banner').style.display = 'block';
    }

    // Akceptovanie všetkých cookies
    const acceptAllCookiesButton = document.getElementById('accept-cookies');
    if (acceptAllCookiesButton) {
        acceptAllCookiesButton.addEventListener('click', function() {
            setCookie('cookieConsent', 'accepted', 30);  // Uložíme súhlas na 30 dní
            document.getElementById('cookie-consent-banner').style.display = 'none';
            activateAllCookies();  // Aktivovať všetky cookies
        });
    }

    // Možnosť spravovať cookies
    const manageCookiesButton = document.getElementById('manage-cookies');
    if (manageCookiesButton) {
        manageCookiesButton.addEventListener('click', function() {
            document.getElementById('manage-cookies-modal').style.display = 'block';  // Zobraziť modálne okno pre spravovanie cookies
        });
    }

    // Uloženie nastavení cookies
    const saveCookiesSettingsButton = document.getElementById('save-cookies-settings');
    if (saveCookiesSettingsButton) {
        saveCookiesSettingsButton.addEventListener('click', function() {
            document.getElementById('manage-cookies-modal').style.display = 'none';
            alert('Vaše nastavenia cookies boli uložené.');
            // Tu môžeme pridať ďalšiu logiku pre uloženie preferencií používateľa.
        });
    }

    // Ak používateľ odmietne cookies
    const rejectCookiesButton = document.getElementById('reject-cookies');
    if (rejectCookiesButton) {
        rejectCookiesButton.addEventListener('click', function() {
            setCookie('cookieConsent', 'rejected', 30); // Uložíme odmietnutie na 30 dní
            document.getElementById('cookie-consent-banner').style.display = 'none';
            deactivateCookies();  // Deaktivovať nepotrebné cookies
        });
    }

    // Funkcia na nastavenie cookie
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Funkcia na získanie hodnoty cookie
    function getCookie(name) {
        const nameEQ = name + "=";
        const cookiesArray = document.cookie.split(';');
        for (let i = 0; i < cookiesArray.length; i++) {
            let c = cookiesArray[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Aktivovať všetky cookies (placeholder funkcia)
    function activateAllCookies() {
        console.log("Všetky cookies boli aktivované.");
        // Sem môžeme pridať ďalší kód na aktiváciu analytických a reklamných cookies
    }

    // Deaktivovať nepotrebné cookies (placeholder funkcia)
    function deactivateCookies() {
        console.log("Nepotrebné cookies boli deaktivované.");
        // Sem môžeme pridať ďalší kód na deaktiváciu analytických a reklamných cookies
    }

    // Zatvorenie modálneho okna kliknutím mimo neho
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('manage-cookies-modal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
