import database from "../db.js";

const ctrl = {};

ctrl.getProducts = (req, res) => {
    try {
        if (database.length === 0) {
            throw new Error('No hay productos en la base de datos');
        } else {
            res.json(database);
        }
    } catch (error) {
        res.json({ error: error.message });
    }
}

ctrl.postProduct = (req, res) => {

    const { name, description, price, imageUrl } = req.body;
 
    let currentId = 1;


    if (database.length > 0) {
        database.forEach(p => {
            if (p.id === currentId) {
                currentId++;
            }
        });
    }

    const newProduct = {
        id: currentId,
        name,
        description,
        price,
        imageUrl
    };

    database.push(newProduct);

    res.json({ status: 'Producto añadido' });
}

export default ctrl;