const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        // res.write('<html><head><title>Assignment1</title></head><body><p>Hello from Assignment 1!</p></body></html>');
        res.write('<html><head><title>Assignment1</title></head><body><form method="POST" action="/create-user"><input type="text" name="userName"/><button type="submit">Send</button></form></body></html>');
        return res.end();
    }    

    if (url === '/users') {
        res.write('<html><head><title>Assignment1</title></head><body><h2>Users List</h2><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></p></body></html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];

        req.on('data', chunk => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
    res.write('This is a first assignment.');
    return res.end();
};

module.exports = requestHandler;