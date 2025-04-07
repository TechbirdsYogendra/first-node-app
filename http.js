import http from 'http';
import fs from 'fs';
import path from 'path';

const handleHomePage = (_req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
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
};

const handleAboutPage = (_req, res) => {
    fs.readFile(path.join(__dirname, 'about.html'), (err, data) => {
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
};

const handleContactPage = (_req, res) => {
    fs.readFile(path.join(__dirname, 'contact.html'), (err, data) => {
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
};

const handleGetCourses = (_req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(['Node.js', 'React', 'Angular', 'Vue']));
    res.end();
};

const handleNotFound = (_req, res) => {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404 Not Found</h1>');
    res.write('<p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>');
    res.end();
};

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        handleHomePage(req, res);
    } else if (req.url === '/about') {
        handleAboutPage(req, res);
    } else if (req.url === '/contact') {
        handleContactPage(req, res);
    } else if (req.url === '/apis/getcourses') {
        handleGetCourses(req, res);
    } else {
        handleNotFound(req, res);
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});