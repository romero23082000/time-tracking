import { useState } from "react";
import "./App.css";
import { Todos } from "./components/Todos";
import { FirstCard } from "./components/FirstCard";
import { Flex } from "@chakra-ui/react";
import img1 from "./assets/images/icon-work.svg";
import img2 from "./assets/images/icon-play.svg";
import img3 from "./assets/images/icon-study.svg";
import img4 from "./assets/images/icon-exercise.svg";
import img5 from "./assets/images/icon-social.svg";
import img6 from "./assets/images/icon-self-care.svg";

const mockTodos = [
  {
    id: 1,
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
    img: img1,
    fondo: "hsl(15, 100%, 70%)",
  },
  {
    id: 2,
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
    img: img2,
    fondo: "hsl(195, 74%, 62%)",
  },
  {
    id: 3,
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
    img: img3,
    fondo: "hsl(348, 100%, 68%)",
  },
  {
    id: 4,
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
    img: img4,
    fondo: "hsl(145, 58%, 55%)",
  },
  {
    id: 5,
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
    img: img5,
    fondo: "hsl(264, 64%, 52%)",
  },
  {
    id: 6,
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
    img: img6,
    fondo: "hsl(43, 84%, 65%)",
  },
];

const App = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [active, setActive] = useState("weekly");

  const handleRemove = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  console.log("todos", todos);

  return (
    <>
      <Flex gap="20px" flexDirection={{ base: "column", sm: "row" }}>
        <FirstCard setActive={setActive} active={active} />
        <Flex
          flexWrap="wrap"
          gap="20px"
          width={{ sm: "700px" }}
          flexDirection={{ base: "column", sm: "row" }}
        >
          <Todos todos={todos} onRemoveTodo={handleRemove} active={active} />
        </Flex>
      </Flex>
    </>
  );
};

export default App;
