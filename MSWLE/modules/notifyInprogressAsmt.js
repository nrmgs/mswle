///get all In progress Assessmsnt count display in Dashboard
function getAssessmentCount()
{

  kony.db.transaction(dbObject,
                      getInprogressCount,
                      error_InprogressCount,
                      null);

}
function error_InprogressCount(transId, err) {
kony.print("error in error_InprogressCount");
}

function getInprogressCount(transId)
{
  var query = "SELECT COUNT(*) AS NoRecords FROM Engagement";

  kony.db.executeSql(transId, query,null,success_getAssCount,error_getAssCount);

}

function error_getAssCount(transId, err) {
kony.print("error in error_getAssCount");
}

function success_getAssCount(transId, resultset) {
  
  frmDashboard.txtQtOpenPOp.setEnabled(false);
  if(resultset !== null)
  {
    var row = kony.db.sqlResultsetRowItem(transId, resultset, 0);
    var assCount = JSON.parse(row.NoRecords);
    //alert(assCount);
    if(assCount == "0"){
      frmDashboard.inProgrsCallout.setVisibility(false);
      kony.application.setApplicationBadgeValue("0");
    }else{
       frmDashboard.inProgrsCallout.setVisibility(true);
       frmDashboard.txtQtOpenPOp.text = assCount;
       kony.application.setApplicationBadgeValue(""+assCount);
    }
   
  }

}