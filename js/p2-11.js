document.addEventListener("DOMContentLoaded", function () {
    const navContainer = document.getElementById('nav-container');
    const navItems = document.querySelectorAll(".link");

    function applyImageClickListeners() {
        const images = document.querySelectorAll('.cover');
        const defaultContent = document.querySelector('.contentsec');
        const contentSections = document.querySelectorAll('[id^="contentsec"]');

        images.forEach(image => {
            image.addEventListener('click', () => {
                if (defaultContent) {
                    defaultContent.classList.add('hidden');
                }

                contentSections.forEach(section => section.classList.add('hidden'));

                const imageInfo = image.getAttribute('image-info');
                const contentToShow = document.getElementById(`contentsec${imageInfo.slice(1)}`);
                if (contentToShow) {
                    contentToShow.classList.remove('hidden');
                }

                const backButton = contentToShow.querySelector('img[id^="back"]');
                if (backButton) {
                    backButton.addEventListener('click', () => {
                        defaultContent.classList.remove('hidden');
                        contentToShow.classList.add('hidden');
                    }, { once: true }); 
                }
            });
        });
    }

    function boxlayout() {
        const row = document.querySelector('.row');
        const boxes = row.children;
        if (boxes.length === 1) {
            row.style.justifyContent = 'flex-start'; 
        } else {
            row.style.justifyContent = 'flex-start'; 
        }
    }

    applyImageClickListeners();
    boxlayout();
});
