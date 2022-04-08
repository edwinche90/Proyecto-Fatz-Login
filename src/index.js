require('dotenv').config();

const app = require('./server');

require('./database');

console.log(process.env.TESTING)

app.listen(app.get('port'),() => {
    console.log('servidor en el puerto', app.get('port'))
})