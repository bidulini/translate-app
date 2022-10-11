import "./App.css";
import Translate from "./Translate";
import Route from "./Route";
import Accordion from "./Accordion";
import Header from "./Header";

const items = [
  {
    title: "What is React?",
    content: "React is a front end JavaScript framework.",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers.",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components.",
  },
];

function App() {
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
