const resJson = {
	cars: ['tesla', 'audi'],
};

const rolldice = (data) => {
	const dice = Math.random(1, 100);
	if (dice > data.Probablity * 100) {
		return true;
	} else {
		return false;
	}
};

montecarloCalculator = (data) => {
	console.log('data', data);
	rollDice(data);
};

module.exports = (req, res) => {
	console.log(req.body);
	montecarloCalculator(req.body);
	res.statusCode = 200;
	res.end(JSON.stringify(resJson));
};
