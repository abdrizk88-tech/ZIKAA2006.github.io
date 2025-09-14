function changeColors() {
    const colors = ['#ff5722', '#4caf50', '#2196f3', '#e91e63', '#9c27b0'];
    document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
}