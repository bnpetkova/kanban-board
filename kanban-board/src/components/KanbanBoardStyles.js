const kanbanBoardStyles = {
    filterBar: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
        padding: "10px 20px",
        backgroundColor: "#a6eef7",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      },
      filterInput: {
        margin: "0 10px",
        padding: "8px",
        width: "200px",
        borderRadius: "5px",
        border: "1px solid #ddd",
        outline: "none",
        transition: "border-color 0.3s ease",
      },
    board: {
          
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        padding: "0 20px",
        marginTop: "20px",
        backgroundColor: "#a6eef7", 
        borderRadius: "10px",
      },
      column: {
        width: "30%",
        padding: "20px",
        borderRadius: "8px",
        margin: "0 10px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      },
      columnTitle: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "20px",
        padding: "10px",
        borderRadius: "5px",
        textAlign: "center",
      },
      todoTitle: {
        backgroundColor: "#ffccd5", 
      },
      inProgressTitle: {
        backgroundColor: "#fff4cc",
      },
      doneTitle: {
        backgroundColor: "#ccf5cc", 
      },
      addButton: {
        fontSize: "20px",
        padding: "10px",
        backgroundColor: "#007BFF",
        cursor: "pointer",
        marginBottom: "20px",
        
    },
    buttonCancel:{
        fontSize: "20px",
        padding: "10px",
        backgroundColor: "#e6352c",
        cursor: "pointer",
        marginBottom: "20px"
    },
      task: {
        backgroundColor: "white",
        border: "1px solid #ddd",
        padding: "15px",
        margin: "15px 0",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "move",
    },
    inputField: {
        fontSize: "20px",
        padding: "10px",
        width: "100%",
        marginBottom: "20px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        boxSizing: "border-box",
      }
};
  
export default kanbanBoardStyles;