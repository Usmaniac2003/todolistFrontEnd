import CompletionPieChart from "../Components/PieChart";
import MyCustomCalendar from "../Components/Calendar";
import "../Styles/List.scss";
import "../Styles/Notes.scss";
import { Box, Typography, useMediaQuery } from "@mui/material";

function GraphSection() {
    const isMobile = useMediaQuery('(max-width:820px)');
    return (
    <div>
      <Box
  className="Graphs"
  sx={{
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '4vw',
    background: 'linear-gradient(135deg, #f3e5f5, #e1bee7)',
    borderRadius: '20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    gap:"5vw",
    margin:"5vh 0",
    flexDirection:isMobile?"column":"row"
  }}
>
  <Box
    sx={{
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '3vw',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      flexDirection:"column",
      gap:"2vw"
    }}
  >
    <CompletionPieChart completion={80} />
    <Typography variant="h6" fontWeight={600}>Task Pie Chart</Typography>
  </Box>
  
  <Box
    sx={{
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2vw',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      gap:"2vw",
      flexDirection:"column"
    }}
  >
    <MyCustomCalendar />
    <Typography variant="h6" fontWeight={600}>Calendar</Typography>
  </Box>
</Box>
    </div>
  )
}

export default GraphSection
