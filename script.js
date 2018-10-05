
var wonderingWord = prompt("What is the magical word?")
/*------------------------------- Function underscore ---------------------- */
/*--------------Putting underscore for each letter -------------------- */

function wonderingWordCaption() {
    let finalCaption = "";
    for (i = 0; i < wonderingWord.length; i++) {
        if (wonderingWord.charCodeAt(i) == "-".charCodeAt(0)) {
            finalCaption += " -";
        } else if (wonderingWord.charCodeAt(i) == " ".charCodeAt(0)) {
            finalCaption += " ";
        } else {
            let caption = " _" ;
            finalCaption += caption;
        }
    }
    console.log(finalCaption);
    document.querySelector("#page > #left > pre").innerText = finalCaption;
}

wonderingWordCaption();

const le = wonderingWord.length;
let check = 0;

wonderingWord = wonderingWord.toUpperCase();

function spelling() {
    for (let i = 0; i < le; i++) {
        for (let alphab = 0; alphab < 25; alphab++) {
            if (wonderingWord.charCodeAt(i) === "A".charCodeAt(0) + alphab || wonderingWord.charCodeAt(i) === " ".charCodeAt(0)) {
                check++;
            }
        }
    }
    repro();
}

function repro() {
    if (le !== check) {
        wonderingWord = prompt("Faulty input! <br> Only use letters or spaces")
        spelling();
    }
}

spelling();


