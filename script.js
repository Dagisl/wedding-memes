const memes = [
    "memes/meme1.jpg",
    "memes/meme2.jpg",
    "memes/meme3.JPG",
    "memes/meme4.JPG",
    "memes/meme5.JPG",
    "memes/meme6.JPG",
    "memes/meme7.JPG",
    "memes/meme8.JPG",
    "memes/meme9.JPG",
    "memes/meme10.JPG",
    "memes/meme11.JPG",
    "memes/meme12.JPG",
    "memes/meme13.JPG",
    "memes/meme14.JPG",
    "memes/meme15.JPG",
    "memes/meme16.JPG",
    "memes/meme17.JPG",
    "memes/meme18.JPG",
    "memes/meme19.JPG",
    "memes/meme20.JPG",
    "memes/meme21.JPG",
    "memes/meme22.JPG",
    "memes/meme23.JPG",
    "memes/meme24.JPG",
    "memes/meme25.JPG",
    "memes/meme26.JPG",
    "memes/meme27.JPG",
    "memes/meme28.JPG",
    "memes/meme29.JPG",
    "memes/meme30.JPG",
    "memes/meme31.JPG",
    "memes/meme32.JPG",
    "memes/meme33.JPG",
    "memes/meme34.JPG",
    "memes/meme35.JPG",
    "memes/meme36.JPG",
    "memes/meme37.JPG",
    "memes/meme38.JPG",
    "memes/meme39.JPG",
    "memes/meme40.JPG",
    "memes/meme41.JPG",
    "memes/meme42.JPG",
    "memes/meme43.JPG",
    "memes/meme44.JPG",
    "memes/meme45.JPG",
    "memes/meme46.JPG",
    "memes/meme47.JPG",
    "memes/meme48.JPG",
    "memes/meme49.JPG",

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