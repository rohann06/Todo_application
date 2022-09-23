import { Heading, VStack, IconButton, Spacer, useColorMode } from "@chakra-ui/react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoLisrt";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

function App() {
  //State
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
    // initialTodos
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //delet tasks
  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  //add tasks
  const addTasks = (todo) => {
    setTodos([...todos, todo]);
  };

  //Change the color theme
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      {/* Icne Button */}
      <IconButton
        icon={colorMode === 'light'?<FaMoon/>:<FaSun />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />

      {/* Heading */}
      <Heading
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.400, blue.500 )"
        bgClip="text"
        mb={8}
      >
        Todo Application
      </Heading>

      <Spacer />
      <Spacer />
      <Spacer />

      {/* Todo List */}
      <TodoList todos={todos} deleteTodo={deleteTodo} />

      {/* Add Todo */}
      <AddTodo addTasks={addTasks} />
    </VStack>
  );
}

export default App;
