const express = require('express');

const app = express();
const PORT = 8001;

// Enable JSON body parsing
app.use(express.json());

// Initial tasks data
// Note: Tasks are stored in memory and will be lost when the server restarts
let tasks = [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
];

// GET / - Returns "Hello World"
app.get('/', (req, res) => {
    res.send('Hello World');
});

// POST /tasks - Adds a new task
app.post('/tasks', (req, res) => {
    const { text } = req.body;

    // Validate that text exists and is a non-empty string
    if (typeof text !== 'string' || text.trim().length === 0) {
        return res.status(400).json({ error: 'Task text is required and must be a non-empty string.' });
    }

    tasks.push(text);
    const id = tasks.length - 1;
    res.status(201).json({ id, text });
});

// GET /tasks - Returns all tasks
app.get('/tasks', (req, res) => {
    res.json({ tasks });
});

// Handle JSON parsing errors from express.json()
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ error: 'Invalid JSON payload' });
    }
    next(err);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});