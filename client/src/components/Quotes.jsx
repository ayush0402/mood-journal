import { useState, useEffect } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState("Hello");
  const [author, setAuthor] = useState("-Author");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  }, []);
  return (
    <>
      <h1 className="text-center quote-content">{'"' + quote + '"'}</h1>
      <h2 className="text-end quote-author">{"-" + author}</h2>
    </>
  );
};

export default Quotes;
