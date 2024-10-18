import { Typography, Box } from "@mui/material";
import "../Styles/List.scss";
import "../Styles/Notes.scss";
import TodoList from "../Components/ToDoList";
import { useToDoList } from "../context/ToDoListContext"; // Import the context hook

function ToDoListSection() {
  const { toDoLists, loading, error } = useToDoList(); // Access lists from the context

  if (loading) return <div>Loading To-Do Lists...</div>; // Handle loading state
  if (error) return <div>Error: {error}</div>; // Handle errors

  return (
    <div className="toDoLists">
      <Typography variant="h5" sx={{ margin: "5vh", fontWeight: 600 }}>
        To Do Lists
      </Typography>
      <div className="list_section">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
            padding: { xs: "1rem", sm: "3vh 0" },
          }}
        >
          {toDoLists.map((list, index) => (
            <TodoList
              key={index}
              todolistName={list.title} // Use "title" from fetched data
              tasks={list.items.map((item) => item.content)} // Map items to their content
              category={list.category} // Use "category" from fetched data
              deadline={list.dueDate} // Pass "dueDate" as deadline
            />
          ))}
        </Box>
      </div>
    </div>
  );
}

export default ToDoListSection;
