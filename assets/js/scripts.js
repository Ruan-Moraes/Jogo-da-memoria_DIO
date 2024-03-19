const emojis = [
  '😀',
  '😀',
  '🦝',
  '🦝',
  '😇',
  '😇',
  '🤜',
  '🤜',
  '😛',
  '😛',
  '🐺',
  '🐺',
  '🐣',
  '🐣',
  '🎁',
  '🎁',
  '🍉',
  '🍉',
];

const openCards = [];

const shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
  const emojiBox = document.createElement('div');

  emojiBox.className = 'item';
  emojiBox.innerHTML = shuffleEmojis[i];
  emojiBox.onclick = handleClick;

  document.querySelector('#game').appendChild(emojiBox);
}

function handleClick(event) {
  if (event.target.classList.contains('openBox')) {
    return;
  }

  if (openCards.length < 2) {
    event.target.classList.add('openBox');

    openCards.push(event.target);
  }

  if (openCards.length === 2) {
    setTimeout(checkMatch, 350);
  }
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add('boxMatch');
    openCards[1].classList.add('boxMatch');
  } else {
    openCards[0].classList.remove('openBox');
    openCards[1].classList.remove('openBox');
  }

  openCards.splice(0, 2);

  if (document.querySelectorAll('.boxMatch').length === emojis.length) {
    alert('Você venceu!');

    document.location.reload(true);
  }
}
