import {Component} from 'react'
import './index.css'

const coinTossList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    id: 0,
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
    id: 1,
  },
]

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    tossImgUrl: coinTossList[0].imgUrl,
  }

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      return this.setState(prevState => ({
        heads: prevState.heads + 1,
        tossImgUrl: coinTossList[0].imgUrl,
        total: prevState.total + 1,
      }))
    }
    return this.setState(prevState => ({
      tails: prevState.tails + 1,
      total: prevState.total + 1,
      tossImgUrl: coinTossList[1].imgUrl,
    }))
  }

  render() {
    const {tossImgUrl, total, heads, tails} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="title">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossImgUrl} alt="toss result" className="img" />
          <button type="button" className="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
