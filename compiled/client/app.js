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
                        }, 'class': 'btn btn-info' },
                    'go to form three'
                )
            ) : this.state.formCounter === 3 ? React.createElement(
                'div',
                null,
                React.createElement(
                    'h2',
                    null,
                    'FORM THREE'
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
                            });
                        }, 'class': 'btn btn-info' },
                    'preview info'
                )
            ) : React.createElement(
                'div',
                null,
                React.createElement(
                    'h2',
                    null,
                    'YOUR INFORMATION'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImZvcm1Db3VudGVyIiwiTmFtZSIsIkVtYWlsIiwiUGFzc3dvcmQiLCJMaW5lT25lIiwiTGluZVR3byIsIkNpdHkiLCJTdGF0ZSIsIlppcGNvZGUiLCJDcmVkaXRDYXJkTnVtYmVyIiwiRXhwaXJhdGlvbkRhdGUiLCJDVlYiLCJCaWxsaW5nWmlwY29kZSIsIkNsZWFyRmllbGRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwicmVuZGVyIiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJSZWFjdERPTSJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDOUJDLGtCQUFjO0FBQ1Y7QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDVEMseUJBQWEsQ0FESjtBQUVUQyxrQkFBTSxFQUZHO0FBR1RDLG1CQUFPLEVBSEU7QUFJVEMsc0JBQVUsRUFKRDtBQUtUQyxxQkFBUyxFQUxBO0FBTVRDLHFCQUFTLEVBTkE7QUFPVEMsa0JBQU0sRUFQRztBQVFUQyxtQkFBTyxFQVJFO0FBU1RDLHFCQUFTLEVBVEE7QUFVVEMsOEJBQWtCLEVBVlQ7QUFXVEMsNEJBQWdCLEVBWFA7QUFZVEMsaUJBQUssRUFaSTtBQWFUQyw0QkFBZ0I7QUFiUCxTQUFiO0FBZUg7QUFDREMsa0JBQWM7QUFDVkMsaUJBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0JDLEtBQS9CLEdBQXVDLEVBQXZDO0FBQ0FGLGlCQUFTQyxjQUFULENBQXdCLEtBQXhCLEVBQStCQyxLQUEvQixHQUF1QyxFQUF2QztBQUNBRixpQkFBU0MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ0MsS0FBakMsR0FBeUMsRUFBekM7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QUFyQixpQkFQSjtBQVFJO0FBQUE7QUFBQTtBQUFBO0FBQVcseUJBQUtQLEtBQUwsQ0FBV1E7QUFBdEIsaUJBUko7QUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFhLHlCQUFLUixLQUFMLENBQVdTO0FBQXhCLGlCQVRKO0FBVUk7QUFBQTtBQUFBO0FBQUE7QUFBc0IseUJBQUtULEtBQUwsQ0FBV1U7QUFBakMsaUJBVko7QUFXSTtBQUFBO0FBQUE7QUFBQTtBQUFvQix5QkFBS1YsS0FBTCxDQUFXVztBQUEvQixpQkFYSjtBQVlJO0FBQUE7QUFBQTtBQUFBO0FBQVMseUJBQUtYLEtBQUwsQ0FBV1k7QUFBcEIsaUJBWko7QUFhSTtBQUFBO0FBQUE7QUFBQTtBQUFvQix5QkFBS1osS0FBTCxDQUFXYTtBQUEvQixpQkFiSjtBQWNJO0FBQUE7QUFBQSxzQkFBUSxTQUFTLE1BQU0sS0FBS00sUUFBTCxDQUFjLEVBQUVsQixhQUFhLENBQWYsRUFBZCxDQUF2QixFQUEwRCxTQUFNLGNBQWhFO0FBQUE7QUFBQTtBQWRKO0FBaER4QixTQURKO0FBb0VIO0FBL0Y2Qjs7QUFrR2xDO0FBQ0E7QUFDQTJCLFNBQVNWLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkgsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QjtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZm9ybUNvdW50ZXI6IDAsXHJcbiAgICAgICAgICAgIE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBFbWFpbDogJycsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgTGluZU9uZTogJycsXHJcbiAgICAgICAgICAgIExpbmVUd286ICcnLFxyXG4gICAgICAgICAgICBDaXR5OiAnJyxcclxuICAgICAgICAgICAgU3RhdGU6ICcnLFxyXG4gICAgICAgICAgICBaaXBjb2RlOiAnJyxcclxuICAgICAgICAgICAgQ3JlZGl0Q2FyZE51bWJlcjogJycsXHJcbiAgICAgICAgICAgIEV4cGlyYXRpb25EYXRlOiAnJyxcclxuICAgICAgICAgICAgQ1ZWOiAnJyxcclxuICAgICAgICAgICAgQmlsbGluZ1ppcGNvZGU6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQ2xlYXJGaWVsZHMoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbmVcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHdvXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRocmVlXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvdXJcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZml2ZVwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5mb3JtQ291bnRlciA9PT0gMCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBmb3JtQ291bnRlcjogMSB9KX0gY2xhc3M9XCJidG4gYnRuLWluZm8gXCI+R08gVE8gQ0hFQ0sgT1VUPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZm9ybUNvdW50ZXIgPT09IDEpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5GT1JNIE9ORTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcImNsYXNzPVwiZm9ybS1ncm91cCBcIiBwbGFjZWhvbGRlcj1cIlVzZXJOYW1lXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgTmFtZTogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcImNsYXNzPVwiZm9ybS1ncm91cFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBFbWFpbDogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWdyb3VwXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX0gLz4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW5mb1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBmb3JtQ291bnRlcjogMiB9KX0gdHlwZT1cInJlc2V0XCIgdmFsdWU9XCJSZXNldFwiPmdvIHRvIGZvcm0gdHdvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5mb3JtQ291bnRlciA9PT0gMikgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5GT1JNIFRXTzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJvbmVcIiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBwbGFjZWhvbGRlcj1cIkxpbmUgb25lXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgTGluZU9uZTogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0d29cIiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBwbGFjZWhvbGRlcj1cIkxpbmUgdHdvXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgTGluZVR3bzogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aHJlZVwiY2xhc3M9XCJmb3JtLWdyb3VwXCIgcGxhY2Vob2xkZXI9XCJDaXR5XCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgQ2l0eTogZS50YXJnZXQudmFsdWUgfSl9IC8+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZm91clwiIGNsYXNzPVwiZm9ybS1ncm91cFwiIHBsYWNlaG9sZGVyPVwiU3RhdGVcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBTdGF0ZTogZS50YXJnZXQudmFsdWUgfSl9IC8+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZml2ZVwiIGNsYXNzPVwiZm9ybS1ncm91cFwiIHBsYWNlaG9sZGVyPVwiWmlwIENvZGVcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBaaXBjb2RlOiBlLnRhcmdldC52YWx1ZSB9KX0gLz4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm1Db3VudGVyOiAzIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNsZWFyRmllbGRzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCI+Z28gdG8gZm9ybSB0aHJlZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5mb3JtQ291bnRlciA9PT0gMykgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkZPUk0gVEhSRUU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBwbGFjZWhvbGRlcj1cIkNhcmQgTnVtYmVyXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgQ3JlZGl0Q2FyZE51bWJlcjogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1ncm91cFwiIHBsYWNlaG9sZGVyPVwiRXhwaXJlIERhdGVcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBFeHBpcmF0aW9uRGF0ZTogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiICBjbGFzcz1cImZvcm0tZ3JvdXBcIiBwbGFjZWhvbGRlcj1cIkNWVlwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IENWVjogZS50YXJnZXQudmFsdWUgfSl9IC8+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBwbGFjZWhvbGRlcj1cIiBiaWxsaW5nIHppcCBjb2RlXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgQmlsbGluZ1ppcGNvZGU6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtQ291bnRlcjogNCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ICBjbGFzcz1cImJ0biBidG4taW5mb1wiPnByZXZpZXcgaW5mbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPllPVVIgSU5GT1JNQVRJT048L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk5hbWU6e3RoaXMuc3RhdGUuTmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkVtYWlsOnt0aGlzLnN0YXRlLkVtYWlsfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+UGFzc3dvcmQ6e3RoaXMuc3RhdGUuUGFzc3dvcmR9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5MaW5lT25lOnt0aGlzLnN0YXRlLkxpbmVPbmV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5MaW5lVHdvOnt0aGlzLnN0YXRlLkxpbmVUd299PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5DaXR5Ont0aGlzLnN0YXRlLkNpdHl9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TdGF0ZTp7dGhpcy5zdGF0ZS5TdGF0ZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlppcGNvZGU6e3RoaXMuc3RhdGUuWmlwY29kZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkNyZWRpdENhcmROdW1iZXI6e3RoaXMuc3RhdGUuQ3JlZGl0Q2FyZE51bWJlcn08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkV4cGlyYXRpb25EYXRlOnt0aGlzLnN0YXRlLkV4cGlyYXRpb25EYXRlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q1ZWOnt0aGlzLnN0YXRlLkNWVn08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkJpbGxpbmdaaXBjb2RlOnt0aGlzLnN0YXRlLkJpbGxpbmdaaXBjb2RlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBmb3JtQ291bnRlcjogMCB9KX0gY2xhc3M9XCJidG4gYnRuLWluZm9cIj5HTyBUTyBDSEVDSyBPVVQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxyXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpXHJcbi8vICAgZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXX0=