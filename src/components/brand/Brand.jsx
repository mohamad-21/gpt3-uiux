import './brand.css';
import { google, shopify, slack, atlassian, dropbox } from "./imports";

const Brand = () => {
  return (
    <div className="brands section-padding">
      <div className="brand-item">
        <img src={google} alt="google" />
      </div>
      <div className="brand-item">
        <img src={slack} alt="slack" />
      </div>
      <div className="brand-item">
        <img src={atlassian} alt="atlassian" />
      </div>
      <div className="brand-item">
        <img src={dropbox} alt="dropbox" />
      </div>
      <div className="brand-item">
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand