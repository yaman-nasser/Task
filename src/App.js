import logo from "./logo.svg";
import "./App.css";
import HeaderReact from "./HeaderReact";
import Post from "./Post";
import List from "./List";
function App() {
  return (
    <div className="App">
     <HeaderReact />
      <Post Hpost="Yaman post" content="اكادمية لتعلم البرمجة" />
      <Post Hpost="Hello World" content="Post 2"/>
      
      <Post />

      <List />
    </div>
  );
}

export default App;
