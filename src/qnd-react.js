import { h } from "snabbdom";

const createElement = (type, props = {}, ...children) => {

debugger
  // if the type is a class then
  // 1. create a instance of the class
  // 2. call the render method on the Class instance
  if (type.prototype && type.prototype.isQndReactClassComponent) {
    const componentInstance = new type(props);

    //remember the current vNode instance
    componentInstance.__vNode = componentInstance.render();

    // add hook to snabbdom virtual dom to know 
    //whether it was added to the actual DOM
    componentInstance.__vNode.data.hook = {
      create: () => {
        componentInstance.componentDidMount();
      }
    }



    return componentInstance.__vNode;
  }
  if (typeof type === "function") {
    return type(props);
  }
  props = props || {};
  let dataProps = {};
  let eventProps = {};


  //this is to seperate out the text attributes and event listener attributes
  for (let propKey in props) {
    //event always start with on eg. onClick
    if (propKey.startsWith("on")) {
      const event = propKey.substring(2).toLowerCase();
      eventProps[event] = props[propKey];
    } else {
      dataProps[propKey] = props[propKey];
    }
  }
  return h(type, { props: dataProps, on: eventProps }, children);
}

class Component {
  constructor() { }

  componentDidMount() { }

  setState(partialState) {
    this.state = {
      ...this.state,
      ...partialState
    }
    QndReact.__updater(this);
  }
  render() { }
}
Component.prototype.isQndReactClassComponent = true;

const QndReact = {
  createElement,
  Component
}

export default QndReact;