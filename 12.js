const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Homepage here!!!');
    } else if (req.url === '/about') {
        res.end('About me darlin :)');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>Ooopsiees!</h1>
            <p>What page maahn</p>
            <a href='/'>baze</a>
        `);
    }
});

server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
