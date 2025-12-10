function h(str){
  return str.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

function generateStory(){
  const kidName = h(document.getElementById('kidName').value);

  const dragonName = h(document.getElementById('dragonName').value);

  const adjective = h(document.getElementById('adjective').value);

  const animal = h(document.getElementById('animal').value);

  const verbPast = h(document.getElementById('verbPast').value);

  const food = h(document.getElementById('food').value);

  const number = parseInt(document.getElementById('number').value, 10) || 3;

  const place = h(document.getElementById('place').value);

  const emotion = h(document.getElementById('emotion').value);

  const object = h(document.getElementById('object').value);

  const color = h(document.getElementById('color').value);

  const setting = h(document.getElementById('setting').value);

  const tone = document.querySelector('input[name="tone"]:checked').value;

  let intro = '';
  let mood = '';
  
/* tones*/ 
  if(tone === 'silly'){
    intro = `One bright morning, <span class="highlight">${kidName}</span> stumbled upon a giggly dragon named <span class="highlight">${dragonName}</span> in the ${setting}.`;
    mood = `${dragonName} felt extra <span class="highlight">${adjective}</span> and invited a ${animal} to join a picnic at the ${place}.`;
  } else if(tone === 'spooky'){
    intro = `In a swirl of eerie mist, <span class="highlight">${kidName}</span> encountered the shadowy dragon <span class="highlight">${dragonName}</span> drifting through the ${setting}.`;
    mood = `${dragonName} seemed unusually <span class="highlight">${adjective}</span>, yet a fearless ${animal} joined them at the ${place}.`;
  } else {
    intro = `At dawn’s gentle glow, <span class="highlight">${kidName}</span> found the peaceful dragon <span class="highlight">${dragonName}</span> resting in the ${setting}.`;
    mood = `The two felt quietly <span class="highlight">${adjective}</span> while a ${animal} settled beside them at the ${place}.`;
  }

  const storyHTML = `
    <p>${intro}</p>
    <p>${mood}</p>
    <p>Together they ${verbPast} a ${color} blanket and shared ${number} plates of ${food}. Suddenly, a ${object} rolled into view, and everyone felt ${emotion}.</p>
    <p class="text-end"><em>— The End</em></p>
  `;

  document.getElementById('storyOutput').innerHTML = storyHTML;
}

function clearStory(){
  document.getElementById('storyOutput').innerHTML =
    '<div class="text-center text-muted">No story yet — fill the form and let the magic begin.</div>';
}

/* sparkle animation  */
const sparkleContainer = document.querySelector('.sparkle-container');

function createSparkle(){
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = Math.random() * 100 + '%';
  sparkle.style.animationDuration = 2 + Math.random() * 3 + 's';
  sparkleContainer.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 5000);
}

setInterval(createSparkle, 200);

