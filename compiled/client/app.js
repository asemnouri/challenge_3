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
                { onClick: () => this.setState({ formCounter: 1 }), 'class': 'btn btn-info ' },
                'GO TO CHECK OUT'
            ) : this.state.formCounter === 1 ? React.createElement(
                'form',
                null,
                React.createElement(
                    'h2',
                    null,
                    'FORM ONE'
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', 'class': 'form-group ', placeholder: 'UserName', onChange: e => this.setState({ Name: e.target.value }) })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', 'class': 'form-group', placeholder: 'Email', onChange: e => this.setState({ Email: e.target.value }) })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'password', 'class': 'form-group', placeholder: 'Password', onChange: e => this.setState({ Password: e.target.value }) }),
                    ' '
                ),
                React.createElement(
                    'button',
                    { 'class': 'btn btn-info', onClick: () => this.setState({ formCounter: 2 }), type: 'reset', value: 'Reset' },
                    'go to form two'
                )
            ) : this.state.formCounter === 2 ? React.createElement(
                'div',
                null,
                React.createElement(
                    'h2',
                    null,
                    'FORM TWO'
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', id: 'one', 'class': 'form-group', placeholder: 'Line one', onChange: e => this.setState({ LineOne: e.target.value }) })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', id: 'two', 'class': 'form-group', placeholder: 'Line two', onChange: e => this.setState({ LineTwo: e.target.value }) })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', id: 'three', 'class': 'form-group', placeholder: 'City', onChange: e => this.setState({ City: e.target.value }) }),
                    ' '
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', id: 'four', 'class': 'form-group', placeholder: 'State', onChange: e => this.setState({ State: e.target.value }) }),
                    ' '
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', id: 'five', 'class': 'form-group', placeholder: 'Zip Code', onChange: e => this.setState({ Zipcode: e.target.value }) }),
                    ' '
                ),
                React.createElement(
                    'button',
                    { onClick: () => {
                            this.setState({ formCounter: 3 });
                            this.ClearFields();
                        }, type: 'reset', value: 'Reset', 'class': 'btn btn-info' },
                    'go to form three'
                )
            ) : this.state.formCounter === 3 ? React.createElement(
                'div',
                null,
                React.createElement(
                    'h2',
                    null,
                    'FORM TWO'
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', 'class': 'form-group', placeholder: 'Card Number', onChange: e => this.setState({ CreditCardNumber: e.target.value }) })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', 'class': 'form-group', placeholder: 'Expire Date', onChange: e => this.setState({ ExpirationDate: e.target.value }) })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', 'class': 'form-group', placeholder: 'CVV', onChange: e => this.setState({ CVV: e.target.value }) }),
                    ' '
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', 'class': 'form-group', placeholder: ' billing zip code', onChange: e => this.setState({ BillingZipcode: e.target.value }) }),
                    ' '
                ),
                React.createElement(
                    'button',
                    { onClick: () => {
                            this.setState({ formCounter: 4 });
                            fetch("http://localhost:3000/", {
                                method: "POST",
                                body: JSON.stringify(this.state),
                                headers: {
                                    "Content-type": "application/json; charset=UTF-8"
                                }
                            }).then(response => response.json()).then(json => console.log(json));
                        }, type: 'reset', value: 'Reset', 'class': 'btn btn-info' },
                    'preview info'
                )
            ) : React.createElement(
                'div',
                null,
                React.createElement(
                    'h2',
                    null,
                    'you information'
                ),
                React.createElement(
                    'h3',
                    null,
                    'Name:',
                    this.state.Name
                ),
                React.createElement(
                    'h3',
                    null,
                    'Email:',
                    this.state.Email
                ),
                React.createElement(
                    'h3',
                    null,
                    'Password:',
                    this.state.Password
                ),
                React.createElement(
                    'h3',
                    null,
                    'LineOne:',
                    this.state.LineOne
                ),
                React.createElement(
                    'h3',
                    null,
                    'LineTwo:',
                    this.state.LineTwo
                ),
                React.createElement(
                    'h3',
                    null,
                    'City:',
                    this.state.City
                ),
                React.createElement(
                    'h3',
                    null,
                    'State:',
                    this.state.State
                ),
                React.createElement(
                    'h3',
                    null,
                    'Zipcode:',
                    this.state.Zipcode
                ),
                React.createElement(
                    'h3',
                    null,
                    'CreditCardNumber:',
                    this.state.CreditCardNumber
                ),
                React.createElement(
                    'h3',
                    null,
                    'ExpirationDate:',
                    this.state.ExpirationDate
                ),
                React.createElement(
                    'h3',
                    null,
                    'CVV:',
                    this.state.CVV
                ),
                React.createElement(
                    'h3',
                    null,
                    'BillingZipcode:',
                    this.state.BillingZipcode
                ),
                React.createElement(
                    'button',
                    { onClick: () => this.setState({ formCounter: 0 }), 'class': 'btn btn-info' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImZvcm1Db3VudGVyIiwiTmFtZSIsIkVtYWlsIiwiUGFzc3dvcmQiLCJMaW5lT25lIiwiTGluZVR3byIsIkNpdHkiLCJTdGF0ZSIsIlppcGNvZGUiLCJDcmVkaXRDYXJkTnVtYmVyIiwiRXhwaXJhdGlvbkRhdGUiLCJDVlYiLCJCaWxsaW5nWmlwY29kZSIsIkNsZWFyRmllbGRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwicmVuZGVyIiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIlJlYWN0RE9NIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQzlCQyxrQkFBYztBQUNWO0FBQ0EsYUFBS0MsS0FBTCxHQUFhO0FBQ1RDLHlCQUFhLENBREo7QUFFVEMsa0JBQU0sRUFGRztBQUdUQyxtQkFBTyxFQUhFO0FBSVRDLHNCQUFVLEVBSkQ7QUFLVEMscUJBQVMsRUFMQTtBQU1UQyxxQkFBUyxFQU5BO0FBT1RDLGtCQUFNLEVBUEc7QUFRVEMsbUJBQU8sRUFSRTtBQVNUQyxxQkFBUyxFQVRBO0FBVVRDLDhCQUFrQixFQVZUO0FBV1RDLDRCQUFnQixFQVhQO0FBWVRDLGlCQUFLLEVBWkk7QUFhVEMsNEJBQWdCOztBQWJQLFNBQWI7QUFnQkg7QUFDREMsa0JBQWM7QUFDVkMsaUJBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0JDLEtBQS9CLEdBQXVDLEVBQXZDO0FBQ0FGLGlCQUFTQyxjQUFULENBQXdCLEtBQXhCLEVBQStCQyxLQUEvQixHQUF1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O0FBQXRCLGlCQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBYyx5QkFBS0gsS0FBTCxDQUFXSTtBQUF6QixpQkFKSjtBQUtJO0FBQUE7QUFBQTtBQUFBO0FBQWEseUJBQUtKLEtBQUwsQ0FBV0s7QUFBeEIsaUJBTEo7QUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFhLHlCQUFLTCxLQUFMLENBQVdNO0FBQXhCLGlCQU5KO0FBT0k7QUFBQTtBQUFBO0FBQUE7QUFBVSx5QkFBS04sS0FBTCxDQUFXTztBQUFyQixpQkFQSjtBQVFJO0FBQUE7QUFBQTtBQUFBO0FBQVcseUJBQUtQLEtBQUwsQ0FBV1E7QUFBdEIsaUJBUko7QUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFhLHlCQUFLUixLQUFMLENBQVdTO0FBQXhCLGlCQVRKO0FBVUk7QUFBQTtBQUFBO0FBQUE7QUFBc0IseUJBQUtULEtBQUwsQ0FBV1U7QUFBakMsaUJBVko7QUFXSTtBQUFBO0FBQUE7QUFBQTtBQUFvQix5QkFBS1YsS0FBTCxDQUFXVztBQUEvQixpQkFYSjtBQVlJO0FBQUE7QUFBQTtBQUFBO0FBQVMseUJBQUtYLEtBQUwsQ0FBV1k7QUFBcEIsaUJBWko7QUFhSTtBQUFBO0FBQUE7QUFBQTtBQUFvQix5QkFBS1osS0FBTCxDQUFXYTtBQUEvQixpQkFiSjtBQWNJO0FBQUE7QUFBQSxzQkFBUSxTQUFTLE1BQU0sS0FBS00sUUFBTCxDQUFjLEVBQUVsQixhQUFhLENBQWYsRUFBZCxDQUF2QixFQUEwRCxTQUFNLGNBQWhFO0FBQUE7QUFBQTtBQWRKO0FBbER4QixTQURKO0FBc0VIO0FBbEc2Qjs7QUFxR2xDO0FBQ0E7QUFDQWdDLFNBQVNmLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkgsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QjtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi9jb21waWxlZC9jbGllbnQvY29tcG9uZW50cy9ob21lUGFnZS5qc1wiXHJcbi8vIGltcG9ydCB7Um91dGUsIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbi8vIHZhciB7IFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIGhhc2hIaXN0b3J5LCBJbmRleExpbmssIExpbmssIGJyb3dzZXJIaXN0b3J5IH0gPSBSZWFjdFJvdXRlclxyXG4vLyBcclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBmb3JtQ291bnRlcjogMCxcclxuICAgICAgICAgICAgTmFtZTogJycsXHJcbiAgICAgICAgICAgIEVtYWlsOiAnJyxcclxuICAgICAgICAgICAgUGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgICBMaW5lT25lOiAnJyxcclxuICAgICAgICAgICAgTGluZVR3bzogJycsXHJcbiAgICAgICAgICAgIENpdHk6ICcnLFxyXG4gICAgICAgICAgICBTdGF0ZTogJycsXHJcbiAgICAgICAgICAgIFppcGNvZGU6ICcnLFxyXG4gICAgICAgICAgICBDcmVkaXRDYXJkTnVtYmVyOiAnJyxcclxuICAgICAgICAgICAgRXhwaXJhdGlvbkRhdGU6ICcnLFxyXG4gICAgICAgICAgICBDVlY6ICcnLFxyXG4gICAgICAgICAgICBCaWxsaW5nWmlwY29kZTogJydcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQ2xlYXJGaWVsZHMoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbmVcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHdvXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRocmVlXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvdXJcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZml2ZVwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5mb3JtQ291bnRlciA9PT0gMCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBmb3JtQ291bnRlcjogMSB9KX0gY2xhc3M9XCJidG4gYnRuLWluZm8gXCI+R08gVE8gQ0hFQ0sgT1VUPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZm9ybUNvdW50ZXIgPT09IDEpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5GT1JNIE9ORTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcImNsYXNzPVwiZm9ybS1ncm91cCBcIiBwbGFjZWhvbGRlcj1cIlVzZXJOYW1lXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgTmFtZTogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcImNsYXNzPVwiZm9ybS1ncm91cFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBFbWFpbDogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWdyb3VwXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX0gLz4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW5mb1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBmb3JtQ291bnRlcjogMiB9KX0gdHlwZT1cInJlc2V0XCIgdmFsdWU9XCJSZXNldFwiPmdvIHRvIGZvcm0gdHdvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5mb3JtQ291bnRlciA9PT0gMikgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5GT1JNIFRXTzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJvbmVcIiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBwbGFjZWhvbGRlcj1cIkxpbmUgb25lXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgTGluZU9uZTogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0d29cIiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBwbGFjZWhvbGRlcj1cIkxpbmUgdHdvXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgTGluZVR3bzogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aHJlZVwiY2xhc3M9XCJmb3JtLWdyb3VwXCIgcGxhY2Vob2xkZXI9XCJDaXR5XCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgQ2l0eTogZS50YXJnZXQudmFsdWUgfSl9IC8+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZm91clwiIGNsYXNzPVwiZm9ybS1ncm91cFwiIHBsYWNlaG9sZGVyPVwiU3RhdGVcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBTdGF0ZTogZS50YXJnZXQudmFsdWUgfSl9IC8+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZml2ZVwiIGNsYXNzPVwiZm9ybS1ncm91cFwiIHBsYWNlaG9sZGVyPVwiWmlwIENvZGVcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBaaXBjb2RlOiBlLnRhcmdldC52YWx1ZSB9KX0gLz4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm1Db3VudGVyOiAzIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNsZWFyRmllbGRzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gdHlwZT1cInJlc2V0XCIgdmFsdWU9XCJSZXNldFwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCI+Z28gdG8gZm9ybSB0aHJlZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5mb3JtQ291bnRlciA9PT0gMykgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkZPUk0gVFdPPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWdyb3VwXCIgcGxhY2Vob2xkZXI9XCJDYXJkIE51bWJlclwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IENyZWRpdENhcmROdW1iZXI6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBwbGFjZWhvbGRlcj1cIkV4cGlyZSBEYXRlXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgRXhwaXJhdGlvbkRhdGU6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiAgY2xhc3M9XCJmb3JtLWdyb3VwXCIgcGxhY2Vob2xkZXI9XCJDVlZcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBDVlY6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWdyb3VwXCIgcGxhY2Vob2xkZXI9XCIgYmlsbGluZyB6aXAgY29kZVwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IEJpbGxpbmdaaXBjb2RlOiBlLnRhcmdldC52YWx1ZSB9KX0gLz4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9ybUNvdW50ZXI6IDQgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiBjb25zb2xlLmxvZyhqc29uKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IHR5cGU9XCJyZXNldFwiIHZhbHVlPVwiUmVzZXRcIiBjbGFzcz1cImJ0biBidG4taW5mb1wiPnByZXZpZXcgaW5mbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnlvdSBpbmZvcm1hdGlvbjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+TmFtZTp7dGhpcy5zdGF0ZS5OYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+RW1haWw6e3RoaXMuc3RhdGUuRW1haWx9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5QYXNzd29yZDp7dGhpcy5zdGF0ZS5QYXNzd29yZH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkxpbmVPbmU6e3RoaXMuc3RhdGUuTGluZU9uZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkxpbmVUd286e3RoaXMuc3RhdGUuTGluZVR3b308L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkNpdHk6e3RoaXMuc3RhdGUuQ2l0eX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlN0YXRlOnt0aGlzLnN0YXRlLlN0YXRlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+WmlwY29kZTp7dGhpcy5zdGF0ZS5aaXBjb2RlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q3JlZGl0Q2FyZE51bWJlcjp7dGhpcy5zdGF0ZS5DcmVkaXRDYXJkTnVtYmVyfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+RXhwaXJhdGlvbkRhdGU6e3RoaXMuc3RhdGUuRXhwaXJhdGlvbkRhdGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5DVlY6e3RoaXMuc3RhdGUuQ1ZWfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+QmlsbGluZ1ppcGNvZGU6e3RoaXMuc3RhdGUuQmlsbGluZ1ppcGNvZGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvcm1Db3VudGVyOiAwIH0pfSBjbGFzcz1cImJ0biBidG4taW5mb1wiPkdPIFRPIENIRUNLIE9VVDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXHJcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSlcclxuLy8gICBleHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdfQ==