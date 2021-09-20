const conexion = require("../bdconfig")

async function getCategory() {
    try {
        return new Promise((resolve, reject) => {
            conexion.query('SELECT * FROM categories',
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados);

                });
        });

    } catch (error) {
        console.log(error);
    }
}

async function getCategoryID(id) {
    try {
        return new Promise((resolve, reject) => {
            conexion.query(`SELECT * FROM categories WHERE id = ?`,
                [id],
                (err, resultados) => {
                    if (err) reject(err);
                    else
                        resolve(resultados);
                    console.log(resultados);
                });
        });

    } catch (error) {
        console.log(error);
    }
}
async function createCategory(cat_name, cat_obs) {
    try {
        return new Promise((resolve, reject) => {
            conexion.query(`INSERT INTO categories
        (cat_name, cat_obs)
        values
        (?, ?)`,
                [cat_name, cat_obs], (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados.insertId);
                });
        });
    } catch (error) {
        console.log(error);
    }
}
async function updateCategory(id, cat_name, cat_obs){
    try {
        return new Promise((resolve, reject) => {
            conexion.query(`UPDATE categories 
            set cat_name = ?,
            cat_obs = ?
            where id = ?`,
                [cat_name, cat_obs, id],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                });
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getCategory: getCategory,
    getCategoryID: getCategoryID,
    createCategory: createCategory,
    updateCategory: updateCategory
};