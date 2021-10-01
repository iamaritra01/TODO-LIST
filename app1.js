const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items = [];
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extented:true}));
app.use(express.static("public"));
app.get('/',(req,res)=>{
    // res.send("Hello World");
    var today = new Date();
    var currentday = today.getDay();

    var options = { 
        weekday: 'long',
         year: 'numeric',
          month: 'long', 
          day: 'numeric' 
    };
    var day = today.toLocaleDateString("en-US",options);
    res.render("list1",{kindOfDay:day,newListItems:items});
})

app.post("/",(req,res)=>{
    var item = req.body.itemName;
    items.push(item);
    res.redirect("/");
});
app.listen(3000,()=>{
    console.log("We Are listening port 3000");
})