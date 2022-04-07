

var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction (par1) {
    var monitorsList = [];
    for (var i = 0; i<3; i++) {
        monitorsList.push([par1[i], i+1]);
    }
    return monitorsList;
}

console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;