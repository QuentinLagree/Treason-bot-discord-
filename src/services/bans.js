const connection = require("../../config/db")

class bansService {

    static async create(banUser, author, reason, end) {
        connection.query("INSERT INTO ban SET user=?, author=?, reason=?, created_at=?, end=?", [banUser, author, reason, new Date(), end], (err) => {
            if (err) throw err
        })
    }
    static async check (banUser) {
        connection.query("SELECT * FROM ban WHERE user=?", banUser, (err, row) => {
            if (err) throw err
            return row[0]
        })
    }
    
}
module.exports = bansService