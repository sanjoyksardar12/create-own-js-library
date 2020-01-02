import QndReact from "./qnd-react";
import * as snabbdom from "snabbdom";
import propsModule from "snabbdom/modules/props";
import eventListenersModule from "snabbdom/modules/eventlisteners";

const reconcile = snabbdom.init([propsModule, eventListenersModule]);

let rootVNode;

const render = (el, rootDomElement)=>{
  if(rootVNode == null){
    rootVNode = rootDomElement;
  }
  rootVNode = reconcile(rootVNode, el);
}


//QndReactDom telling React how to update DOM
QndReact.__updater = (componentInstance)=>{
  //logic how to udpate the DOM when you call this.setState

  const oldVNode = componentInstance.__vNode;

  const newVNode = componentInstance.render();

  //update the __vNode property with updated __vNode
  componentInstance.__vNode = reconcile(oldVNode, newVNode);

    
}

const QndReactDom = {
  render
}

export default QndReactDom;