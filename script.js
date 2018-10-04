let wonderingWord = prompt("What is the magical word?");

function wonderingWordCaption() {
        let finalCaption = "";
    for (i = 0; i <wonderingWord.length; i++) {
        let caption = " _ ";
        finalCaption += caption;
    }
    document.querySelector("#page > #left > h2").innerHTML = finalCaption;
}

wonderingWordCaption();