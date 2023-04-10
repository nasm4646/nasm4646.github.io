const button = document.querySelector(".new-quote");
button.addEventListener('click', getQuote);

const answerButton = document.querySelector("#js-tweet");
answerButton.addEventListener('click', showAnswer);

const endpoint = "https://the-trivia-api.com/api/questions?limit=1";
//const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

//pokemon API with name type and pic?

async function getQuote() {
    //console.log("It works!")
    try {
        const response = await fetch(endpoint)
        if (!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json();
        console.log(json);
        displayQuote(json[0].question);
        //show answer
        showAnswer(json[0].difficulty);

    }
    catch (err) {
        console.log(err);
        alert('Failed to fetch new trivia');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

//show answer
function showAnswer(quote) {
    const quoteText = document.querySelector("#js-answer-text");
    quoteText.textContent = quote;
}

getQuote();