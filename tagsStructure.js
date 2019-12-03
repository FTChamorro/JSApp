//export { mainFrame } from 'mainFrame.js';
//import { mainFrame } from '/apps/FrontendTest/mainFrame.js';
let cleanScreen=function(){
  document.body.innerHTML='';
}

class app{
  constructor(name){
    this.title=name;
    this.dependences=new dependeces();
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
      this.dependences.add('appScript','login',this,function(obj,resp){
              obj.login=resp;
            },);
  }
  checkDependences(){

  }
}
let application=new app('miApp');
