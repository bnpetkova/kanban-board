import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropZone from "./DropZone";
import FilterBar from "./FilterBar";
import TaskForm from "./TaskForm";
import kanbanBoardStyles from "./KanbanBoardStyles";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState({
    todo: [
      { id: "1", title: "Create Project Documentation", tags: ["Docs"], members: ["E"], date: "2024-11-16" },
      { id: "2", title: "Implement Responsive Layout", tags: ["Frontend"], members: ["B", "F"], date: "2024-11-15" },
    ],
    inProgress: [{ id: "3", title: "Set up DB", tags: ["Database"], members: ["C"], date: "2024-11-14" }],
    done: [{ id: "4", title: "Set Up Repository", tags: ["DevOps"], members: ["G"], date: "2024-11-09" }],
  });

  const [filters, setFilters] = useState({ date: "", member: "", tag: "" });
  const [newTask, setNewTask] = useState({ title: "", tags: "", members: "", date: "" });
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [currentColumn, setCurrentColumn] = useState("");

  const applyFilters = (taskList) =>
    taskList.filter(
      (task) =>
        (!filters.date || task.date.includes(filters.date)) &&
        (!filters.member || task.members.some((member) => member.toLowerCase().includes(filters.member.toLowerCase()))) &&
        (!filters.tag || task.tags.some((tag) => tag.toLowerCase().includes(filters.tag.toLowerCase())))
    );

  const handleDrop = (item, column) => {
    const sourceColumn = item.column;
    if (sourceColumn === column) return;

    const updatedSourceTasks = tasks[sourceColumn].filter((task) => task.id !== item.id);
    const updatedDestinationTasks = [...tasks[column], item];

    setTasks({ ...tasks, [sourceColumn]: updatedSourceTasks, [column]: updatedDestinationTasks });
  };

  const filteredTasks = {
    todo: applyFilters(tasks.todo),
    inProgress: applyFilters(tasks.inProgress),
    done: applyFilters(tasks.done),
  };

  const handleAddTask = () => {
    if (!newTask.title.trim()) {
      alert("Task title is required!");
      return;
    }
  
    const newTaskData = {
      ...newTask,
      id: Date.now().toString(),
      tags: newTask.tags ? newTask.tags.split(",") : [],
      members: newTask.members ? newTask.members.split(",") : [],
    };
  
    setTasks((prev) => ({
      ...prev,
      [currentColumn]: [...prev[currentColumn], newTaskData],
    }));
  
    setNewTask({ title: "", tags: "", members: "", date: "" }); 
    setShowTaskForm(false); 
  };
  
  const handleCancel = () => {
    setNewTask({ title: "", tags: "", members: "", date: "" }); 
    setShowTaskForm(false); 
  };
  

  return (
    <DndProvider backend={HTML5Backend}>
      <FilterBar filters={filters} setFilters={setFilters} />
      {showTaskForm && (
        <TaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          onAddTask={handleAddTask}
          onCancel={ handleCancel}
        />
      )}
      <div style={kanbanBoardStyles.board}>
        {Object.keys(filteredTasks).map((column) => (
          <DropZone
            key={column}
            column={column}
            tasks={filteredTasks[column]}
            onDrop={handleDrop}
            onAddTask={() => {
              setCurrentColumn(column);
              setShowTaskForm(true);
            }}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;
