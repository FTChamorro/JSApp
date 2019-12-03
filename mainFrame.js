//export { mainFrame } from '/apps/FrontendTest/mainFrame.js';
//import header from '/apps/FrontendTest/header.js';
class mainFrame{
  constructor(){
    this.nav=new header('miApp','m');
  }
  destructor()
  {
    this.nav.remove();
    this.nav=null;
  }
}
