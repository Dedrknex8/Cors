// 3 Types of apiVersioning urlVersoning,headerVersoning,Content-typeVersoinig
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

const contentTypeVersoning = (version)=>(req,res,next)=>{
    const contentType = req.get('Content-Type');
    if(contentType && contentType.includes(`application/vndd.api.${version}+json`));
}; 

module.exports = { urlVersoning,headerVersioning,contentTypeVersoning }
