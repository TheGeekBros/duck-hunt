const PORT = 3000;


const handler = (req, res) => {

};

const app = require('http').createServer(handler);
const io = require('socket.io')(app);

app.listen(PORT, (error) => {
  if (error) {
    console.log('Some error occured', error);
    return;
  }
  console.log('Server Started');
});


io.on('connection', (socket) => {
  console.log(socket.id + ' was disconnected!');
});
