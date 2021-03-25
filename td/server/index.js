const app = require('./server');
const debug = require('debug')('example:server');

const port = parseInt(process.env.PORT || '3000', 10);
app.set('port', port);

app.listen(app.get('port'), function () {
  console.log(`Server listening on the port::${port}`);
  debug(`Express server listening on port:: ${app.get('port')}`);
});
