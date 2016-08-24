var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    flash           = require("connect-flash"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    methodOverride  = require("method-override")
//    User            = require("./models/user"),
//    seedDB          = require("./seeds")
    
//requring routes
var indexRoutes      = require("./routes/index")
    //commentRoutes    = require("./routes/comments"),
    //campgroundRoutes = require("./routes/campgrounds"),
    

var url = process.env.DATABASEURL   || "mongodb://localhost/yelp_camp_v6"    
mongoose.connect(url);
//mongoose.connect("mongodb://Handsome:tort22@ds161475.mlab.com:61475/sagracamp"); 
//mongodb://Handsome:tort22@ds161475.mlab.com:61475/sagracamp



app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

////SEED STOPPED////
// seedDB();

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
//passport.use(new LocalStrategy(User.authenticate()));
//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());

//app.use(function(req, res, next){
//   res.locals.currentUser = req.user;
//   res.locals.error = req.flash("error");  
//   res.locals.success = req.flash("success");
//   next();
//});

app.use("/", indexRoutes);
//app.use("/campgrounds", campgroundRoutes);
//app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started!");
});