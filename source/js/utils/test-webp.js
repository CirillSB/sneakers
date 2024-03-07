export const testWebP = () => {
  const page = document.querySelector('body');
  const webP = new Image();
  webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  webP.onload = webP.onerror = function () {
    if (webP.height === 2) {
      page.classList.add('webp-true');
    } else {
      page.classList.add('webp-false');
    }
  };
};
