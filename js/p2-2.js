function showaccordion() {
    const script = document.createElement('script');
    script.src = 'js/p2-2.js';
    script.onload = () => {
        document.querySelectorAll('.accordion-title').forEach(title => {
            title.addEventListener('click', () => {
                const targetId = title.getAttribute('data-target');
                const content = document.getElementById(targetId);

                // Use window.getComputedStyle to check the actual display property
                const contentDisplay = window.getComputedStyle(content).display;

                if (contentDisplay === "none") {
                    content.style.display = "block";
                } else {
                    content.style.display = "none";
                }
            });
        });
    };
    document.body.appendChild(script);
}
