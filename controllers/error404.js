const path=require('path');

exports.error=(req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'..','views','404Error.html'));
}