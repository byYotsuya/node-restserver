// =====================================
// Puerto
// =====================================

const port = process.env.PORT || 3000;


// =======================================
// ENTORNO
// =======================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ===================================================
// Vencimiento del token
// ===================================================
process.env.CADUCIDAD_TOKEN = 60 *60 *24 *30;


// ===================================================
// SEED de autenticacion
// ===================================================
process.env.SEED = process.env.SEED || 'este-es-el-seed-de-desarrollo';




// =====================
// Base de datos
// =====================
let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = process.env.MONGO_URL;
}


module.exports = {
    port,
    urlDB

};
