
import { Todo, storeTodo } from "@yawi/store";
import { Statistic } from 'antd';
import { useEffect, useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import { Nav } from "./components/nav";

export default function Root(props) {

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {

    const sub = storeTodo.storeTodo$.subscribe(setTodos)

    return () => {
      sub.unsubscribe();
    }

  }, []);


  return <BrowserRouter>
    <Nav />
  </BrowserRouter>;
}
