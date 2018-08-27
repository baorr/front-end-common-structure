const serviceRequest = require('../service/invite');
const invte = async function (req, res) {
	const q = req.query;
	console.log(req);
    const result = await serviceRequest(q);
    res.status(result.code).send(result.message);
};

module.exports = invte;
