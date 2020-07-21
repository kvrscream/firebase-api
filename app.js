let app = require("./config/server");
const port = 4004;
app.listen(port, () => {
    console.log(
        `/************************************* */
        /*Rodando na porta ${port}*/
        /************************************* */`
    )
})