const server = require("./server");

const PORT = 8001;

server.listen(PORT, () => {
  console.log(`in port http://localhost:${PORT}`);
});
