// navigation.js - Sidebar Scroll Navigation

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Highlight effect
        element.style.borderColor = '#d32f2f';
        element.style.boxShadow = '0 0 10px rgba(211, 47, 47, 0.5)';
        setTimeout(() => {
            element.style.borderColor = '#777';
            element.style.boxShadow = '2px 2px 0px rgba(0,0,0,0.1)';
        }, 1000);
    }
}
