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
      remindAt: dayjs(),
      dueAt: dayjs(),
      priority: '',
      flagged: false,
      markAsCompleted: false
    });

  const createOrUpdateTask = () => {
  // if(!auth.currentUser) return alert("Please login/register first!");
   if (!taskData.title.trim()) return; // Prevent adding empty tasks
   const formattedData = {
      ...taskData,
      remindAt: taskData.remindAt ? dayjs(taskData.remindAt).format("YYYY-MM-DD") : "",
      dueAt: taskData.dueAt ? dayjs(taskData.dueAt).format("YYYY-MM-DD") : "",
    };
   setTaskList((prevList) => [...prevList, formattedData]);
   setTaskData({id: '', title: '', description: '', remindAt: dayjs(), dueAt: dayjs(), priority: '', flagged: false, markAsCompleted: false }); // Clear input fields
  }

  const resetTaskList = () => {
    setTaskList([]);
  }

  const resetForm = () => {
   setTaskData({ id: '', title: '', description: '', remindAt: dayjs(), dueAt: dayjs(), priority: '', flagged: false, markAsCompleted: false }); // Clear input fields
  }

  const deleteTask = (taskId) => {
   setTaskList((prevList) => prevList.filter((task) => task.id !== taskId));
  }
  
  const toggleFlag = (taskId) => {
      setTaskList((prevList) => 
         prevList.map((task) => task.id === taskId ? {...task, flagged: !task.flagged} : task
         )
      );
  };

  const markAsCompleted = (taskId) => {
      setTaskList((prevList) => 
         prevList.map((task) => task.id === taskId ? {...task, markAsCompleted: !task.markAsCompleted} : task
      )
    )
  }

  return (
     <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
                <CreateUpdateTaskForm taskData={taskData} setTaskData={setTaskData} createOrUpdateTask={createOrUpdateTask} resetForm = {resetForm} resetTaskList={resetTaskList} />
            </Grid>
            <Grid item xs={12} lg={6}>
               <TaskList taskList={taskList} resetTaskList={resetTaskList} deleteTask={deleteTask} markAsCompleted={markAsCompleted} toggleFlag={toggleFlag}/>
            </Grid>
        </Grid>
     </Box>
  );
};

export default TaskManagement;