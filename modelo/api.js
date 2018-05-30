const conexion=require('../conexion/conexion')
function Api(){
     this.ConsultarFincas=function(params,result){
        conexion.ConsultarConexion(function(er,cn){
            cn.query('select f.codigo_finca,f.nombre_finca, m.nombre_municipio,d.nombre_departamento,imagen_finca from finca f inner join municipio m on (m.codigo_municipio=f.codigo_municipio) inner join departamento d on(d.codigo_departamento=m.codigo_departamento)',function(error,respuesta){
                if(error){
                 result.send(error)
                }else{
                      result.send(respuesta)
                }
            })
        })
     }
     this.ConsultarFinca=function(params,result){
         conexion.ConsultarConexion(function(er,cn){
              cn.query('select *from finca where codigo_finca=?',params.codigo_finca,function(error,respuesta){
                  if(error){
                     result.send(error);
                  }else{
                     result.send(respuesta[0]);
                  }
              })
         })
     }
     
}


module.exports=new Api()