// import HomePage from "./components/homePage.js"
// import {Route, Redirect } from 'react-router-dom';

class App extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
             <button type="button" className="btn btn-primary">GO TO CHECK OUT</button>
            
            </div>
        )
    }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
ReactDOM.render(<App />, document.getElementById("app"))
//   export default App;
