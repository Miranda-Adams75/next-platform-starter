const mascot = document.getElementById('mascot');
const bubble = document.getElementById('bubble');
const closeBtn = document.getElementById('close');
const title = document.getElementById('title');
const line = document.getElementById('line');

(async () => {
  const settings = await window.gg.getSettings();
  title.textContent = settings.assistantName;
  line.textContent = settings.defaultBubbleMessage;
  // Replace this path with your own transparent PNG in settings.json.
  mascot.src = settings.mascotImagePath;
})();

mascot.addEventListener('click', () => bubble.classList.toggle('hidden'));
closeBtn.addEventListener('click', () => bubble.classList.add('hidden'));
