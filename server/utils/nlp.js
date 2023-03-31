const natural = require("natural");
const aposToLexForm = require("apos-to-lex-form");
const SpellCorrector = require("spelling-corrector");
const SW = require("stopword");
const spellCorrector = new SpellCorrector();
spellCorrector.loadDictionary();

// Reference:
// https://blog.logrocket.com/sentiment-analysis-node-js/

const analyze = (content) => {
  const lexedContent = aposToLexForm(content);
  const casedContent = lexedContent.toLowerCase();
  const alphaOnlyContent = casedContent.replace(/[^a-zA-Z\s]+/g, "");

  const { WordTokenizer } = natural;
  const tokenizer = new WordTokenizer();
  const tokenizedContent = tokenizer.tokenize(alphaOnlyContent);

  tokenizedContent.forEach((word, index) => {
    tokenizedContent[index] = spellCorrector.correct(word);
  });
  const filteredContent = SW.removeStopwords(tokenizedContent);

  const { SentimentAnalyzer, PorterStemmer } = natural;
  const analyzer = new SentimentAnalyzer("English", PorterStemmer, "afinn");
  const analysis = analyzer.getSentiment(filteredContent);

  return analysis;
};

module.exports = analyze;
