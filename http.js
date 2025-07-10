import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

class Server {
    constructor(port) {
        this.port = port;
    }

    handleHomePage(_req, res) {
        this.readFile(res, 'index.html');
    }

    handleAboutPage(_req, res) {
        this.readFile(res, 'about.html');
    }

    handleContactPage(_req, res) {
        this.readFile(res, 'contact.html');
    }

    handleGetCourses(_req, res) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(['Node.js', 'React', 'Angular', 'Vue']));
        res.end();
    }

    handleNotFound(_req, res) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Not Found</h1>');
        res.write('<p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>');
        res.end();
    }

    readFile(res, fileName) {
        fs.readFile(path.join(__dirname, fileName), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.write('<h1>500 Internal Server Error</h1>');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        });
    }

    start() {
        const server = http.createServer((req, res) => {
            if (req.url === '/') {
                this.handleHomePage(req, res);
            } else if (req.url === '/about') {
                this.handleAboutPage(req, res);
            } else if (req.url === '/contact') {
                this.handleContactPage(req, res);
            } else if (req.url === '/apis/getcourses') {
                this.handleGetCourses(req, res);
            } else {
                this.handleNotFound(req, res);
            }
        });

        server.listen(this.port, () => {
            console.log(`Server is listening on port ${this.port}`);
        });
    }
}

// Instantiate and start the server
const server = new Server(3000);
server.start();