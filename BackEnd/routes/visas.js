import express from 'express'
const router = express.Router();
import Visa from '../models/Visa.js';

router.route("/add").post((req, res) => {

    const name = req.body.name;
    const cardNumber = Number(req.body.cardNumber);
    const cvvNumber = req.body.cvvNumber;
    const expDate = req.body.expDate;

    const newVisa = new Visa({

        name,
        cardNumber,
        cvvNumber,
        expDate,

    })

    newVisa.save().then(() => {
        res.json("Visa Card Added")
    }).catch(err => {
        console.log(err);
    })

})

router.route("/all").get((req, res) => {
    Visa.find().then((visas) => {
        res.json(visas)
    }).catch(err => {
        console.log(err);
    })
})

export default router