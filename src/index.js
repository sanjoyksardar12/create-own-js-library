import QndReact from "./qnd-react";
import QndReactDom from "./qnd-react-dom";
import Counter from "./counter";

const Greeting = ({ name }) => (<p> Welcome <strong>{name}</strong></p>);
const ListContainer = ()=>{
  return (
    <ul>
      {["A", "B", "C"].map((item, index)=>{
        console.log(item);
        return(
        <li key={item}>{item}</li>
      )})}
    </ul>
  )
}

const App = (
  <div>
    <h1 className="primary">Qndreawct is Quick and Dirty React.</h1>
    <p>It is about building your own React in 90 lines of Javascripts</p>
    <Greeting name={"Sanjoy Sardar"} />
    <Counter />
    <Counter />
    <Counter />
    {/* <ListContainer/> */}
  </div>
)

QndReactDom.render(App, document.getElementById("root"));