document.addEventListener("DOMContentLoaded", function () {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            const menuToggle = document.getElementById('menu-toggle');
            const navLinks = document.getElementById('nav-links');
            const overlay = document.querySelector('.overlay');
            const links = navLinks.getElementsByTagName('a'); 
        
            menuToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                overlay.classList.toggle('active'); 
                menuToggle.classList.toggle('toggle');
            });
        
            // Function to close the menu
            function closeMenu() {
                navLinks.classList.remove('active');
                overlay.classList.remove('active'); 
                menuToggle.classList.remove('toggle');
            }
        
            overlay.addEventListener('click', closeMenu); 
        
            Array.from(links).forEach(link => {
                link.addEventListener('click', closeMenu);
            });
        });
});
