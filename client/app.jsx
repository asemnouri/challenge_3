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
                        <button onClick={() => this.setState({ formCounter: 1 })} class="btn btn-info ">GO TO CHECK OUT</button>
                        :
                        (this.state.formCounter === 1) ?
                            <form>
                                <h2>FORM ONE</h2>
                                <div><input type="text"class="form-group " placeholder="UserName" onChange={(e) => this.setState({ Name: e.target.value })} /></div>
                                <div><input type="text"class="form-group" placeholder="Email" onChange={(e) => this.setState({ Email: e.target.value })} /></div>
                                <div><input type="password" class="form-group" placeholder="Password" onChange={(e) => this.setState({ Password: e.target.value })} /> </div>
                                <button class="btn btn-info" onClick={() => this.setState({ formCounter: 2 })} type="reset" value="Reset">go to form two</button>
                                
                            </form>
                            :
                            (this.state.formCounter === 2) ?
                                <div>
                                    <h2>FORM TWO</h2>
                                    <div><input type="text" id="one" class="form-group" placeholder="Line one" onChange={(e) => this.setState({ LineOne: e.target.value })} /></div>
                                    <div><input type="text" id="two" class="form-group" placeholder="Line two" onChange={(e) => this.setState({ LineTwo: e.target.value })} /></div>
                                    <div><input type="text" id="three"class="form-group" placeholder="City" onChange={(e) => this.setState({ City: e.target.value })} /> </div>
                                    <div><input type="text" id="four" class="form-group" placeholder="State" onChange={(e) => this.setState({ State: e.target.value })} /> </div>
                                    <div><input type="text" id="five" class="form-group" placeholder="Zip Code" onChange={(e) => this.setState({ Zipcode: e.target.value })} /> </div>
                                    <button onClick={() => {
                                        this.setState({ formCounter: 3 })
                                        this.ClearFields()
                                    }}  class="btn btn-info">go to form three</button>
                                </div>
                                :
                                (this.state.formCounter === 3) ?
                                    <div>
                                        <h2>FORM THREE</h2>
                                        <div><input type="text" class="form-group" placeholder="Card Number" onChange={(e) => this.setState({ CreditCardNumber: e.target.value })} /></div>
                                        <div><input type="text" class="form-group" placeholder="Expire Date" onChange={(e) => this.setState({ ExpirationDate: e.target.value })} /></div>
                                        <div><input type="text"  class="form-group" placeholder="CVV" onChange={(e) => this.setState({ CVV: e.target.value })} /> </div>
                                        <div><input type="text" class="form-group" placeholder=" billing zip code" onChange={(e) => this.setState({ BillingZipcode: e.target.value })} /> </div>
                                        <button onClick={() => {
                                            this.setState({ formCounter: 4 })
                                            fetch("http://localhost:3000/", {
                                                method: "POST",
                                                body: JSON.stringify(this.state),
                                                headers: {
                                                    "Content-type": "application/json; charset=UTF-8"
                                                }
                                            })
                                        }}  class="btn btn-info">preview info</button>
                                    </div>
                                    :
                                    <div>
                                        <h2>YOUR INFORMATION</h2>
                                        <h3>Name:{this.state.Name}</h3>
                                        <h3>Email:{this.state.Email}</h3>
                                        <h3>Password:{this.state.Password}</h3>
                                        <h3>LineOne:{this.state.LineOne}</h3>
                                        <h3>LineTwo:{this.state.LineTwo}</h3>
                                        <h3>City:{this.state.City}</h3>
                                        <h3>State:{this.state.State}</h3>
                                        <h3>Zipcode:{this.state.Zipcode}</h3>
                                        <h3>CreditCardNumber:{this.state.CreditCardNumber}</h3>
                                        <h3>ExpirationDate:{this.state.ExpirationDate}</h3>
                                        <h3>CVV:{this.state.CVV}</h3>
                                        <h3>BillingZipcode:{this.state.BillingZipcode}</h3>
                                        <button onClick={() => this.setState({ formCounter: 0 })} class="btn btn-info">GO TO CHECK OUT</button>
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
