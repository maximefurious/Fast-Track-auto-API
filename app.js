const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use(
    cors({
        methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"], // Autorise ces méthodes HTTP
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Access-Control-Allow-Origin",
            "Origin",
            "X-Requested-With",
            "Accept",
        ], // Autorise ces en-têtes HTTP
        credentials: true, // Autorise l'envoi de cookies avec la demande
        maxAge: 86400, // Cache les résultats de la requête pré-vol (OPTIONS) pendant 24 heures
    }),
);

app.use("/users", require("./routes/UserRoute"));

module.exports = app;
