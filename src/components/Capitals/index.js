import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeOption: countryAndCapitalsList[0].id,
  }

  onChangeOption = event => {
    this.setState({activeOption: event.target.value})
  }

  getCountry = activeOption => {
    const activeCountry = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeOption,
    )
    return activeCountry.country
  }

  render() {
    const {activeOption} = this.state
    const country = this.getCountry(activeOption)
    return (
      <div className="app-container">
        <div className="country-capital-container">
          <h1>Countries and Capitals</h1>
          <div className="country-container">
            <select
              className="select-box"
              value={activeOption}
              onChange={this.onChangeOption}
            >
              {countryAndCapitalsList.map(eachCountryDetails => (
                <option
                  value={eachCountryDetails.id}
                  key={eachCountryDetails.id}
                >
                  {eachCountryDetails.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <p className="capital-name">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
