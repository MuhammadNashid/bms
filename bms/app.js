import express from "express";
import Router from "./router.js";
import connection from "./connection.js";

const app = express();
const port = 4000;

app.use(express.json({limit:"50mb"}));
app.use(express.static('frontend'));
app.use('/api', Router);


connection().then(() => {
    app.listen(port, () => {
        console.log(`server started at http://localhost:${port}`);
    });
}).catch((error) => {
    console.log(error);
});