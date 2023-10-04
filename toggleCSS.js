document.getElementById('toggleCSS').addEventListener('click', function() {
    // Toggle CSS classes or styles here
    var linkElement = document.getElementsByTagName('link')[0];
    if (linkElement.href.includes('main.css')) {
        linkElement.href = 'alternate.css'; // Switch to alternate CSS
    } else {
        linkElement.href = 'main.css'; // Switch back to main CSS
    }
});
