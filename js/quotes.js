const quotes = [
  {
    quote: 'I never dreamed about success, I worked for it.',
    author: 'Estee Lauder'
  },
  {
    quote: 'Do not try to be original, just try to be good.',
    author: 'Paul Rand'
  },
  {
    quote: 'Do not be afraid to give up the good to go for the great.',
    author: 'John D. Rockefeller'
  },
  {
    quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
    author: 'Martin Luther King Jr.'
  },
  {
    quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    author: 'Thomas Edison'
  },
  {
    quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be.',
    author: 'Reid Hoffman'
  },
  {
    quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations.',
    author: 'Tim O Reilly'
  },
  {
    quote: 'Some people dream of success, while other people get up every morning and make it happen.',
    author: 'Wayne Huizenga'
  },
  {
    quote: 'The only thing worse than starting something and falling.. is not starting something',
    author: 'Seth Godin'
  },
  {
    quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
    author: 'Jim Rohn'
  },
  {
    quote : "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." ,
    author : "Martin Fowler"
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  },
  {
    quote: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde"
  },
  {
    quote: "In order to be irreplaceable, one must always be different.",
    author: "Coco Chanel"
  },
  {
    quote: "Java is to JavaScript what car is to Carpet.",
    author: "Chris Heilmann"
  },
  {
    quote: "Knowledge is power.",
    author: "Francis Bacon"
  },
  {
    quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
    author: "Dan Salomon"
  },
  {
    quote: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
    author: "Antoine de Saint-Exupery"
  },
  {
    quote: "Ruby is rubbish! PHP is phpantastic!",
    author: "Nikita Popov"
  },
  {
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House"
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomNum = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[randomNum];
quote.innerText = `${todaysQuote.quote} `;
author.innerText = `by ${todaysQuote.author}`;

const quoteContainer = document.querySelector("#quote");
function goToSource() {
  window.open(
    "https://dzone.com/articles/best-programming-jokes-amp-quotes", "_blank"
  );
}
quoteContainer.addEventListener("click",goToSource);