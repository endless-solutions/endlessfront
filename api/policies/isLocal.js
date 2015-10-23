module.exports = function(req,res,cb) {
  var ALLOWED_HOST = process.env.PROXY_HOST || '127.0.0.1';
  console.log("PPolicy invoked");
  console.log(req.ip);
  console.log(ALLOWED_HOST);
  if(req.ip == ALLOWED_HOST){
    cb();
  }
  res.forbidden(new Error ('Allows '+ALLOWED_HOST+' only.'));
}
