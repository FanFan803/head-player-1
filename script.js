const bangs = document.getElementById('bangs');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

bangs.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.offsetX;
  offsetY = e.offsetY;
  bangs.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const container = document.querySelector('.container').getBoundingClientRect();
    let x = e.clientX - container.left - offsetX;
    let y = e.clientY - container.top - offsetY;

    x = Math.max(0, Math.min(container.width - bangs.clientWidth, x));
    y = Math.max(0, Math.min(container.height - bangs.clientHeight, y));

    bangs.style.left = `${x}px`;
    bangs.style.top = `${y}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  bangs.style.cursor = 'grab';
});
