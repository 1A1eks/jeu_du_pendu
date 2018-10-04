
var wonderingWord = prompt("What is the magical word?")


let check = 0;

wonderingWord = wonderingWord.toUpperCase();

//functions to check spelling

function spelling () {
    for (let i=0; i < le; i++){
        for (let alphab = 0; alphab < 25; alphab++){

                                                // === 65         + alphab

            if (wonderingWord.charCodeAt(i) === "A".charCodeAt(0) + alphab || wonderingWord.charCodeAt(i) === " ".charCodeAt(0) || 
            wonderingWord.charCodeAt(i) === "-".charCodeAt(0)) {
                check++;
            }
        }
    }
    repro(wonderingWord.length);
}

function repro (le) {
    if (le !== check) {
        wonderingWord = prompt("Faulty input! <br> Only use letters or spaces")
        check = 0;
        spelling();
    }   
}

//actually using the function!!!
spelling();

// making underscores!

function wonderingWordCaption() {
        let finalCaption = "";
    for (i = 0; i <wonderingWord.length; i++) {
        let caption = " _ ";
        finalCaption += caption;
    }
    document.querySelector("#page > #left > h2").innerHTML = finalCaption;
}

wonderingWordCaption();
