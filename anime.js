// Dino Data (Professor-Style Object)
const dinoData = {
    arrImgs: ["dino0000.png", "dino0001.png", "dino0002.png", "dino0003.png"],
    poseNumber: 0,
    elem: document.querySelector("#dino"),
    screenHeight: document.querySelector("#forest").clientHeight,
    y: 0,
    speed: 3,
    timerId: null
};

// Lion Data (Professor-Style Object)
const lionData = {
    arrImgs: ["lionf0000.png", "lionf0001.png", "lionf0002.png", "lionf0003.png"],
    poseNumber: 0,
    elem: document.querySelector("#lion"),
    screenHeight: document.querySelector("#forest").clientHeight,
    y: 0,
    speed: 4, // Lion is faster
    timerId: null
};

// Move Function (Based on Professor’s Example)
function moveCharacter(character) {
    if (character.y > character.screenHeight - 100) {
        character.y = 0; // Restart at the top
    } else {
        character.y += character.speed;
        character.elem.style.top = character.y + "px";

        // 🔥 Swap images to create animation
        character.elem.src = character.arrImgs[character.poseNumber];
        character.poseNumber = (character.poseNumber + 1) % character.arrImgs.length;
    }
}

// Start Animation (Professor-Style)
function startRace() {
    dinoData.timerId = setInterval(() => moveCharacter(dinoData), 100);
    lionData.timerId = setInterval(() => moveCharacter(lionData), 100);
}

// Stop Animation (Professor-Style)
function stopRace() {
    clearInterval(dinoData.timerId);
    clearInterval(lionData.timerId);
}
