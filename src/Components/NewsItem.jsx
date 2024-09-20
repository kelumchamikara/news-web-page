const NewsItem = ({ title, description, src, url }) => {
  const defaultImage = "https://icrier.org/wp-content/uploads/2022/12/media-Event-Image-Not-Found.jpg"; // Fallback image

  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      <img 
        src={src ? src : defaultImage} 
        style={{ height: "200px", width: "325px" }} 
        className="card-img-top" 
        alt={title} // Use title for better accessibility
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "No description available."}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;
