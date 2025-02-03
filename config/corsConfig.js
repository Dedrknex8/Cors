const cors = require('cors');

const corsConfig = ()=>{
    return cors({
        //Origin -> which domain allow to access and use api
        origin : (origin,callback) =>{
            //CHECK IF THE ORIGIN IS WHITLISTED OR NOT
            const allowedOrigins = [
                'http://localhost:2929',
                'https://yourCustomDomain.com' //production domain
            ]

            if(!origin || allowedOrigins.includes !== -1){
                callback(null,true); //giving perm so that request can be allowed
            }else{
                callback(new Error('Not allowd by cors'))
            }
        },
        //METHODS -> WHICH METHODS ARE ALLOWED LIKE GET,POST,DELETE,TRACE etc
        methods : ['GET','POST','PUT','DELETE'],
        // ALLOWED HEADER -> WHICH HEADER ARE ALLOWED LIKE Content-Type,Authorization,Ip
        allowedHeaders : [
            'Content-Type',
            'Authorization',
            'Accept-Version'
        ],
        // exposedHeaders -> Content-Range , X-Conent-Range
        exposedHeaders : ['X-Total-Count','Content-Range'],
        // credentials -> enable support for cookies
        credentials : true,
        preflightContinue: false,
        maxAge : 600, //cache pre flight res for 600 sec (10 min) -> avoiding sending req multiple times
        optionsSuccessStatus : 204
    })
}

module.exports ={ corsConfig };