const mascot = document.getElementById('mascot');
const bubble = document.getElementById('bubble');
const message = document.getElementById('message');
const taskInput = document.getElementById('taskInput');
const contextMenu = document.getElementById('context-menu');
const nameEl = document.getElementById('name');

let settings;
const moods = [
  'Locked in. Slightly spicy. Fully focused.',
  'Okay bestie, stop overthinking and ship it.',
  'CEO energy only. Tiny steps still count.'
];

(async function init() {
  settings = await window.ggApi.getSettings();
  mascot.src = `../${settings.mascotImagePath}`; // EDIT HERE to switch mascot PNG in settings.json
  nameEl.textContent = settings.assistantName;
  message.textContent = settings.defaultBubbleMessage;
})();

document.getElementById('mascot-wrap').addEventListener('click', () => {
  bubble.classList.toggle('hidden');
  contextMenu.classList.add('hidden');
});

document.getElementById('close').addEventListener('click', () => bubble.classList.add('hidden'));

document.querySelectorAll('.actions button').forEach((btn) => {
  btn.addEventListener('click', async () => {
    message.textContent = 'Thinking...';
    const result = await window.ggApi.askGG({ mode: btn.dataset.mode, userText: taskInput.value.trim() });
    message.textContent = result.text;
  });
});

window.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  contextMenu.classList.remove('hidden');
  contextMenu.style.left = `${e.clientX}px`;
  contextMenu.style.top = `${e.clientY}px`;
});

window.addEventListener('click', (e) => {
  if (!contextMenu.contains(e.target)) contextMenu.classList.add('hidden');
});

document.getElementById('changeMood').addEventListener('click', () => {
  message.textContent = moods[Math.floor(Math.random() * moods.length)];
});

document.getElementById('hide30').addEventListener('click', () => window.ggApi.hide30());
document.getElementById('quit').addEventListener('click', () => window.ggApi.quit());
