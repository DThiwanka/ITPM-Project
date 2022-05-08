import express from 'express'
const router = express.Router();
import Detail from '../models/Detail.js';

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

//get Specific detail

router.get('/:id',(req, res)=>{

    let detailId = req.params.id;

    Detail.findById(detailId,(err,details)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
        success:true,
        details
        });
    });

});


export default router
