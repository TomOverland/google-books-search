const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Route
router.use("/api", apiRoutes);

// Send static React Index page
router.use((req, res) => {
    res.sendFile(path.join(_dirname, "../client/build/index.html"));
});

module.exports = router;