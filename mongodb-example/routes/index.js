module.exports = function(app, Board)
{
    app.post('/create', function(req, res){
        var board = new Board();
        board.stringA = req.body.stringA;
        board.stringB = req.body.stringB;

        console.log(req);

        board.save(function(err){
            if(err){
                // fail
                console.error(err);
                res.json({result: 0});
                return;
            }
            // Success
            res.json({result: 1});
        });
    });
}