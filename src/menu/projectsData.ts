import TFPLMPic from "/images/ProjectPreviews/tfplm.png";
import FlappyBirdPic from "/images/ProjectPreviews/flappy-bird.png";
import TTSPic from "/images/ProjectPreviews/tts.png";
import SnakePic from "/images/ProjectPreviews/snake.png";
import DadJokePic from "/images/ProjectPreviews/dad-joke.png";
import CalculatorPic from "/images/ProjectPreviews/calculator.png";
import CTCMPic from "/images/ProjectPreviews/ctcm.png";
import BreakoutPic from "/images/ProjectPreviews/breakout.png";
import HangmanPic from "/images/ProjectPreviews/hangman.png";

export const projects = [
  {
    id: 1,
    index: 0,
    title: "The FPL Manager",
    imageSrc: TFPLMPic,
    description:
      "An app for Fantasy Premier League fanatics to compare their stats with other managers.",
    playUrl: "https://tfplm.vercel.app/",
    codeUrl: "https://github.com/max-b10/TFPLM",
    playText: "Visit App",
    viewText: "View Code",
  },

  {
    id: 2,
    index: 1,
    title: "Flappy Bird",
    imageSrc: FlappyBirdPic,
    description:
      "A recreation of the infamously addictive mobile game: Flappy Bird using HTML, CSS, and vanilla JavaScript.",
    playUrl: "https://flappy-bird-max-b10.netlify.app/",
    codeUrl: "https://github.com/max-b10/flappy-bird",
    playText: "Play Game",
    viewText: "View Code",
  },
  {
    id: 3,
    index: 2,
    title: "Text to Speech",
    imageSrc: TTSPic,
    description:
      "Styled with Bootstrap, this app uses the Web Speech API to turn user's text into a voice of their choice from the dropdown menu provided.",
    playUrl: "https://tts-max-b10.netlify.app/",
    codeUrl: "https://github.com/max-b10/Text-To-Speech",
    playText: "Visit App",
    viewText: "View Code",
  },
  {
    id: 4,
    index: 3,
    title: "Snake",
    imageSrc: SnakePic,
    description:
      "A Nokia style Snake game using HTML, CSS and vanilla JavaScript, with arrow-keys included for mobile users.",
    playUrl: "https://snake-max-b10.netlify.app/",
    codeUrl: "https://github.com/max-b10/snake",
    playText: "Play Game",
    viewText: "View Code",
  },
  {
    id: 5,
    index: 4,
    title: "Dad Joke Generator",
    imageSrc: DadJokePic,
    description:
      "Using Axios, this app provides any immature user with a dad joke at the click of a button. Credit to the icanhazdadjoke.com API.",
    playUrl: "https://djg-max-b10.netlify.app/",
    codeUrl: "https://github.com/max-b10/Dad-joke-generator",
    playText: "Visit App",
    viewText: "View Code",
  },
  {
    id: 6,
    index: 5,
    title: "Calculator",
    imageSrc: CalculatorPic,
    description:
      "A JavaScript Calculator served as a useful project to help me learn vanilla JavaScript fundamentals and CSS Grid.",
    playUrl: "https://calculator-max-b10.netlify.app/",
    codeUrl: "https://github.com/max-b10/JS-Calculator",
    playText: "Visit App",
    viewText: "View Code",
  },
  {
    id: 7,
    index: 6,
    title: "Crypto Market",
    imageSrc: CTCMPic,
    description:
      "Using Axios to access the Coin GeckoAPI, this app displays the realtime prices and information of cryptocurrencies. Another project I styled using Bootstrap.",
    playUrl: "https://ctcm-max-b10.netlify.app",
    codeUrl: "https://github.com/max-b10/Crypto-Compare-App",
    playText: "Visit App",
    viewText: "View Code",
  },

  {
    id: 8,
    index: 7,
    title: "Breakout",
    imageSrc: BreakoutPic,
    description:
      "A recreation of the classic game: Breakout using HTML, CSS and vanilla JavaScript. Right and Left arrow-keys included for mobile users.",
    playUrl: "https://brick-breaker-max-b10.netlify.app/",
    codeUrl: "https://github.com/max-b10/Brick-Breaker",
    playText: "Play Game",
    viewText: "View Code",
  },
  {
    id: 9,
    index: 8,
    title: "Hangman",
    imageSrc: HangmanPic,
    description:
      "A very useful learning project I completed during Andrew Mead's JavaScript course on Udemy.com. Not supported on touch screen devices...yet!",
    playUrl: "https://max-b10-hangman.netlify.app/",
    codeUrl: "https://github.com/max-b10/hangman",
    playText: "Play Game",
    viewText: "View Code",
  },
];
