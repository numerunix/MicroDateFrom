import * as messaging from "messaging";
import { settingsStorage } from "settings";
import { me as companion } from "companion";

// Message socket opens
messaging.peerSocket.addEventListener("open", (evt) => {
  console.log('Companion Socket Open');
  restoreSettings();
});

// A user changes settings
settingsStorage.addEventListener("change", (evt) => {
  let data = {
    key: evt.key,
    newValue: evt.newValue
  };
  sendVal(data);
});

// Restore any previously saved settings and send to the device
function restoreSettings() {
  let index =0 ;
  for (index=0; index < settingsStorage.length; index++) {
    let key = settingsStorage.key(index);
    if (key) {
      let data = {
        key: key,
        newValue: settingsStorage.getItem(key)
      };
      sendVal(data);
    }
  }
}


messaging.peerSocket.addEventListener("error", (err) => {
  console.error(`Connection error: ${err.code} - ${err.message}`);
});
// Send data to device using Messaging API
function sendVal(data) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  }
}

if (companion.launchReasons.settingsChanged) {
      let data= {
        key: "nome",
        newValue: settingsStorage.getItem(nome)
      };
      sendval(data);
      data=  {
            key: "day",
            newValue: settingsStorage.getItem(day)
      };
      sendval(data);
}
