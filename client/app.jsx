// import HomePage from "./compiled/client/components/homePage.js"
// import {Route, Redirect } from 'react-router-dom';
// var { Router, Route, IndexRoute, hashHistory, IndexLink, Link, browserHistory } = ReactRouter
// 
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            formCounter: 0,
            firstPage: {
                Name: '',
                Email: '',
                Password: ''
              },
              secondPage:{
                LineOne: '',
                LineTwo: '',
                City: '',
                State: '', 
                Zipcode: ''
              },
              thirdPage:{
                CreditCardNumber: '',
                ExpirationDate: '', 
                CVV: '', 
                BillingZipcode: ''
              }
        }
    }
    render() {
        return (
            <div>
                {
                    (this.state.formCounter === 0) ?
                        <button onClick={() => this.setState({ formCounter: 1 })}>GO TO CHECK OUT</button>

                        :
                        (this.state.formCounter === 1) ?
                            <div>
                                <p>First Page</p>
                                <div><input type="text" placeholder="UserName" /></div>
                                <div><input type="text" placeholder="Email" /></div>
                                <div><input type="password" placeholder="Password" /> </div>
                                <button onClick={() => this.setState({ formCounter: 2 })}>GO TO third page</button>
                            </div>
                            :
                            (this.state.formCounter === 2) ?
                                <div>
                                    <p>Third Page</p>
                                    <div><input type="text" placeholder="Line one" /></div>
                                    <div><input type="text" placeholder="Line two" /></div>
                                    <div><input type="text" placeholder="City" /> </div>
                                    <div><input type="text" placeholder="State" /> </div>
                                    <div><input type="text" placeholder="Zip Code" /> </div>
                                    <button onClick={() => this.setState({ formCounter: 3 })}>NEXT</button>
                                </div>
                                :
                                (this.state.formCounter === 3) ?

                                    <div>
                                        <p>Second Page</p>
                                        <div><input type="text" placeholder="Card Number" /></div>
                                        <div><input type="text" placeholder="Expire Date" /></div>
                                        <div><input type="text" placeholder="CVV" /> </div>
                                        <div><input type="text" placeholder=" billing zip code" /> </div>
                                        <button onClick={() => this.setState({ formCounter: 4 })}>NEXT</button>
                                    </div>
                                    :
                                    <button onClick={() => this.setState({ formCounter: 1 })}>GO TO CHECK OUT</button>
                }
            </div>
        )
    }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
ReactDOM.render(<App />, document.getElementById("app"))
//   export default App;
