import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle} />
        // <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  )
}

export default Tasks
