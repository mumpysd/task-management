import React, { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import CreateUpdateTaskForm from "./CreateUpdateTaskForm";
import TaskList from "./TaskList";
import dayjs from "dayjs";
import { db, auth, addDoc, collection } from '../components/Auth/firebase';

const TaskManagement = () => {

   const [taskList, setTaskList] = useState([]);
   const [taskData, setTaskData] = useState({
      id: '',
      title: '',
      description: '',
      deadline: dayjs(),
      priority: ''
    });

  const createOrUpdateTask = () => {
  // if(!auth.currentUser) return alert("Please login/register first!");
   if (!taskData.title.trim()) return; // Prevent adding empty tasks
   const formattedData = {
      ...taskData,
      deadline: taskData.deadline ? dayjs(taskData.deadline).format("YYYY-MM-DD") : "",
    };
   setTaskList((prevList) => [...prevList, formattedData]);
   setTaskData({id: '', title: '', description: '', deadline: dayjs(), priority: '' }); // Clear input fields
  }

  const resetTaskList = () => {
    setTaskList([]);
  }

  const resetForm = () => {
   setTaskData({ id: '', title: '', description: '', deadline: dayjs(), priority: '' }); // Clear input fields
  }

  const deleteTask = (taskId) => {
   setTaskList((prevList) => prevList.filter((task) => task.id !== taskId));
  }
  

  return (
     <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
                <CreateUpdateTaskForm taskData={taskData} setTaskData={setTaskData} createOrUpdateTask={createOrUpdateTask} resetForm = {resetForm} resetTaskList={resetTaskList} />
            </Grid>
            <Grid item xs={12} lg={6}>
               <TaskList taskList={taskList} resetTaskList={resetTaskList} deleteTask={deleteTask}/>
            </Grid>
        </Grid>
     </Box>
  );
};

export default TaskManagement;