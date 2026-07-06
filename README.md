# Simple CLI tool to manage personal tasks
# project url : https://roadmap.sh/projects/task-tracker
 
1. Installation: 
install node js from https://nodejs.org/en/download with respect to your operating system

2. clone this repository and enter inside the root folder of the repository.
3. this project does not use any of external dependicies, there is no need to run npm install.
4. User guide commands : 


# Adding a new task
node app.js add "Buy groceries"
# Output: Task added successfully (ID: 1)
# Updating and deleting tasks
node app.js update 1 "Buy groceries and cook dinner"
node app.js delete 1
# Marking a task as in progress or done
node app.js mark-in-progress 1
node app.js mark-done 1
# Listing all tasks
node app.js list
# Listing tasks by status
node app.js list in-progress
node app.js list done
node app.js list todo

Let me know when you want to contribute to this simple project.
email at : happydavid226@gmail.com

