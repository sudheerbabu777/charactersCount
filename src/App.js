import React from 'react'
import {v4} from 'uuid'
import './App.css'

// Replace your code here
class App extends React.Component {
  state = {
    userInput: '',
    textList: [],
  }

  onChangeTextInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickAddButton = () => {
    const {userInput} = this.state
    const newAdd = {
      id: v4(),
      userInput,
    }

    this.setState(prevState => ({textList: [...prevState.textList, newAdd]}))
  }

  render() {
    const {userInput, textList} = this.state
    console.log(textList)
    return (
      <div className="app-container">
        <div className="count-container">
          <div className="count-title-container">
            <h1 className="title">Count the characters like a Boss... </h1>
          </div>
          {textList.length !== 0 ? (
            <ul>
              {textList.map(each => (
                <li className="item" key={each.id}>
                  <p>
                    {each.userInput}:{each.userInput.length}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="image"
            />
          )}
        </div>
        <div className="characters-container">
          <h1 className="counter-title">Character Counter</h1>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter the Characters here"
              className="input-bar"
              onChange={this.onChangeTextInput}
              value={userInput}
            />
            <button type="button" onClick={this.onClickAddButton}>
              Add
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
