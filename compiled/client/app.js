// import HomePage from "./compiled/client/components/homePage.js"
// import {Route, Redirect } from 'react-router-dom';
// var { Router, Route, IndexRoute, hashHistory, IndexLink, Link, browserHistory } = ReactRouter
// 
class App extends React.Component {
    constructor() {
        super();
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

        };
    }
    ClearFields() {
        document.getElementById("one").value = "";
        document.getElementById("two").value = "";
        document.getElementById("three").value = "";
        document.getElementById("four").value = "";
        document.getElementById("five").value = "";
    }

    saveToDataBase() {
        $.ajax({
            url: "http://localhost:3000/",
            type: 'POST',
            data: this.state,
            contentType: 'application/json',
            success: successCB

        });
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
                'form',
                null,
                React.createElement(
                    'p',
                    null,
                    'FORM ONE'
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', placeholder: 'UserName', onChange: e => this.setState({ Name: e.target.value }) })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', placeholder: 'Email', onChange: e => this.setState({ Email: e.target.value }) })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'password', placeholder: 'Password', onChange: e => this.setState({ Password: e.target.value }) }),
                    ' '
                ),
                React.createElement(
                    'button',
                    { onClick: () => this.setState({ formCounter: 2 }), type: 'reset', value: 'Reset' },
                    'go to form two'
                )
            ) : this.state.formCounter === 2 ? React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'FORM TWO'
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', id: 'one', placeholder: 'Line one', onChange: e => this.setState({ LineOne: e.target.value }) })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', id: 'two', placeholder: 'Line two', onChange: e => this.setState({ LineTwo: e.target.value }) })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', id: 'three', placeholder: 'City', onChange: e => this.setState({ City: e.target.value }) }),
                    ' '
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', id: 'four', placeholder: 'State', onChange: e => this.setState({ State: e.target.value }) }),
                    ' '
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', id: 'five', placeholder: 'Zip Code', onChange: e => this.setState({ Zipcode: e.target.value }) }),
                    ' '
                ),
                React.createElement(
                    'button',
                    { onClick: () => {
                            this.setState({ formCounter: 3 });
                            this.ClearFields();
                        }, type: 'reset', value: 'Reset' },
                    'go to form three'
                )
            ) : this.state.formCounter === 3 ? React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'FORM TWO'
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', placeholder: 'Card Number', onChange: e => this.setState({ CreditCardNumber: e.target.value }) })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', placeholder: 'Expire Date', onChange: e => this.setState({ ExpirationDate: e.target.value }) })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', placeholder: 'CVV', onChange: e => this.setState({ CVV: e.target.value }) }),
                    ' '
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', placeholder: ' billing zip code', onChange: e => this.setState({ BillingZipcode: e.target.value }) }),
                    ' '
                ),
                React.createElement(
                    'button',
                    { onClick: () => {
                            this.setState({ formCounter: 4 });
                            fetch("http://localhost:3000/", {
                                method: "POST",
                                body: this.state,
                                headers: {
                                    "Content-type": "application/json; charset=UTF-8"
                                }
                            }).then(response => response.json()).then(json => console.log(json));
                        }, type: 'reset', value: 'Reset' },
                    'preview info'
                )
            ) : React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'you information'
                ),
                React.createElement(
                    'button',
                    { onClick: () => this.setState({ formCounter: 0 }) },
                    'GO TO CHECK OUT'
                )
            )
        );
    }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//   export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImZvcm1Db3VudGVyIiwiTmFtZSIsIkVtYWlsIiwiUGFzc3dvcmQiLCJMaW5lT25lIiwiTGluZVR3byIsIkNpdHkiLCJTdGF0ZSIsIlppcGNvZGUiLCJDcmVkaXRDYXJkTnVtYmVyIiwiRXhwaXJhdGlvbkRhdGUiLCJDVlYiLCJCaWxsaW5nWmlwY29kZSIsIkNsZWFyRmllbGRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwic2F2ZVRvRGF0YUJhc2UiLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwic3VjY2Vzc0NCIiwicmVuZGVyIiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiUmVhY3RET00iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDOUJDLGtCQUFjO0FBQ1Y7QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDVEMseUJBQWEsQ0FESjtBQUVUQyxrQkFBTSxFQUZHO0FBR1RDLG1CQUFPLEVBSEU7QUFJVEMsc0JBQVUsRUFKRDtBQUtUQyxxQkFBUyxFQUxBO0FBTVRDLHFCQUFTLEVBTkE7QUFPVEMsa0JBQU0sRUFQRztBQVFUQyxtQkFBTyxFQVJFO0FBU1RDLHFCQUFTLEVBVEE7QUFVVEMsOEJBQWtCLEVBVlQ7QUFXVEMsNEJBQWdCLEVBWFA7QUFZVEMsaUJBQUssRUFaSTtBQWFUQyw0QkFBZ0I7O0FBYlAsU0FBYjtBQWdCSDtBQUNEQyxrQkFBYztBQUNWQyxpQkFBU0MsY0FBVCxDQUF3QixLQUF4QixFQUErQkMs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aEIsRUFBeUJaLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekI7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4vY29tcGlsZWQvY2xpZW50L2NvbXBvbmVudHMvaG9tZVBhZ2UuanNcIlxyXG4vLyBpbXBvcnQge1JvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG4vLyB2YXIgeyBSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBoYXNoSGlzdG9yeSwgSW5kZXhMaW5rLCBMaW5rLCBicm93c2VySGlzdG9yeSB9ID0gUmVhY3RSb3V0ZXJcclxuLy8gXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZm9ybUNvdW50ZXI6IDAsXHJcbiAgICAgICAgICAgIE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBFbWFpbDogJycsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgTGluZU9uZTogJycsXHJcbiAgICAgICAgICAgIExpbmVUd286ICcnLFxyXG4gICAgICAgICAgICBDaXR5OiAnJyxcclxuICAgICAgICAgICAgU3RhdGU6ICcnLFxyXG4gICAgICAgICAgICBaaXBjb2RlOiAnJyxcclxuICAgICAgICAgICAgQ3JlZGl0Q2FyZE51bWJlcjogJycsXHJcbiAgICAgICAgICAgIEV4cGlyYXRpb25EYXRlOiAnJyxcclxuICAgICAgICAgICAgQ1ZWOiAnJyxcclxuICAgICAgICAgICAgQmlsbGluZ1ppcGNvZGU6ICcnXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIENsZWFyRmllbGRzKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib25lXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR3b1wiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aHJlZVwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3VyXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpdmVcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVUb0RhdGFCYXNlKCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvXCIsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YTogdGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgc3VjY2Vzczogc3VjY2Vzc0NCLFxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmZvcm1Db3VudGVyID09PSAwKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvcm1Db3VudGVyOiAxIH0pfT5HTyBUTyBDSEVDSyBPVVQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5mb3JtQ291bnRlciA9PT0gMSkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rk9STSBPTkU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlVzZXJOYW1lXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgTmFtZTogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgRW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBQYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9IC8+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvcm1Db3VudGVyOiAyIH0pfSB0eXBlPVwicmVzZXRcIiB2YWx1ZT1cIlJlc2V0XCI+Z28gdG8gZm9ybSB0d288L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmZvcm1Db3VudGVyID09PSAyKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rk9STSBUV088L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJvbmVcIiBwbGFjZWhvbGRlcj1cIkxpbmUgb25lXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgTGluZU9uZTogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0d29cIiBwbGFjZWhvbGRlcj1cIkxpbmUgdHdvXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgTGluZVR3bzogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aHJlZVwiIHBsYWNlaG9sZGVyPVwiQ2l0eVwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IENpdHk6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZvdXJcIiBwbGFjZWhvbGRlcj1cIlN0YXRlXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgU3RhdGU6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZpdmVcIiBwbGFjZWhvbGRlcj1cIlppcCBDb2RlXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgWmlwY29kZTogZS50YXJnZXQudmFsdWUgfSl9IC8+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtQ291bnRlcjogMyB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DbGVhckZpZWxkcygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IHR5cGU9XCJyZXNldFwiIHZhbHVlPVwiUmVzZXRcIj5nbyB0byBmb3JtIHRocmVlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmZvcm1Db3VudGVyID09PSAzKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GT1JNIFRXTzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDYXJkIE51bWJlclwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IENyZWRpdENhcmROdW1iZXI6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkV4cGlyZSBEYXRlXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgRXhwaXJhdGlvbkRhdGU6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkNWVlwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IENWVjogZS50YXJnZXQudmFsdWUgfSl9IC8+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIiBiaWxsaW5nIHppcCBjb2RlXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgQmlsbGluZ1ppcGNvZGU6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtQ291bnRlcjogNCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IHRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGpzb24gPT4gY29uc29sZS5sb2coanNvbikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSB0eXBlPVwicmVzZXRcIiB2YWx1ZT1cIlJlc2V0XCI+cHJldmlldyBpbmZvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD55b3UgaW5mb3JtYXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBmb3JtQ291bnRlcjogMCB9KX0+R08gVE8gQ0hFQ0sgT1VUPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcclxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcclxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKVxyXG4vLyAgIGV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl19