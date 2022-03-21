export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route

  return (
    <>
      <div className="bookContainer">
        <h2 className="title">{"show book tile here"}</h2>
        <img className="image" src={"show book image here"} alt="#" />
        <div className="author">{"show book Author here"}</div>
        <div className="description">{"show book Description here"}</div>
        <div className="price">{"show book Price here"}</div>
        <div className="section">{"show book section name here"}</div>
        <div className="isbnNumber">{"show book ISBN number here"}</div>
        <ul className="reviews">
          {/* Reviews will be an array, iterate over them and create a new <li> for every review */}
        </ul>
      </div>
    </>
  );
};
