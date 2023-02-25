const Testimony = ({ testimony }) => {
  return (
    <div className="testimony">
      <p className="testimony-review">"{testimony.review}"</p>
      <h4 className="testimony-author">{testimony.name}</h4>
    </div>
  );
};

export default Testimony;
