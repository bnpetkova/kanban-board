import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import DraggableTask from "./DraggableTask";
import kanbanBoardStyles from "./KanbanBoardStyles";

const DropZone = ({ column, tasks, onDrop, onAddTask }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "task",
    drop: (item) => onDrop(item, column),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const columnTitleStyle =
    column === "todo"
      ? kanbanBoardStyles.todoTitle
      : column === "inProgress"
      ? kanbanBoardStyles.inProgressTitle
      : kanbanBoardStyles.doneTitle;

  return (
    <div
      ref={drop}
      style={{
        ...kanbanBoardStyles.column,
        backgroundColor: isOver ? "#f0f4f7" : "#fff",
      }}
    >
      <h2 style={{ ...kanbanBoardStyles.columnTitle, ...columnTitleStyle }}>
        {column}
      </h2>
      <button
        style={kanbanBoardStyles.addButton}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#007BFF")}
        onClick={onAddTask}
      >
        +
      </button>
      {tasks.map((task) => (
        <DraggableTask key={task.id} task={task} column={column} />
      ))}
    </div>
  );
};

DropZone.propTypes = {
  column: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      members: PropTypes.arrayOf(PropTypes.string).isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDrop: PropTypes.func.isRequired,
  onAddTask: PropTypes.func.isRequired,
};

export default DropZone;
