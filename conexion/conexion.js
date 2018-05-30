const mysql=require('mysql');
const config=require('../config');

function conexion(){
    this.pool=null;
    this.inicia= function(){
        this.pool=mysql.createPool({
         connectionLimit:1000,
         host:config.host,
         user:config.user,
         password:config.password,
         database: config.database
        })
        
    }
    this.ConsultarConexion= function(callback){
        this.pool.getConnection(function(error,connection){
         callback(error,connection);
        })
    }   
    this.Query= async function(cn,sql,param){
        let promise=new Promise((resolve,reject)=>{
            if(param){
                cn.query(sql, param, function (error, respuesta) {
                     resolve(respuesta);
                })
            }else{
                cn.query(sql, function (error, respuesta) {
                     resolve(respuesta);
                })
            }
       
        }).catch(error=>{
            resolve(error);
        })
        return promise;
    }
}

module.exports=new conexion();