// =========================
// SCENE 1 → SCENE 2
// =========================

const startButton = document.getElementById("startButton");

const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");

startButton.addEventListener("click", function () {

    scene1.classList.remove("active");
    scene2.classList.add("active");

});


// =========================
// SCENE 2 → SCENE 3
// =========================

const nextButton = document.getElementById("nextButton");

const scene3 = document.getElementById("scene3");

nextButton.addEventListener("click", function () {

    scene2.classList.remove("active");
    scene3.classList.add("active");

});


// =========================
// SCENE 3 → SCENE 4
// =========================

const storyButton = document.getElementById("storyButton");

const scene4 = document.getElementById("scene4");

storyButton.addEventListener("click", function () {

    scene3.classList.remove("active");
    scene4.classList.add("active");

});


// =========================
// SCENE 4 → SCENE 5
// =========================

const nextStoryButton =
    document.getElementById("nextStoryButton");

const scene5 =
    document.getElementById("scene5");

nextStoryButton.addEventListener("click", function () {

    scene4.classList.remove("active");
    scene5.classList.add("active");

});


// =========================
// SCENE 5 → SCENE 6
// =========================

const nextStory5Button =
    document.getElementById("nextStory5Button");

const scene6 =
    document.getElementById("scene6");

nextStory5Button.addEventListener("click", function () {

    scene5.classList.remove("active");
    scene6.classList.add("active");

    const storyMusic = document.getElementById("storyMusic");

    storyMusic.play();
});


// =========================
// SCENE 6 → SCENE 7
// =========================

const nextFeelingsButton =
    document.getElementById("nextFeelingsButton");

const scene7 =
    document.getElementById("scene7");

nextFeelingsButton.addEventListener("click", function () {

    scene6.classList.remove("active");
    scene7.classList.add("active");

});


// =========================
// SCENE 7 → SCENE 8
// =========================

const nextDistanceButton =
    document.getElementById("nextDistanceButton");

const scene8 =
    document.getElementById("scene8");

nextDistanceButton.addEventListener("click", function () {

    scene7.classList.remove("active");
    scene8.classList.add("active");

});


// =========================
// SCENE 8 → SCENE 9
// =========================

const nextQuestionButton =
    document.getElementById("nextQuestionButton");

const scene9 =
    document.getElementById("scene9");

nextQuestionButton.addEventListener("click", function () {

    scene8.classList.remove("active");
    scene9.classList.add("active");

});


// =========================
// SCENE 9 → SCENE 10
// =========================

const finalButton =
    document.getElementById("finalButton");

const scene10 =
    document.getElementById("scene10");

finalButton.addEventListener("click", function () {

    scene9.classList.remove("active");
    scene10.classList.add("active");

});


// =========================
// SCENE 10 → SCENE 11
// =========================

const yesButton =
    document.getElementById("yesButton");

const yesButton2 =
    document.getElementById("yesButton2");

const scene11 =
    document.getElementById("scene11");

yesButton.addEventListener("click", function () {

    scene10.classList.remove("active");
    scene11.classList.add("active");

});

yesButton2.addEventListener("click", function () {

    scene10.classList.remove("active");
    scene11.classList.add("active");

});
