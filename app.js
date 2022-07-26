const express= require("express");
const bodyParser = require("body-parser");

const app= express();
var items=["buy milk","buy sugar"];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
	var today= new Date();

   

	var options= {
		weekday :"long",
		day:"numeric",
		month : "long"
	};

	var day= today.toLocaleDateString("en-US",options);

	res.render("list",{kindOfDay:day, listItems:items}); 

})


app.post("/",function(req,res){
  items.push(req.body.newItem);
 console.log(items);
 res.redirect("/");
})


app.listen(3000,function(){
	console.log("3000 started");
})