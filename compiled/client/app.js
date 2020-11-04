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
                    { onClick: () => this.setState({ formCounter: 4 }), type: 'reset', value: 'Reset' },
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
                    { onClick: () => console.log(this.state) },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImZvcm1Db3VudGVyIiwiTmFtZSIsIkVtYWlsIiwiUGFzc3dvcmQiLCJMaW5lT25lIiwiTGluZVR3byIsIkNpdHkiLCJTdGF0ZSIsIlppcGNvZGUiLCJDcmVkaXRDYXJkTnVtYmVyIiwiRXhwaXJhdGlvbkRhdGUiLCJDVlYiLCJCaWxsaW5nWmlwY29kZSIsIkNsZWFyRmllbGRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwicmVuZGVyIiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsIlJlYWN0RE9NIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQzlCQyxrQkFBYztBQUNWO0FBQ0EsYUFBS0MsS0FBTCxHQUFhO0FBQ1RDLHlCQUFhLENBREo7QUFFVEMsa0JBQU0sRUFGRztBQUdUQyxtQkFBTyxFQUhFO0FBSVRDLHNCQUFVLEVBSkQ7QUFLVEMscUJBQVMsRUFMQTtBQU1UQyxxQkFBUyxFQU5BO0FBT1RDLGtCQUFNLEVBUEc7QUFRVEMsbUJBQU8sRUFSRTtBQVNUQyxxQkFBUyxFQVRBO0FBVVRDLDhCQUFrQixFQVZUO0FBV1RDLDRCQUFnQixFQVhQO0FBWVRDLGlCQUFLLEVBWkk7QUFhVEMsNEJBQWdCOztBQWJQLFNBQWI7QUFnQkg7QUFDQUMsa0JBQWM7QUFDWEMsaUJBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0JDLEtBQS9CLEdBQXVDLEVBQXZDO0FBQ0FGLGlCQUFTQyxjQUFULENBQXdCLEtBQXhCLEVBQStCQyxLQUEvQixHQUF1QyxFQUF2QztBQUNBRixpQkFBU0MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ0MsS0FBakMsR0FBeUMsRUFBekM7QUFDQUYsaUJBQVNDLGNB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SixLQUE1QixFQUFkLENBQXBFLEdBQUw7QUFBQTtBQUFBLGlCQUxKO0FBTUk7QUFBQTtBQUFBLHNCQUFRLFNBQVMsTUFBTSxLQUFLRSxRQUFMLENBQWMsRUFBRWxCLGFBQWEsQ0FBZixFQUFkLENBQXZCLEVBQTBELE1BQUssT0FBL0QsRUFBdUUsT0FBTSxPQUE3RTtBQUFBO0FBQUE7QUFOSixhQURKLEdBVUk7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQTtBQUVBO0FBQUE7QUFBQSxzQkFBUSxTQUFTLE1BQU1xQixRQUFRQyxHQUFSLENBQVksS0FBS3ZCLEtBQWpCLENBQXZCO0FBQUE7QUFBQTtBQUZBO0FBdEN4QixTQURKO0FBOENIO0FBM0U2Qjs7QUE4RWxDO0FBQ0E7QUFDQXdCLFNBQVNOLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkgsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QjtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi9jb21waWxlZC9jbGllbnQvY29tcG9uZW50cy9ob21lUGFnZS5qc1wiXHJcbi8vIGltcG9ydCB7Um91dGUsIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbi8vIHZhciB7IFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIGhhc2hIaXN0b3J5LCBJbmRleExpbmssIExpbmssIGJyb3dzZXJIaXN0b3J5IH0gPSBSZWFjdFJvdXRlclxyXG4vLyBcclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBmb3JtQ291bnRlcjogMCxcclxuICAgICAgICAgICAgTmFtZTogJycsXHJcbiAgICAgICAgICAgIEVtYWlsOiAnJyxcclxuICAgICAgICAgICAgUGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgICBMaW5lT25lOiAnJyxcclxuICAgICAgICAgICAgTGluZVR3bzogJycsXHJcbiAgICAgICAgICAgIENpdHk6ICcnLFxyXG4gICAgICAgICAgICBTdGF0ZTogJycsXHJcbiAgICAgICAgICAgIFppcGNvZGU6ICcnLFxyXG4gICAgICAgICAgICBDcmVkaXRDYXJkTnVtYmVyOiAnJyxcclxuICAgICAgICAgICAgRXhwaXJhdGlvbkRhdGU6ICcnLFxyXG4gICAgICAgICAgICBDVlY6ICcnLFxyXG4gICAgICAgICAgICBCaWxsaW5nWmlwY29kZTogJydcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgIENsZWFyRmllbGRzKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib25lXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR3b1wiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aHJlZVwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3VyXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpdmVcIikudmFsdWUgPSBcIlwiO1xyXG4gICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZm9ybUNvdW50ZXIgPT09IDApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZm9ybUNvdW50ZXI6IDEgfSl9PkdPIFRPIENIRUNLIE9VVDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmZvcm1Db3VudGVyID09PSAxKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GT1JNIE9ORTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVXNlck5hbWVcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBOYW1lOiBlLnRhcmdldC52YWx1ZX0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IEVtYWlsOiAgZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFBhc3N3b3JkOiAgZS50YXJnZXQudmFsdWUgfSl9IC8+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvcm1Db3VudGVyOiAyIH0pfSB0eXBlPVwicmVzZXRcIiB2YWx1ZT1cIlJlc2V0XCI+Z28gdG8gZm9ybSB0d288L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmZvcm1Db3VudGVyID09PSAyKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rk9STSBUV088L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgIGlkPVwib25lXCIgcGxhY2Vob2xkZXI9XCJMaW5lIG9uZVwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IExpbmVPbmU6ICBlLnRhcmdldC52YWx1ZSB9KX0vPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidHdvXCIgcGxhY2Vob2xkZXI9XCJMaW5lIHR3b1wib25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgTGluZVR3bzogIGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGhyZWVcIiBwbGFjZWhvbGRlcj1cIkNpdHlcIm9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IENpdHk6ICBlLnRhcmdldC52YWx1ZSB9KX0gLz4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmb3VyXCIgcGxhY2Vob2xkZXI9XCJTdGF0ZVwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFN0YXRlOiAgZS50YXJnZXQudmFsdWUgfSl9Lz4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmaXZlXCIgcGxhY2Vob2xkZXI9XCJaaXAgQ29kZVwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFppcGNvZGU6ICBlLnRhcmdldC52YWx1ZSB9KX0vPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PnsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9ybUNvdW50ZXI6IDMgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2xlYXJGaWVsZHMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gdHlwZT1cInJlc2V0XCIgdmFsdWU9XCJSZXNldFwiPmdvIHRvIGZvcm0gdGhyZWU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZm9ybUNvdW50ZXIgPT09IDMpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZPUk0gVFdPPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkNhcmQgTnVtYmVyXCJvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBDcmVkaXRDYXJkTnVtYmVyOiAgZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRXhwaXJlIERhdGVcIm9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IEV4cGlyYXRpb25EYXRlOiAgZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ1ZWXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgQ1ZWOiAgZS50YXJnZXQudmFsdWUgfSl9Lz4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiIGJpbGxpbmcgemlwIGNvZGVcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBCaWxsaW5nWmlwY29kZTogIGUudGFyZ2V0LnZhbHVlIH0pfS8+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZm9ybUNvdW50ZXI6IDQgfSl9IHR5cGU9XCJyZXNldFwiIHZhbHVlPVwiUmVzZXRcIj5wcmV2aWV3IGluZm88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+eW91IGluZm9ybWF0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpfT5HTyBUTyBDSEVDSyBPVVQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxyXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpXHJcbi8vICAgZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXX0=