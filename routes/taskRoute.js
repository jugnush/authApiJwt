const express = require('express');
const Task = require('../models/Task');


const router = express.Router();

router.get('/', (req, res) => {
    res.send(tasks);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    const task = tasks.find(task => task.id === id)
    res.send(task);
});

router.post ('/', async (req, res) => {

    const body = req.body;

   const result = await Task.create({
        firstName: body.firstName,
        LastName: body.LastName,
        email: body.email,
        jobTitle: body.jobTitle,
        gender: body.gender
   }

   )
    console.log(result);

        return res.status(201).json({result});
    });

    router.put('/:id', (req, res) => {
   return res.json({ status: 'pending' });
});

router.delete('/:id', (req, res) => {
    return res.json({ status: 'deleting' });
});

module.exports = router;