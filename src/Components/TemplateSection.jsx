import { Typography, Box } from "@mui/material";
import TodoListTemplate from "../Components/Template";
import "../Styles/List.scss";
import "../Styles/Notes.scss";

// Templates data
const todoLists = [
    {
        todolistName: "Work Projects",
        tasks: [
            "Complete project report",
            "Review team meeting notes",
            "Update resume",
            "Send progress update to manager",
            "Prepare presentation for client meeting",
        ],
        category: "Work",
    },
    {
        todolistName: "Personal Goals",
        tasks: [
            "Read 20 pages of a book",
            "Work out for 30 minutes",
            "Meditate for 10 minutes",
            "Learn a new skill online",
            "Organize office desk",
        ],
        category: "Personal",
    },
    {
        todolistName: "Shopping List",
        tasks: [
            "Buy groceries",
            "Purchase new laptop",
            "Get a birthday gift for a friend",
            "Stock up on toiletries",
            "Order new phone case",
        ],
        category: "Shopping",
    },
    {
        todolistName: "Home Improvement",
        tasks: [
            "Paint the living room",
            "Fix leaky faucet",
            "Clean out garage",
            "Install new light fixtures",
            "Mow the lawn",
        ],
        category: "Home",
    },
    {
        todolistName: "Health & Wellness",
        tasks: [
            "Book dentist appointment",
            "Schedule annual physical exam",
            "Join a local yoga class",
            "Plan balanced meal for the week",
            "Track daily water intake",
        ],
        category: "Health",
    },
    {
        todolistName: "Travel Plans",
        tasks: [
            "Plan weekend getaway",
            "Book flight tickets",
            "Reserve hotel accommodations",
            "Create a packing list",
            "Research local attractions",
        ],
        category: "Travel",
    },
];

function TemplateSection() {
    return (
        <div className="template-section">
            <Typography variant="h5" sx={{ margin: "5vh", fontWeight: 600 }}>
                Templates
            </Typography>
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
                {todoLists.map((list, index) => (
                    <TodoListTemplate
                        key={index}
                        todolistName={list.todolistName}
                        tasks={list.tasks}
                        category={list.category}
                    />
                ))}
            </Box>
        </div>
    );
}

export default TemplateSection;
