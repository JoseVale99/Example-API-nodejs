const conexion = require("../bdconfig")

async function getCategory(){
    try {
 return new Promise((resolve, reject) => {
            conexion.query('SELECT * FROM categories',
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados);
                    
                });
        });

    }catch(error){
        console.log(error);
    }
}

async function getCategoryID(id){
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
       
           }catch(error){
               console.log(error);
           }
}


module.exports ={
    getCategory : getCategory,
    getCategoryID : getCategoryID   
};