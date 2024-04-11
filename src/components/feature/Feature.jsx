import './feature.css';

const Feature = ({ title, desc, direction='row' }) => {
  return (
    <div className={`feature ${direction}`}>
      <div className="title">
        <div />
        <h3>{title}</h3>
      </div>
      <p className="desc">{desc}</p>
    </div>
  )
}

export default Feature