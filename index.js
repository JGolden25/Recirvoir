// -- Loads .env Configuration --
require('dotenv').config();

// --- Bring In Server ---
const server = require('./data/api/server');

// --- Server Port ---
const port = process.env.PORT || 7777;
app.listen(port, () => console.log(`\n===${port} is live!===\n`))
