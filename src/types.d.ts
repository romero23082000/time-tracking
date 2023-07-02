export interface Todo {
  id: number;
  title: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
    [key: string]: {
      current: number;
      previous: number;
    };
  };
  img: string;
  fondo: string;
}

export type ListOfTodos = Todo[];
