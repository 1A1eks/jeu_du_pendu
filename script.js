let wonderingWord = prompt("What is the magical word?");
let finalCaption = "";
//Call a dynamique empty array
let arrayFinalCaption = new Array(wonderingWord.length);
let indice = 0;
let countEndOfTheGame = 0;

function spelling(wondering, len, check) {
    wondering = wondering.toUpperCase();
    for (let i = 0; i < len; i++) {
        //  console.log('1 i' + i +  check + "  + " +  wondering.charCodeAt(i));
        for (let alphab = 0; alphab < 26; alphab++) {
            //  console.log('2 word' + wondering + "  +  " + wondering.charCodeAt(i));
            if (wondering.charCodeAt(i) === "A".charCodeAt(0) + alphab) {
                check++;
                //      console.log('3' + check);
            } else if (wondering.charCodeAt(i) === " ".charCodeAt(0) || wondering.charCodeAt(i) === "-".charCodeAt(0)) {
                check++;
                alphab = 9001;
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
    //let finalCaption = "";
    for (i = 0; i < wondering.length; i++) {
        if (wondering.charCodeAt(i) == "-".charCodeAt(0)) {
            arrayFinalCaption[i] = " -";
            finalCaption += arrayFinalCaption[i];
        } else if (wondering.charCodeAt(i) == " ".charCodeAt(0)) {
            arrayFinalCaption[i] = " ";
            finalCaption += arrayFinalCaption[i];
        } else {
            arrayFinalCaption[i] = " _ ";
            finalCaption +=  arrayFinalCaption[i];
        }
    }
    console.log(finalCaption);
    document.querySelector("#page > #left > pre").innerText = finalCaption;
}

/*-----------------Add et remove Picture -------------- */
function show_image(width, height, index) {
    let right = document.querySelector("#right");
    let image = document.querySelector("#right > img");
    right.removeChild(image);

    let pictureArray = ["images/img1.png", "images/img2.png", "images/img3.png", "images/img4.png", "images/img5.png", "images/img6.png", "images/img7.png", "images/img8.png", "images/img9.png", "images/img10.png", "images/img11.png"];
    let img = document.createElement("img");
    img.src = pictureArray[index];
    img.width = width;
    img.height = height;
    document.querySelector("#right").appendChild(img);
}

/*-------------------- Letter IN -------------------- */
function enterPressed() {
    let formLetter = document.forms[0];
    let letter = formLetter.elements[0].value;
    console.log(letter);
    goodOrWrong(letter);
    formLetter.elements[0].value = "";
}

function goodOrWrong(letterToTry) {
    //Put everything in Uppercase
    let wondering = wonderingWord.toUpperCase();
    let letter = letterToTry.toUpperCase();
    let countError = 0;
    //Reset finalCaption
    finalCaption = "";
    //Checking every letter. If ok right at the good place the letter / if not put an underscore
    for (let i = 0; i < wondering.length; i++) {
        // First if to check the array
        if (arrayFinalCaption[i] === " _ ") {
            //second if to check the letter
            if (wondering.charCodeAt(i) === letter.charCodeAt(0)) {
                arrayFinalCaption[i] = letter;
                finalCaption += (" " + arrayFinalCaption[i] + " ");
            }
            else {
                arrayFinalCaption[i] = " _ ";
                finalCaption += arrayFinalCaption[i];
                countError++;
            };
        } else {
            finalCaption += (" " + arrayFinalCaption[i] + " ");
            countError++;
            countEndOfTheGame++
        }
    }

    if (countError === wonderingWord.length) {
        show_image(500, 500, indice);
        document.querySelector("#page > #left > #wrongl").innerText += (" " + letter + " ");
        indice++;
        if (indice === 11) {
            alert("you lost! \n Try again!");
        }
    }

    document.querySelector("#page > #left > pre").innerText = finalCaption;
    console.log(arrayFinalCaption);
}


