const image = document.getElementById('image');
const progressBar = document.getElementById('progress');
const progressText = document.getElementById('progress-text');

image.addEventListener('load', () => {
  progressBar.style.width = '100%';
  progressText.textContent = 'Loaded: 100%';
});

image.addEventListener('progress', (event) => {
  if (event.lengthComputable) {
    const percentage = (event.loaded / event.total) * 100;
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `Loading: ${Math.round(percentage)}%`;
  }
});