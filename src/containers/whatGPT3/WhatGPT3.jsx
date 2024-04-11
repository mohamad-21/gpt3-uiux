import './whatGPT3.css';
import Feature from '../../components/feature/Feature';

const WhatGPT3 = () => {
  return (
    <div className="section-margin whatgpt3" id="whatgpt3">
      <div className="top-feature">
        <Feature 
          title="What is GPT-3" 
          desc="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <a href="#">Explore The Library</a>
      </div>
      <div className="bottom-features-list">
        <Feature 
          title="Chatbots"
          desc="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          direction="column"
        />
        <Feature 
          title="Knowledgebase"
          desc="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          direction="column"
        />
        <Feature 
          title="Chatbots"
          desc="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          direction="column"
        />
      </div>
    </div>
  )
}

export default WhatGPT3