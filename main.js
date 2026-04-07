function switchLanguage() {
    const langToggle = document.querySelector('.toggle-button');
    const italiano = document.getElementById('italiano');
    const inglese = document.getElementById('inglese');

    // Check if English is currently hidden
    const isEnglishHidden = window.getComputedStyle(inglese).display === 'none';

    if (isEnglishHidden) {
        inglese.style.display = 'block';
        italiano.style.display = 'none';
        langToggle.textContent = 'Italiano';
        document.documentElement.lang = 'en'; // Update site metadata
        localStorage.setItem('preferredLanguage', 'en'); // Save preference
    } else {
        inglese.style.display = 'none';
        italiano.style.display = 'block';
        langToggle.textContent = 'English';
        document.documentElement.lang = 'it'; // Update site metadata
        localStorage.setItem('preferredLanguage', 'it'); // Save preference
    }

// Load preferred language on page load
document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = localStorage.getItem('preferredLanguage');
    if (preferredLanguage) {
        switchLanguage(preferredLanguage);
    }
});

}