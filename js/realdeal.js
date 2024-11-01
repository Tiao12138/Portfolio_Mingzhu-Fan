document.addEventListener("DOMContentLoaded", function () {
  const navContainer = document.getElementById('nav-container');
  const navItems = document.querySelectorAll(".link");

  loadContent('p2.html');  // Initial content load

  navItems.forEach(item => {
    item.addEventListener("click", function () {
      const contentNav = this.getAttribute('nav-content');
      navItems.forEach(link => link.classList.remove("selected"));
      this.classList.add("selected");

      let contentUrl = '';
      switch (contentNav) {
        case 'p1': contentUrl = 'p1.html'; break;
        case 'p2': contentUrl = 'p2.html'; break;
        case 'p3': contentUrl = 'p3.html'; break;
        default: contentUrl = 'p2.html';
      }
      
      loadContent(contentUrl);  // Load the selected content
    });
  });
  
  // Function to load content into navContainer
  function loadContent(contentUrl) {
    fetch(contentUrl)
      .then(response => response.text())
      .then(data => {
        navContainer.innerHTML = data;  
        applyHoverTextListeners();      
        applyImageClickListeners();    
      })
      .catch(error => console.error('Error loading content:', error));
  }

  // Handle image clicks for loading different content
  function applyImageClickListeners() {
    document.querySelectorAll('img.cover').forEach(cover => {
      cover.addEventListener('click', function () {
        const contentPast = this.getAttribute('past-content');
        loadContentPast(contentPast); // Load content based on clicked image
      });
    });
  }

  function loadContentPast(contentPast) {
    let contentUrl2 = '';
    switch (contentPast) {
      case 'p2-1': contentUrl2 = 'p2-1.html'; break;
      case 'p2-2': contentUrl2 = 'p2-2.html'; break;
      case 'p2-3': contentUrl2 = 'p2-3.html'; break;
      case 'p2-4': contentUrl2 = 'p2-4.html'; break;
      case 'p2-5': contentUrl2 = 'p2-5.html'; break;
      case 'p2-6': contentUrl2 = 'p2-6.html'; break;
      case 'p2-7': contentUrl2 = 'p2-7.html'; break;
      case 'p2-8': contentUrl2 = 'p2-8.html'; break;
      case 'p2-9': contentUrl2 = 'p2-9.html'; break;
      default: contentUrl2 = 'p2.html';
    }

    if (contentUrl2) {
      loadContent(contentUrl2); 
    }
    if (contentUrl2 === 'p2-1.html') {
      loadScrollScript();  
    }
    if(contentUrl2 === 'p2-2.html'){
      showaccordion();
    }
    if(contentUrl2 === 'p2-3.html'){
      showaccordion();
    }
  }

  function loadScrollScript() {
    const script = document.createElement('script');
    script.src = 'js/p2-1.js';
    script.onload = () => {console.log('Script loaded successfully.');

    const scrollableColumn = document.getElementById('scrollable-column');
    
    if (scrollableColumn) {
        console.log('scrollablecolumn valid');
        let isDown = false;
        let startX;
        let scrollLeft;
    
        scrollableColumn.addEventListener('mousedown', (e) => {
            isDown = true;
            console.log('Mouse down at X:', e.pageX);
            scrollableColumn.classList.add('active');
            startX = e.pageX - scrollableColumn.offsetLeft;
            scrollLeft = scrollableColumn.scrollLeft;
            // console.log('Mouse down event, dragging started');
        });

        scrollableColumn.addEventListener('mouseleave', () => {
            isDown = false;
            scrollableColumn.classList.remove('active');
            console.log('Mouse left the scrollable area, dragging ended'); 
        });

        scrollableColumn.addEventListener('mouseup', () => {
            isDown = false;
            scrollableColumn.classList.remove('active');
            console.log('Mouse up event, dragging ended');
        });

        scrollableColumn.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            console.log('Mouse is moving while dragging');
            e.preventDefault();
            const x = e.pageX - scrollableColumn.offsetLeft;
            const walk = (x - startX) * 3; 
            scrollableColumn.scrollLeft = scrollLeft - walk;
        });
    }
  };

    script.onerror = () => console.error('Failed to load script.');

    document.body.appendChild(script); 
  }

  function showaccordion() {
    const script = document.createElement('script');
    script.src = 'js/p2-2.js';
    script.onload = () => {
        console.log('Script2 loaded successfully.');
        document.querySelectorAll('.accordion-title').forEach(title => {
            title.addEventListener('click', () => {
                const targetId = title.getAttribute('data-target');
                console.log('Title clicked');
                const content = document.getElementById(targetId);
                console.log('Content element retrieved');

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
 

  // Hover text functionality
  function applyHoverTextListeners() {
    const images = document.querySelectorAll('.cover');
    images.forEach(img => {
      img.addEventListener('mouseover', () => showText(img));
      img.addEventListener('mouseout', () => hideText(img));
    });
  }
  
  function showText(img) {
    const hoverText = img.parentElement.querySelector('.hovertext');
    const hoverTextDisplay = document.getElementById('hover-text-display');
    if (hoverText && hoverTextDisplay) {
      hoverTextDisplay.textContent = hoverText.textContent; // Update the dedicated container
      hoverTextDisplay.classList.add('show'); // Show the text smoothly
    }
  }
  
  function hideText() {
    const hoverTextDisplay = document.getElementById('hover-text-display');
    if (hoverTextDisplay) {
      hoverTextDisplay.classList.remove('show'); // Hide the text smoothly
    }
  }

  applyHoverTextListeners();
  applyImageClickListeners();

});
