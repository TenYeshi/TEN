function setPageHeight() {
    const viewportHeight = window.innerHeight;
    document.documentElement.style.height = `${viewportHeight}px`;
    document.body.style.height = `${viewportHeight}px`;
  }
  
  window.onload = setPageHeight;
  window.onresize = setPageHeight;
  