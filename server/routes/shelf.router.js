const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        const queryText = 'SELECT * FROM "item"';
        pool.query(queryText)
            .then((response) => {
                res.send(response.rows);
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        res.sendStatus(403);
    }
    // For testing only, can be removed
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    if (req.isAuthenticated()) {
        newItem = req.body
        const query = `INSERT INTO item ("description", "image_url", "person_id")
                       VALUES ($1, $2, $3)`;
        pool.query(query, [newItem.description, newItem.image_url, req.user.id])
            .then(() => { res.sendStatus(201); })
            .catch((error) => {
                console.log('Error with POST', error);
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }



});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const idToDelete = req.params.id;
        pool.query(`DELETE FROM "item" WHERE "id" = $1`, [idToDelete])
            .then((response) => {
                res.sendStatus(200);
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        res.sendStatus(403);
    }
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;