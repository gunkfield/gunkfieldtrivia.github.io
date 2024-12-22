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
        question: "How many minions are feature in the Minions movie?",
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
    finalMessage.textContent = "01001000 01101001 01100100 01100100 01100101 01101110 00100000 01100001 01110010 01101111 01110101 01101110 01100100 00101100 00100000 01100001 00100000 01100011 01101111 01100100 01100101 00100000 01100011 01100001 01101110 00100000 01100010 01100101 00100000 01100110 01101111 01110101 01101110 01100100 00101111 00100000 01101010 01110101 01110011 01110100 00100000 01100010 01100101 01101110 01100101 01100001 01110100 01101000 00100000 01110100 01101000 01100101 00100000 01110011 01101110 01101111 01110111 01101101 01100001 01101110 00101100 00100000 01101100 01101001 01100101 01110011 00100000 01110011 01101111 01101101 01100101 01110100 01101000 01101001 01101110 01100111 00100000 01110111 01101111 01110010 01110100 01101000 00100000 01100111 01101001 01110110 01101001 01101110 01100111 00100000 01100001 00100000 01110011 01100011 01100001 01101110 00101111 00100000 01101101 01101111 01110010 01100101 00100000 01100001 01110010 01100101 00100000 01100001 01110010 01101111 01110101 01101110 01100100 00100000 01110011 01101111 00100000 01110100 01110010 01100001 01101001 01101110 00100000 01111001 01101111 01110101 01110010 00100000 01100101 01111001 01100101 01110011 00101111 00100000 01100110 01101111 01110010 00100000 01100001 01110100 00100000 01110100 01101000 01100101 00100000 01100101 01101110 01100100 00100000 01101100 01101001 01100101 01110011 00100000 01110001 01110101 01101001 01110100 01100101 00100000 01110100 01101000 01100101 00100000 01110011 01110101 01110010 01110000 01110010 01101001 01110011 01100101";
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