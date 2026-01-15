const express = require('express');

const app = express();
const PORT = 8001;

// Enable JSON body parsing
app.use(express.json());

// Initial tasks data
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
    tasks.push(text);
    res.json({ message: 'Task added successfully' });
});

// GET /tasks - Returns all tasks
app.get('/tasks', (req, res) => {
    res.json({ tasks: tasks });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});