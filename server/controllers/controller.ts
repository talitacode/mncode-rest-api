import * as httpStatus from 'http-status';
import * as crypto from 'crypto';
import DataBase from '../database/';

function sendJsonResponse(res: any, code: Number, status: Boolean, error: Number, data: any) {

	if (error == 0) {
		res.status(code).json({
			'status': status,
			'return': data
		});
	} else {
		res.status(code).json({
			'status': status,
			'error': error,
			'return': data
		});
	}
}


class Controller {

    async Healthy (req, res) {
        const controller = new Controller()
        const { mysqlCheck } = await DataBase.GetDatabases()
      
        let status = mysqlCheck ? "OK" : "ERROR"
        const data = {
            uptime: process.uptime(),
            date: new Date(),
            checks: [
                {
                  name: "Banco de dados",
                  type: "internal",
                  status: status
                }
            ]
          }
          sendJsonResponse(res, httpStatus.OK, true, 0, data);
    }
    

    async ListTeam(req, res) {

        const controller = new Controller()
        const { mySQLHost, mySQLAsyncHost} = await DataBase.GetDatabases()

        const sql = 'SELECT ' + 
                    '   * FROM equipe ';
                    
        mySQLHost.query(sql, function (error, results, fields) {

            if (error) {
                sendJsonResponse(res, httpStatus.BAD_REQUEST, false, 0, 'erro consulta.');
            } else {
                sendJsonResponse(res, httpStatus.OK, true, 0, results);
            }
        })

    }

}

export default new Controller;