class dependeces{
constructor(){
  this.list=[];
  this.checkCurrent();
}
checkCurrent(){
  this.list=document.getElementsByClassName('modules');
//  console.log(this.list.length);
}
add(caller,toAdd,objCaller,callback){
  this.checkCurrent();
  let needsToBeAdd=true;
  let whereToAdd=0;
  for(let i=0;i<this.list.length;i++)
  {
    if(this.list[i].getAttribute('src')===toAdd+'.js')
    {
      needsToBeAdd=false;
    }
    if(this.list[i].getAttribute('id')===caller)
    {
      whereToAdd=i-1;
    }
  }
  if(needsToBeAdd)
  {
    let newDependence=document.createElement('script');
    newDependence.setAttribute('type','text/javascript');
    newDependence.setAttribute('id',toAdd);
    newDependence.setAttribute('src',toAdd+'.js');
    let scriptAdded=document.getElementsByClassName('modules')[whereToAdd].appendChild(newDependence);
    if((callback!==undefined)&&(callback!==null))
    {
      scriptAdded.addEventListener('load',function(){
        callback(objCaller,eval('new '+toAdd+'()'));
      });
    }
    //console.log(document.getElementsByClassName('modules')[whereToAdd]);
  //this.list.push(newDependence);
  }
  else{
    console.log('bad name');
  }
}
}
