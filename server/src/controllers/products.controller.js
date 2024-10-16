import database from "../db.js";

const ctrl = {};

ctrl.getProducts = (req, res) => {
    res.json(database);
}

export default ctrl;