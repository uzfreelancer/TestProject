module.exports = function(app){
    console.log('---index.js loaded success ---');

    function errorHandler(err,req,res,next){
        console.log('Alert!!!!');
        console.error(err);
        res.status(400).send({error:err});
    };

    //app.use(errorHandler);//что б работало надо последней

    app.get('/', function(req,res,next){
        //var err = new Error('MyCustomError');
        //res.status(200).send({sucess: 'root folder'});
        //next(err);
        next('string');
    });

    app.use(errorHandler);//что б работало надо последней
}