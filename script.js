const memes = [
    "memes/meme1.jpg",
    "memes/meme2.jpg",
    "memes/meme3.jpg",
    "memes/meme4.jpg",
    "memes/meme5.jpg",
    "memes/meme6.jpg",
    "memes/meme7.jpg",
    "memes/meme8.jpg",
    "memes/meme9.jpg",
    "memes/meme10.jpg",
    "memes/meme11.jpg",
    "memes/meme12.jpg",
    "memes/meme13.jpg",
    "memes/meme14.jpg",
    "memes/meme15.jpg",
    "memes/meme16.jpg",
    "memes/meme17.jpg",
    "memes/meme18.jpg",
    "memes/meme19.jpg",
    "memes/meme20.jpg",
    "memes/meme21.jpg",
    "memes/meme22.jpg",
    "memes/meme23.jpg",
    "memes/meme24.jpg",
    "memes/meme25.jpg",
    "memes/meme26.jpg",
    "memes/meme27.jpg",
    "memes/meme28.jpg",
    "memes/meme29.jpg",
    "memes/meme30.jpg",
    "memes/meme31.jpg",
    "memes/meme32.jpg",
    "memes/meme33.jpg",
    "memes/meme34.jpg",
    "memes/meme35.jpg",
    "memes/meme36.jpg",
    "memes/meme37.jpg",
    "memes/meme38.jpg",
    "memes/meme39.jpg",
    "memes/meme40.jpg",
    "memes/meme41.jpg",
    "memes/meme42.jpg",
    "memes/meme43.jpg",
    "memes/meme44.jpg",
    "memes/meme45.jpg",
    "memes/meme46.jpg",
    "memes/meme47.jpg",
    "memes/meme48.jpg",
    "memes/meme49.jpg",

];

function startGame() {
    document.getElementById("start-screen")
        .classList.add("hidden");

    document.getElementById("meme-screen")
        .classList.remove("hidden");

    newMeme();
}

function newMeme() {

    const random =
        Math.floor(Math.random() * memes.length);

    document.getElementById("meme").src =
        memes[random];
}

function goHome() {

    document.getElementById("meme-screen")
        .classList.add("hidden");

    document.getElementById("start-screen")
        .classList.remove("hidden");
}