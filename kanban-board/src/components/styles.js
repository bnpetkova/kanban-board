export const kanbanBoardStyles = {
    filterBar: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
        padding: '10px 20px',
        backgroundColor: '#f4f5f7', // Light background for the filter bar
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Light shadow for depth
    },
    filterInput: {
        margin: '0 10px',
        padding: '8px',
        width: '200px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        outline: 'none',
        transition: 'border-color 0.3s ease',
    },
    filterInputFocus: {
        borderColor: '#007BFF', 
    board: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
        padding: '0 20px',
        marginTop: '20px',
    },
    column: {
        width: '30%',
        padding: '20px',
        borderRadius: '8px',
        margin: '0 10px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Soft shadow for column containers
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    },
    columnHover: {
        backgroundColor: '#f1f1f1', // Subtle hover effect for columns
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', // Hover effect for column shadow
    },
    addButton: {
        fontSize: '20px',
        padding: '10px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        marginBottom: '20px',
        transition: 'background-color 0.3s ease',
    },
    addButtonHover: {
        backgroundColor: '#0056b3', // Darker blue on hover
    },
    task: {
        backgroundColor: 'white',
        border: '1px solid #ddd',
        padding: '15px',
        margin: '15px 0',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Soft shadow for task cards
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    },
    taskHover: {
        transform: 'scale(1.05)', // Slightly enlarge the card on hover
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)', // Add deeper shadow on hover
    },
    taskTitle: {
        fontWeight: 'bold',
        fontSize: '16px',
        marginBottom: '10px',
        color: '#333',
    },
    taskTags: {
        fontSize: '14px',
        color: '#555',
        marginBottom: '10px',
    },
    taskMembers: {
        fontSize: '14px',
        color: '#007BFF',
    },
    taskForm: {
        position: 'fixed',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
        minWidth: '300px',
        transition: 'transform 0.3s ease',
    },
    taskFormCloseButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'transparent',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
        color: '#333',
    },
    taskFormInput: {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        boxSizing: 'border-box',
    },
    taskFormButton: {
        padding: '10px 15px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '100%',
        marginTop: '10px',
    },
    taskFormButtonCancel: {
        padding: '10px 15px',
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '100%',
        marginTop: '10px',
        marginBottom: '10px',
    },
    taskFormButtonHover: {
        backgroundColor: '#0056b3', // Darker blue on hover
    },
    taskFormButtonCancelHover: {
        backgroundColor: '#d32f2f', // Darker red on hover
    },
    addButtonColumn: {
        display: 'flex',
        justifyContent: 'center',
    },
};

// CSS for responsiveness
export const mediaQueries = {
    tablet: '@media (max-width: 768px)',
    mobile: '@media (max-width: 480px)',
};

export const responsiveStyles = {
    [mediaQueries.tablet]: {
        board: {
            flexDirection: 'column',
            alignItems: 'center',
        },
        column: {
            width: '100%', // Full width for tablet view
            marginBottom: '20px', // Space between columns
        },
        addButton: {
            fontSize: '18px', // Smaller add button for tablets
        },
    },
    [mediaQueries.mobile]: {
        board: {
            flexDirection: 'column',
            alignItems: 'center',
        },
        column: {
            width: '100%', // Full width for mobile view
            marginBottom: '15px', // Less space between columns
        },
        addButton: {
            fontSize: '16px', // Smaller add button for mobile view
        },
        task: {
            padding: '10px', // Smaller task cards on mobile
        },
    },
};
