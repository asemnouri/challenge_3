// import HomePage from "./compiled/client/components/homePage.js"
// import {Route, Redirect } from 'react-router-dom';
// var { Router, Route, IndexRoute, hashHistory, IndexLink, Link, browserHistory } = ReactRouter
// 
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            formCounter: 0,
            firstPage: {
                Name: '',
                Email: '',
                Password: ''
            },
            secondPage: {
                LineOne: '',
                LineTwo: '',
                City: '',
                State: '',
                Zipcode: ''
            },
            thirdPage: {
                CreditCardNumber: '',
                ExpirationDate: '',
                CVV: '',
                BillingZipcode: ''
            }
        };
    }
    render() {
        return React.createElement(
            'div',
            null,
            this.state.formCounter === 0 ? React.createElement(
                'button',
                { onClick: () => this.setState({ formCounter: 1 }) },
                'GO TO CHECK OUT'
            ) : this.state.formCounter === 1 ? React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'First Page'
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', placeholder: 'UserName' })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', placeholder: 'Email' })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'password', placeholder: 'Password' }),
                    ' '
                ),
                React.createElement(
                    'button',
                    { onClick: () => this.setState({ formCounter: 2 }) },
                    'GO TO third page'
                )
            ) : this.state.formCounter === 2 ? React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Third Page'
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', placeholder: 'Line one' })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', placeholder: 'Line two' })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', placeholder: 'City' }),
                    ' '
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', placeholder: 'State' }),
                    ' '
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', placeholder: 'Zip Code' }),
                    ' '
                ),
                React.createElement(
                    'button',
                    { onClick: () => this.setState({ formCounter: 3 }) },
                    'NEXT'
                )
            ) : this.state.formCounter === 3 ? React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Second Page'
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', placeholder: 'Card Number' })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', placeholder: 'Expire Date' })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', placeholder: 'CVV' }),
                    ' '
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', placeholder: ' billing zip code' }),
                    ' '
                ),
                React.createElement(
                    'button',
                    { onClick: () => this.setState({ formCounter: 4 }) },
                    'NEXT'
                )
            ) : React.createElement(
                'button',
                { onClick: () => this.setState({ formCounter: 1 }) },
                'GO TO CHECK OUT'
            )
        );
    }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//   export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImZvcm1Db3VudGVyIiwiZmlyc3RQYWdlIiwiTmFtZSIsIkVtYWlsIiwiUGFzc3dvcmQiLCJzZWNvbmRQYWdlIiwiTGluZU9uZSIsIkxpbmVUd28iLCJDaXR5IiwiU3RhdGUiLCJaaXBjb2RlIiwidGhpcmRQYWdlIiwiQ3JlZGl0Q2FyZE51bWJlciIsIkV4cGlyYXRpb25EYXRlIiwiQ1ZWIiwiQmlsbGluZ1ppcGNvZGUiLCJyZW5kZXIiLCJzZXRTdGF0ZSIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUM5QkMsa0JBQWM7QUFDVjtBQUNBLGFBQUtDLEtBQUwsR0FBYTtBQUNUQyx5QkFBYSxDQURKO0FBRVRDLHVCQUFXO0FBQ1BDLHNCQUFNLEVBREM7QUFFUEMsdUJBQU8sRUFGQTtBQUdQQywwQkFBVTtBQUhILGFBRkY7QUFPUEMsd0JBQVc7QUFDVEMseUJBQVMsRUFEQTtBQUVUQyx5QkFBUyxFQUZBO0FBR1RDLHNCQUFNLEVBSEc7QUFJVEMsdUJBQU8sRUFKRTtBQUtUQyx5QkFBUztBQUxBLGFBUEo7QUFjUEMsdUJBQVU7QUFDUkMsa0NBQWtCLEVBRFY7QUFFUkMsZ0NBQWdCLEVBRlI7QUFHUkMscUJBQUssRUFIRztBQUlSQyxnQ0FBZ0I7QUFKUjtBQWRILFNBQWI7QUFxQkg7QUFDREMsYUFBUztBQUNMLGVBQ0k7QUFBQTtBQUFBO0FBRVMsaUJBQUtqQixLQUFMLENBQVdDLFdBQVgsS0FBMkIsQ0FBNUIsR0FDSTtBQUFBO0FBQUEsa0JBQVEsU0FBUyxNQUFNLEtBQUtpQixRQUFMLENBQWMsRUFBRWpCLGFBQWEsQ0FBZixFQUFkLENBQXZCO0FBQUE7QUFBQSxhQURKLEdBSUssS0FBS0QsS0FBTCxDQUFXQyxXQUFYLEtBQTJCLENBQTVCLEdBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQUVJO0FBQUE7QUFBQTtBQUFLLG1EQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLFVBQS9CO0FBQUwsaUJBRko7QUFHSTtBQUFBO0FBQUE7QUFBSyxtREFBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSxPQUEvQjtBQUFMLGlCQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUssbURBQU8sTUFBSyxVQUFaLEVBQXVCLGFBQVksVUFBbkMsR0FBTDtBQUFBO0FBQUEsaUJBSko7QUFLSTtBQUFBO0FBQUEsc0JBQVEsU0FBUyxNQUFNLEtBQUtpQixRQUFMLENBQWMsRUFBRWpCLGFBQWEsQ0FBZixFQUFkLENBQXZCO0FBQUE7QUFBQTtBQUxKLGFBREosR0FTSyxLQUFLRCxLQUFMLENBQVdDLFdBQVgsS0FBMkIsQ0FBNUIsR0FDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUssbURBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksVUFBL0I7QUFBTCxpQkFGSjtBQUdJO0FBQUE7QUFBQTtBQUFLLG1EQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLFVBQS9CO0FBQUwsaUJBSEo7QUFJSTtBQUFBO0FBQUE7QUFBSyxtREFBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSxNQUEvQixHQUFMO0FBQUE7QUFBQSxpQkFKSjtBQUtJO0FBQUE7QUFBQTtBQUFLLG1EQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLE9BQS9CLEdBQUw7QUFBQTtBQUFBLGlCQUxKO0FBTUk7QUFBQTtBQUFBO0FBQUssbURBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksVUFBL0IsR0FBTDtBQUFBO0FBQUEsaUJBTko7QUFPSTtBQUFBO0FBQUEsc0JBQVEsU0FBUyxNQUFNLEtBQUtpQixRQUFMLENBQWMsRUFBRWpCLGFBQWEsQ0FBZixFQUFkLENBQXZCO0FBQUE7QUFBQTtBQVBKLGFBREosR0FXSyxLQUFLRCxLQUFMLENBQVdDLFdBQVgsS0FBMkIsQ0FBNUIsR0FFSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUssbURBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksYUFBL0I7QUFBTCxpQkFGSjtBQUdJO0FBQUE7QUFBQTtBQUFLLG1EQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLGFBQS9CO0FBQUwsaUJBSEo7QUFJSTtBQUFBO0FBQUE7QUFBSyxtREFBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSxLQUEvQixHQUFMO0FBQUE7QUFBQSxpQkFKSjtBQUtJO0FBQUE7QUFBQTtBQUFLLG1EQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLG1CQUEvQixHQUFMO0FBQUE7QUFBQSxpQkFMSjtBQU1JO0FBQUE7QUFBQSxzQkFBUSxTQUFTLE1BQU0sS0FBS2lCLFFBQUwsQ0FBYyxFQUFFakIsYUFBYSxDQUFmLEVBQWQsQ0FBdkI7QUFBQTtBQUFBO0FBTkosYUFGSixHQVdJO0FBQUE7QUFBQSxrQkFBUSxTQUFTLE1BQU0sS0FBS2lCLFFBQUwsQ0FBYyxFQUFFakIsYUFBYSxDQUFmLEVBQWQsQ0FBdkI7QUFBQTtBQUFBO0FBckN4QixTQURKO0FBMENIO0FBcEU2Qjs7QUF1RWxDO0FBQ0E7QUFDQWtCLFNBQVNGLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkcsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QjtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi9jb21waWxlZC9jbGllbnQvY29tcG9uZW50cy9ob21lUGFnZS5qc1wiXHJcbi8vIGltcG9ydCB7Um91dGUsIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbi8vIHZhciB7IFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIGhhc2hIaXN0b3J5LCBJbmRleExpbmssIExpbmssIGJyb3dzZXJIaXN0b3J5IH0gPSBSZWFjdFJvdXRlclxyXG4vLyBcclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBmb3JtQ291bnRlcjogMCxcclxuICAgICAgICAgICAgZmlyc3RQYWdlOiB7XHJcbiAgICAgICAgICAgICAgICBOYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgIEVtYWlsOiAnJyxcclxuICAgICAgICAgICAgICAgIFBhc3N3b3JkOiAnJ1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgc2Vjb25kUGFnZTp7XHJcbiAgICAgICAgICAgICAgICBMaW5lT25lOiAnJyxcclxuICAgICAgICAgICAgICAgIExpbmVUd286ICcnLFxyXG4gICAgICAgICAgICAgICAgQ2l0eTogJycsXHJcbiAgICAgICAgICAgICAgICBTdGF0ZTogJycsIFxyXG4gICAgICAgICAgICAgICAgWmlwY29kZTogJydcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHRoaXJkUGFnZTp7XHJcbiAgICAgICAgICAgICAgICBDcmVkaXRDYXJkTnVtYmVyOiAnJyxcclxuICAgICAgICAgICAgICAgIEV4cGlyYXRpb25EYXRlOiAnJywgXHJcbiAgICAgICAgICAgICAgICBDVlY6ICcnLCBcclxuICAgICAgICAgICAgICAgIEJpbGxpbmdaaXBjb2RlOiAnJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5mb3JtQ291bnRlciA9PT0gMCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBmb3JtQ291bnRlcjogMSB9KX0+R08gVE8gQ0hFQ0sgT1VUPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmZvcm1Db3VudGVyID09PSAxKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZpcnN0IFBhZ2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlVzZXJOYW1lXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBmb3JtQ291bnRlcjogMiB9KX0+R08gVE8gdGhpcmQgcGFnZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5mb3JtQ291bnRlciA9PT0gMikgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoaXJkIFBhZ2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJMaW5lIG9uZVwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJMaW5lIHR3b1wiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDaXR5XCIgLz4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTdGF0ZVwiIC8+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWmlwIENvZGVcIiAvPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZm9ybUNvdW50ZXI6IDMgfSl9Pk5FWFQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZm9ybUNvdW50ZXIgPT09IDMpID9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TZWNvbmQgUGFnZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDYXJkIE51bWJlclwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRXhwaXJlIERhdGVcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkNWVlwiIC8+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIiBiaWxsaW5nIHppcCBjb2RlXCIgLz4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBmb3JtQ291bnRlcjogNCB9KX0+TkVYVDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBmb3JtQ291bnRlcjogMSB9KX0+R08gVE8gQ0hFQ0sgT1VUPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxyXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpXHJcbi8vICAgZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXX0=