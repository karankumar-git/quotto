import React,{useEffect, useState} from 'react'
import './card.css';
const Card = () => {
  const quoteslist = [];
  const [quote, setQuote] = useState({
    anime: null,
    quote: null,
    character: null
  });

  const fetchQuote = async () => {
    return await fetch('https://animechan.vercel.app/api/random').then(response => response.json());
  }
  const generatenew = async () => {
    setQuote(await fetchQuote());
    quoteslist.push(quote);
  }
  useEffect(async () => {
    setQuote(await fetchQuote());
  }, []);

  return (
    <div className="container">
      <blockquote className="quote-card">
        <p>
          {quote.quote}
        </p>
        <cite>
          {quote.character}
        </cite>
      </blockquote>
      <div className="buttoncontainer">
        <button className="custom-btn btn-16" onClick={generatenew} >Next</button>
        <a href="https://twitter.com/intent/tweet">        <button className="custom-btn btn-16">Tweet</button>
</a>
        
      </div>
    </div>
  )
}

export default Card;