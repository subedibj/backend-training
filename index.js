import express from "express";
import bodyParser from "body-parser";
// this allows us to take in incoming post request body.
import userRoutes from "./routes/users.js";

const app = express(); // initialize our express app
const PORT = 5000; // specify port

// initialize body parser middleware
app.use(bodyParser.json());

// route
// first par is path
// second par is call back req,res
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello from home page");
});

// make our application listen for incoming request
app.listen(PORT, () => {
  console.log(`Server running on port : http://localhost:${PORT}`);
});
