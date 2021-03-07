var position = 0;
var correctAnswer = 0;
var test, testStatus, question, choice, choices, chA, chB, chC;
var submitContainer = document.querySelector('#submit-container');
var submitButton = document.querySelector('#submit');
var userInitials = document.querySelector("#name");
var timerDiv = document.querySelector("#timer");
var highScores = [];
var timer = 60;
var timerInterval;
if (localStorage.getItem('highScores')) {
    highScores = JSON.parse(localStorage.getItem('highScores'));
};
​
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
​
var questions = [
    {
        question: "How would you start a WHILE loop?",
        a: "while (i = 0)",
        b: "while (i <= 10)",
        c: "while (i = 0; i <= 5; i++)",
        answer: "B"
    },
    {
        question: "How would you declare a JavaScript Variable?",
        a: "variable {catType}",
        b: "variable catType",
        c: "var catType",
        answer: "C"
    },
    {
        question: "What is used to assign a value to a variable?",
        a: "+",
        b: "*",
        c: "=",
        answer: "C"
    },
    {
        question: "What tag would you use to link a JS file to an HTML document?",
        a: "script",
        b: "javascript",
        c: "link",
        answer: "A"
    },
    {
        question: "How would you create an alert in JavaScript?",
        a: "prompt();",
        b: "alert();",
        c: "alertPrompt():",
        answer: "B"
    },
    {
        question: "How do you declare a function in Javascript?",
        a: "funct showMessage()",
        b: "function showMessage()",
        c: "function.showMessage()",
        answer: "B"
    },
    {
        question: "What is a Boolean?",
        a: "True/False statement",
        b: "A list of numbers",
        c: "A function",
        answer: "A"
    },
    {
        question: "How would you write an array?",
        a: "var cereals = fruity pebbles, cocoa puffs, cinnamon toast crunch",
        b: "var cereals = {'fruity pebbles', 'cocoa puffs', 'cinnamon toast crunch'}",
        c: "var cereals = ['fruity pebbles', 'cocoa puffs', 'cinnamon toast crunch']",
        answer: "C"
    },
    {
        question: "How would you change HTML content elements using JavaScript?",
        a: "document.ElementID('ID name').innerHTML = 'New Text'",
        b: "document.getElementByID('ID name').HTML = 'New Text'",
        c: "document.getElementByID('ID name').innerHTML = 'New Text'",
        answer: "C"
    },
    {
    question: "What is JavaScript?",
    a: "A programming language.",
    b: "An app.",
    c: "A forum.",
    answer: "A"
    }
];
​
function get(x) {
    return document.getElementById(x);
}
​
function showQuestion() {
    test = get("test");
    if(position >= questions.length || timer <= 0) {
        test.innerHTML = "<h2>You got "+correctAnswer+" of "+questions.length+" questions correct</h2>";
        get("testStatus").innerHTML = "Test Completed";
        position = 0;
        correct = 0;
        submitContainer.classList.remove('hide');
        return false;
    }
​
    get ("testStatus").innerHTML = "Question "+(position+1)+" of "+questions.length;
​
    question = questions[position].question;
    chA = questions[position].a;
    chB = questions[position].b;
    chC = questions[position].c;
​
    test.innerHTML = "<h3>"+question+"</h3>";
​
    test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+" </label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
​
function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }
    if(choice == questions[position].answer) {
      correctAnswer++;
    }
​
    position++;
    showQuestion();
}
​
window.addEventListener("load", function() {
    showQuestion();
    submitContainer.classList.add('hide');
    // add an interval here that occurs every 1000 ms, or 1 second
    timerInterval = setInterval(function() {
        timer = timer - 1;
        timerDiv.textContent = `${timer} second left`;
    }, 1000);
});
​
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  var userInfo = {
      initials: userInitials.value,
      score: correctAnswer
  }
  highScores.push(userInfo);
  localStorage.setItem('highScores', JSON.stringify(highScores));
  for (var i = 0; i < highScores.length; i++) {
      const userScore = highScores[i];
      const div = document.createElement('div');
      const p = document.createElement('p')
       p.textContent = userScore.initials;
       div.appendChild(p);
       submitContainer.appendChild(div);
  }
});