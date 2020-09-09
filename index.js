const express = require("express");
const app = express();
const bodyParser = require("body-parser");
PORT = process.env.PORT || 3000;

// Using Handle bars
const exphbs = require("express-handlebars");

// const {
//   allowInsecurePrototypeAccess,
// } = require("@handlebars/allow-prototype-access");

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
    // handlebars: allowInsecurePrototypeAccess(exphbs),
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public/images"));

app.set("view engine", "handlebars");

const db = require("./config/database");

async function connectionToPostgres() {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connectionToPostgres();

// Routes
app.use("/", require("./controllers/homePage"));
app.use("/", require("./controllers/movies"));
app.use("/", require("./controllers/actors"));
app.use("/", require("./controllers/create"));

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
