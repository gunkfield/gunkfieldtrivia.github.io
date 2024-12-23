// app.js

// Define puzzles in an array for easy management
const puzzleGame = {
  currentQuestionIndex: 0,
  questions: [
    {
      question: "What is Jimmy \"Mr. Beast\" Donaldson's real first name?",
      answer: "James",
      feedback: {
        correct: "A true Mr. Beast fan...",
        incorrect: "Not very beast of you..."
      }
    },
    {
      question: "How does Ninja like his taper?",
      answer: "Low",
      feedback: {
        correct: "Somehow still holding on to that meme...",
        incorrect: "Not very OG of you..."
      }
    },
    {
        question: "When the Fairy Godmother and Prince Charming take King Harold in their carriage to discuss their plans, what does Prince Charming order at Friar's Fat Boy?",
        answer: "A Medieval Meal",
        feedback: {
            correct: "It's a little concerning you know that...",
            incorrect: "How can you call yourself a Shrek enjoyer..."
        }
    },
    {
        question: "What is the first potion Puss sees on the potion shelf in the Fairy Godmother's potion factory?",
        answer: "Toad Stool Softener",
        feedback:{
            correct: "Ok, maybe you're just a Shrek fanatic...",
            incorrect: "So you knew the last one, but not this one..."
        }
    },
    {
        question: "What is the name of Gingy's big friend?",
        answer: "Mongo",
        feedback: {
            correct: "Alright, last Shrek 2 question...",
            incorrect: "That guy was a hero and you didn't even remember his name..."
        }
    },
    {
        question: "How many minions were featured in the Minions movie?",
        answer: "899",
        feedback: {
            correct: "We won't talk about what happened to Minion #900...",
            incorrect: "So you know all this Shrek 2 trivia, but nothing about the minions..."
        }
    },
    {
        question: "What was the name of the first Chimp in space?",
        answer: "Ham",
        feedback: {
            correct: "A true legend...",
            incorrect: "Let's not get him confused with Travis..."
        }
    },
    {
        question: "What is the name of the main villain of Kung Fu Panda 4?",
        answer: "The Chameleon",
        feedback: {
            correct: "That was a surprisingly boring name, yet I still had to google it...",
            incorrect: "Honestly, can't blame you for not knowing this one..."
        }
    }
    // Add more questions as needed
  ],

  showQuestion: function() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    document.getElementById("answer-input").value = "";
    document.getElementById("feedback").textContent = "";
    document.getElementById("next-btn").style.display = "none"; // Hide next button initially
  },

  checkAnswer: function() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    const userAnswer = document.getElementById("answer-input").value.trim();

    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      this.displayFeedback(currentQuestion.feedback.correct, "correct");
    } else {
      this.displayFeedback(currentQuestion.feedback.incorrect, "incorrect");
    }
  },

  displayFeedback: function(feedbackText, feedbackClass) {
    // Show feedback text
    const feedbackElement = document.getElementById("feedback");
    feedbackElement.textContent = feedbackText;
    feedbackElement.className = feedbackClass; // Set the feedback class (correct or incorrect)

    // Show the "Next" button after feedback is displayed
    const nextBtn = document.getElementById("next-btn");
    nextBtn.style.display = "block";
  },

  goToNextQuestion: function() {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questions.length) {
      this.showQuestion();
    } else {
      this.showFinalMessage(); // Show the final message
    }
  },

showFinalMessage: function() {
    // Show the custom modal
    const modal = document.getElementById("final-modal");
    const finalMessage = document.getElementById("final-message");
    finalMessage.textContent = "The word Transposition may prove useful in the near future... Follow this link to continue: https://gunkfield.github.io/gunkfieldpuzzle.github.io/";
    modal.style.display = "block";
  }
};

// Initial question display
puzzleGame.showQuestion();

// Event listener for checking the answer
document.getElementById("submit-btn").addEventListener("click", function() {
  puzzleGame.checkAnswer();
});

// Event listener for moving to the next question
document.getElementById("next-btn").addEventListener("click", function() {
  puzzleGame.goToNextQuestion();
});

// Close the modal when the "X" is clicked
document.getElementById("close-modal").addEventListener("click", function() {
  const modal = document.getElementById("final-modal");
  modal.style.display = "none";
});