// type cardType = string;

// better
type cardType = 'club' | 'diamond' | 'heart' | 'spade';

const newCardType: cardType = 'club';

type lang = 'en' | 'es';
function greet(name: string, lang: lang = 'en') {
  if (lang === 'en') {
    return `Hello, ${name}!`;
  } else {
    return `¡Hola, ${name}!`;
  }
}

// greet('John', 'it'); // ts(2345)
