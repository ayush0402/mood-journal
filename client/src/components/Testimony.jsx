const Testimony = ({ testimony }) => {
  return (
    <div className="testimony">
      <p className="testimony-review">"{testimony.review}"</p>
      <p className="testimony-author">~ {testimony.name}</p>
    </div>
  );
};

export default Testimony;
