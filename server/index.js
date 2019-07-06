require('dotenv').config();
const server = require('./api/server');

port = process.env.PORT || 6500;

server.listen(port, () => {
  console.log(`listening to port ${port}`);
});
