import { Box, Container, TextField, Button, FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { v4 as uuidv4 } from 'uuid';  
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from "dayjs";



const CreateUpdateTaskForm = ({taskData, setTaskData, createOrUpdateTask, resetForm}) => {

    const handleChange  = (e) => {
        const { name, value } = e.target;
        setTaskData((prevData) => ({
          ...prevData,
          id: uuidv4(),
          [name]: value,
        }));
    }

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
                    
                    <FormControl sx={{color: "#000", borderRadius: "8px"}} fullWidth>
                      <DesktopDatePicker 
                        style={{color: "#000", width: "100"}}
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
                        label="Due At"
                        name="dueAt"
                        minDate={dayjs()}
                        required
                        value={taskData.dueAt}
                        onChange={handleDueDateChange}
                        renderInpur={(params) => 
                          <TextField
                          {...params}
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
                        }>
                      </DesktopDatePicker>
                    </FormControl>

                    <FormControl sx={{color: "#000", borderRadius: "8px"}} fullWidth>
                      <DesktopDatePicker 
                        style={{color: "#000", width: "100"}}
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
                        label="Remind At"
                        name="remindAt"
                        minDate={dayjs()}
                        maxDate={dayjs(taskData.dueAt)}
                        required
                        value={taskData.remindAt}
                        onChange={handleRemindDateChange}
                        renderInpur={(params) => 
                          <TextField
                          {...params}
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
                        }>
                      </DesktopDatePicker>
                    </FormControl>


                    <FormControl sx={{color: "#000", borderRadius: "8px"}} fullWidth>
                        <InputLabel sx={{ color: "#000" }}>Priority</InputLabel>
                        <Select 
                          sx={{
                            textAlign: "left",
                            '& .MuiInputBase-input': { color: '#000' }, // Text color (blue)
                            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#000" },
                            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#000" },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#4A77C3" },
                            borderRadius: "8px",
                          }}
                          value={taskData.priority}
                          name="priority"
                          defaultValue= ""
                          required
                          onChange={handleChange} label="Select an option">
                            <MenuItem value="High">High</MenuItem>
                            <MenuItem value="Medium">Medium</MenuItem>
                            <MenuItem value="Low">Low</MenuItem>
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