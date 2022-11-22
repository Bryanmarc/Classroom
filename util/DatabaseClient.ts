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
            DatabaseHandler.isConnected = true;
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

    static Query(query: string): any {
        return new Promise<any>( (resolve) => {
            console.log("Loading...")
            if(!DatabaseHandler.isConnected) {
                DatabaseHandler.Connect().then( () => {
                    console.log("Querying...")
                    try {
                        DatabaseHandler.connection.query(query, (error: any, results: any, fields: any) => {
                        if (error) throw error;
                        console.log(results);
                        resolve(JSON.stringify(results));
                    });
                    } catch (error) {
                        console.log(error)
                    }
                });
            } else {
                console.log("Querying...")
                try {
                    DatabaseHandler.connection.query(query, (error: any, results: any, fields: any) => {
                        if (error) throw error;
                        console.log(results);
                        resolve(JSON.stringify(results));
                    });
                } catch (error) {
                    console.log(error)
                }
            }
        });
    }

    static GetIssues(): any {
        return DatabaseHandler.Query("SELECT * FROM Issues")
    }

    static GetTop5MostRecentIssues(): any {
        return DatabaseHandler.Query("SELECT * FROM Issues ORDER BY time_posted DESC LIMIT 5")
    }
    
    static AddIssue(author_id: number, title: string, content: string): any {
        console.log("TRYING TO QUERY!")
        console.log("author_id: " + author_id)
        console.log("title: " + title)
        console.log("content: " + content)
        return DatabaseHandler.Query(`INSERT INTO Issues (author_id, title, content, reply_ids, status, time_posted) VALUES (${author_id}, '${title}', '${content}', '', 'Active', NOW())`)
    }


}

export default DatabaseHandler;