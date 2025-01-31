const library = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein",
    },
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: "Bernard M. Baruch",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
    },
    {
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "Maya Angelou",
    },
    {
        quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
        author: "Marilyn Monroe",
    },
    {
        quote: "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.",
        author: "Maurice Switzer",
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison",
    },
    {
        quote: "It is never too late to be what you might have been.",
        author: "George Eliot",
    },
    {
        quote: "If you only read the books that everyone else is reading, you can only think what everyone else is thinking.",
        author: "Haruki Murakami",
    },
    {
        quote: "Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.",
        author: "Garrison Keillor",
    },
    {
        quote: "Life isn't about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw",
    }
]

const quoteBox = document.getElementById('quote-box')
const text = document.getElementById('text')
const author = document.getElementById('author')
const newQuoteBtn = document.getElementById('new-quote')
newQuoteBtn.addEventListener("click", () => {
    getQuote()
})

function getQuote() {
    let randomNum = Math.round(Math.random()*library.length) 
    let rVal = Math.round(Math.random()*200)
    let gVal = Math.round(Math.random()*200)
    let bVal = Math.round(Math.random()*200)
    text.innerHTML = library[randomNum]["quote"]
    author.innerHTML = "- " + library[randomNum]["author"]

    document.body.style.backgroundColor = `rgb(${rVal}, ${gVal}, ${bVal})`
    quoteBox.style.boxShadow = `0px 0px 50px rgb(${rVal - 50}, ${gVal - 50}, ${bVal - 50})`
    text.style.color = `rgb(${rVal}, ${gVal}, ${bVal})`
    author.style.color = `rgb(${rVal - 50}, ${gVal - 50}, ${bVal - 50})`
}

getQuote()
