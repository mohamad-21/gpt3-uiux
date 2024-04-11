import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="header section-padding" id="home">
      <div className="header-content">
        <h1 className="title gradient__text">
          Let’s Build Something
          amazing with GPT-3
          OpenAI
        </h1>
        <p className="desc">
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <div className="subscribe">
          <input type="text" placeholder="Your Email Address" />
          <button>Get Started</button>
        </div>
        <div className="people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  )
}

export default Header