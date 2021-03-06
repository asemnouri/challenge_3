const express = require('express');
const mongoose = require('mongoose');
const { fOne, fTwo, fThree } = require("./db");

const dbURI = 'mongodb+srv://asemOne:asem1234@cluster0.xqniz.mongodb.net/ChallengThree?retryWrites=true&w=majority';
const connect = mongoose.connect(dbURI, {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err));

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.json());

let port = 3000;
app.get("/app", (req, res) => {
    res.sendFile(__dirname + '/./compiled/client/app.js');
});

app.post('/', (req, res) => {
    console.log(req.body);
    let data = req.body;
    let fOneObj = {
        name: data.Name,
        email: data.Email,
        password: data.Password
    };
    let fTwoObj = {
        lineOne: data.LineOne,
        lineTwo: data.LineTwo,
        city: data.City,
        state: data.State,
        zipCode: data.Zipcode
    };
    let fThreeObj = {
        card: data.CreditCardNumber,
        expDate: data.ExpirationDate,
        cvv: data.cvv,
        billingZipCode: data.BillingZipcode
    };

    let fne = new fOne(fOneObj);
    fne.save();
    let fwo = new fTwo(fTwoObj);
    fwo.save();
    let fhree = new fThree(fThreeObj);
    fhree.save();
    res.send(data);
});
app.listen(port, () => {
    console.log(`listening `);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsIm1vbmdvb3NlIiwiZk9uZSIsImZUd28iLCJmVGhyZWUiLCJkYlVSSSIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VDcmVhdGVJbmRleCIsInVzZUZpbmRBbmRNb2RpZnkiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwiYXBwIiwidXNlIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwic3RhdGljIiwiX19kaXJuYW1lIiwianNvbiIsInBvcnQiLCJnZXQiLCJyZXEiLCJyZXMiLCJzZW5kRmlsZSIsInBvc3QiLCJib2R5IiwiZGF0YSIsImZPbmVPYmoiLCJuYW1lIiwiTmFtZSIsImVtYWlsIiwiRW1haWwiLCJwYXNzd29yZCIsIlBhc3N3b3JkIiwiZlR3b09iaiIsImxpbmVPbmUiLCJMaW5lT25lIiwibGluZVR3byIsIkxpbmVUd28iLCJjaXR5IiwiQ2l0eSIsInN0YXRlIiwiU3RhdGUiLCJ6aXBDb2RlIiwiWmlwY29kZSIsImZUaHJlZU9iaiIsImNhcmQiLCJDcmVkaXRDYXJkTnVtYmVyIiwiZXhwRGF0ZSIsIkV4cGlyYXRpb25EYXRlIiwiY3Z2IiwiYmlsbGluZ1ppcENvZGUiLCJCaWxsaW5nWmlwY29kZSIsImZuZSIsInNhdmUiLCJmd28iLCJmaHJlZSIsInNlbmQiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFVBQVVDLFFBQVEsU0FBUixDQUFoQjtBQUNBLE1BQU1DLFdBQVdELFFBQVEsVUFBUixDQUFqQjtBQUNBLE1BQU0sRUFBRUUsSUFBRixFQUFRQyxJQUFSLEVBQWNDLE1BQWQsS0FBeUJKLFFBQVEsTUFBUixDQUEvQjs7QUFHQSxNQUFNSyxRQUFRLHFHQUFkO0FBQ0EsTUFBTUMsVUFBVUwsU0FBU0ssT0FBVCxDQUFpQkQsS0FBakIsRUFDWjtBQUNJRSxxQkFBaUIsSUFEckIsRUFDMkJDLG9CQUFvQixJQUQvQztBQUVJQyxvQkFBZ0IsSUFGcEIsRUFFMEJDLGtCQUFrQjtBQUY1QyxDQURZLEVBS1hDLElBTFcsQ0FLTixNQUFNQyxRQUFRQyxHQUFSLENBQVksc0JBQVosQ0FMQSxFQU1YQyxLQU5XLENBTUxDLE9BQU9ILFFBQVFDLEdBQVIsQ0FBWUUsR0FBWixDQU5GLENBQWhCOztBQVFBLElBQUlDLE1BQU1qQixTQUFWOztBQUVBaUIsSUFBSUMsR0FBSixDQUFRbEIsUUFBUW1CLFVBQVIsQ0FBbUIsRUFBRUMsVUFBVSxJQUFaLEVBQW5CLENBQVI7QUFDQUgsSUFBSUMsR0FBSixDQUFRbEIsUUFBUXFCLE1BQVIsQ0FBZUMsWUFBWSxTQUEzQixDQUFSO0FBQ0FMLElBQUlDLEdBQUosQ0FBUWxCLFFBQVF1QixJQUFSLEVBQVI7O0FBR0EsSUFBSUMsT0FBTyxJQUFYO0FBQ0FQLElBQUlRLEdBQUosQ0FBUSxNQUFSLEVBQWdCLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQzFCQSxRQUFJQyxRQUFKLENBQWFOLFlBQVksMkJBQXpCO0FBQ0gsQ0FGRDs7QUFLQUwsSUFBSVksSUFBSixDQUFTLEdBQVQsRUFBYyxDQUFDSCxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUN4QmQsWUFBUUMsR0FBUixDQUFZWSxJQUFJSSxJQUFoQjtBQUNBLFFBQUlDLE9BQU9MLElBQUlJLElBQWY7QUFDQSxRQUFJRSxVQUFVO0FBQ1ZDLGNBQU1GLEtBQUtHLElBREQ7QUFFVkMsZUFBT0osS0FBS0ssS0FGRjtBQUdWQyxrQkFBVU4sS0FBS087QUFITCxLQUFkO0FBS0EsUUFBSUMsVUFBVTtBQUNWQyxpQkFBU1QsS0FBS1UsT0FESjtBQUVWQyxpQkFBU1gsS0FBS1ksT0FGSjtBQUdWQyxjQUFNYixLQUFLYyxJQUhEO0FBSVZDLGVBQU9mLEtBQUtnQixLQUpGO0FBS1ZDLGlCQUFTakIsS0FBS2tCO0FBTEosS0FBZDtBQU9BLFFBQUlDLFlBQVk7QUFDWkMsY0FBTXBCLEtBQUtxQixnQkFEQztBQUVaQyxpQkFBU3RCLEtBQUt1QixjQUZGO0FBR1pDLGFBQUt4QixLQUFLd0IsR0FIRTtBQUlaQyx3QkFBZ0J6QixLQUFLMEI7QUFKVCxLQUFoQjs7QUFPQSxRQUFJQyxNQUFNLElBQUl2RCxJQUFKLENBQVM2QixPQUFULENBQVY7QUFDQTBCLFFBQUlDLElBQUo7QUFDQSxRQUFJQyxNQUFNLElBQUl4RCxJQUFKLENBQVNtQyxPQUFULENBQVY7QUFDQXFCLFFBQUlELElBQUo7QUFDQSxRQUFJRSxRQUFRLElBQUl4RCxNQUFKLENBQVc2QyxTQUFYLENBQVo7QUFDQVcsVUFBTUYsSUFBTjtBQUNBaEMsUUFBSW1DLElBQUosQ0FBUy9CLElBQVQ7QUFFSCxDQTlCRDtBQStCQWQsSUFBSThDLE1BQUosQ0FBV3ZDLElBQVgsRUFBaUIsTUFBTTtBQUNuQlgsWUFBUUMsR0FBUixDQUFhLFlBQWI7QUFDSCxDQUZEIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuY29uc3QgeyBmT25lLCBmVHdvLCBmVGhyZWUgfSA9IHJlcXVpcmUoXCIuL2RiXCIpXHJcblxyXG5cclxuY29uc3QgZGJVUkkgPSAnbW9uZ29kYitzcnY6Ly9hc2VtT25lOmFzZW0xMjM0QGNsdXN0ZXIwLnhxbml6Lm1vbmdvZGIubmV0L0NoYWxsZW5nVGhyZWU/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5J1xyXG5jb25zdCBjb25uZWN0ID0gbW9uZ29vc2UuY29ubmVjdChkYlVSSSxcclxuICAgIHtcclxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSwgdXNlRmluZEFuZE1vZGlmeTogZmFsc2VcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnTW9uZ29EQiBDb25uZWN0ZWQuLi4nKSlcclxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcblxyXG5sZXQgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSlcclxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhfX2Rpcm5hbWUgKyAnL3B1YmxpYycpKVxyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKVxyXG5cclxuXHJcbmxldCBwb3J0ID0gMzAwMDtcclxuYXBwLmdldChcIi9hcHBcIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICByZXMuc2VuZEZpbGUoX19kaXJuYW1lICsgJy8uL2NvbXBpbGVkL2NsaWVudC9hcHAuanMnKVxyXG59KVxyXG5cclxuXHJcbmFwcC5wb3N0KCcvJywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keSlcclxuICAgIGxldCBkYXRhID0gcmVxLmJvZHk7XHJcbiAgICBsZXQgZk9uZU9iaiA9IHtcclxuICAgICAgICBuYW1lOiBkYXRhLk5hbWUsXHJcbiAgICAgICAgZW1haWw6IGRhdGEuRW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IGRhdGEuUGFzc3dvcmRcclxuICAgIH1cclxuICAgIGxldCBmVHdvT2JqID0ge1xyXG4gICAgICAgIGxpbmVPbmU6IGRhdGEuTGluZU9uZSxcclxuICAgICAgICBsaW5lVHdvOiBkYXRhLkxpbmVUd28sXHJcbiAgICAgICAgY2l0eTogZGF0YS5DaXR5LFxyXG4gICAgICAgIHN0YXRlOiBkYXRhLlN0YXRlLFxyXG4gICAgICAgIHppcENvZGU6IGRhdGEuWmlwY29kZSxcclxuICAgIH1cclxuICAgIGxldCBmVGhyZWVPYmogPSB7XHJcbiAgICAgICAgY2FyZDogZGF0YS5DcmVkaXRDYXJkTnVtYmVyLCBcclxuICAgICAgICBleHBEYXRlOiBkYXRhLkV4cGlyYXRpb25EYXRlLFxyXG4gICAgICAgIGN2djogZGF0YS5jdnYsXHJcbiAgICAgICAgYmlsbGluZ1ppcENvZGU6IGRhdGEuQmlsbGluZ1ppcGNvZGVcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZm5lID0gbmV3IGZPbmUoZk9uZU9iailcclxuICAgIGZuZS5zYXZlKClcclxuICAgIGxldCBmd28gPSBuZXcgZlR3byhmVHdvT2JqKVxyXG4gICAgZndvLnNhdmUoKVxyXG4gICAgbGV0IGZocmVlID0gbmV3IGZUaHJlZShmVGhyZWVPYmopXHJcbiAgICBmaHJlZS5zYXZlKClcclxuICAgIHJlcy5zZW5kKGRhdGEpXHJcblxyXG59KVxyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBsaXN0ZW5pbmcgYCk7XHJcbn0pO1xyXG4iXX0=