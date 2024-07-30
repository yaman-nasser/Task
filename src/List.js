import "./Stayle.css";
import Mybutton from "./Mybutton";

export default function List() {
  return (
    <div className="list">
      <Mybutton>
        <div>
          <h4>p1</h4>
        </div>
      </Mybutton>
      <Mybutton>
        <h1>hiii</h1> <hr />
        <p>jjsbcajkc ka csakcsc</p>
      </Mybutton>
      <Mybutton><div style={{backgroundColor:"red"}}>
        <h1>Hello</h1>
        </div></Mybutton>
    </div>
  );
}
