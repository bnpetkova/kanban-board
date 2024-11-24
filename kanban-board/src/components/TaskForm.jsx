import PropTypes from "prop-types";
import kanbanBoardStyles from "./KanbanBoardStyles";

const TaskForm = ({ newTask, setNewTask, onAddTask, onCancel }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  return (
    <div style={kanbanBoardStyles.formContainer}>
      <h3>Add a New Task</h3>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={newTask.title}
          onChange={handleChange}
          style={kanbanBoardStyles.input}
          required
        />
      </label>
      <label>
        Tags (comma-separated):
        <input
          type="text"
          name="tags"
          value={newTask.tags}
          onChange={handleChange}
          style={kanbanBoardStyles.input}
        />
      </label>
      <label>
        Members (comma-separated):
        <input
          type="text"
          name="members"
          value={newTask.members}
          onChange={handleChange}
          style={kanbanBoardStyles.input}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={newTask.date}
          onChange={handleChange}
          style={kanbanBoardStyles.input}
          required
        />
      </label>
      <div style={kanbanBoardStyles.buttonContainer}>
        <button
          style={{ ...kanbanBoardStyles.button, backgroundColor: "#007BFF" }}
          onClick={onAddTask}
        >
          Add Task
        </button>
        <button
          style={{ ...kanbanBoardStyles.button, backgroundColor: "#DC3545" }}
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

TaskForm.propTypes = {
  newTask: PropTypes.shape({
    title: PropTypes.string,
    tags: PropTypes.string,
    members: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  setNewTask: PropTypes.func.isRequired,
  onAddTask: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default TaskForm;
