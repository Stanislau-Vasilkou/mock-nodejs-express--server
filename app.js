const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controllers/maincontroller');
const app = express();
const port = 4200;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   next();
// });

app.get('/specialist', controller.getAll);
app.post('/specialist', controller.getAll);
app.get('/specialist/category', controller.getSpecialistsByCategory);
app.get('/categories', controller.getCategories);
app.post('/login', controller.login);
app.post('/verify', controller.verify);

app.listen(port, () => console.log(`Server was started on port ${port}`));