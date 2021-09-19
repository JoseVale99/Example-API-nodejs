const categories = require('./model/dbCategory');

// require all callback


var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var router = express.Router();


app.use(bodyParser.urlencoded(

    {extended: true}
));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);

router.route('/category').get((request, response)=>{
    categories.getCategory().then(result => {
        response.json(result);
    })
} );
router.route('/category/:id').get((request, response)=>{
    categories.getCategoryID(request.params.id).then(result => {
        response.json(result);
    })
} );

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server'+port+' listening on')