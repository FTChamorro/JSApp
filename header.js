//export default 'header'// } from '/apps/FrontendTest/header.js';
class header{
  constructor(appName,where){
  this.appName=document.createElement('div');
  this.appName.setAttribute('display','flex');
  this.appName.setAttribute('style','background-color: red;color:white');
  this.appName.innerHTML=appName;
  switch(where){
    case 'm':
      {
        let body=document.body;
        body.appendChild(this.appName);
        console.log(this.appName);
      }break;
    default:

  }
}
  destructor(){
    this.appName.remove();
    this.appName=null;
  }
}
