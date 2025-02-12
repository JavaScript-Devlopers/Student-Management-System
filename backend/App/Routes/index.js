
module.exports = function (app) {
    // Auth Route
    app.use(require("./Auth/Auth.routes"));
    app.use(require("./Teachers/Teachers.models"));

};