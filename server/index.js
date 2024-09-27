const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//create a user

app.post("/register", async (req, res) => {
  const client = await pool.connect();
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    const userResult = await client.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );

    if (userResult.rows.length > 0) {
      return res.status(400).json({ message: "Username already taken" });
    }

    const newUser = await pool.query(
      `
      INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *  
    `,
      [username, hashedPassword]
    );
    res.status(200).json({ message: "Successfully created a user" });
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error("Error: ", err.message);
    res.status(500).json({ err: err.message });
  } finally {
    client.release();
  }
});

// login

app.post("/login", async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "SELECT * FROM users WHERE username = $1",
      [req?.body?.username]
    );

    const user = result.rows[0];

    if (!user) {
      return res
        .status(400)
        .json({ message: "Username or password is incorrect" });
    }

    const passwordIsValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
      return res
        .status(401)
        .json({ message: "Username or password is incorrect" });
    }

    res.status(200).json({ message: "Login successfully" });
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(500).json({ error: error.message });
  }
});

//this is to just create a job
app.post("/createJob", async (req, res) => {
  try {
    const { jobTitle, incomeRange, location, jobDescription } = req.body;

    const newJob = await pool.query(
      `INSERT INTO jobs (job_title, income_range, location, job_description) VALUES ($1, $2, $3, $4) RETURNING *`,
      [jobTitle, incomeRange, location, jobDescription]
    );

    res.json(newJob.rows[0]);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});

//get all jobs

app.get("/getAllJobs", async (req, res) => {
  try {
    const allJobs = await pool.query(`SELECT * from jobs`);
    res.json(allJobs.rows);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
