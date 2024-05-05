let darkMode = localStorage.getItem('darkMode');
const darkModeToggles = document.querySelectorAll('.dark-mode-toggle');

        darkModeToggles.forEach(toggle => {
            toggle.addEventListener('click', function() {
                this.classList.toggle('toggled');
            });
        });

const enableDarkMode = () => {

    document.body.classList.add('darkmode');

    localStorage.setItem('darkMode', 'enabled'); 
    
};


const disableDarkMode = () => {

    document.body.classList.remove('darkmode');

    localStorage.setItem('darkMode', null); 

};

if (darkMode === "enabled") {
    enableDarkMode();
}


darkModeToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        const darkMode = localStorage.getItem('darkMode');
        if (darkMode !== 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
});

       