module.exports = function(server){
  server.get('submission', function(req,res,next){
    console.log(req)
    res.send({
      test: 'test'
    })
  });
};
