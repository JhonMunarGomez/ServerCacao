const conexion=require('../conexion/conexion')
function Api(){
     this.ConsultarFincas=function(params,result){
        conexion.ConsultarConexion(function(er,cn){
            cn.query('select f.codigo_finca,f.nombre_finca, m.municipio as \'nombre_municipio\',d.departamento as \'nombre_departamento\',imagen_finca from finca f inner join municipio m on (m.id=f.codigo_municipio) inner join departamento d on(d.id=m.fk_departamento)',function(error,respuesta){
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

     this.ConsultarPerfilSensorial=function(params,result){
         conexion.ConsultarConexion(function(er,cn){
             cn.query('select *from  perfil_sensorial pf where pf.fk_finca=?',params.codigo_finca,function(error,respuesta){
                 if(error){
                      result.send(error);
                 }else{
                      result.send(respuesta)
                 }
             })
         })
     }
     this.ConsultarProduccion=function(params,result){
        conexion.ConsultarConexion(function(er,cn){
            cn.query('select  *from produccion pr inner join producto p on(p.codigo_producto=pr.codigo_producto) where pr.codigo_finca=? and pr.tipo_produccion=?;',[params.codigo_finca,params.tipo],function(error,respuesta){
                if(error){
                     result.send(error);
                }else{
                     result.send(respuesta)
                }
            })
        })
    }
     
}


module.exports=new Api()