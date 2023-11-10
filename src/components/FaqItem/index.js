import {Component} from 'react'
import './index.css'

const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '

class FaqItem extends Component {
  state = {isActive: false}

  toggleActive = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderButton = () => {
    const {isActive} = this.state
    const imageUrl = isActive ? minusImg : plusImg
    const alt = isActive ? 'minus' : 'plus'
    return (
      <button onClick={this.toggleActive} type="button">
        <img src={imageUrl} alt={alt} />
      </button>
    )
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {itemDetails} = this.props
    const {answerText} = itemDetails
    if (isActive) {
      return (
        <div className="answerItem">
          <hr className="line" />
          <p>{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {itemDetails} = this.props
    const {questionText} = itemDetails
    return (
      <li className="list">
        <div className="question-card">
          <h3>{questionText}</h3>
          {this.renderButton()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
