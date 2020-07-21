const admin = require("firebase-admin");
const firebase = require("firebase");

let intiFirebase = firebase.initializeApp({
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL
})


// const serviceAccount = require("../xamarin-login-79e8a-firebase-adminsdk-e51vz-7ddbb5f4a2.json");

module.exports = {
    async registerUser(req, res){
        console.log("login => ", req.body)

        let email = req.body.email;
        let senha = req.body.senha;
        let confirmaSenha = req.body.confirmaSenha;

        if(senha != confirmaSenha) {
            res.json({
                status: 403,
                message: "A senha e confirmação dever ser exatamente iguais!"
            });
        }

          intiFirebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.senha)
          .then((response) => {
              console.log("logou =>", response.user.refreshToken);
              res.json({
                  status:200,
                  message: "usuário cadastrado com sucesso!"
              })
          })
        .catch((erro) => {
            console.log(erro);
            res.json({
                status: 200,
                message: "Não foi possível cadastrar este usuário"
            })
        })


    },

    async login(req, res){
          intiFirebase.auth().signInWithEmailAndPassword(req.body.email, req.body.senha)
          .then((response) => {
              console.log("logou =>", response.user.refreshToken);
              res.json({
                  status:200,
                  token: response.user.refreshToken
              })
          })
          .catch((erro) =>{
            console.log("erro =>", erro);
            res.json({
                status:200,
                message: "Não foi possível logar com esse usuário e senha!"
            })
          })
    }

    


}