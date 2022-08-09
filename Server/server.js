import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import multer from 'multer';
import 'dotenv/config';
import fs from 'fs';

const db = mysql.createConnection({
    host:process.env.host,
    port: process.env.port,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database
})

const server = express();
server.use(cors());

server.use(express.json());

server.use(express.static('uploads'));// make the "uploads" file to public so can access from "localhost:4400/uploads"


db.connect(error=> {
    if(error)
        console.log('Sorry cannot connect to db: ', error);
    else
        console.log('Connected to mysql db');
})

// configure multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
})

// create instance of multer configuration settings
const fileupload = multer({storage:storage})

// "file_fromC" should match with the name of input tag's value
server.post('/upload', fileupload.single("file_fromC"), (req, res) => {
    res.json({fileupload:true});
});

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

// server.post('/signup', (req, res)=> {
//     let username = req.body.username;
//     let email = req.body.email;
//     let password = req.body.password;
//     let query = "CALL `signup`(?, ?, ?)";
//     db.query(query, [username, email, password], (error, data)=> {
//         if(error){
//             res.json({signup:false, message:error});
//         }
//         else {
//             res.json({signup:true, message:"Signup Success"})
//         }
//     })
// })

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
    let getFilename = "CALL `getProductByID`(?)";
    db.query(getFilename, [productID], (error, data) => {
        if(error) {

        }
        else {
            let file_to_be_deleted1 = data[0][0].image1;
            let file_to_be_deleted2 = data[0][0].image2;
            let file_to_be_deleted3 = data[0][0].image3;
            // console.log(data[0][0].image1)
            fs.unlink('./uploads/' + file_to_be_deleted1,  (error) => {
                if(error) {
                    res.json({deleteStatus:false, message:error});
                }
                else {
                    db.query(query, [productID], (error, deleteStatus) => {
                        if(error) {
                            res.json({deleteStatus:false, message:error});
                        }
                        else {
                            let del_success = deleteStatus[0][0].DEL_SUCCESS;
                            if(del_success === 1) {
                                res.json({deleteStatus:del_success, message:"successfull deleted"});
                            }
                            else {
                                res.json({deleteStatus:del_success, message:"ID not found"})
                            }
                        }
                    })
                }
            })
        }
    })



    // db.query(query, [productID], (error, data)=> {
    //     if(error) {
    //         res.json({delete:false, message:error})
    //     }
    //     else {
    //         res.json({delete:data[0][0], message:"Delete success"})
    //     }
    // })
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