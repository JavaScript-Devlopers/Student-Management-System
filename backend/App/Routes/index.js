
module.exports = function (app) {
    // Auth Route
    app.use(require("./Auth/Auth.routes"));
    app.use(require("./Admin/Teachers.routes"));
    app.use(require("./Admin/Parent.routes"));
    app.use(require('./Admin/Student.routes'))
    app.use(require('./Admin/Subject.routes'))

};