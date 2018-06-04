const api=require('./modelo/api')
function http(){
    this.configurar=function(app){
        app.get('/consultarfincas/',function(solicitud, respuesta){
          api.ConsultarFincas(solicitud.params,respuesta)
        })  
        app.get('/consultarfincas/:codigo_finca',function(solicitud,respuesta){
            api.ConsultarFinca(solicitud.params,respuesta);
        })  
        app.get('/consultarperfilsensorial/:codigo_finca',function(solicitud,respuesta){
            api.ConsultarPerfilSensorial(solicitud.params,respuesta);
        })
        app.get('/consultarproduccion/:codigo_finca&&:tipo',function(solicitud,respuesta){
              api.ConsultarProduccion(solicitud.params,respuesta);
        })
   
    }
    
}

module.exports =new http();