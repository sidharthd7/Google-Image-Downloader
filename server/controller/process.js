const { exec } = require("child_process");
const path = require("path");

const processRequest = (req, res) => {
  const { keyword, count, email } = req.body;

  // Define the full path to main.py script
  const scriptPath = path.join(__dirname, "../../main.py");

  // Pass all necessary arguments to the main script
  const command = `python ${scriptPath} --keyword "${keyword}" --count ${count} --email "${email}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error occurred: ${error.message}`);
      return res.status(500).json({ message: `Error: ${error.message}` });
    }
  
    if (stderr) {
      console.error(`Script stderr: ${stderr}`);
      return res.status(500).json({ message: `Error: ${stderr}` });
    }
  
    const successMessage = "The downloading process has been completed successfully.";
    res.status(200).json({ message: successMessage });
  });  

};

module.exports = { processRequest };