'use strict'
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
const app=require('./app');
const config=require('./config');

const server=app.listen(config.port,function(){
    console.log('Escuchando ', server.address().port);
})
