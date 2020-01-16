let welcomeHeader = document.querySelector(".article__header");
welcomeHeader.textContent = "Welcome to the Dustin Murdock blog";


let allArticleHeaders = document.querySelectorAll(".article__header");
for (i=0; i < allArticleHeaders.length; i++) {
    allArticleHeaders[i].className = "article__header important";
}

let dashedClasses = document.querySelector(".dashed");
dashedClasses.classList.remove("dashed");

let goldenBG = document.querySelector(".article__footer");
goldenBG.classList.add("goldenrod")