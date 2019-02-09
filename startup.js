const mongoose = require('mongoose');

module.exports = () => {

    const dbDetails = {
        user: process.env.DB_USER || 'twenty_four_seven_admin',
        password: process.env.DB_PASSWORD || 'hakuna_matata_123',
        host: 'ds046037.mlab.com',
        port: 46037,
        name: 'twenty_four_seven_db'
    }

    mongoose.connect(`mongodb://${dbDetails.user}:${dbDetails.password}@${dbDetails.host}:${dbDetails.port}/${dbDetails.name}`, () => {
        console.log('[OK] mongo db connected')
    });

}