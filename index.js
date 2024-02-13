import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var mechScore = 0;
var civilScore = 0;
var icScore = 0;
var eeeScore = 0;
var ecScore = 0;
var csScore = 0;
// console.log(currentScore);
// console.log(arr[0]);
app.get("/", (req, res) => {
    res.render("index.ejs", {
        mechScore: mechScore,
        civilScore: civilScore,
        icScore: icScore,
        eeeScore: eeeScore,
        ecScore: ecScore,
        csScore: csScore,
    });
});

app.get("/events", (req, res) => {
    res.render("events.ejs")
});

app.get("/gallery", (req, res) => {
    res.render("gallery.ejs")
});

app.get("/team", (req, res) => {
    res.render("team.ejs")
});

app.get("/prices", (req, res) => {
    res.render("prices.ejs", {
        selectedValue,
    });
});

app.get("/proshows", (req, res) => {
    res.render("proshows.ejs")
});

app.get("/admin", (req, res) => {
    res.render("admin.ejs");
});

app.post("/update", (req, res) => {
    var newScoreMech = parseInt(req.body.mech, 10);
    var newScoreCivil = parseInt(req.body.civil, 10);
    // console.log(newScoreCivil);
    var newScoreEC = parseInt(req.body.ec, 10);
    // console.log(newScoreEC);
    var newScoreEEE = parseInt(req.body.eee, 10);
    // console.log(newScoreEEE);
    var newScoreCS = parseInt(req.body.cs, 10);
    // console.log(newScoreCS);
    var newScoreIC = parseInt(req.body.ic, 10);
    // console.log(newScoreIC);
    // console.log(newScore);
    mechScore = newScoreMech;
    civilScore = newScoreCivil;
    icScore = newScoreIC;
    eeeScore = newScoreEEE;
    ecScore = newScoreEC;
    csScore = newScoreCS

    res.redirect("/admin");
});

app.post("/updatePrice", (req, res) => {
    const selectedValue = req.body.selectElement;
    const fp = req.body.firstPrice;
    const sp = req.body.secondPrice;
    const tp = req.body.thirdPrice;
    console.log(fp);
    console.log(sp);
    console.log(tp);
    console.log(selectedValue);
    res.redirect("/admin");
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});