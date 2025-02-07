import { Box, Container, TextField, Button, FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { v4 as uuidv4 } from 'uuid';  


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

    const handleDateChange = (newValue) => {
      setTaskData((prev) => ({ ...prev, date: newValue }));
    };

    return (
        <Container>
            <Box sx={{backgroundColor: "#000", color: "#fff", height: "80vh", padding: "15px",  position: 'relative',  textAlign: 'right'}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <form onSubmit={handleSubmit} style={{ width: '100%', height: "100%"}}>
                    <TextField
                        label="Add Title"
                        name="title"
                        value={taskData.title}
                        onChange={handleChange}
                        sx={{
                            mb: 2,
                            '& .MuiInputBase-input': { color: '#fff' }, // Text color (blue)
                            '& .MuiInputLabel-root': { color: '#fff' }, // Label color (blue)
                            '& .MuiOutlinedInput-notchedOutline': { color: '#fff' }, // Label color (blue)
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { borderColor: '#fff' }, // Border color (blue)
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#f1f2f2', // Border color when hovered
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#f1f2f2', // Border color when focused
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
                            '& .MuiInputBase-input': { color: '#fff' }, // Text color (blue)
                            '& .MuiInputLabel-root': { color: '#fff' }, // Label color (blue)
                            '& .MuiOutlinedInput-notchedOutline': { color: '#fff' }, // Label color (blue)
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { borderColor: '#fff' }, // Border color (blue)
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#f1f2f2', // Border color when hovered
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#f1f2f2', // Border color when focused
                            },
                          }}
                    />
                    

                    <FormControl sx={{color: "#fff", borderRadius: "8px"}} fullWidth>
                      <DatePicker 
                        style={{color: "#fff", width: "100"}}
                        sx={{
                          mb: 2,
                          '& .MuiInputBase-input': { color: '#fff' }, // Text color (blue)
                          '& .MuiInputLabel-root': { color: '#fff' }, // Label color (blue)
                          '& .MuiOutlinedInput-notchedOutline': { color: '#fff' }, // Label color (blue)
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: '#fff' }, // Border color (blue)
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#f1f2f2', // Border color when hovered
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#f1f2f2', // Border color when focused
                          },
                        }}
                        label="Select Date"
                        name="deadline"
                        value={taskData.deadline}
                        onChange={handleDateChange}
                        renderInpur={(params) => 
                          <TextField
                          {...params}
                          sx={{
                            mb: 2,
                            '& .MuiInputBase-input': { color: '#fff' }, // Text color (blue)
                            '& .MuiInputLabel-root': { color: '#fff' }, // Label color (blue)
                            '& .MuiOutlinedInput-notchedOutline': { color: '#fff' }, // Label color (blue)
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': { borderColor: '#fff' }, // Border color (blue)
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#f1f2f2', // Border color when hovered
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#f1f2f2', // Border color when focused
                            },
                          }}
                        />
                        }>
                      </DatePicker>
                    </FormControl>

                    <FormControl sx={{color: "#fff", borderRadius: "8px"}} fullWidth>
                        <InputLabel sx={{ color: "#fff" }}>Priority</InputLabel>
                        <Select 
                          sx={{
                            textAlign: "left",
                            '& .MuiInputBase-input': { color: '#fff' }, // Text color (blue)
                            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
                            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
                            borderRadius: "8px",
                          }}
                          value={taskData.priority}
                          name="priority"
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
                        <Button type="button" onClick={resetForm} variant="outlined" color="#fff" sx={{ mb: 2, marginRight: "10px",fontSize: "12px"  }}>
                            Discard
                        </Button>
                        <Button type="submit" variant="contained" color="secondary" sx={{ mb: 2, fontSize: "12px"  }}>
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