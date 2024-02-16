
import { HappyProvider } from '@ant-design/happy-work-theme';
import { Todo, storeTodo } from "@yawi/store";
import { useEffect, useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import { MenuComponent } from "./components/menu.component";

export default function Root(props) {

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {

    const sub = storeTodo.storeTodo$.subscribe(setTodos)

    return () => {
      sub.unsubscribe();
    }

  }, []);


  return (
    <HappyProvider>
      <BrowserRouter>
        <MenuComponent />
      </BrowserRouter>
    </HappyProvider>);
}
