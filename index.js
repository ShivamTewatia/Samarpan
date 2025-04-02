const express = require("express");
const app =express();
const port=process.env.PORT || 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname,"public")));

app.get("/home", (req,res)=>{
    res.render("home.ejs");
})


app.get("/home/team", (req,res)=>{
    res.render("team.ejs");
})
app.get("/home/team/sec", (req,res)=>{
    res.render("sec.ejs");
})
app.get("/home/team/jsec", (req,res)=>{
    res.render("jsec.ejs");
})
app.get("/home/team/sc", (req,res)=>{
    res.render("sc.ejs");
})
app.get("/home/team/ih", (req,res)=>{
    res.render("ih.ejs");
})
app.get("/home/team/mentor", (req,res)=>{
    res.render("mentor.ejs");
})


app.get("/home/audition", (req,res)=>{
    res.render("audition.ejs");
})
app.get("/home/audition/2k25", (req,res)=>{
    res.render("audi2k25.ejs");
})
app.get("/home/audition/2k24", (req,res)=>{
    res.render("audi2k24.ejs");
})
app.get("/home/audition/2k23", (req,res)=>{
    res.render("audi2k23.ejs");
})
app.get("/home/audition/2k22", (req,res)=>{
    res.render("audi2k22.ejs");
})



app.get("/home/work", (req,res)=>{
    res.render("work.ejs");
})


app.get("/home/workshop", (req,res)=>{
    res.render("workshop.ejs");
})
app.get("/home/session", (req,res)=>{
    res.render("session.ejs");
})
app.get("/home/project", (req,res)=>{
    res.render("project.ejs");
})
app.get("/home/meet", (req,res)=>{
    res.render("meet.ejs");
})
app.get("/home/contact", (req,res)=>{
    res.render("contact.ejs");
})
app.listen(port,() =>{
    console.log("listening")
});
