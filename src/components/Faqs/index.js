// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

export default class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="bg-main">
        <div className="bg-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="Faq-container">
            {faqsList.map(faqItem => (
              <FaqItem item={faqItem} key={faqItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
