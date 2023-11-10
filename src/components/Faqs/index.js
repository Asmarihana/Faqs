import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="background">
        <div className="card">
          <h1 className="head">FAQs</h1>
          <ul>
            {faqsList.map(each => (
              <FaqItem key={each.id} itemDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
