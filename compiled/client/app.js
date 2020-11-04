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
                    'h2',
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
                    'h2',
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
                    'h2',
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
                                body: JSON.stringify(this.state),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImZvcm1Db3VudGVyIiwiTmFtZSIsIkVtYWlsIiwiUGFzc3dvcmQiLCJMaW5lT25lIiwiTGluZVR3byIsIkNpdHkiLCJTdGF0ZSIsIlppcGNvZGUiLCJDcmVkaXRDYXJkTnVtYmVyIiwiRXhwaXJhdGlvbkRhdGUiLCJDVlYiLCJCaWxsaW5nWmlwY29kZSIsIkNsZWFyRmllbGRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwic2F2ZVRvRGF0YUJhc2UiLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwic3VjY2Vzc0NCIiwicmVuZGVyIiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIlJlYWN0RE9NIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQzlCQyxrQkFBYztBQUNWO0FBQ0EsYUFBS0MsS0FBTCxHQUFhO0FBQ1RDLHlCQUFhLENBREo7QUFFVEMsa0JBQU0sRUFGRztBQUdUQyxtQkFBTyxFQUhFO0FBSVRDLHNCQUFVLEVBSkQ7QUFLVEMscUJBQVMsRUFMQTtBQU1UQyxxQkFBUyxFQU5BO0FBT1RDLGtCQUFNLEVBUEc7QUFRVEMsbUJBQU8sRUFSRTtBQVNUQyxxQkFBUyxFQVRBO0FBVVRDLDhCQUFrQixFQVZUO0FBV1RDLDRCQUFnQixFQVhQO0FBWVRDLGlCQUFLLEVBWkk7QUFhVEMsNEJBQWdCOztBQWJQLFNBQWI7QUFnQkg7QUFDREMsa0JBQWM7QUFDVkMsaUJBQVNDLGNBQVQs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QTtBQUFBO0FBQWMseUJBQUtILEtBQUwsQ0FBV0k7QUFBekIsaUJBSko7QUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFhLHlCQUFLSixLQUFMLENBQVdLO0FBQXhCLGlCQUxKO0FBTUk7QUFBQTtBQUFBO0FBQUE7QUFBYSx5QkFBS0wsS0FBTCxDQUFXTTtBQUF4QixpQkFOSjtBQU9JO0FBQUE7QUFBQTtBQUFBO0FBQVUseUJBQUtOLEtBQUwsQ0FBV087QUFBckIsaUJBUEo7QUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFXLHlCQUFLUCxLQUFMLENBQVdRO0FBQXRCLGlCQVJKO0FBU0k7QUFBQTtBQUFBO0FBQUE7QUFBYSx5QkFBS1IsS0FBTCxDQUFXUztBQUF4QixpQkFUSjtBQVVJO0FBQUE7QUFBQTtBQUFBO0FBQXNCLHlCQUFLVCxLQUFMLENBQVdVO0FBQWpDLGlCQVZKO0FBV0k7QUFBQTtBQUFBO0FBQUE7QUFBb0IseUJBQUtWLEtBQUwsQ0FBV1c7QUFBL0IsaUJBWEo7QUFZSTtBQUFBO0FBQUE7QUFBQTtBQUFTLHlCQUFLWCxLQUFMLENBQVdZO0FBQXBCLGlCQVpKO0FBYUk7QUFBQTtBQUFBO0FBQUE7QUFBb0IseUJBQUtaLEtBQUwsQ0FBV2E7QUFBL0IsaUJBYko7QUFjSTtBQUFBO0FBQUEsc0JBQVEsU0FBUyxNQUFNLEtBQUtlLFFBQUwsQ0FBYyxFQUFFM0IsYUFBYSxDQUFmLEVBQWQsQ0FBdkI7QUFBQTtBQUFBO0FBZEo7QUFqRHhCLFNBREo7QUFxRUg7QUE1RzZCOztBQStHbEM7QUFDQTtBQUNBeUMsU0FBU2YsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCWixTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL2NvbXBpbGVkL2NsaWVudC9jb21wb25lbnRzL2hvbWVQYWdlLmpzXCJcclxuLy8gaW1wb3J0IHtSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuLy8gdmFyIHsgUm91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSwgaGFzaEhpc3RvcnksIEluZGV4TGluaywgTGluaywgYnJvd3Nlckhpc3RvcnkgfSA9IFJlYWN0Um91dGVyXHJcbi8vIFxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGZvcm1Db3VudGVyOiAwLFxyXG4gICAgICAgICAgICBOYW1lOiAnJyxcclxuICAgICAgICAgICAgRW1haWw6ICcnLFxyXG4gICAgICAgICAgICBQYXNzd29yZDogJycsXHJcbiAgICAgICAgICAgIExpbmVPbmU6ICcnLFxyXG4gICAgICAgICAgICBMaW5lVHdvOiAnJyxcclxuICAgICAgICAgICAgQ2l0eTogJycsXHJcbiAgICAgICAgICAgIFN0YXRlOiAnJyxcclxuICAgICAgICAgICAgWmlwY29kZTogJycsXHJcbiAgICAgICAgICAgIENyZWRpdENhcmROdW1iZXI6ICcnLFxyXG4gICAgICAgICAgICBFeHBpcmF0aW9uRGF0ZTogJycsXHJcbiAgICAgICAgICAgIENWVjogJycsXHJcbiAgICAgICAgICAgIEJpbGxpbmdaaXBjb2RlOiAnJ1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBDbGVhckZpZWxkcygpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9uZVwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0d29cIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhyZWVcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm91clwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXZlXCIpLnZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlVG9EYXRhQmFzZSgpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3NDQixcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5mb3JtQ291bnRlciA9PT0gMCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBmb3JtQ291bnRlcjogMSB9KX0+R08gVE8gQ0hFQ0sgT1VUPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZm9ybUNvdW50ZXIgPT09IDEpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5GT1JNIE9ORTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlVzZXJOYW1lXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgTmFtZTogZS50YXJnZXQudmFsdWUgfSl9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgRW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBQYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9IC8+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvcm1Db3VudGVyOiAyIH0pfSB0eXBlPVwicmVzZXRcIiB2YWx1ZT1cIlJlc2V0XCI+Z28gdG8gZm9ybSB0d288L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmZvcm1Db3VudGVyID09PSAyKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkZPUk0gVFdPPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm9uZVwiIHBsYWNlaG9sZGVyPVwiTGluZSBvbmVcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBMaW5lT25lOiBlLnRhcmdldC52YWx1ZSB9KX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInR3b1wiIHBsYWNlaG9sZGVyPVwiTGluZSB0d29cIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBMaW5lVHdvOiBlLnRhcmdldC52YWx1ZSB9KX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRocmVlXCIgcGxhY2Vob2xkZXI9XCJDaXR5XCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgQ2l0eTogZS50YXJnZXQudmFsdWUgfSl9IC8+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZm91clwiIHBsYWNlaG9sZGVyPVwiU3RhdGVcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBTdGF0ZTogZS50YXJnZXQudmFsdWUgfSl9IC8+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZml2ZVwiIHBsYWNlaG9sZGVyPVwiWmlwIENvZGVcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBaaXBjb2RlOiBlLnRhcmdldC52YWx1ZSB9KX0gLz4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm1Db3VudGVyOiAzIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNsZWFyRmllbGRzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gdHlwZT1cInJlc2V0XCIgdmFsdWU9XCJSZXNldFwiPmdvIHRvIGZvcm0gdGhyZWU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZm9ybUNvdW50ZXIgPT09IDMpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5GT1JNIFRXTzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ2FyZCBOdW1iZXJcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBDcmVkaXRDYXJkTnVtYmVyOiBlLnRhcmdldC52YWx1ZSB9KX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFeHBpcmUgRGF0ZVwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IEV4cGlyYXRpb25EYXRlOiBlLnRhcmdldC52YWx1ZSB9KX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDVlZcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBDVlY6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIgYmlsbGluZyB6aXAgY29kZVwiIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IEJpbGxpbmdaaXBjb2RlOiBlLnRhcmdldC52YWx1ZSB9KX0gLz4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9ybUNvdW50ZXI6IDQgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiBjb25zb2xlLmxvZyhqc29uKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IHR5cGU9XCJyZXNldFwiIHZhbHVlPVwiUmVzZXRcIj5wcmV2aWV3IGluZm88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj55b3UgaW5mb3JtYXRpb248L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk5hbWU6e3RoaXMuc3RhdGUuTmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkVtYWlsOnt0aGlzLnN0YXRlLkVtYWlsfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+UGFzc3dvcmQ6e3RoaXMuc3RhdGUuUGFzc3dvcmR9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5MaW5lT25lOnt0aGlzLnN0YXRlLkxpbmVPbmV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5MaW5lVHdvOnt0aGlzLnN0YXRlLkxpbmVUd299PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5DaXR5Ont0aGlzLnN0YXRlLkNpdHl9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TdGF0ZTp7dGhpcy5zdGF0ZS5TdGF0ZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlppcGNvZGU6e3RoaXMuc3RhdGUuWmlwY29kZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkNyZWRpdENhcmROdW1iZXI6e3RoaXMuc3RhdGUuQ3JlZGl0Q2FyZE51bWJlcn08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkV4cGlyYXRpb25EYXRlOnt0aGlzLnN0YXRlLkV4cGlyYXRpb25EYXRlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q1ZWOnt0aGlzLnN0YXRlLkNWVn08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkJpbGxpbmdaaXBjb2RlOnt0aGlzLnN0YXRlLkJpbGxpbmdaaXBjb2RlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBmb3JtQ291bnRlcjogMCB9KX0+R08gVE8gQ0hFQ0sgT1VUPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcclxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcclxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKVxyXG4vLyAgIGV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl19