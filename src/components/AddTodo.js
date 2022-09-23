import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";

const AddTodo = (props) => {
  const [tasks, setTasks] = useState("");

  //if the input is empty
  const toast = useToast();

  //Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tasks) {
       toast({
        title: "No Task added!",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
      return
    }
    const todo = {
      id: Math.random().toString(),
      text: tasks,
    };

    props.addTasks(todo);
    setTasks("");
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <HStack mt={8}>
        <Input
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
          variant="filled"
          placeholder="Add The Task..."
        />
        <Button colorScheme="pink" px={8} type="submit">
          Add Task
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
