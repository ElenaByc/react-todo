const todoList = [
  {
    id: 1,
    title: "Complete Lesson 1.1 assignment"
  },
  {
    id: 2,
    title: "Read pages 1 through 37 of the Road to React textbook"
  },
  {
    id: 3,
    title: "Watch lessons 1-25 of the Learn React course on Scrimba"
  }
]

function TodoList() {
  return (
      <ul>
        {todoList.map(elem =>
          <li key={elem.id}>{elem.title}</li>
        )}
      </ul>
  )
}

export default TodoList