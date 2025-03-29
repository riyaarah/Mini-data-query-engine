module.exports = (req, res, next) => {
    const API_KEY = process.env.API_KEY || "12345"; // Set in `.env`
    const providedKey = req.headers["x-api-key"];

    if (!providedKey || providedKey !== API_KEY) {
        return res.status(403).json({ error: "Unauthorized - Invalid API Key" });
    }
    next();
};

