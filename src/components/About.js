import { Box, Typography, Container } from "@mui/material";

const About = () => {
    return (
        <>
             <Container>
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        About the Task Management App
                    </Typography>

                    <Typography variant="body1" paragraph>
                        <strong>Task Management</strong> is an intuitive and powerful tool
                        designed to help individuals and teams stay organized and productive.
                        Whether you're managing personal tasks, collaborating on projects, or
                        tracking long-term goals, this app provides all the features you need
                        to stay on top of your to-dos.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                         Key Features:
                    </Typography>

                    <Typography variant="body1" paragraph>
                        <ul>
                            <li><strong>Task Creation:</strong> Quickly add tasks with due dates, descriptions, and priorities.</li>
                            <li><strong>Task Categories:</strong> Organize tasks into categories such as Work, Personal, and Urgent to easily track progress.</li>
                            <li><strong>Collaborative Workspaces:</strong> Share tasks with team members to collaborate on projects in real-time.</li>
                            <li><strong>Due Dates & Reminders:</strong> Set reminders and due dates to never miss an important deadline.</li>
                            <li><strong>Progress Tracking:</strong> Monitor task completion and stay motivated with clear visual progress indicators.</li>
                            <li><strong>User Authentication:</strong> Secure login and user accounts to personalize and manage your tasks.</li>
                        </ul>
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Our app empowers you to stay organized, boost productivity, and ensure
                        that all your tasks are completed on time!
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default About;