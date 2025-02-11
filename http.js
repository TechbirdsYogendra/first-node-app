import http from 'http';
import fs from 'fs';
import path from 'path';

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join('index.html'), (err, data) => {
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
    } else if (req.url === '/about') {
        fs.readFile(path.join('about.html'), (err, data) => {
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
    } else if (req.url === '/contact') {
        fs.readFile(path.join('contact.html'), (err, data) => {
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
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Not Found</h1>');
        res.write('<p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});