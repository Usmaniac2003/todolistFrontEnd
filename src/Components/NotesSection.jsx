import AddNote from "../assets/Iconly/Bulk/Plus.png";
import { Typography } from "@mui/material";
import ListItem from "../Components/ListItem";
import DrawIcon from "@mui/icons-material/Draw";
import "../Styles/List.scss";
import "../Styles/Notes.scss";

function NotesSection() {
    const listItems = Array(8).fill(<ListItem />);
  return (
    <div>
      <div className="notes_section">
                            <div className="addNote">
                                <div className="addNoteText">
                                    <DrawIcon />
                                    <Typography variant="body1">Notes</Typography>
                                </div>
                                <img src={AddNote} alt="Add Note" className="addNoteIcon" />
                            </div>
                            <div className="notes">
                                {listItems.map((item, index) => (
                                    <div key={index} className="noteItem">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
    </div>
  )
}

export default NotesSection