
document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "Q1. What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "HyperLinks and Text Markup Language",
                "Home Tool Markup Language",
                "HyperLink Markup Language"
            ],
            answer: "Hyper Text Markup Language"
        },
        {
            question: "Q2. Who is making the Web standards?",
            options: [
                "Microsoft",
                "Mozilla",
                "The World Wide Web Consortium",
                "Google"
            ],
            answer: "The World Wide Web Consortium"
        },
        {
            question: "Q3. Choose the correct HTML element for the largest heading:",
            options: [
                "<heading>",
                "<h1>",
                "<h6>",
                "<head>"
            ],
            answer: "<h1>"
        },
        {
            question: "Q4. What is the correct HTML element for inserting a line break?",
            options: [
                "<lb>",
                "<br>",
                "<break>",
                "<bl>"
            ],
            answer: "<br>"
        },
        {
            question: "Q5. What is the correct HTML for adding a background color?",
            options: [
                "<background>yellow</background>",
                "<body bg='yellow'>",
                "<body style='background-color:yellow;'>",
                "<bg>yellow</bg>"
            ],
            answer: "<body style='background-color:yellow;'>"
        },
        {
            question: "Q6. Choose the correct HTML element to define important text",
            options: [
                "<important>",
                "<i>",
                "<b>",
                "<strong>"
            ],
            answer: "<strong>"
        },
        {
            question: "Q7. Choose the correct HTML element to define emphasized text",
            options: [
                "<i>",
                "<em>",
                "<italic>",
                "<emphasized>"
            ],
            answer: "<em>"
        }
    ];

    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    const options = document.querySelectorAll('.option');
    const submitButton = document.getElementById('submitQuiz');
    const questionElement = document.getElementById('questions').querySelector('h2');
    const optionElements = document.querySelectorAll('.option_group .option');
    const quizNumberElement = document.getElementById('quizNumber');
    const correctTagElement = document.getElementById('correctTag');

    function loadQuestion(index) {
        const question = questions[index];
        questionElement.textContent = question.question;
        optionElements.forEach((optionElement, i) => {
            optionElement.textContent = question.options[i];
            optionElement.classList.remove('selected');
        });
        submitButton.disabled = true;
        quizNumberElement.innerHTML = `<span>Question ${index + 1}<span>/7</span></span>`;
    }

    options.forEach(option => {
        option.addEventListener('click', () => {
            options.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            submitButton.disabled = false;
        });
    });

    submitButton.addEventListener('click', () => {
        const selectedOption = document.querySelector('.option.selected');
        if (selectedOption) {
            const selectedAnswer = selectedOption.textContent;
            if (selectedAnswer === questions[currentQuestionIndex].answer) {
                correctAnswers++;
            }

            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                loadQuestion(currentQuestionIndex);
            } else {
                alert(`Quiz completed! You got ${correctAnswers}/7 correct.`);
                }

            correctTagElement.textContent = `${correctAnswers}/7 Correct`;
        }
    });

    loadQuestion(currentQuestionIndex);

    // Modal functionality
    const modal = document.getElementById("myModal");
    const closeModal = document.getElementsByClassName("close")[0];
    const quitTag = document.getElementById("quitTag");
    const startTag = document.getElementById("startTag");

    document.getElementById("but").addEventListener('click', () => {
        modal.style.display = "block";
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    quitTag.addEventListener('click', () => {
        alert("You exited the assessment.");
        modal.style.display = "none";
    });

    startTag.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});

