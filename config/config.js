module.exports = {
    port: process.env.PORT || 8000,
    connectionString: "mongodb://localhost:27017/test",
    secret: "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
};