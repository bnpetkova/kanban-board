import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import kanbanBoardStyles from "./KanbanBoardStyles";

const DraggableTask = ({ task, column }) => {
  const [, drag] = useDrag({
    type: "task",
    item: { ...task, column },
  });

  return (
    <div ref={drag} style={kanbanBoardStyles.task}>
      <h4>{task.title}</h4>
      <p>Tags: {task.tags.join(", ")}</p>
      <p>Members: {task.members.join(", ")}</p>
      <p>Date: {task.date}</p>
    </div>
  );
};

DraggableTask.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    members: PropTypes.arrayOf(PropTypes.string).isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  column: PropTypes.string.isRequired,
};

export default DraggableTask;
