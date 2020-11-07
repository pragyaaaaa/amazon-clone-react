const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51HkkhoDuNr994M1Jlhl9K85em3gap9SFnlUQebvZ8z0enxk7okrikpGA7WpMHvGt8yR4F3CMcaxa6eMA63aqQcMX00rgRtwSmG"
)

const app = express();

app.use(cors({ origin: true }))
app.use(express.json())

app.get('/', (request, response) => response.status(200).send('hello'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log(total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})
exports.api = functions.https.onRequest(app)