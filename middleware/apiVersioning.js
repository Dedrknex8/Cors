
const urlVersoning = (version) => (req,res,next)=>{
    if(req.path.startsWith(`/api/${version}`)){
        next();
    }else{
        res.status(404).json({
            success : false,
            message : "API version is not supported"
        });
    }
};

const headerVersioning = (version) => (req,res,next)=>{
    if(req.get('Accept-Version') === version){
        next();
    }else{
        res.status(404).json({
            success : false,
            message : "API version is not supported"
        });
    }
}