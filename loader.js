window.addEventListener('beforeunload', function() {
    // Display loader when page is refreshed or unloaded
    document.getElementById('loader').classList.remove('hidden');
});

document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('loader').classList.remove('hidden');
        setTimeout(function() {
            window.location.href = link.href;
        }, 1000); // Adjust delay as needed
    });
});