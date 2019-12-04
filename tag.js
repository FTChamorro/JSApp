
    class tagProp{
        constructor(property,value){
          this.property=property;
          this.value=value;
        }
    }
    class tag{
        constructor(id,type,properties){
          if(!id)
          {
            this.id=id;
          }
            this.type=type;
            this.properties=properties;
            let temp=document.getElementById(this.id);
            this.object;
            if(temp===null)
            {
            switch(this.type)
            {
                case 'body':
                {
                    this.object=document.body;
                }break;
                case 'html':
                {
                    this.object=document;
                }break;
                case 'head':
                    {
                        this.object=document.head;
                    }break;
                default:
                {
                    this.object=document.createElement(this.type);
                    this.object.setAttribute('id',this.id);
                }break;
            }
        }
        else
        {
            this.type=temp.tagName;
        }
        }
        setStandardProps()
        {
            //le cargo las propiedades standar
        }
        setCustomProps()
        {
            //le cargo las propiedades especiales en funcion del JSON de propiedades
        }
        getObjectRef()
        {
            return this.object;
        }
        val(val)
        {
            if(!val)
            {
                return this.object.value;
            }
            else
            {
            this.object.value=val;
            }
        }
        name()
        {
            return this.object.name;
        }
        content(content)
        {
            if(!content)
            {
                return this.object.innerHTML;
            }
            else
            {
            this.object.innerHTML+=content;
            }
        }
        addObject(newObject)
        {
            this.object.appendChild(newObject.getObjectRef());
        }
        insertInto(father)
        {
            father.object.appendChild(this.object);
        }
        clearSons()
        {
           this.object.innerHTML='';
        }
        deleteTag()
        {
            this.object.remove();
        }
        addProperty(prop,val)
        {
            if(!this.properties)
            {
            this.properties=new Array();
            }
            this.properties.push(new tagProp(prop,val));
            this.object.setAttribute(prop,val);
        }
        removeProperty(prop)
        {
            this.object.removeAttibute(prop);
        }
        addEvent(trigger,funct){
          this.object.addEventListener(trigger,funct);
        }
    }
    class button extends tag{
      constructor(id,properties)
      {
        super(id,'input',properties);
        super.addProperty('type','button');
      }
    }
    class event{
        constructor(trigger,reference, functPointers){
          this.trigger=trigger;
          this.reference=reference;
          this.functionPointers=functPointers;
        }
        addEvent(newFunc){
            let element=document.getElementById(this.reference);
            if(element){
            element.addEventListener(this.trigger,newFunc);
            if(this.functionPointers)
            {
            this.functionPointers.push(newFunc);
            }
        }
        }
    }
