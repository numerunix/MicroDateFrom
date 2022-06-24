import document from "document";
import { gettext } from "i18n";
import * as messaging from "messaging";


let data = document.getElementById("data");
let nome = document.getElementById("nome");
let avviso = document.getElementById("avviso");


// Message is received
messaging.peerSocket.onmessage = evt => {
  console.log(`App received: ${JSON.stringify(evt)}`);
  if (evt.data.key === "name" && evt.data.newValue) {
    let hername= JSON.parse(evt.data.newValue);
      nome.text=hername.name;
  }
  
  if (evt.data.key === "day" && evt.data.newValue) {
    let mydata = JSON.parse(evt.data.newValue);
    let data1=new Date(Date.now());
    let data2=new Date(mydata.name);
    if (data1.getDate()==data2.getDate())
      if (data1.getMonth()==data2.getMonth())
        avviso.text=gettext("E' il vostro anniversario");
      else
        avviso.text=gettext("E' il vostro meseversario");
    else
        avviso.text=""
    mydata=new Date(mydata.name).getTime();
    mydata = Date.now() - mydata;
    mydata=Math.floor(mydata / (1000 * 3600 * 24));
    data.text=mydata;
  }
};



// Message socket opens
messaging.peerSocket.onopen = () => {
  console.log("Copyright \u00A92022 Giulio Sorrentino<gsorre84@gmail.com>");
  console.log("This progam is dedicated to Francesca Milano");
  console.log("This program is inspired by commercial product \"Date From\"");
  console.log("This program is distribuited under GPL. No Warranty is provided.");
  console.log("App Socket Open");
};

// Message socket closes
messaging.peerSocket.onclose = () => {
  console.log("App Socket Closed");
};

