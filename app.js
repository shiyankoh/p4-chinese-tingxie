import vocabData from './vocab_data.js';

// Recipe data for each lesson
const recipeData = {
  1: {
    name: "Mini Muffin Tin Doughnut Holes",
    image: "recipes/IMG_0259.JPG",
    ingredients: [
      { emoji: "🌾", name: "Flour" },
      { emoji: "🍬", name: "Sugar" },
      { emoji: "🧪", name: "Baking Powder" },
      { emoji: "🧂", name: "Salt" },
      { emoji: "✨", name: "Nutmeg" },
      { emoji: "🧈", name: "Butter" },
      { emoji: "🥚", name: "Egg" },
      { emoji: "🥛", name: "Milk" },
      { emoji: "🟤", name: "Cinnamon" },
      { emoji: "🍬", name: "Sugar (topping)" }
    ]
  },
  2: {
    name: "Chocolate Crinkle Cookies",
    image: "recipes/IMG_0260.JPG",
    ingredients: [
      { emoji: "🌾", name: "Flour" },
      { emoji: "🍫", name: "Cocoa Powder" },
      { emoji: "🧪", name: "Baking Powder" },
      { emoji: "🧂", name: "Salt" },
      { emoji: "🧈", name: "Butter" },
      { emoji: "🟤", name: "Brown Sugar" },
      { emoji: "🥚", name: "Eggs" },
      { emoji: "🫙", name: "Vanilla" },
      { emoji: "🤍", name: "Powdered Sugar" },
      { emoji: "🍫", name: "Chocolate" }
    ]
  },
  3: {
    name: "Chewy Peanut Butter Cookies",
    image: "recipes/IMG_0261.JPG",
    ingredients: [
      { emoji: "🌾", name: "Flour" },
      { emoji: "🧂", name: "Salt" },
      { emoji: "💪", name: "Baking Soda" },
      { emoji: "🥜", name: "Peanuts" },
      { emoji: "🟤", name: "Brown Sugar" },
      { emoji: "🧈", name: "Butter" },
      { emoji: "🥜", name: "Peanut Butter" },
      { emoji: "🥚", name: "Egg" },
      { emoji: "🫙", name: "Vanilla" },
      { emoji: "🥜", name: "More Peanut Butter" }
    ]
  },
  4: {
    name: "Jam Thumbprint Cookies",
    image: "recipes/IMG_0262.JPG",
    ingredients: [
      { emoji: "🌾", name: "Flour" },
      { emoji: "🧂", name: "Salt" },
      { emoji: "💪", name: "Baking Soda" },
      { emoji: "🧪", name: "Baking Powder" },
      { emoji: "🧈", name: "Butter" },
      { emoji: "🧀", name: "Cream Cheese" },
      { emoji: "🍬", name: "Sugar" },
      { emoji: "🥚", name: "Egg" },
      { emoji: "🫙", name: "Vanilla" },
      { emoji: "🍓", name: "Jam" }
    ]
  },
  5: {
    name: "Chewy Brownies",
    image: "recipes/IMG_0263.JPG",
    ingredients: [
      { emoji: "🍫", name: "Chocolate" },
      { emoji: "🍫", name: "Cocoa Powder" },
      { emoji: "🧈", name: "Butter" },
      { emoji: "🍬", name: "Sugar" },
      { emoji: "🥚", name: "Eggs" },
      { emoji: "🫙", name: "Vanilla" },
      { emoji: "🌾", name: "Flour" },
      { emoji: "🧂", name: "Salt" },
      { emoji: "🍫", name: "Chocolate Chips" },
      { emoji: "🍫", name: "More Chocolate" }
    ]
  },
  6: {
    name: "Cheesecake Bars",
    image: "recipes/IMG_0264.JPG",
    ingredients: [
      { emoji: "🍪", name: "Graham Crackers" },
      { emoji: "🧈", name: "Butter" },
      { emoji: "🧂", name: "Salt" },
      { emoji: "🧀", name: "Cream Cheese" },
      { emoji: "🍬", name: "Sugar" },
      { emoji: "🥚", name: "Eggs" },
      { emoji: "🫙", name: "Vanilla" },
      { emoji: "🥛", name: "Sour Cream" },
      { emoji: "🍓", name: "Strawberry Topping" },
      { emoji: "🧀", name: "More Cream Cheese" }
    ]
  },
  7: {
    name: "Yellow Cake with Chocolate Frosting",
    image: "recipes/IMG_0265.JPG",
    ingredients: [
      { emoji: "🌾", name: "Flour" },
      { emoji: "🧪", name: "Baking Powder" },
      { emoji: "🧂", name: "Salt" },
      { emoji: "🧈", name: "Butter" },
      { emoji: "🍬", name: "Sugar" },
      { emoji: "🥚", name: "Eggs" },
      { emoji: "🫙", name: "Vanilla" },
      { emoji: "🥛", name: "Milk" },
      { emoji: "🍫", name: "Chocolate Frosting" },
      { emoji: "🧈", name: "More Butter" }
    ]
  },
  8: {
    name: "Carrot Cake with Cream Cheese Frosting",
    image: "recipes/IMG_0266.JPG",
    ingredients: [
      { emoji: "🌾", name: "Flour" },
      { emoji: "🟤", name: "Cinnamon" },
      { emoji: "🧪", name: "Baking Powder" },
      { emoji: "💪", name: "Baking Soda" },
      { emoji: "🧂", name: "Salt" },
      { emoji: "🥚", name: "Eggs" },
      { emoji: "🟤", name: "Brown Sugar" },
      { emoji: "🫒", name: "Oil" },
      { emoji: "🥕", name: "Carrots" },
      { emoji: "🧀", name: "Cream Cheese Frosting" }
    ]
  },
  9: {
    name: "Chocolate Cupcakes with Nutella Frosting",
    image: "recipes/IMG_0267.JPG",
    ingredients: [
      { emoji: "🌾", name: "Flour" },
      { emoji: "🍫", name: "Cocoa Powder" },
      { emoji: "🧪", name: "Baking Powder" },
      { emoji: "💪", name: "Baking Soda" },
      { emoji: "🧂", name: "Salt" },
      { emoji: "🥚", name: "Eggs" },
      { emoji: "🍬", name: "Sugar" },
      { emoji: "🥛", name: "Sour Cream" },
      { emoji: "🫒", name: "Oil" },
      { emoji: "🟤", name: "Nutella Frosting" }
    ]
  }
};

// App State
const state = {
  currentLesson: null,
  currentItems: [],
  currentIndex: 0,
  correctCount: 0,
  wrongItems: [],
  isReviewMode: false,
  selectedChars: new Set(), // Track which characters are marked correct
  collectedIngredients: [] // Track which ingredients have been collected this session
};

// DOM Elements
const elements = {
  lessonSelect: document.getElementById('lesson-select'),
  lessonGrid: document.getElementById('lesson-grid'),
  practiceScreen: document.getElementById('practice-screen'),
  resultsScreen: document.getElementById('results-screen'),
  recipeBookScreen: document.getElementById('recipe-book-screen'),
  recipeBookBtn: document.getElementById('recipe-book-btn'),
  recipeBackBtn: document.getElementById('recipe-back-btn'),
  recipeGrid: document.getElementById('recipe-grid'),
  backBtn: document.getElementById('back-btn'),
  prevBtn: document.getElementById('prev-btn'),
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
  confettiCanvas: document.getElementById('confetti-canvas'),
  // Settings elements
  settingsBtn: document.getElementById('settings-btn'),
  settingsModal: document.getElementById('settings-modal'),
  settingsClose: document.getElementById('settings-close'),
  resetAllBtn: document.getElementById('reset-all-btn'),
  resetLessonSelect: document.getElementById('reset-lesson-select'),
  resetLessonBtn: document.getElementById('reset-lesson-btn')
};

// Local Storage Keys
const STORAGE_KEY = 'p4_chinese_progress';
const RECIPES_KEY = 'p4_chinese_recipes';

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

// Load unlocked recipes from localStorage
function loadUnlockedRecipes() {
  const saved = localStorage.getItem(RECIPES_KEY);
  return saved ? JSON.parse(saved) : [];
}

// Save unlocked recipe to localStorage
function unlockRecipe(lessonId) {
  const unlocked = loadUnlockedRecipes();
  if (!unlocked.includes(lessonId)) {
    unlocked.push(lessonId);
    localStorage.setItem(RECIPES_KEY, JSON.stringify(unlocked));
  }
}

// Check if a recipe is unlocked
function isRecipeUnlocked(lessonId) {
  return loadUnlockedRecipes().includes(lessonId);
}

// Reset all progress
function resetAllProgress() {
  if (confirm('Are you sure you want to reset ALL progress? This will clear all lesson progress and unlocked recipes. This cannot be undone.')) {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(RECIPES_KEY);
    renderLessonSelect();
    closeSettingsModal();
  }
}

// Reset specific lesson progress
function resetLessonProgress(lessonId) {
  const lesson = vocabData.lessons.find(l => l.id === parseInt(lessonId));
  if (!lesson) return;

  if (confirm(`Are you sure you want to reset progress for "${lesson.title}"? This cannot be undone.`)) {
    // Remove lesson from progress
    const progress = loadProgress();
    delete progress[lessonId];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));

    // Remove recipe unlock for this lesson
    const recipes = loadUnlockedRecipes();
    const updatedRecipes = recipes.filter(id => id !== parseInt(lessonId));
    localStorage.setItem(RECIPES_KEY, JSON.stringify(updatedRecipes));

    renderLessonSelect();
    closeSettingsModal();
  }
}

// Open settings modal
function openSettingsModal() {
  // Populate lesson dropdown
  elements.resetLessonSelect.innerHTML = '<option value="">-- Select Lesson --</option>';
  vocabData.lessons.forEach(lesson => {
    const option = document.createElement('option');
    option.value = lesson.id;
    option.textContent = `Lesson ${lesson.id}: ${lesson.title}`;
    elements.resetLessonSelect.appendChild(option);
  });

  elements.settingsModal.classList.remove('hidden');
}

// Close settings modal
function closeSettingsModal() {
  elements.settingsModal.classList.add('hidden');
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

// Render recipe book grid
function renderRecipeBook() {
  elements.recipeGrid.innerHTML = '';
  const unlockedRecipes = loadUnlockedRecipes();

  Object.keys(recipeData).forEach(lessonId => {
    const recipe = recipeData[lessonId];
    const isUnlocked = unlockedRecipes.includes(parseInt(lessonId));
    const card = document.createElement('div');
    card.className = `recipe-card ${isUnlocked ? 'unlocked' : 'locked'}`;

    if (isUnlocked) {
      card.innerHTML = `
        <div class="recipe-image-container">
          <img src="${recipe.image}" alt="${recipe.name}" class="recipe-thumbnail">
        </div>
        <div class="recipe-card-info">
          <p class="recipe-card-name">${recipe.name}</p>
          <p class="recipe-card-lesson">Lesson ${lessonId}</p>
        </div>
      `;
      card.addEventListener('click', () => showRecipeDetail(lessonId));
    } else {
      card.innerHTML = `
        <div class="recipe-image-container locked-image">
          <span class="lock-icon">🔒</span>
        </div>
        <div class="recipe-card-info">
          <p class="recipe-card-name">???</p>
          <p class="recipe-card-lesson">Complete Lesson ${lessonId} with 100%</p>
        </div>
      `;
    }

    elements.recipeGrid.appendChild(card);
  });
}

// Show recipe detail modal
function showRecipeDetail(lessonId) {
  const recipe = recipeData[lessonId];
  if (!recipe) return;

  // Create and show a modal with the recipe image
  const modal = document.createElement('div');
  modal.className = 'recipe-modal';
  modal.innerHTML = `
    <div class="recipe-modal-content">
      <button class="recipe-modal-close">&times;</button>
      <img src="${recipe.image}" alt="${recipe.name}" class="recipe-modal-image">
      <h3>${recipe.name}</h3>
      <p>Unlocked from Lesson ${lessonId}</p>
      <div class="recipe-modal-ingredients">
        <h4>Ingredients:</h4>
        <div class="modal-ingredients-grid">
          ${recipe.ingredients.map(i => `<span>${i.emoji} ${i.name}</span>`).join('')}
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Close modal on click
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('recipe-modal-close')) {
      modal.remove();
    }
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
  state.collectedIngredients = []; // Reset collected ingredients

  elements.currentLessonTitle.textContent = lesson.title;

  showScreen('practice');
  loadCurrentItem();
}

// Show a specific screen
function showScreen(screen) {
  elements.lessonSelect.classList.remove('active');
  elements.practiceScreen.classList.remove('active');
  elements.resultsScreen.classList.remove('active');
  elements.recipeBookScreen.classList.remove('active');

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
    case 'recipes':
      elements.recipeBookScreen.classList.add('active');
      renderRecipeBook();
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
    // All correct - collect the ingredient for this phrase
    state.correctCount++;

    // Get the ingredient for this phrase (based on original lesson order)
    const originalIndex = state.currentLesson.items.findIndex(i => i.chinese === item.chinese);
    const recipe = recipeData[state.currentLesson.id];
    if (recipe && recipe.ingredients[originalIndex]) {
      state.collectedIngredients.push(originalIndex);
    }

    showEncouragement('correct', originalIndex);
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

// Move to previous item
function prevItem() {
  if (state.currentIndex > 0) {
    state.currentIndex--;
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

  const percentage = (state.correctCount / state.currentItems.length) * 100;
  const recipe = recipeData[state.currentLesson.id];
  const isPerfect = percentage === 100;

  // If perfect score, unlock the recipe
  if (isPerfect && recipe) {
    unlockRecipe(state.currentLesson.id);
  }

  // Render ingredients and recipe result
  renderRecipeResults(recipe, isPerfect);

  // Show/hide review button based on wrong items
  elements.reviewMistakesBtn.style.display =
    state.wrongItems.length > 0 ? 'flex' : 'none';

  // Trigger celebration if perfect score
  if (isPerfect) {
    triggerConfetti();
  }

  showScreen('results');
}

// Render recipe results on the results screen
function renderRecipeResults(recipe, isPerfect) {
  if (!recipe) {
    elements.resultsAnimation.textContent = isPerfect ? '🏆' : '💪';
    return;
  }

  // Build the ingredients display
  let ingredientsHtml = '<div class="collected-ingredients">';
  ingredientsHtml += `<p class="recipe-name">Recipe: ${recipe.name}</p>`;
  ingredientsHtml += '<div class="ingredients-grid">';

  recipe.ingredients.forEach((ingredient, index) => {
    const collected = state.collectedIngredients.includes(index);
    ingredientsHtml += `
      <div class="ingredient-item ${collected ? 'collected' : 'missing'}">
        <span class="ingredient-emoji">${ingredient.emoji}</span>
        <span class="ingredient-name">${ingredient.name}</span>
      </div>
    `;
  });

  ingredientsHtml += '</div>';

  if (isPerfect) {
    // Show mixing animation then final baked good
    ingredientsHtml += `
      <div class="mixing-bowl-container">
        <div class="mixing-bowl">🥣</div>
        <p class="mixing-text">Mixing ingredients...</p>
      </div>
      <div class="baked-result hidden">
        <img src="${recipe.image}" alt="${recipe.name}" class="baked-image">
      </div>
    `;
  } else {
    ingredientsHtml += `
      <p class="incomplete-text">Collect all ingredients to complete the recipe!</p>
    `;
  }

  ingredientsHtml += '</div>';

  elements.resultsAnimation.innerHTML = ingredientsHtml;

  // If perfect, trigger the mixing animation after a delay
  if (isPerfect) {
    setTimeout(() => {
      const mixingBowl = document.querySelector('.mixing-bowl-container');
      const bakedResult = document.querySelector('.baked-result');
      if (mixingBowl && bakedResult) {
        mixingBowl.classList.add('mixing');
        setTimeout(() => {
          mixingBowl.classList.add('hidden');
          bakedResult.classList.remove('hidden');
          triggerConfetti();
        }, 2000);
      }
    }, 500);
  }
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

// Encouragement messages for partial and wrong answers
const encouragementMessages = {
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

// Get ingredient-based encouragement text
function getIngredientText(ingredientName) {
  const texts = {
    "Flour": "Flour power!",
    "Sugar": "Sweet like sugar!",
    "Sugar (topping)": "Extra sweetness!",
    "Baking Powder": "Rising to the occasion!",
    "Salt": "A pinch of perfection!",
    "Nutmeg": "Spicing things up!",
    "Butter": "Smooth as butter!",
    "Egg": "Egg-cellent!",
    "Eggs": "Egg-cellent!",
    "Milk": "Creamy goodness!",
    "Cinnamon": "Warm and cozy!",
    "Cocoa Powder": "Chocolatey goodness!",
    "Brown Sugar": "Rich and sweet!",
    "Vanilla": "Vanilla-fied!",
    "Powdered Sugar": "Dusted with sweetness!",
    "Chocolate": "Chocolate magic!",
    "Baking Soda": "Arm & Hammer strong!",
    "Peanuts": "Going nuts!",
    "Peanut Butter": "Nutty and nice!",
    "More Peanut Butter": "Can't have too much!",
    "Cream Cheese": "Cream of the crop!",
    "Jam": "Jammin'!",
    "Chocolate Chips": "Chip chip hooray!",
    "More Chocolate": "More is more!",
    "Graham Crackers": "Crunchy foundation!",
    "Sour Cream": "Tangy twist!",
    "Strawberry Topping": "Berry delicious!",
    "More Cream Cheese": "Extra creamy!",
    "Chocolate Frosting": "Frosting perfection!",
    "More Butter": "Buttery bonus!",
    "Oil": "Smooth operator!",
    "Carrots": "Veggie power!",
    "Cream Cheese Frosting": "Frosted finish!",
    "Nutella Frosting": "Nutella heaven!"
  };
  return texts[ingredientName] || `${ingredientName} added!`;
}

// Show encouragement overlay
function showEncouragement(type, ingredientIndex = null) {
  let emoji, text;

  if (type === 'correct' && state.currentLesson && !state.isReviewMode) {
    // Get the recipe-specific ingredient
    const recipe = recipeData[state.currentLesson.id];
    if (recipe && ingredientIndex !== null && recipe.ingredients[ingredientIndex]) {
      const ingredient = recipe.ingredients[ingredientIndex];
      emoji = ingredient.emoji;
      text = getIngredientText(ingredient.name);
    } else {
      // Fallback
      emoji = '⭐';
      text = 'Great job!';
    }
  } else {
    // Use generic messages for partial/wrong
    const messages = encouragementMessages[type];
    const message = messages[Math.floor(Math.random() * messages.length)];
    emoji = message.emoji;
    text = message.text;
  }

  elements.encouragementAnimation.textContent = emoji;

  // Different animations for different outcomes
  if (type === 'correct') {
    elements.encouragementAnimation.className = 'star-animation';
  } else if (type === 'partial') {
    elements.encouragementAnimation.className = 'bounce-animation';
  } else {
    elements.encouragementAnimation.className = 'shake-animation';
  }

  elements.encouragementText.textContent = text;
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

  // Back button (to menu)
  elements.backBtn.addEventListener('click', () => showScreen('lessons'));

  // Previous item button
  elements.prevBtn.addEventListener('click', prevItem);

  // Recipe book buttons
  elements.recipeBookBtn.addEventListener('click', () => showScreen('recipes'));
  elements.recipeBackBtn.addEventListener('click', () => showScreen('lessons'));

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

  // Settings modal
  elements.settingsBtn.addEventListener('click', openSettingsModal);
  elements.settingsClose.addEventListener('click', closeSettingsModal);
  elements.settingsModal.addEventListener('click', (e) => {
    if (e.target === elements.settingsModal) {
      closeSettingsModal();
    }
  });

  // Reset buttons
  elements.resetAllBtn.addEventListener('click', resetAllProgress);
  elements.resetLessonSelect.addEventListener('change', () => {
    elements.resetLessonBtn.disabled = !elements.resetLessonSelect.value;
  });
  elements.resetLessonBtn.addEventListener('click', () => {
    if (elements.resetLessonSelect.value) {
      resetLessonProgress(elements.resetLessonSelect.value);
    }
  });
}

// Start the app
init();
