// Write your code here.
import './index.css'

const BannerCardItem = params => {
  const {cardDetails} = params
  const {headerText, description, className} = cardDetails
  return (
    <li className={className}>
      <div>
        <h1 className="card-heading">{headerText}</h1>
        <p className="card-description">{description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
