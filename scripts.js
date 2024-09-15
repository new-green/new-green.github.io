function showAlert() {
    alert("Welcome to New Green's Garden! Explore our collection and enjoy the beauty of nature.");
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us, ' + document.getElementById('name').value + '!');
});

document.getElementById('themeToggle').addEventListener('click', function() {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});
