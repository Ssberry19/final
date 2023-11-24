
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: card,
                scale: 1.1,
                duration: 300,
                easing: 'easeInOutQuad',
            });
        });

        card.addEventListener('mouseleave', function() {
            anime({
                targets: card,
                scale: 1,
                duration: 300,
                easing: 'easeInOutQuad',
            });
        });
    });
    const textInput = document.getElementById('textAnswer');
    textInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            submitTextAnswer();
        }
    });
});

var backToTopButton = document.getElementById('back-to-top-btn');

        window.onscroll = function() {
            scrollFunction();   
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        }

        backToTopButton.addEventListener('click', function() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
        });
        var collapseTarget = element.querySelector('.collapse');
        var isCollapsed = collapseTarget.classList.contains('show');
        if (!isCollapsed) {
            $('.collapse').collapse('hide'); 
            $(collapseTarget).collapse('show');
        }

        function playSound() {
            var sound = document.getElementById("quizSound");
            sound.play();
        }


        function submitQuiz() {
   
    const correctAnswers = {
        question1: 'c',
        question2: 'b',
        question3: 'b',
        question4: 'b',
        question5: 'b',
        question6: 'c',
        question7: 'b',       
    };

    let score = 0;
    let totalQuestions = 0;

    for (let question in correctAnswers) {
        totalQuestions++;

        if (Array.isArray(correctAnswers[question])) {
            const selectedOptions = Array.from(document.getElementsByName(question))
                .filter(option => option.checked)
                .map(option => option.value);

            if (arraysEqual(selectedOptions, correctAnswers[question])) {
                score++;
            }
        } else {
            const selectedOption = document.querySelector(`input[name=${question}]:checked`);
            if (selectedOption && selectedOption.value === correctAnswers[question]) {
                score++;
            }
        }
    }

    const resultMessage = `Your quiz result: ${score}/${totalQuestions}`;
    document.getElementById('quiz-result').innerHTML = resultMessage;
}

function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

function showQuizResultModal() {
    var quizResultModal = new bootstrap.Modal(document.getElementById('quizResultModal'));
    quizResultModal.show();
}

function submitTextAnswer() {
    const textAnswer = document.getElementById('textAnswer').value;
    const textAnswerInfo = document.getElementById('textAnswerInfo');

    if (textAnswer.toLowerCase() === 'freestyle') {
        textAnswerInfo.textContent = 'Great choice! Freestyle is a popular and efficient swimming technique.';
    } else {
        textAnswerInfo.textContent = 'Interesting! There are many swimming techniques to explore.';
    }
}

function initMap() {
    // Specify the coordinates for Astana, Mega Silkway
    var astanaMegaSilkway = { lat: 51.1694, lng: 71.4491 };

    // Create a map centered at the specified coordinates
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: astanaMegaSilkway
    });

    // Create a marker for the specified coordinates
    var marker = new google.maps.Marker({
        position: astanaMegaSilkway,
        map: map,
        title: 'Astana, Mega Silkway'
    });
}