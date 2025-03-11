let start = document.querySelector("button");
start.onclick = function () {
    location.href = "/quiz.html";
};

let next = document.querySelector(".btn");
let slides = document.querySelectorAll(".slide");
let number =document.querySelector("#number");
let score =document.querySelector("#score");
let progress =document.querySelector("#file");
let currentIndex = 0;



let correctAnswers = [
    "Hyper Text Markup Language",
    "Cascading Style Sheets",
    "To add interactivity to web pages",
    "React"
];


function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
            activateButtons(slide); 
        } else {
            slide.classList.remove('active');
        }
    });
}
let result=document.querySelector('.modal-body');
let btnResult=document.querySelector('#result');
let restart=document.querySelector('#restart');


next.onclick = function () {
    currentIndex++;
    if (currentIndex >= slides.length) {
        btnResult.style.display="block";
    } else {
        showSlide(currentIndex);
    }
    number.innerHTML++;
    btnResult.onclick=function () {
        result.innerHTML=document.querySelector(".timer3").innerHTML;
        
    }
    progress.value+=20;
};

// تفعيل الأزرار داخل الشريحة
function activateButtons(slide) {
    let buttons = slide.querySelectorAll(" li button");
    buttons.forEach(button => {
        button.onclick = function () {
            if (correctAnswers.includes(button.textContent)) {
                button.style.color = "green"; 
                button.style.backgroundColor = "#d4edda";
                score.innerHTML++;
               
            } else {
                button.style.color = "red"; 
                button.style.backgroundColor = "#f8d7da"; 
            }

            buttons.forEach(btn => (btn.disabled = true));
        };
    });
 
   
}








// التحكم في الزر "التالي"

let container = document.querySelector(".container");
let text = document.querySelector("h2");
let restart2=document.querySelector("#restart-2");
console.log(restart2);



showSlide(currentIndex);
let time = document.getElementById("time");
console.log(time);
function cutdown () {
  time.innerHTML -=1  
  if (time.innerHTML==="0") {
    clearInterval(down);
    alert(" Time is up");
    container.style.display="none";
    next.style.display="none";
    text.style.display="block";
    restart2.style.display="block";
    btnResult.style.display="none";

  }
}
let down= setInterval(cutdown,2000);


  document.getElementById('restart').addEventListener('click', function() {
      window.location.reload();
  });
  document.getElementById('restart-2').addEventListener('click', function() {
    window.location.reload();
});



 