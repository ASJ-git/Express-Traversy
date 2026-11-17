import express from 'express';
import path from 'node:path';
import posts from './routes/posts.js';
const port = process.env.PORT || 8080;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// setup static folder
// app.use(express.static('./public'));

app.use('/api/posts', posts);

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
