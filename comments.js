// Create web server application
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import the comments.js module and use it in the application
const comments = require('./comments.js');
app.use('/comments', comments);

// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));

// Path: comments.js
// Create a new router
const express = require('express');
const router = express.Router();

// Create a route for the root path
router.get('/', (req, res) => {
    res.send('GET route on comments.');
});

// Export the router
module.exports = router;

// Path: comments.js
// Create a route for the /comments path
router.get('/', (req, res) => {
    res.send('GET route on comments.');
});

// Create a route for the /comments/new path
router.get('/new', (req, res) => {
    res.send('GET route on comments/new.');
});

// Create a route for the /comments/:id path
router.get('/:id', (req, res) => {
    res.send(`GET route on comments/${req.params.id}.`);
});

// Path: comments.js
// Create a route for the /comments path
router.get('/', (req, res) => {
    res.send('GET route on comments.');
});

// Create a route for the /comments/new path
router.get('/new', (req, res) => {
    res.send('GET route on comments/new.');
});

// Create a route for the /comments/:id path
router.get('/:id', (req, res) => {
    res.send(`GET route on comments/${req.params.id}.`);
});

// Create a route for the /comments/:id/edit path
router.get('/:id/edit', (req, res) => {
    res.send(`GET route on comments/${req.params.id}/edit.`);
});

// Path: comments.js
// Create a route for the /comments path
router.get('/', (req, res) => {
    res.send('GET route on comments.');
});

// Create a route for the /comments/new path
router.get('/new', (req, res) => {
    res.send('GET route on comments/new.');
});

// Create a route for the /comments/:id path
router.get('/:id', (req, res) => {
    res.send(`GET route on comments