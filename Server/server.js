import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const db = mysql.createConnection({
    host:'localhost',
    port: 8889,
    user:'root',
    password:'root',
    database:'Bench Bakery'
})

const server = express();
server.use(cors());

server.use(express.json());
db.connect(error=> {
    if(error)
        console.log('Sorry cannot connect to db: ', error);
    else
        console.log('Connected to mysql db');
})

server.get('/products', (req, res) => {
    let allProducts = "CALL `getAllProducts`();";
    let query = db.query(allProducts, (error, data) => {
        if(error) {
            res.json({ErrorMessage: error})
        }
        else {
            res.json(data[0]);
        }
    })
})

server.post('/signup', (req, res)=> {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let query = "CALL `signup`(?, ?, ?)";
    db.query(query, [username, email, password], (error, data)=> {
        if(error){
            res.json({signup:false, message:error});
        }
        else {
            res.json({signup:true, message:"Signup Success"})
        }
    })
})

server.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let query = "CALL `login`(?, ?)";
    db.query(query, [username, password], (error,data)=> {
        if(error){
            res.json({login:false, message:error})
        }
        else {
            if(data[0].length ===0){
                res.json({login:false, message:"Sorry, you have provided wrong credentials"})
            }
            else {
                res.json({login:true, message:"login Success", data:data[0]})
            }
            
        }
    })
})

server.post('/products', (req, res) => {
    let image1 = req.body.image1;
    let image2 = req.body.image2;
    let image3 = req.body.image3;
    let name = req.body.name;
    let rating = req.body.rating;
    let price = req.body.price;
    let stock = req.body.stock;
    let alt = req.body.alt;
    let description = req.body.description;
    let display = req.body.display;
    let query = "CALL `addNewProduct`(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    db.query(query, [image1, image2, image3, name, rating, price, stock, alt, description, display], (error, data) => {
        if(error){
            res.json({add:false, message:error})
        }
        else {
            res.json({add:data[0][0], message:"Add Success"})
        }
    })
})


server.get('/products/:id', (req, res) => {
    let productID = req.params.id;
    let query = "CALL `getProductByID`(?)";
    db.query(query, [productID], (error, data) => {
        if(error) {
            res.json({getProductByID:false, message:error})
        }
        else {
            if(data[0].length === 0) {
                res.json({getProductByID:false, message:"Sorry, you cannot get product data"});
            }
            else {
                res.json({getProductByID:data[0][0], message:"Get one product Success!"});
            }
        }
    })
})


server.put('/products', (req, res) => {
    let productID = req.body.productID;
    let image1 = req.body.image1;
    let image2 = req.body.image2;
    let image3 = req.body.image3;
    let name = req.body.name;
    let rating = req.body.rating;
    let price = req.body.price;
    let stock = req.body.stock;
    let alt = req.body.alt;
    let display = req.body.display;
    let description = req.body.description;

    let query = "CALL `updateProduct`(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(query, [productID, image1, image2, image3, name, rating, price, stock, alt, description, display], (error, data) => {
        if(error){
            res.json({update:false, message:error});
        }
        else {
            res.json({update:data[0][0], message:"Update success"});
        }
    })
})

server.delete('/products/:id', (req, res) => {
    let productID = req.params.id;
    let query = "CALL `deleteProduct`(?)";
    db.query(query, [productID], (error, data)=> {
        if(error) {
            res.json({delete:false, message:error})
        }
        else {
            res.json({delete:data[0][0], message:"Delete success"})
        }
    })
})

server.get('/displayProduct', (req,res)=> {
    let query = "CALL `displayProduct`()";
    db.query(query, (error, data) => {
        if(error) {
            res.json({showProduct:false, message:error})
        }
        else {
            if(data[0] === 0){
                res.json({showProduct:false, message:"Sorry you cannot get data."})
            }
            else {
                res.json(data[0]);
            }
        }
    })
})

server.put('/toggleDisplay', (req, res) => {
    let productID = req.body.id;
    let query = "CALL `toggle_Display`(?)";
    db.query(query, [productID], (error, data) => {
        if(error) {
            res.json({toggleDisplay:false, messsage:error});
        }
        else {
            res.json({toggleDisplay:true, message:"toggle Display success"});
        }
    })
})

server.listen(4400, function() {
    console.log("The server is successfully running on port 4400")
})