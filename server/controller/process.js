const { exec } = require("child_process");
const path = require("path");

const processRequest = (req, res) => {
  const { keyword, count, email } = req.body;

  // Define the full path to main.py script
  const scriptPath = path.join(__dirname, "../../main.py");

  // Pass all necessary arguments to the main script
  const command = `python ${scriptPath} --keyword "${keyword}" --count ${count} --email "${email}"`;

  exec(command, (error, stdout, stderr) => {
    if (error || stderr) {
      console.error(`Error occurred: ${error?.message || "Faltu error"}`);
      return res.status(500).json({ message: `Error: ${stderr || error.message}` });
    }

    // Instead of sending back all stdout, send a simpler message
    const successMessage = "The mashup process has been completed successfully.";
    res.status(200).json({ message: successMessage });
  });

};

module.exports = { processRequest };