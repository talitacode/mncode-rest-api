import * as mysql from 'mysql';
import * as mysqlAsync from 'mysql-await';
const mySqlConfig =  {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  PORT: process.env.DB_PORT,
};
class DataBase {
    
    private DB_URI = '';
    private DB_CONNECTION;
  

    constructor(){
        this.mySQLCheck();
        this.mySQLConn();
        this.mySQLConnAwait();
    
    }

    async GetDatabases(){
      const mysqlDBCheck = this.mySQLCheck();
      const mysqlDBProd = this.mySQLConn();
      const mySQLAsyncProd = this.mySQLConnAwait();

      let databases = {
          "mysqlCheck": mysqlDBCheck,
          "mySQLHost": mysqlDBProd,
          "mySQLAsyncHost": mySQLAsyncProd
      }
          return databases;
      
      
  }

    mySQLCheck(){
        const mysqlDB = mysql.createConnection({
          host: mySqlConfig.HOST,
          user: mySqlConfig.USER,
          password: mySqlConfig.PASSWORD,
          database: mySqlConfig.DB,
          port: mySqlConfig.PORT
        });
        
        try {
          mysqlDB.connect(function(err) {
            if (err) throw err;
          });
          return "OK"
        } catch (error) {
          return "ERROR"
        } 
        
    }

    mySQLConn(){
      const mysqlDB = mysql.createConnection({
          host: mySqlConfig.HOST,
          user: mySqlConfig.USER,
          password: mySqlConfig.PASSWORD,
          database: mySqlConfig.DB,
          port: mySqlConfig.PORT
        });
      
      mysqlDB.connect(function(err){ if(err) throw err; });

      return mysqlDB;
    }  
   

    mySQLConnAwait(){
        const mysqlDB = mysqlAsync.createConnection({
            host: mySqlConfig.HOST,
            user: mySqlConfig.USER,
            password: mySqlConfig.PASSWORD,
            database: mySqlConfig.DB,
            port: mySqlConfig.PORT
          });
        
        mysqlDB.connect(function(err){ 
            if (err) {
                return console.error('error: ' + err.message);
              }
        });
        return mysqlDB;
    }

  
    

}

export default new DataBase();