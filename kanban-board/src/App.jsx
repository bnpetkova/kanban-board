import KanbanBoard from "./components/KanbanBoard"; // Adjust the path as per your file structure

const App = () => {
    return (
        <div style={styles.appContainer}>
            <h1 style={styles.header}>Kanban Board</h1>
            <KanbanBoard />
        </div>
    );
};

const styles = {
    appContainer: {
    display: "flex",
      
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#e0f7fa", 
        minHeight: "100vh",
    },
    header: {
        fontSize: "2rem",
        marginBottom: "20px",
        color: "#333", 
    },
};

export default App;

