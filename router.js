const api=require('./modelo/api')
function http(){
    this.configurar=function(app){
        app.get('/consultarfincas/',function(solicitud, respuesta){
          api.ConsultarFincas(solicitud.params,respuesta)
        })  
        app.get('/consultarfincas/:codigo_finca',function(solicitud,respuesta){
            api.ConsultarFinca(solicitud.params,respuesta);
        })          
    }
    
}

module.exports =new http();