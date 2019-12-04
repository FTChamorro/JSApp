class login{
  constructor(){
    cleanScreen();
    let body=new tag('body','body');
    let space=document.createElement('br');
    this.user=new tag('user','input');
    this.user.addProperty('type','text');
    this.password=document.createElement('input');
    this.password.setAttribute('type','password');
    this.accessButton=new button();
    this.user.insertInto(body);
    body.object.appendChild(space);
    body.object.appendChild(this.password);
    body.object.appendChild(space);
    body.addObject(this.accessButton);
    this.accessButton.addEvent('click',() => {
    this.destructor();
    let appContent=new mainFrame();
    });
    this.accessButton.object.value='Access bitch';
    }
  destructor(){
      this.user.object.remove();
      this.password.remove();
      this.user=null;
      this.password=null;
      this.accessButton.deleteTag();
      this.accessButton=null;
  }
}
