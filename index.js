import {createServer} from 'http';
const port = 3000;
const server = createServer((req, res) => {
    res.end("WELCOME TO FULLSTACK CLASS");
});

server.listen(port, () => {
    console.log(`Server is running ${port}`);
});