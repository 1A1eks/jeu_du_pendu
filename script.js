
let wonderingWord = prompt("What is the magical word?")



wonderingWord = wonderingWord.toUpperCase();

function spelling (wondering, len, check) {
    wondering = wondering.toUpperCase();
    for (let i=0; i < len; i++){
        console.log('1 ' + i);
        for (let alphab = 0; alphab < 25; alphab++){
            console.log('2 ' + wondering + "  +  " + wondering.charCodeAt(i));
            if (wondering.charCodeAt(i) === "A".charCodeAt(0) + alphab || wondering.charCodeAt(i) === " ".charCodeAt(0)) {
                check++;
                console.log('3');
            }
        }
    }
    console.log('1  ' + check);
    console.log('2  ' + len);

    if (len !== check) {
        let change = prompt("Faulty input! <br> Only use letters or spaces")
        spelling(change, change.length, 0);
    } else { wonderingWordCaption();
    }  
}


spelling(wonderingWord, wonderingWord.length, 0);

function wonderingWordCaption() {
        let finalCaption = "";
    for (i = 0; i <wonderingWord.length; i++) {
        let caption = " _ ";
        finalCaption += caption;
    }
    document.querySelector("#page > #left > h2").innerHTML = finalCaption;
}

wonderingWordCaption();
