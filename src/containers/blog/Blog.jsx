import './blog.css';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import Article from '../../components/article/Article';

const articles = [
  {
    image: blog01,
    date: 'Sep 26, 2021',
    title: '111GPT-3 and Open  AI is the future. Let us exlore how it is?',
  },
  {
    image: blog02,
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
  },
  {
    image: blog03,
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
  },
  {
    image: blog04,
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
  },
  {
    image: blog05,
    date: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
  },
];


const Blog = () => {
  return (
    <div className="blog section-padding" id="blog">
      <div className="heading">
        <h1 className="gradient__text">
          A lot is happening, 
          We are blogging about it.
        </h1>
      </div>
      <div className="articles-container">
        <div className="article-first">
          <Article 
            image={articles[0].image}
            date={articles[0].date}
            title={articles[0].title}
          />
        </div>
        <div className="articles">
          {articles.slice(1).map((article, idx) => (
            <Article
              image={article.image}
              date={article.date}
              title={article.title}
              key={idx}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog