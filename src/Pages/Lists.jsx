import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/List.scss";
import "../Styles/Notes.scss";
import Dashboard from "../Components/Dashboard";
import NotesSection from "../Components/NotesSection";
import Categories from "../Components/Categories";
import TemplateSection from "../Components/TemplateSection";
import ToDoListSection from "../Components/ToDoListSection";
import GraphSection from "../Components/GraphSection";

function Lists() {
  return (
    <>
      <Header></Header>
      <div className="lists" style={{margin:"0 5vw"}}>
        <Dashboard></Dashboard>
        <hr></hr>
    <GraphSection></GraphSection>
    <hr></hr>
        
        <div
          className="main_content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            margin:"5vh 0"
            
          }}
        >
          <NotesSection></NotesSection>
          <Categories></Categories> 
          <TemplateSection></TemplateSection> 
          <ToDoListSection></ToDoListSection> 
        </div>
      </div>
          <Footer></Footer>
    </>
  );
}

export default Lists;
