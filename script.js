document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', function() {
        if (!document.startViewTransition) {
            toggleTheme();
        } else {
            document.startViewTransition(() => toggleTheme());
        }
    });

    function toggleTheme() {
        body.classList.toggle('dark-mode');
    }
});
