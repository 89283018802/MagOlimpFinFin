document.addEventListener('DOMContentLoaded', () => {
const sections = document.querySelectorAll('.section');
const homeSection = document.getElementById('home');
const testMenuSection = document.getElementById('test-menu');
const testInfoSection = document.getElementById('test-info');
const quizSection = document.getElementById('quiz');
const resultsSection = document.getElementById('results');
const aboutSection = document.getElementById('about');
const programSection = document.getElementById('program');

const buttons = {
home: document.getElementById('home-btn'),
testMenu: document.getElementById('test-menu-btn'),
program: document.getElementById('program-btn'),
about: document.getElementById('about-btn'),
backToHome: document.getElementById('back-to-home'),
backToMenu: document.getElementById('back-to-menu'),
startTest: document.getElementById('start-test'),
backToMain: document.getElementById('back-to-main'),
startButton: document.getElementById('start-button')
};

let currentTestId = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let wrongAnswers = [];

const showSection = (section) => {
sections.forEach(sec => sec.classList.add('hidden'));
section.classList.remove('hidden');
};

// const loadQuestions = (testId) => {
// const testQuestions = questions[testId];
// currentQuestions = testQuestions.sort(() => Math.random() - 0.5); // Рандомно перемешиваем вопросы
// currentQuestionIndex = 0;
// correctAnswersCount = 0;
// displayQuestion();
// };

 const displayQuestion = () => {
        const question = currentQuestions[currentQuestionIndex];
        document.getElementById('current-question').textContent = currentQuestionIndex + 1;
        document.getElementById('total-questions').textContent = currentQuestions.length;
        
        const questionTextElement = document.getElementById('question-text');
        questionTextElement.innerHTML = `<h3>${question.question}</h3>`;
        
        // Очищаем предыдущее изображение вопроса
        const questionImage = document.getElementById('quiz-image');
        questionImage.style.display = 'none';
        
        // Добавляем основное изображение вопроса, если оно есть
        if (question.image) {
            questionImage.src = question.image;
            questionImage.style.display = 'block';
        }
        
        const answerOptions = document.getElementById('answer-options');
        answerOptions.innerHTML = "";
        
        // Для вопросов с таблицами/схемами
        if (question.tables) {
            question.tables.forEach((table, index) => {
                const li = document.createElement('li');
                li.dataset.index = index;
                li.innerHTML = `
                    <p>${question.options[index]}</p>
                    <img src="${table}" alt="Вариант ${index+1}" class="truth-table">
                `;
                li.addEventListener('click', () => selectAnswer(index));
                answerOptions.appendChild(li);
            });
        } else {
            // Обычные текстовые варианты
            question.options.forEach((option, index) => {
                const li = document.createElement('li');
                li.textContent = option;
                li.dataset.index = index;
                li.addEventListener('click', () => selectAnswer(index));
                answerOptions.appendChild(li);
            });
        }
        
        updateProgress();
    };

    const selectAnswer = (selectedIndex) => {
        const currentQuestion = currentQuestions[currentQuestionIndex];
        
        if (selectedIndex !== currentQuestion.correct) {
            wrongAnswers.push({
                question: currentQuestion.question,
                correctAnswer: currentQuestion.options[currentQuestion.correct],
                userAnswer: currentQuestion.options[selectedIndex],
                image: currentQuestion.image || null,
                tables: currentQuestion.tables || null
            });
        } else {
            correctAnswersCount++;
        }

        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            showResults();
        }
    };

const showResults = () => {
document.getElementById('correct-answers').innerText = correctAnswersCount;
document.getElementById('total-quiz-questions').innerText = currentQuestions.length;
showSection(resultsSection);
renderChart();
displayWrongAnswers();
};

const displayWrongAnswers = () => {
const resultsSection = document.getElementById('results');

// Создаем контейнер для ошибок, если его еще нет
let wrongAnswersContainer = document.getElementById('wrong-answers-container');
if (!wrongAnswersContainer) {
wrongAnswersContainer = document.createElement('div');
wrongAnswersContainer.id = 'wrong-answers-container';
wrongAnswersContainer.style.marginTop = '30px';
wrongAnswersContainer.style.maxHeight = '300px'; // Ограничиваем высоту
wrongAnswersContainer.style.overflowY = 'auto'; // Добавляем вертикальный скролл
wrongAnswersContainer.style.padding = '0 15px'; // Добавляем отступы по бокам
resultsSection.appendChild(wrongAnswersContainer);
}
wrongAnswersContainer.innerHTML = '';

if (wrongAnswers.length === 0) {
wrongAnswersContainer.innerHTML = '<p>Вы не допустили ни одной ошибки! Отличный результат!</p>';
return;
}

const title = document.createElement('h3');
title.textContent = 'Ошибки в тесте:';
wrongAnswersContainer.appendChild(title);

wrongAnswers.forEach((item, index) => {
const wrongAnswerItem = document.createElement('div');
wrongAnswerItem.className = 'wrong-answer-item';
wrongAnswerItem.style.marginBottom = '20px';
wrongAnswerItem.style.padding = '15px';
wrongAnswerItem.style.border = '1px solid #ff6384';
wrongAnswerItem.style.borderRadius = '5px';
wrongAnswerItem.style.backgroundColor = '#fff'; // Добавляем фон для лучшей читаемости

let content = `
<p><strong>Вопрос ${index + 1}:</strong> ${item.question}</p>
<p><strong>Ваш ответ:</strong> <span style="color: #ff6384">${item.userAnswer}</span></p>
<p><strong>Правильный ответ:</strong> <span style="color: #36a2eb">${item.correctAnswer}</span></p>
`;

if (item.image) {
content += `<img src="${item.image}" alt="Question image" style="max-width: 100%; height: auto; margin-top: 10px; border: 1px solid #ddd; border-radius: 4px;">`;
}

wrongAnswerItem.innerHTML = content;
wrongAnswersContainer.appendChild(wrongAnswerItem);
});
};
const updateProgress = () => {
        const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
        document.getElementById('progress-bar').style.width = `${progress}%`;
    };
const renderChart = () => {
const ctx = document.getElementById('result-chart').getContext('2d');
const totalQuestions = currentQuestions.length;
const incorrectAnswersCount = totalQuestions - correctAnswersCount;

new Chart(ctx, {
type: 'doughnut',
data: {
labels: ['Верные ответы', 'Неверные ответы'],
datasets: [{
data: [correctAnswersCount, incorrectAnswersCount],
backgroundColor: ['#36a2eb', '#ff6384']
}]
}
});
};
const loadQuestions = (testId) => {
const testQuestions = questions[testId];
currentQuestions = testQuestions.sort(() => Math.random() - 0.5);
currentQuestionIndex = 0;
correctAnswersCount = 0;
wrongAnswers = []; // Очищаем предыдущие ошибки
displayQuestion();
};
const testDescriptions = {
1: {
title: "Тест A1: Начальный",
description: "Этот тест проверяет базовые знания английского языка для начинающих.",
details: {
description: "Этот тест предназначен для людей, только начинающих изучать английский язык. Уровень A1 свидетельствует о начальных знаниях языка, способных покрывать простейшие потребности общения.",
}
},
2: {
title: "Тест A2: Ниже среднего",
description: "Этот тест предназначен для оценки уровня ниже среднего.",
details: {
description: "Этот тест оценивает язык, который используется в основных, повседневных контекстах. Уровень A2 – это следующий шаг после начального уровня.",
}
},
3: {
title: "Тест B1: Средний",
description: "Проверяет знания английского языка на среднем уровне.",
details: {
description: "На этом уровне тестируемый может понимать и использовать язык в повседневных ситуациях и обсуждать знакомые темы.",
}
},
4: {
title: "Тест B2: Выше среднего",
description: "Этот тест оценивает уровень выше среднего.",
details: {
description: "Пользователи языка на уровне B2 могут общаться уверенно и спонтанно с носителями языка.",
}
},
5: {
title: "Тест C1: Продвинутый",
description: "Для тех, кто имеет продвинутые знания английского.",
details: {
description: "На уровне C1 тестируемый способен использовать язык гибко и эффективно для социальных, академических и профессиональных целей.",
}
},
6: {
title: "Тест C2: профессиональный уровень владения",
description: "Обеспечивает оценку профессионального уровня владения.",
details: {
description: "На этом уровне тестируемый понимает практически все слышимое или читаемое с легкостью и может выразить себя спонтанно и точно.",

}
}
};
testMenuSection.addEventListener('click', (event) => {
if (event.target && event.target.nodeName === 'LI') {
const testId = event.target.getAttribute('data-test-id');
displayTestInfo(testId);
}
});

function switchSection(targetSection) {
sections.forEach((section) => {
section.classList.add('hidden');
});
targetSection.classList.remove('hidden');
}

function displayTestInfo(testId) {
const testNumberSpan = document.getElementById('test-number');
const testDescriptionParagraph = testInfoSection.querySelector('p');

testNumberSpan.textContent = testId;
testDescriptionParagraph.innerHTML = `${testDescriptions[testId].details.description}`;

switchSection(testInfoSection);
}
buttons.home.addEventListener('click', () => showSection(homeSection));
buttons.testMenu.addEventListener('click', () => showSection(testMenuSection));
buttons.program.addEventListener('click', () => showSection(programSection));
buttons.about.addEventListener('click', () => showSection(aboutSection));
buttons.backToHome.addEventListener('click', () => showSection(homeSection));
buttons.backToMenu.addEventListener('click', () => showSection(testMenuSection));
buttons.startButton.addEventListener('click', () => showSection(testMenuSection));

const testItems = document.querySelectorAll('#test-menu li');
testItems.forEach(item => {
item.addEventListener('click', () => {
currentTestId = item.dataset.testId;
document.getElementById('test-number').innerText = currentTestId;
showSection(testInfoSection);
});
});

buttons.startTest.addEventListener('click', () => {
showSection(quizSection);
loadQuestions(currentTestId);
});

buttons.backToMain.addEventListener('click', () => showSection(homeSection));

showSection(homeSection);

// Показ регистрационной формы при клике на иконку профиля
const profileIcon = document.querySelector('.profile-icon'); // Иконка профиля
const registrationForm = document.getElementById('registrationForm'); // Форма регистрации

profileIcon.addEventListener('click', () => {
registrationForm.classList.toggle('active'); // Показать или скрыть форму
});

// Скрыть форму при клике вне её области
document.addEventListener('click', (event) => {
if (!registrationForm.contains(event.target) && !profileIcon.contains(event.target)) {
registrationForm.classList.remove('active');
}
});
});