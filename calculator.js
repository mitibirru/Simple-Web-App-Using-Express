const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
	const num1 = Number(req.body.num1);
	const num2 = Number(req.body.num2);
	const result = num1 + num2;

	res.send('The result of your calculation is ' + result);
});

app.get('/bmiCalculator', function (req, res) {
	res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmiCalculator', function (req, res) {
	const weight = Number(req.body.weight);
	const height = Number(req.body.height) / 100;

	const result = weight / (height * height);

	res.send('Your BMI is ' + result);
});

app.listen(port, function () {
	console.log('Server is running on port 300');
});
