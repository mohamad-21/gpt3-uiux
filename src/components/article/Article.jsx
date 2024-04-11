import './article.css';

const Article = ({ image, title, date }) => {
  return (
    <div className="article">
      <div className="image">
        <a href="#">
          <img src={image} alt="image" />
        </a>
      </div>
      <div className="content">
        <div>
          <p className="date">{date}</p>
          <h3>{title}</h3>
        </div>
        <a href="#" className="read-more">Read Full Article</a>
      </div>
    </div>
  )
}

export default Article