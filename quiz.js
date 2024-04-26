// const quizData = [
//     {
//         question: "What does html stant for?",
//         options:["Hypertext Markup Language","Hyper Transfer Markup Language","Hypertext Machinde Language",
//             "Hyper and Text Markup Language"],
//         correct: 0,
//     },
//     {
//         question: "Which CSS property is used to control the spacing  between elements?",
//         options:["margin","padding","spacing","border-spacing"],
//         correct: 1,
//     },
//     {
//         question: "What is the javascript function used to select an HTML element by its id?",
//         options:["document.query","getElementById","selectElement","findElementById"],
//         correct: 1,
//     },
//     {
//         question: "In react.js, which hook is used to perform side effects in a fuction component?",
//         options:["useEffect","useState","useContext","useReducer"],
//         correct: 0,
//     },
//     {
//         question: "Which HTML tag is used to create an ordered list?",
//         options:["<ul>","<li>","<ol>","<dl>"],
//         correct: 2,
//     },
// ];
const quizData = [
    {
        question: "What does the acronym C stand for in C programming?",
        options: ["Computer",
            "Code",
            "Central",
            "Compiled",],
        correct: 2
    },
    {
        question: "Which header file is used for input and output functions in C?",
        options: ["<stdio.h>",
            "<stdlib.h>",
            "<math.h>",
            "<string.h>",],
        correct: 0
    },
    {
        question: "How do you declare a constant in C?",
        options: ["const",
            "constant",
            "fixed",
            "var",],
        correct: 0
    },
    {
        question: "What is the purpose of the sizeof operator in C?",
        options: ["Calculate size of a file",
            "Calculate size of a variable",
            "Calculate size of a function",
            "Calculate size of an array",],
        correct: 1
    },
    {
        question: "What is the purpose of the malloc function in C?",
        options: ["Free allocated memory",
            "Allocate memory",
            "Declare a variable",
            "Print memory address",],
        correct: 1
    },
    {
        question: "How is a structure declared in C?",
        options: ["struct",
            "class",
            "type",
            "object",],
        correct: 0
    },
    {
        question: "What is the purpose of the strcpy function in C?",
        options: ["Compare two strings",
            "Concatenate two strings",
            "Copy one string to another",
            "Find the length of a string",],
        correct: 2
    },
    {
        question: "How do you open a file in C for writing?",
        options: ["fopen(file.txt, r)",
            "fopen(file.txt, w)",
            "open(file.txt, write)",
            "open(file.txt, read)",],
        correct: 1
    },
    {
        question: "What is the purpose of the scanf function in C?",
        options: ["Print formatted output",
            "Read formatted input",
            "Scan for errors",
            "Scan for memory leaks",],
        correct: 1
    },
    {
        question: "Which operator is used for dynamic memory allocation in C?",
        options: ["&",
            "*",
            "->",
            "malloc",],
        correct: 3
    },
    {
        question: "What is the purpose of the break statement in C?",
        options: ["Exit the loop",
            "Skip the current iteration",
            "Continue to the next iteration",
            "Terminate the program",],
        correct: 0
    },
    {
        question: "How do you define a function in C without specifying its return type?",
        options: ["void function()",
            "function()",
            "int function()",
            "define function()",],
        correct: 1
    },
    {
        question: "Which keyword is used to exit from a loop in C?",
        options: ["stop",
            "exit",
            "break",
            "terminate",],
        correct: 2
    },
    {
        question: "How do you access the value of a variable through a pointer in C?",
        options: ["*ptr",
            "ptr.value",
            "ptr->",
            "&ptr",],
        correct: 0
    },
    {
        question: "What is the purpose of the #include directive in C?",
        options: ["Define a macro",
            "Include a file",
            "Import a library",
            "Declare a variable",],
        correct: 1
    },
    {
        question: "Which function is used to compare two strings in C?",
        options: ["strcmp",
            "strcompare",
            "compare",
            "stringcmp",],
        correct: 0
    },
    {
        question: "How do you pass an array to a function in C?",
        options: ["As a pointer",
            "As a value",
            "As a reference",
            "As a string",],
        correct: 0
    },
    {
        question: "What is the purpose of the typedef keyword in C?",
        options: ["Define a new type",
            "Declare a variable",
            "Typecast a variable",
            "Include a library",],
        correct: 0
    },
    {
        question: "Which loop is used for indefinite iteration in C?",
        options: ["for loop",
            "while loop",
            "do-while loop",
            "infinite loop",],
        correct: 2
    },
    {
        question: "What is the purpose of the union keyword in C?",
        options: ["Combine multiple variables",
            "Define a structure",
            "Declare a constant",
            "Allocate memory",],
        correct: 0
    }
];

// javascript
const quiz = document.querySelector("#quiz");
const scores = document.querySelector(".score");
const answerElm=document.querySelectorAll(".answer");
const [questionElm,option_1,option_2,option_3,option_4] = document.querySelectorAll(
    "#question, .option_1, .optiion_2, .option_3, .option_4"
);
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

// load quiz
const loadQuiz = () => {
    const { question, options} = quizData[currentQuiz];
    console.log(question);

    questionElm.innerText = `${currentQuiz + 1}: ${question}`;
    scores.innerText = `score: ${score}/${quizData.length*5} __________________________ question: ${(currentQuiz+1)}/20`;
    options.forEach(
        (curOption, index) => (window[`option_${index+1}`].innerText = curOption)
    );
};
loadQuiz();
// get selected answer function on button click
let curElem;
const getSelectedOption = () => {
    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElem) => curElem.checked);
};
const deselectdAnswer = () => {
    return answerElm.forEach((curElem) => (curElem.checked=false));
};
submitBtn.addEventListener("click", () => {
    const selectedOptionIndex=getSelectedOption();
    console.log(selectedOptionIndex);

    if(selectedOptionIndex === quizData[currentQuiz].correct){
        score=score+5;
    }

    currentQuiz++;

    if(currentQuiz < quizData.length){
        deselectdAnswer();
        loadQuiz();
    } else {
        quiz.innerHTML=`
        <div class="result">
            <h2> Your Score: ${score}/${quizData.length*5}</h2>
            <p>Congratulations on completing the quiz! </p>
            <button class="reload-button" onclick="location.reload()">Play Again</button>
        </div>
        `;
    }
});
