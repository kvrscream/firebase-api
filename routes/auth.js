const authController = require("../controllers/authController");

module.exports = (app) => {

    //app.get("/", authController.initApp)

    app.post("/api/createUser", authController.registerUser);

    app.post("/api/login", authController.login)
}