exports.accessToken = async (req, res) => {
	res.status(200).json({ access_token: req.access_token });
};
