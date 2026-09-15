import "./Main.css";
import { MouseTracker } from "./MouseTracker";
import { TodoList } from "./TodoList";

export const Main = () => {
  return (
    <main className="maincontainer">
      <MouseTracker />
      <TodoList />
    </main>
  );
};
