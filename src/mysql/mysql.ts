import mysql = require('mysql')

export default class MySQL{
    private static _instance: MySQL

    cnn: mysql.Connection
    conectado: boolean = false

    constructor(){
        console.log('Clase inicializada')

        this.cnn = mysql.createConnection({
            host     : 'localhost',
            user     : 'node_user',
            password : '123456',
            database : 'node_db'
          }) 

          this.conectarDB()
    }

    private conectarDB(){
        this.cnn.connect((err: mysql.MysqlError)=>{
            if (err){
                console.log(err.message)
                return
            }

            this.conectado = true
            console.log('Conectado a la DB !!!')
        })
    }
}