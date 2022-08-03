const http = require('http');

const options = [
    {
        name: 'Hobby',
        price: '79',
        features: [
            '7 build minutes',
            '1mb storage',
            'Login'
        ]
    },
    {
        name: 'Growth',
        price: '149',
        features: [
            '7.5 build minutes',
            '5mb storage',
            'Login',
            'Logout'
        ]
    },
    {
        name: 'Enterprise',
        price: '10,249',
        features: [
            '8 build minutes',
            '6mb storage',
            'Login',
            'Logout',
            'That one feature your company needs'
        ]
    }]

const requestListener = function (req, res) {
    if (req.url === '/options') {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end(JSON.stringify(options));
    }
    else {
        res.writeHead(500);
        res.end("error");
    }
}

const server = http.createServer(requestListener);
server.listen(8000);