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
