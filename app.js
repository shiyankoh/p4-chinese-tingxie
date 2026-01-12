import vocabData from './vocab_data.js';

// App State
const state = {
  currentLesson: null,
  currentItems: [],
  currentIndex: 0,
  correctCount: 0,
  wrongItems: [],
  isReviewMode: false,
  selectedChars: new Set() // Track which characters are marked correct
};

// DOM Elements
const elements = {
  lessonSelect: document.getElementById('lesson-select'),
  lessonGrid: document.getElementById('lesson-grid'),
  practiceScreen: document.getElementById('practice-screen'),
  resultsScreen: document.getElementById('results-screen'),
  backBtn: document.getElementById('back-btn'),
  currentLessonTitle: document.getElementById('current-lesson-title'),
  progressText: document.getElementById('progress-text'),
  progressBar: document.getElementById('progress-bar'),
  practiceCard: document.getElementById('practice-card'),
  playAudioBtn: document.getElementById('play-audio-btn'),
  chineseText: document.getElementById('chinese-text'),
  pinyinText: document.getElementById('pinyin-text'),
  englishText: document.getElementById('english-text'),
  frontPinyin: document.getElementById('front-pinyin'),
  revealBtn: document.getElementById('reveal-btn'),
  resultButtons: document.getElementById('result-buttons'),
  correctBtn: document.getElementById('correct-btn'),
  wrongBtn: document.getElementById('wrong-btn'),
  replayBtn: document.getElementById('replay-btn'),
  correctCount: document.getElementById('correct-count'),
  reviewCount: document.getElementById('review-count'),
  reviewMistakesBtn: document.getElementById('review-mistakes-btn'),
  backToLessonsBtn: document.getElementById('back-to-lessons-btn'),
  encouragementOverlay: document.getElementById('encouragement-overlay'),
  encouragementAnimation: document.getElementById('encouragement-animation'),
  encouragementText: document.getElementById('encouragement-text'),
  resultsAnimation: document.getElementById('results-animation'),
  confettiCanvas: document.getElementById('confetti-canvas')
};

// Local Storage Keys
const STORAGE_KEY = 'p4_chinese_progress';

// Load progress from localStorage
function loadProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : {};
}

// Save progress to localStorage
function saveProgress(lessonId, correctItems) {
  const progress = loadProgress();
  if (!progress[lessonId]) {
    progress[lessonId] = { mastered: [] };
  }
  correctItems.forEach(item => {
    if (!progress[lessonId].mastered.includes(item.chinese)) {
      progress[lessonId].mastered.push(item.chinese);
    }
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

// Get lesson progress percentage
function getLessonProgress(lessonId) {
  const progress = loadProgress();
  const lesson = vocabData.lessons.find(l => l.id === lessonId);
  if (!progress[lessonId] || !lesson) return 0;
  return Math.round((progress[lessonId].mastered.length / lesson.items.length) * 100);
}

// Initialize the app
function init() {
  renderLessonSelect();
  setupEventListeners();
}

// Render lesson selection grid
function renderLessonSelect() {
  elements.lessonGrid.innerHTML = '';

  vocabData.lessons.forEach(lesson => {
    const progress = getLessonProgress(lesson.id);
    const card = document.createElement('div');
    card.className = 'lesson-card';
    card.dataset.lessonId = lesson.id;

    card.innerHTML = `
      <div class="lesson-number">${lesson.id}</div>
      <div class="lesson-info">
        <div class="lesson-title-zh">${lesson.title}</div>
        <div class="lesson-title-en">${lesson.titleEnglish}</div>
      </div>
      <div class="lesson-progress">
        <div class="lesson-progress-bar">
          <div class="lesson-progress-fill" style="width: ${progress}%"></div>
        </div>
        <span>${progress}%</span>
      </div>
    `;

    card.addEventListener('click', () => startLesson(lesson.id));
    elements.lessonGrid.appendChild(card);
  });
}

// Start a lesson
function startLesson(lessonId) {
  const lesson = vocabData.lessons.find(l => l.id === lessonId);
  if (!lesson) return;

  state.currentLesson = lesson;
  state.currentItems = shuffleArray([...lesson.items]);
  state.currentIndex = 0;
  state.correctCount = 0;
  state.wrongItems = [];
  state.isReviewMode = false;

  elements.currentLessonTitle.textContent = lesson.title;

  showScreen('practice');
  loadCurrentItem();
}

// Show a specific screen
function showScreen(screen) {
  elements.lessonSelect.classList.remove('active');
  elements.practiceScreen.classList.remove('active');
  elements.resultsScreen.classList.remove('active');

  switch (screen) {
    case 'lessons':
      elements.lessonSelect.classList.add('active');
      renderLessonSelect(); // Refresh to show updated progress
      break;
    case 'practice':
      elements.practiceScreen.classList.add('active');
      break;
    case 'results':
      elements.resultsScreen.classList.add('active');
      break;
  }
}

// Chinese punctuation characters (non-selectable)
const punctuation = new Set([
  "。", "，", "、", "？", "！", "：", "；",
  "\u201C", "\u201D",  // " "
  "\u2018", "\u2019",  // ' '
  "（", "）", "《", "》", "…", "—"
]);

// Load the current vocabulary item
function loadCurrentItem() {
  const item = state.currentItems[state.currentIndex];
  if (!item) return;

  // Reset card state
  elements.practiceCard.classList.remove('flipped');
  elements.revealBtn.classList.remove('hidden');
  elements.resultButtons.classList.add('hidden');
  elements.replayBtn.classList.add('hidden');

  // Reset selected characters
  state.selectedChars = new Set();

  // Show pinyin on the front of the card
  elements.frontPinyin.textContent = item.pinyin;

  // Render selectable characters
  renderSelectableCharacters(item.chinese);

  elements.pinyinText.textContent = item.pinyin;
  elements.englishText.textContent = item.english;

  // Update progress
  updateProgress();
}

// Render characters as tappable buttons
function renderSelectableCharacters(text) {
  elements.chineseText.innerHTML = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const btn = document.createElement('span');
    btn.className = 'char-btn';
    btn.textContent = char;
    btn.dataset.index = i;

    if (punctuation.has(char) || char === ' ') {
      btn.classList.add('punctuation');
    } else {
      btn.addEventListener('click', () => toggleCharacter(btn, i));
    }

    elements.chineseText.appendChild(btn);
  }
}

// Toggle character selection
function toggleCharacter(btn, index) {
  if (state.selectedChars.has(index)) {
    state.selectedChars.delete(index);
    btn.classList.remove('selected');
  } else {
    state.selectedChars.add(index);
    btn.classList.add('selected');
  }

  updateResultButtonLabels();
}

// Update button labels based on selection
function updateResultButtonLabels() {
  const item = state.currentItems[state.currentIndex];
  const totalChars = [...item.chinese].filter(c => !punctuation.has(c) && c !== ' ').length;
  const selectedCount = state.selectedChars.size;

  if (selectedCount === 0) {
    elements.correctBtn.innerHTML = '<span class="btn-icon">✓</span> All Correct!';
    elements.wrongBtn.innerHTML = '<span class="btn-icon">🔄</span> Try Again Later';
  } else if (selectedCount === totalChars) {
    elements.correctBtn.innerHTML = '<span class="btn-icon">✓</span> All Correct!';
    elements.wrongBtn.innerHTML = '<span class="btn-icon">🔄</span> Try Again Later';
  } else {
    elements.correctBtn.innerHTML = `<span class="btn-icon">✓</span> ${selectedCount} Right, Next`;
    elements.wrongBtn.innerHTML = '<span class="btn-icon">🔄</span> None Right';
  }
}

// Update progress display
function updateProgress() {
  const total = state.currentItems.length;
  const current = state.currentIndex + 1;

  elements.progressText.textContent = `${current} / ${total}`;
  elements.progressBar.style.width = `${(current / total) * 100}%`;
}

// Audio player instance
let currentAudio = null;

// Play audio using pre-generated MP3 files
function playAudio() {
  const item = state.currentItems[state.currentIndex];
  if (!item) return;

  // Stop any currently playing audio
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  // Find the index of this item in the original lesson
  const originalIndex = state.currentLesson.items.findIndex(i => i.chinese === item.chinese);
  const audioIndex = String(originalIndex + 1).padStart(2, '0');
  const audioPath = `audio/lesson${state.currentLesson.id}/${audioIndex}.mp3`;

  currentAudio = new Audio(audioPath);

  // Visual feedback
  elements.playAudioBtn.classList.add('playing');

  currentAudio.onended = () => {
    elements.playAudioBtn.classList.remove('playing');
  };

  currentAudio.onerror = () => {
    elements.playAudioBtn.classList.remove('playing');
    console.error('Audio failed to load:', audioPath);
    // Fallback to Web Speech API
    fallbackToSpeechSynthesis(item.chinese);
  };

  currentAudio.play();
}

// Fallback to browser TTS if audio file fails
function fallbackToSpeechSynthesis(text) {
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-CN';
  utterance.rate = 0.8;

  elements.playAudioBtn.classList.add('playing');

  utterance.onend = () => {
    elements.playAudioBtn.classList.remove('playing');
  };

  speechSynthesis.speak(utterance);
}

// Reveal the answer
function revealAnswer() {
  elements.practiceCard.classList.add('flipped');
  elements.revealBtn.classList.add('hidden');
  elements.resultButtons.classList.remove('hidden');
  elements.replayBtn.classList.remove('hidden');
}

// Handle correct answer (or partial correct with selections)
function handleCorrect() {
  const item = state.currentItems[state.currentIndex];
  const totalChars = [...item.chinese].filter(c => !punctuation.has(c) && c !== ' ').length;
  const selectedCount = state.selectedChars.size;

  // If some characters selected, it's partial - still counts as needing review
  // If none selected, means "all correct" was clicked
  if (selectedCount > 0 && selectedCount < totalChars) {
    // Partial correct - show encouragement but add to review
    state.wrongItems.push(item);
    showEncouragement('partial');
  } else {
    // All correct
    state.correctCount++;
    showEncouragement('correct');
    triggerConfetti();
  }

  setTimeout(() => {
    hideEncouragement();
    nextItem();
  }, 1200);
}

// Handle wrong answer
function handleWrong() {
  const item = state.currentItems[state.currentIndex];
  state.wrongItems.push(item);

  // Show encouragement
  showEncouragement('wrong');

  setTimeout(() => {
    hideEncouragement();
    nextItem();
  }, 1200);
}

// Move to next item
function nextItem() {
  state.currentIndex++;

  if (state.currentIndex >= state.currentItems.length) {
    finishPractice();
  } else {
    loadCurrentItem();
  }
}

// Finish practice session
function finishPractice() {
  // Save progress for correct items
  const correctItems = state.currentItems.filter(
    item => !state.wrongItems.includes(item)
  );
  saveProgress(state.currentLesson.id, correctItems);

  // Update results screen
  elements.correctCount.textContent = state.correctCount;
  elements.reviewCount.textContent = state.wrongItems.length;

  // Set appropriate emoji based on performance
  const percentage = (state.correctCount / state.currentItems.length) * 100;
  if (percentage === 100) {
    elements.resultsAnimation.textContent = '🏆';
  } else if (percentage >= 80) {
    elements.resultsAnimation.textContent = '🌟';
  } else if (percentage >= 60) {
    elements.resultsAnimation.textContent = '👍';
  } else {
    elements.resultsAnimation.textContent = '💪';
  }

  // Show/hide review button based on wrong items
  elements.reviewMistakesBtn.style.display =
    state.wrongItems.length > 0 ? 'flex' : 'none';

  // Trigger celebration if perfect score
  if (percentage === 100) {
    triggerConfetti();
  }

  showScreen('results');
}

// Review mistakes
function reviewMistakes() {
  if (state.wrongItems.length === 0) return;

  state.currentItems = shuffleArray([...state.wrongItems]);
  state.currentIndex = 0;
  state.correctCount = 0;
  state.wrongItems = [];
  state.isReviewMode = true;

  showScreen('practice');
  loadCurrentItem();
}

// Encouragement messages
const encouragementMessages = {
  correct: [
    { emoji: '🎉', text: 'Awesome!' },
    { emoji: '⭐', text: 'Great job!' },
    { emoji: '🌟', text: 'Fantastic!' },
    { emoji: '✨', text: 'You got it!' },
    { emoji: '🎊', text: 'Perfect!' },
    { emoji: '🏆', text: 'Champion!' },
    { emoji: '💯', text: 'Nailed it!' },
    { emoji: '🔥', text: 'On fire!' }
  ],
  partial: [
    { emoji: '👏', text: 'Good progress!' },
    { emoji: '📈', text: 'Getting better!' },
    { emoji: '🌟', text: 'Nice work on those!' },
    { emoji: '💫', text: 'Keep it up!' },
    { emoji: '🎯', text: 'So close!' },
    { emoji: '✨', text: 'Almost there!' }
  ],
  wrong: [
    { emoji: '💪', text: 'Keep trying!' },
    { emoji: '🌱', text: 'You\'re learning!' },
    { emoji: '📚', text: 'Practice makes perfect!' },
    { emoji: '🎯', text: 'Almost there!' },
    { emoji: '🌈', text: 'You\'ll get it next time!' },
    { emoji: '✊', text: 'Don\'t give up!' },
    { emoji: '🧠', text: 'Building brain power!' },
    { emoji: '🚀', text: 'Keep going!' }
  ]
};

// Show encouragement overlay
function showEncouragement(type) {
  const messages = encouragementMessages[type];
  const message = messages[Math.floor(Math.random() * messages.length)];

  elements.encouragementAnimation.textContent = message.emoji;

  // Different animations for different outcomes
  if (type === 'correct') {
    elements.encouragementAnimation.className = 'star-animation';
  } else if (type === 'partial') {
    elements.encouragementAnimation.className = 'bounce-animation';
  } else {
    elements.encouragementAnimation.className = 'shake-animation';
  }

  elements.encouragementText.textContent = message.text;
  elements.encouragementOverlay.classList.remove('hidden');
}

// Hide encouragement overlay
function hideEncouragement() {
  elements.encouragementOverlay.classList.add('hidden');
}

// Confetti effect
function triggerConfetti() {
  const canvas = elements.confettiCanvas;
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#6366f1', '#22c55e', '#f59e0b', '#ef4444', '#ec4899', '#8b5cf6'];

  // Create particles
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 10 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: Math.random() * 3 + 2,
      speedX: Math.random() * 2 - 1,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 10 - 5
    });
  }

  let animationFrame;

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let allDone = true;

    particles.forEach(p => {
      if (p.y < canvas.height + 50) {
        allDone = false;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();

        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotationSpeed;
        p.speedY += 0.1; // Gravity
      }
    });

    if (!allDone) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animate();

  // Clear after 3 seconds regardless
  setTimeout(() => {
    cancelAnimationFrame(animationFrame);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 3000);
}

// Shuffle array (Fisher-Yates)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Setup event listeners
function setupEventListeners() {
  // Play audio
  elements.playAudioBtn.addEventListener('click', playAudio);

  // Reveal answer
  elements.revealBtn.addEventListener('click', revealAnswer);

  // Correct/Wrong buttons
  elements.correctBtn.addEventListener('click', handleCorrect);
  elements.wrongBtn.addEventListener('click', handleWrong);

  // Replay audio
  elements.replayBtn.addEventListener('click', playAudio);

  // Back button
  elements.backBtn.addEventListener('click', () => showScreen('lessons'));

  // Results screen buttons
  elements.reviewMistakesBtn.addEventListener('click', reviewMistakes);
  elements.backToLessonsBtn.addEventListener('click', () => showScreen('lessons'));

  // Close encouragement on click (as backup)
  elements.encouragementOverlay.addEventListener('click', hideEncouragement);

  // Handle window resize for confetti canvas
  window.addEventListener('resize', () => {
    elements.confettiCanvas.width = window.innerWidth;
    elements.confettiCanvas.height = window.innerHeight;
  });
}

// Start the app
init();
