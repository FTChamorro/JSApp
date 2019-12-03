let cleanScreen=function(){
  document.body.innerHTML='';
}
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
}
class mainFrame{
  constructor(){
    let nav=new header('miApp','m');
  }
}
class login{
  constructor(){
    cleanScreen();
    let body=document.body;
    let space=document.createElement('br');
    this.user=document.createElement('input');
    this.password=document.createElement('input');
    this.user.setAttribute('type','text');
    this.password.setAttribute('type','password');
    this.accessButton=document.createElement('input');
    this.accessButton.setAttribute('type','button');
    body.appendChild(this.user);
    body.appendChild(space);
    body.appendChild(this.password);
    body.appendChild(space);
    body.appendChild(this.accessButton);
    this.accessButton.addEventListener('click',() => {
    //cleanScreen();
    this.destructor();
    let appContent=new mainFrame();
    });
    this.accessButton.value='Access pitch';
    }
  destructor(){
      this.user.remove();
      this.password.remove();
      this.user=null;
      this.password=null;
      this.accessButton.remove();
      this.accessButton=null;
  }
}

class app{
  constructor(name){
    this.title=name;
    let DOMtitle=document.createElement('title');
    DOMtitle.innerHTML=this.title;
    let head=document.head;
    head.appendChild(DOMtitle);
    this.init();
    window.addEventListener('load',() => {
  //  document.getElementById('appScript').remove();
  });
  }
  init(){
      let applogin=new login();
  }
}

let application=new app('miApp');
