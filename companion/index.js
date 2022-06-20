import { peerSocket } from "messaging";

if (peerSocket.readyState === peerSocket.OPEN) {
   peerSocket.send("Hello World"); // Should send message to app
}

peerSocket.onerror = (err) => {
  console.log(`Connection error: ${err.code} - ${err.message}`);
}
