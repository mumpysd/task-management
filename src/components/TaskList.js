import { Box, Container, Typography, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';  // Import the Delete Icon from MUI
import IconButton from '@mui/material/IconButton';

const TaskList = ({taskList, resetTaskList, deleteTask}) => {
    return (
        <Container>
            <Box sx={{backgroundColor: "#eed2d2", color: "#000", height: "80vh", padding: "15px", position: "relative"}}>
               {taskList.length === 0 ? <Typography sx={{textAlign: "center", display: "flex", height: "100%", justifyContent: "center", alignItems: "center"}}>Task List is Empty</Typography> : (
                <>
                     <Typography>Task List:</Typography>
                     <ul style={{padding: "0px", height: "60vh", overflowY: "auto"}}>
                     {
                        taskList.map((task, index) => (
                            <li style={{listStyleType: "none", border: "1px solid #000", borderRadius: "10px", padding: "10px 30px 10px 10px", marginBottom: "10px", position: "relative"}} key={task.id}>
                               <p style={{margin: "0px", fontSize: "12px"}}>Task {index + 1}: {task.title}</p>
                               <p style={{margin: "0px", fontSize: "11px"}}>{task.remindAt && `Remind At: ${task.dueAt}`} {task.priority && `|| Due At: ${task.dueAt}`}</p>
                               <p style={{margin: "0px", fontSize: "11px"}}>{task.priority && `Priority: ${task.priority}`}</p>
                               {task.description && (
                                <p style={{margin: "0px", fontSize: "10px"}}>Description: {task.description}</p>
                               )}

                               <IconButton onClick={() => deleteTask(task.id)}
                                 sx={{
                                    fontSize: 'small',
                                    color: '#000',  // Change icon color to white
                                    position: 'absolute',  // Position the icon absolutely
                                    top: 0,  // Position at the top of the task
                                    right: 0,  // Position at the right side
                                    zIndex: 1,  // Ensure the icon is above other elements
                                  }}>
                                 <DeleteIcon />
                              </IconButton>
                            </li>
                        ))
                     }
                     </ul>

                     <Box
                        sx={{
                        position: 'absolute',  // Absolute positioning
                        bottom: 0,  // Stick it to the bottom
                        left: 0,
                        width: '100%',
                        textAlign: 'right',
                        p: 2,
                        }}
                    >
                        <Button onClick={resetTaskList} type="button" variant="outlined" color="#000" sx={{ mb: 2, fontSize: "12px" }}>
                            Reset
                        </Button>
                    </Box>
                     
                </>
               )}
            </Box>
        </Container>
    )
}

export default TaskList;