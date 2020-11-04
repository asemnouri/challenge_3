// import HomePage from "./compiled/client/components/homePage.js"
// import {Route, Redirect } from 'react-router-dom';
// var { Router, Route, IndexRoute, hashHistory, IndexLink, Link, browserHistory } = ReactRouter
// 
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            formCounter: 0,
            Name: '',
            Email: '',
            Password: '',
            LineOne: '',
            LineTwo: '',
            City: '',
            State: '',
            Zipcode: '',
            CreditCardNumber: '',
            ExpirationDate: '',
            CVV: '',
            BillingZipcode: ''

        }
    }
     ClearFields() {
        document.getElementById("one").value = "";
        document.getElementById("two").value = "";
        document.getElementById("three").value = "";
        document.getElementById("four").value = "";
        document.getElementById("five").value = "";
   }

    render() {
        return (
            <div>
                {
                    (this.state.formCounter === 0) ?
                        <button onClick={() => this.setState({ formCounter: 1 })}>GO TO CHECK OUT</button>
                        :
                        (this.state.formCounter === 1) ?
                            <form>
                                <p>FORM ONE</p>
                                <div><input type="text" placeholder="UserName" onChange={(e) => this.setState({ Name: e.target.value})} /></div>
                                <div><input type="text" placeholder="Email" onChange={(e) => this.setState({ Email:  e.target.value })} /></div>
                                <div><input type="password" placeholder="Password" onChange={(e) => this.setState({ Password:  e.target.value })} /> </div>
                                <button onClick={() => this.setState({ formCounter: 2 })} type="reset" value="Reset">go to form two</button>
                            </form>
                            :
                            (this.state.formCounter === 2) ?
                                <div>
                                    <p>FORM TWO</p>
                                    <div><input type="text"  id="one" placeholder="Line one" onChange={(e) => this.setState({ LineOne:  e.target.value })}/></div>
                                    <div><input type="text" id="two" placeholder="Line two"onChange={(e) => this.setState({ LineTwo:  e.target.value })} /></div>
                                    <div><input type="text" id="three" placeholder="City"onChange={(e) => this.setState({ City:  e.target.value })} /> </div>
                                    <div><input type="text" id="four" placeholder="State" onChange={(e) => this.setState({ State:  e.target.value })}/> </div>
                                    <div><input type="text" id="five" placeholder="Zip Code" onChange={(e) => this.setState({ Zipcode:  e.target.value })}/> </div>
                                    <button onClick={() =>{ 
                                        this.setState({ formCounter: 3 })
                                        this.ClearFields()
                                        }} type="reset" value="Reset">go to form three</button>
                                </div>
                                :
                                (this.state.formCounter === 3) ?
                                    <div>
                                        <p>FORM TWO</p>
                                        <div><input type="text" placeholder="Card Number"onChange={(e) => this.setState({ CreditCardNumber:  e.target.value })} /></div>
                                        <div><input type="text" placeholder="Expire Date"onChange={(e) => this.setState({ ExpirationDate:  e.target.value })} /></div>
                                        <div><input type="text" placeholder="CVV" onChange={(e) => this.setState({ CVV:  e.target.value })}/> </div>
                                        <div><input type="text" placeholder=" billing zip code" onChange={(e) => this.setState({ BillingZipcode:  e.target.value })}/> </div>
                                        <button onClick={() => this.setState({ formCounter: 4 })} type="reset" value="Reset">preview info</button>
                                    </div>
                                    :
                                    <div>
                                    <p>you information</p>
                                    <button onClick={() => console.log(this.state)}>GO TO CHECK OUT</button>
                                    </div>
                }
            </div>
        )
    }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
ReactDOM.render(<App />, document.getElementById("app"))
//   export default App;
