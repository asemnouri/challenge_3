

var App = () => (
    <div>
      helllllllllllo
    </div>
  );
  
  // In the ES6 spec, files are "modules" and do not share a top-level scope
  // `var` declarations will only exist globally where explicitly defined
  ReactDOM.render(<App />, document.getElementById("app"))
//   export default App;