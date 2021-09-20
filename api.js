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


// Route GET: return all data of categories.
router.route('/category').get((request, response)=>{
    categories.getCategory().then(result => {
        response.json(result);
    })
} );

//  Route GET: return all data of categories for id 
router.route('/category/:id').get((request, response)=>{
    categories.getCategoryID(request.params.id).then(result => {
        response.json(result);
    });
} );

//  Route POST: create new category
router.route('/insert').post((request, response)=>{
    const cat_name = request.body.cat_name;
    const cat_obs = request.body.cat_obs;
    categories.createCategory(cat_name, cat_obs).then(result => {
        response.json({'message': 'data create success!'});
    });
});
//  Route PUT: update category
router.route('/update/:id').put((request, response)=>{
    const id = request.params.id;
    const cat_name = request.body.cat_name;
    const cat_obs = request.body.cat_obs;
    categories.updateCategory(id,cat_name, cat_obs).then( result => {

        response.json({'message': 'data update success!'});  
    });
    
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server'+port+' listening on')