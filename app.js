const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const handle = require('./handlers');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/', routes.home);

// Handlers
app.use(handle.notFound);
app.use(handle.errors);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
	console.log(`Server started on port ${PORT}`);
});
