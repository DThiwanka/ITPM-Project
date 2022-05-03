const router = require("express").Router();
let Detail = require('../models/Detail');

router.route("/add").post((req, res) => {

    const fname = req.body.fname;
    const email = req.body.email;
    const tpnumber = req.body.tpnumber;

    const address = req.body.address;
    const city = req.body.city;
    const stpnumber = req.body.stpnumber;

    const newDetail = new Detail({

        fname,
        email,
        tpnumber,
        address,
        city,
        stpnumber

    })
    
    newDetail.save().then(() => {
        res.json("Details Added")
    }).catch(err => {
        console.log(err);
    })

})

router.route("/all/").get((req, res) => {
    Detail.find().then((details) => {
        res.json(details)
    }).catch(err => {
        console.log(err);
    })
})


module.exports = router;
