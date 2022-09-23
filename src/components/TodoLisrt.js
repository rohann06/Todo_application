import {
  Badge,
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const TodoList = ({ todos, deleteTodo }) => {


  if (!todos.length) {
    return (
      <Badge colorScheme="green" p={4} m={4} borderRadius='lg'>
        Work is done, Yey!!!
      </Badge>
    );
  }

  

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p={4}
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text fontSize='17px' fontWeight="semibold">{todo.text}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound="trie"
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList;
