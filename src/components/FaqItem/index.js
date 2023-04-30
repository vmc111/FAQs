import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {showAnswer: false}

  showHideAnswer = () => {
    this.setState(preState => ({showAnswer: !preState.showAnswer}))
  }

  render() {
    const {item} = this.props
    const {showAnswer} = this.state

    const imgUrl = showAnswer
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const imageAlt = showAnswer ? 'minus' : 'plus'

    const faqQuestion = (
      <div className="Faq-question-row">
        <h1 className="heading">{item.questionText}</h1>
        <button type="button" className="btn" onClick={this.showHideAnswer}>
          <img src={imgUrl} alt={imageAlt} />
        </button>
      </div>
    )

    const faqAnswer = (
      <div className="answer-container">
        <hr />
        <p>{item.answerText}</p>
      </div>
    )

    return (
      <li value={item.id} className="list-item">
        {faqQuestion}
        {showAnswer && faqAnswer}
      </li>
    )
  }
}

export default FaqItem
