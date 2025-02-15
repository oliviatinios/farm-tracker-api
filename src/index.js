const app = require("./app");
const port = process.env.PORT;

// Register listener
app.listen(port, () => {
    console.log(`Farm Tracker listening on port ${port}`);
})
