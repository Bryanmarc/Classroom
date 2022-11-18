var mysql = require('mysql')
var mysql_login = require('../mysql_login.json')

class DatabaseHandler {

    static isConnected = false

    static connection: any = mysql.createConnection({
        host: mysql_login.host,
        user: mysql_login.username,
        password: mysql_login.password,
        database: mysql_login.database
    });

    static Connect() {
        return new Promise<void>( (resolve) => {
            DatabaseHandler.connection.connect();
            this.isConnected = true;
            console.log("Connected!")
            resolve();
        });
    }

    static End() {
        return new Promise<void>( (resolve) => {
            DatabaseHandler.connection.end();
            console.log("Connection Ended!")
            resolve();
        });
    }

    static GetIssues(): any {
        return new Promise<any>( (resolve) => {
            const query = "SELECT * FROM Issues"
            console.log("Loading...")
            if(!this.isConnected) {
                this.Connect().then( () => {
                    console.log("Querying...")
                    DatabaseHandler.connection.query(query, (error: any, results: any, fields: any) => {
                        if (error) throw error;
                        console.log(results[0]);
                        resolve(JSON.stringify(results));
                    });
                });
            } else {
                console.log("Querying...")
                DatabaseHandler.connection.query(query, (error: any, results: any, fields: any) => {
                    if (error) throw error;
                    console.log(results[0]);
                    resolve(JSON.stringify(results));
                });
            }
        });

    }
    


}

export default DatabaseHandler;