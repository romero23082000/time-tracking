import { ListOfTodos } from "../types";
import { Todo } from "./Todo";

interface Props {
  todos: ListOfTodos;
  onRemoveTodo: (id: number) => void;
  active: string;
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, active }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <Todo
            id={todo.id}
            title={todo.title}
            timeframes={todo.timeframes}
            img={todo.img}
            onRemoveTodo={onRemoveTodo}
            key={todo.id}
            fondo={todo.fondo}
            active={active}
          />
        );
      })}
    </>
  );
};
