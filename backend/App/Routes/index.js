
module.exports = function (app) {
    // Auth Route
    app.use(require("./Auth/Auth.routes"));
    app.use(require("./Admin/Teachers.routes"));
    // app.use(require("./Admin/Admin.routes"));
    app.use(require('./Admin/Student.routes'))

};