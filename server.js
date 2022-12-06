//imports
const path = require("path");
const express = require("express");
const expressHandlebars = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
/*           possible session import            */ 
//db related imports
const sequelize = require("./config/connection");
/*           possible session store import            */
//app and port
const app = express();
const PORT = process.env.PORT || 3001;
//setup handlebars engine with custom helps support
const handlebars = expressHandlebars.create({ helpers });
/*


Session (and cookie) code block here


*/

//app.use(session(sess));

//set default template engine for express to handlebars engine
app.engine("handlebars", handlebars.engine);
app.set("view-engine", "handlebars");
//set up server with middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
//turn on routes
app.use(routes);
//start server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });