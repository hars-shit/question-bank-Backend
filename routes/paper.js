const paper = require('../models/paper');
const router = require('express').Router();

// create a question paper draft 
router.post('/', async (req, res) => {
    try {
        const newDraft = await paper.create(req.body); // Await the create function
        res.status(200).json(newDraft); // Respond with the created draft
    } catch (error) {
        res.status(500).json(error);
    }
});

// for getting all drafts 
router.get('/all', async (req, res) => {
    try {
        const all_drafts = await paper.find();
        res.status(200).json(all_drafts);
    } catch (error) {
        res.status(500).json(error);
    }
});

// delete by id 
router.delete('/delete/:id',async(req,res)=>{
    try{
        const pdf=await paper.findById(req.params.id);
        if(!pdf){
            res.status(404).json(err);
        }
        await paper.deleteOne();
        res.status(200).json('Deleted Successfully')
    }
    catch(err){
        res.status(500).json("Internal Server Error")
    }
})

module.exports = router;
