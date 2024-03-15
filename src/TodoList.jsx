import TodoListItem from './TodoListItem';

const todoList = [
  {
    id: 1,
    title: "Challenge the sun to a duel! Open the curtains and see who blinks first."
  },
  {
    id: 2,
    title: "Brush your teeth with your non-dominant hand (bonus points for toothpaste art on the mirror)."
  },
  {
    id: 3,
    title: "Eat breakfast cereal with a fork. Rebellion is delicious!"
  },
  {
    id: 4,
    title: "Talk to your houseplants in a superhero voice."
  },
  {
    id: 5,
    title: "Walk backwards for 5 minutes. People watching has never been so entertaining!"
  },
  {
    id: 6,
    title: "Organize your desk items by color, ignoring their actual function. Aesthetics over practicality!"
  },
  {
    id: 7,
    title: "Have a staring contest with your reflection. Loser has to do the dishes tomorrow."
  },
];

const TodoList = () => {
  return (
    <ul>
      {todoList.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
    </ul>
  );
}

export default TodoList;