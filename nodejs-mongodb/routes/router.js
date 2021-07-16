module.exports = function(app, Board){
    app.post('/board',((req, res) => {
        const board = new Board();
        board.title = req.body.title;
        board.body = req.body.body;

        board.save((err => {
            if(err){
                console.log(err);
                res.json({message : 'failed'});
                return;
            }else{
                res.json({message : 'saved successfully'});
            }
        }))
    }))
}
