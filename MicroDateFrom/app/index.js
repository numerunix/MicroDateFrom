import document from "document";
import { gettext } from "i18n";
import * as messaging from "messaging";


var data = document.getElementById('text');
var mydata='';
var hername='';
messaging.peerSocket.addEventListener("open", (evt) =>{
  console.log('Copyright \u00A92022 Giulio Sorrentino<gsorre84@gmail.com>');
  console.log("This progam is dedicated to the bartress of Max Bar of Rivisondoli who make me happy");
  console.log('This program is inspired by commercial product "Date From"');
  console.log('This program is distribuited under GPL. No Warranty is provided.');
  console.log('App Socket Open');
});


messaging.peerSocket.addEventListener("message", (evt) => {
  console.log(`App received: ${JSON.stringify(evt)}`);
  if (evt.data.key === 'nome' && evt.data.newValue) {
    hername=JSON.parse(evt.data.newValue);
  }
  
  if (evt.data.key === 'day' && evt.data.newValue) {
    mydata = JSON.parse(evt.data.newValue);
  }
  let s='';
  let data1=new Date(Date.now());
  let data2=new Date(mydata.name);
  let conto=data2.getTime();
  conto = data1- conto;
  conto=Math.floor(conto / (1000 * 3600 * 24));
  if (conto<0) {
    data.text=gettext('Valore non valido');
    return;
  }
  console.log('Hername is: '+hername.name);
  if (hername===undefined || hername.name==='')
   s=conto+' '+gettext('days have passed')+'\n'; 
  else
   s=gettext('Hai incontrato')+' '+ hername.name +' '+gettext('circa')+' '+conto+' '+gettext('giorni fa')+'\n';
  if (data1.getDate()==data2.getDate())
    if (data1.getMonth()==data2.getMonth())
      s+=gettext('E\' il vostro anniversario');
    else
      s+=gettext('E\' il vostro meseversario');
  data.text=s;
});