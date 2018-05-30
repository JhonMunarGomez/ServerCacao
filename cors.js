function AllowCrossDomain(){
    this.permisos=function(req,res,next){
     var whileList=['*'];
    
     var origen=req.headers.origin;
     if(whileList.indexOf(origen)>=-1){
           res.header('Access-Control-Allow-Origin',origen);
     }
     
     res.header('Access-Control-Allow-Headers','Content-Type, Access-Control-Allow-Headers,Authorization,X-Requested-With');
     res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
     res.header("Access-Control-Allow-Credentials", true);
     next(); 
 }
}
module.exports =new AllowCrossDomain();