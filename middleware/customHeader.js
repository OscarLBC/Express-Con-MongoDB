const customHeader = (req,res,next) => {
 try {
    const api_key = req.headers.api_key;
    if(api_key === "leifer-01"){
             next();
    } else {
        res.status(403);
        res.send({error: "API KEY NO ES CORRECTO"});
    }
    
 } catch (err) {
    res.status(403);
    res.send({error: "ALGO OCURRIO EN EL CUSTOM HEADER"});
 }
}


module.exports = customHeader;