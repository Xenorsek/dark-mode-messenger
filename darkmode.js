  updateClasses();

  function updateClasses() {
    document.querySelectorAll('*').forEach(element => {
      element.classList.forEach(className => {
        if (className.includes('light')) {
          const newClassName = className.replace('light', 'dark');
          element.classList.replace(className, newClassName);
        }
      });
    });
  }
  
  function updateClass(element) {
    element.classList.forEach(className => {
      if (className.includes('light')) {
        const newClassName = className.replace('light', 'dark');
        element.classList.replace(className, newClassName);
      }
    });
  }

  function mutationCallback(mutations) {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(newNode => {
          if (newNode.nodeType === Node.ELEMENT_NODE) {
            updateClass(newNode); // Aktualizuj klasy nowego elementu
            newNode.querySelectorAll('*').forEach(updateClass); // i jego dzieci
          }
        });
      }
    });
  }

const observer = new MutationObserver(mutationCallback);

// Opcje konfiguracyjne dla obserwatora
const config = { childList: true, subtree: true };

// Rozpoczęcie obserwacji dokumentu
observer.observe(document.body, config);

