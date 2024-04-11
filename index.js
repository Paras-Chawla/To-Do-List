import express from 'express';  
import bodyParser from "body-parser";
import $ from "jquery";
const app=express();
const port=3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
var arr=[];
var arr2=[];

app.get('/',(req,res)=>{
    res.render('index.ejs',{worklist:arr});
});


app.post('/submit',(req,res)=>{
    const task=req.body["task"];

    arr.push(task);
    console.log(arr);


    res.render("index.ejs",{worklist:arr});
});

app.get('/deletework',(req,res)=>{
    arr=[];
    res.render("index.ejs",{worklist:arr});
});

app.get('/home',(req,res)=>{
    res.render('home.ejs',{homelist:arr2});
});
app.post('/submit2',(req,res)=>{
    const task2=req.body["task2"];

    arr2.push(task2);
    console.log(arr2);


    res.render("home.ejs",{homelist:arr2});
});
app.get('/deletehome',(req,res)=>{
    arr2=[];
    res.render("home.ejs");
});

app.listen(port,()=>{
    console.log(`Running on ${port}`);
});