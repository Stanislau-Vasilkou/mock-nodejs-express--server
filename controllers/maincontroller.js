const fs = require('fs');
const maincontroller = JSON.parse(fs.readFileSync('./assets/specialists.json'), 'utf-8');
const categories = JSON.parse(fs.readFileSync('./assets/categories.json'), 'utf-8');
const clients = JSON.parse(fs.readFileSync('./assets/clients.json'), 'utf-8');

exports.getAll = (req, res) => {
    res.send(maincontroller);
};

exports.getSpecialistsByCategory = (req, res) => {
    const categoryId = req.params.categoryId;
    const filteredSpecialists = maincontroller.filter((spec) => spec.categories.includes(categoryId));
    res.send(filteredSpecialists);
};

exports.getCategories = (req, res) => {
    res.send(categories);
};

exports.login = (req, res) => {
    res.send('Successful');
};

exports.verify = (req, res) => {
    const clientId = req.body.id;
    const clientPass = req.body.pass;
    const isExist = clients.some((client) => client.id === clientId && client.password === clientPass);
    isExist ? res.send('Is logged in') : res.sendStatus(404);
}