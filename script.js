let wonderingWord = prompt("What is the magical word?")

function spelling (wondering, len, check) {
    wondering = wondering.toUpperCase();
    for (let i=0; i < len; i++){
        console.log('1 i' + i +  check + "  + " +  wondering.charCodeAt(i));
        for (let alphab = 0; alphab < 26; alphab++){
            console.log('2 word' + wondering + "  +  " + wondering.charCodeAt(i));
            if (wondering.charCodeAt(i) === "A".charCodeAt(0) + alphab) {
                check++;
                console.log('3' + check);
            } else if (wondering.charCodeAt(i) === " ".charCodeAt(0) || wondering.charCodeAt(i) === "-".charCodeAt(0)) {
                check++;
                alphab=9001;
            }
        }
    }

    console.log('4 check ' + check);
    console.log('5  lengh' + len);

    if (len !== check) {
        wondering = prompt("Faulty input! \nOnly use letters or spaces")
        spelling(wondering, wondering.length, 0);
    } else { 
        wonderingWordCaption(wondering);
    }  
}

spelling(wonderingWord, wonderingWord.length, 0);

// making underscores!
function wonderingWordCaption(wondering) {
    let finalCaption = "";
    for (i = 0; i < wondering.length; i++) {
        if (wondering.charCodeAt(i) == "-".charCodeAt(0)) {
            finalCaption += " -";
        } else if (wondering.charCodeAt(i) == " ".charCodeAt(0)) {
            finalCaption += " ";
        } else {
            let caption = " _" ;
            finalCaption += caption;
        }
    }
    console.log(finalCaption);
    document.querySelector("#page > #left > pre").innerText = finalCaption;
}

