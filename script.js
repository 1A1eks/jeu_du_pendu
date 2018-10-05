
var wonderingWord = prompt("What is the magical word?")

const le = wonderingWord.length;
let check = 0;

wonderingWord = wonderingWord.toUpperCase();

function spelling () {
    for (let i=0; i < le; i++){
        for (let alphab = 0; alphab < 25; alphab++){
            if (wonderingWord.charCodeAt(i) === "A".charCodeAt(0) + alphab || wonderingWord.charCodeAt(i) === " ".charCodeAt(0)) {
                check++;
            }
        }
    }
    repro();
}

function repro () {
    if (le !== check) {
        check=0;
        wonderingWord = prompt("Faulty input! <br> Only use letters or spaces")
        spelling();
    }   
}

spelling();

function wonderingWordCaption() {
        let finalCaption = "";
    for (i = 0; i <wonderingWord.length; i++) {
        let caption = " _ ";
        finalCaption += caption;
    }
    document.querySelector("#page > #left > h2").innerHTML = finalCaption;
}

wonderingWordCaption();
