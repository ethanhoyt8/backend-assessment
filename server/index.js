const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const {getFortune, addQuote} = require('./controller')
const {getMotivation} = require('./controller')
const {getEncouragement} = require('./controller')



app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/quote", addQuote)
app.get("/api/motivation", getMotivation)
app.get("/api/encouragement", getEncouragement)

app.listen(4000, () => console.log("Server running on 4000"));
