import { Box, Container, TextField, Button, FormControl, Select, InputLabel, MenuItem, Grid } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { v4 as uuidv4 } from 'uuid';  
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from "dayjs";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import LowPriorityIcon from "@mui/icons-material/LowPriority";

const CreateUpdateTaskForm = ({taskData, setTaskData, createOrUpdateTask, resetForm}) => {

    const handleChange  = (e) => {
        const { name, value } = e.target;
        setTaskData((prevData) => ({
          ...prevData,
          id: uuidv4(),
          [name]: value,
        }));
    }

    // Define icons, colors, and styles for different priority levels
    const priorityStyles = {
      High: { 
        icon: <PriorityHighIcon sx={{ color: "red", marginRight: 1 }} />, 
        color: "red", 
        hoverColor: "rgba(255, 0, 0, 0.2)", // Light red hover background
        selectedBg: "rgba(255, 0, 0, 0.4)" // Darker red when selected
      },
      Medium: { 
        icon: <ReportProblemIcon sx={{ color: "orange", marginRight: 1 }} />, 
        color: "orange", 
        hoverColor: "rgba(255, 165, 0, 0.2)", // Light orange hover background
        selectedBg: "rgba(255, 165, 0, 0.4)" // Darker orange when selected
      },
      Low: { 
        icon: <LowPriorityIcon sx={{ color: "green", marginRight: 1 }} />, 
        color: "green", 
        hoverColor: "rgba(0, 128, 0, 0.2)", // Light green hover background
        selectedBg: "rgba(0, 128, 0, 0.4)" // Darker green when selected
      },
    };

    const handleSubmit  = (e) => {
       e.preventDefault();
       createOrUpdateTask();
    }

    const handleRemindDateChange = (newValue) => {
      setTaskData((prev) => ({ ...prev, remindAt: newValue }));
    };

    const handleDueDateChange = (newValue) => {
      setTaskData((prev) => ({ ...prev, dueAt: newValue }));
    };

    return (
        <Container>
            <Box sx={{backgroundColor: "#f1f2f2", color: "#000", height: "80vh", padding: "15px",  position: 'relative',  textAlign: 'right'}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <form onSubmit={handleSubmit} style={{ width: '100%', height: "100%"}}>
                    <TextField
                        label="Add Title"
                        name="title"
                        value={taskData.title}
                        onChange={handleChange}
                        sx={{
                            mb: 2,
                            '& .MuiInputBase-input': { color: '#000' }, // Text color (blue)
                            '& .MuiInputLabel-root': { color: '#000' }, // Label color (blue)
                            '& .MuiOutlinedInput-notchedOutline': { color: '#000' }, // Label color (blue)
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { borderColor: '#000' }, // Border color (blue)
                              "&:hover fieldset": { borderColor: "#000" }, // Border color on hover
                              "&.Mui-focused fieldset": { borderColor: "#4A77C3" }, // Border color on focus
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#000', // Border color when hovered
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#000', // Border color when focused
                            },
                          }}
                        fullWidth
                        required
                    />

                    <TextField
                        label="Add Description"
                        name="description"
                        value={taskData.description}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        fullWidth
                        sx={{
                            mb: 2,
                            '& .MuiInputBase-input': { color: '#000' }, // Text color (blue)
                            '& .MuiInputLabel-root': { color: '#000' }, // Label color (blue)
                            '& .MuiOutlinedInput-notchedOutline': { color: '#000' }, // Label color (blue)
                           '& .MuiOutlinedInput-root': {
                              '& fieldset': { borderColor: '#000' }, // Border color (blue)
                              "&:hover fieldset": { borderColor: "#000" }, // Border color on hover
                              "&.Mui-focused fieldset": { borderColor: "#4A77C3" }, // Border color on focus
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#000', // Border color when hovered
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#000', // Border color when focused
                            },
                          }}
                    />
                    
                    <Grid container spacing={2}>
                      {/* Due Date Picker */}
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <DesktopDatePicker
                            sx={{
                              mb: 2,
                              "& .MuiInputBase-input": { color: "#000" },
                              "& .MuiInputLabel-root": { color: "#000" },
                              "& .MuiOutlinedInput-notchedOutline": { borderColor: "#000" },
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "#000" },
                                "&:hover fieldset": { borderColor: "#000" },
                                "&.Mui-focused fieldset": { borderColor: "#4A77C3" },
                              },
                            }}
                            label="Due At"
                            name="dueAt"
                            minDate={dayjs()} // Disable past dates
                            value={taskData.dueAt}
                            onChange={handleDueDateChange}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </FormControl>
                      </Grid>

                      {/* Remind Me Date Picker */}
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <DesktopDatePicker
                            sx={{
                              mb: 2,
                              "& .MuiInputBase-input": { color: "#000" },
                              "& .MuiInputLabel-root": { color: "#000" },
                              "& .MuiOutlinedInput-notchedOutline": { borderColor: "#000" },
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "#000" },
                                "&:hover fieldset": { borderColor: "#000" },
                                "&.Mui-focused fieldset": { borderColor: "#4A77C3" },
                              },
                            }}
                            label="Remind At"
                            name="remindAt"
                            minDate={dayjs()} // Disable past dates
                            maxDate={taskData.dueAt} // Remind date should be before or on Due date
                            value={taskData.remindAt}
                            onChange={handleRemindDateChange}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </FormControl>
                      </Grid>
                    </Grid>

                    <FormControl sx={{ color: "#000", borderRadius: "8px" }} fullWidth>
                      <InputLabel sx={{ color: "#000" }}>Priority</InputLabel>
                      <Select
                        sx={{
                          textAlign: "left",
                          "& .MuiInputBase-input": { color: "#000" }, // Text color
                          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#000" },
                          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#000" },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#4A77C3" },
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                        }}
                        value={taskData.priority}
                        name="priority"
                        defaultValue=""
                        required
                        onChange={handleChange}
                        label="Priority"
                        renderValue={(selected) =>
                          selected ? (
                            <Box sx={{ display: "flex", alignItems: "center", color: priorityStyles[selected].color }}>
                              {priorityStyles[selected].icon} {selected}
                            </Box>
                          ) : (
                            "Select an option"
                          )
                        }
                      >
                        {Object.entries(priorityStyles).map(([key, { icon, color, hoverColor, selectedBg }]) => (
                          <MenuItem
                            key={key}
                            value={key}
                            sx={{
                              "&:hover": { backgroundColor: hoverColor },
                              "&.Mui-selected": { backgroundColor: selectedBg, color: "#fff" },
                              "&.Mui-selected:hover": { backgroundColor: selectedBg }, // Maintain same color on hover after selection
                            }}
                          >
                            {icon}
                            <span style={{ color }}>{key}</span>
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

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
                        <Button type="button" onClick={resetForm} variant="outlined" color="#000" sx={{ mb: 2, marginRight: "10px",fontSize: "12px"  }}>
                            Discard
                        </Button>
                        <Button type="submit" variant="contained" sx={{ mb: 2, fontSize: "12px", backgroundColor: "#00D199", color: "#fff" }}>
                            Submit
                        </Button>
                    </Box>

                  
                </form>
                </LocalizationProvider>
            </Box>
        </Container>
    )
}

export default CreateUpdateTaskForm;