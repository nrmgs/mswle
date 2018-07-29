//Type your code here

//functions related to local database


function createDB()
{

  dbObject = kony.db.openDatabase("webSqlDB",
                                  "1.0",
                                  "SQL Database",
                                  5 * 1024 * 1024);// 5 MB database

  kony.db.transaction(dbObject,
                      createTable,
                      errorCallback,
                      null);

}

function createTable(transId)
{
  // 	//do only if need to refresh data
  //       var query = "DROP TABLE IF EXISTS Engagement";
  //       kony.db.executeSql(transId,
  //                          query,
  //                          null,
  //                          null,
  //                          errorCallback);


  //create table
  query = "CREATE TABLE IF NOT EXISTS Engagement(engID INTEGER PRIMARY KEY AUTOINCREMENT, AsstId INTEGER, Site TEXT, SiteId INTEGER, Dept TEXT, DeptId INTEGER, Date TEXT, objModel TEXT, WorfklowId INTEGER, WorkflowName TEXT, IsTransmitted INTEGER)";
  kony.db.executeSql(transId,
                     query,
                     null,
                     createTable_success,
                     errorCallback);


}

function errorCallback(transId, error)
{
  kony.print(" Error code: " + error);
  kony.print(" Error message: " + error.message);
  ////alert("Error " + error + " "+ error.message);
}

function successCallback()
{
  ////alert("Transaction was successful");
}

function createTable_success(transId, resultset)
{
  ////alert("table created " + JSON.stringify(resultset));

}

var engId;
function InsertOfflineAssessment() {
  if(category == "jsa"){
    currAsst = JSATemplate;
  }else if(category == "fieldverification"){
    currAsst = FVTemplate; 
  }else if(category == "ptw"){
    currAsst = PTWTemplate;
  }else if(category == "generic"){
    currAsst = GenTemplate;
  }else if(category == "chesmfv"){
    currAsst = FVTemplate; 
  }
  var assessmentDate = new Date();
  assessmenTime = assessmentDate.toISOString();
  currAsst.ConductedDateUTC = assessmenTime;


  kony.db.transaction(dbObject,
                      insertOfflineData,
                      error_InsertAssessment,
                      null);


}

function insertOfflineData(transId)
{

  var offlineSiteId, offlineDeptId;

  if (frmForm1.txtEngagSite.info !== null) {
    sitIdNum = frmForm1.txtEngagSite.info.siteId;
    sitId = frmForm1.txtEngagSite.text;
  } else { 
    sitIdNum = "";
    sitId = "";
  }

  if (frmForm1.txtEngagDept.info !== null) {
    deptId = frmForm1.txtEngagDept.info.dept;
    deptName = frmForm1.txtEngagDept.text;
  } else {
    deptId = "";
    deptName = "";
  }



  kony.print("insertOfflineData:\n"+sitIdNum+" "+ sitId+" "+ deptId+" "+ deptName);

  var objmodel = JSON.stringify(currAsst); ////alert("objmodel " + objmodel);
  var query = "INSERT INTO Engagement(Site, SiteId, Dept, DeptId, WorfklowId, WorkflowName, IsTransmitted, objModel) VALUES (?,?,?,?,?,?,?,?)";

  kony.db.executeSql(transId,
                     query,
                     [sitId, sitIdNum, deptName, deptId, 1, "Open", 0, objmodel],
                     success_insertOfflineData,
                     error_insertData);

}

function success_insertOfflineData(transId, resultset) {

  ////alert("success_insertOfflineData:\n" + JSON.stringify(resultset));
  engId = resultset.insertId;

}

///save details after clicking on Create Assessment
function InsertAssessment(assessmentId)
{

  //set the value of currAsst after clicking on createAssessment

  if(category == "jsa"){
    currAsst = JSATemplate;
  }else if(category == "fieldverification"){
    currAsst = FVTemplate; 
  }else if(category == "ptw"){
    currAsst = PTWTemplate;
  }else if(category == "generic"){
    currAsst = GenTemplate;
  }else if(category == "chesmfv"){
    currAsst = CHESMFVTemplate; 
  }

  currAsst.AssessmentId = assessmentId;
  currAsst.ConductedDateUTC = assessmenTime;

  kony.db.transaction(dbObject,
                      insertData,
                      error_InsertAssessment,
                      null);

}
function error_InsertAssessment(transId, err) {

  ////alert("error_InsertAssessment " +JSON.stringify(err));
}

function insertData(transId)
{
  transId1 = transId; 
  var objmodel = JSON.stringify(currAsst); ////alert("objmodel " + objmodel);
  var query = "INSERT INTO Engagement(AsstId, Site, SiteId, Dept, DeptId, WorfklowId, WorkflowName, IsTransmitted, objModel) VALUES (?,?,?,?,?,?,?,?,?)";

  kony.db.executeSql(transId1,//transId1
                     query,
                     [assessmentId, sitId, sitIdNum, deptName,deptId, 1, "Open", 0, objmodel],
                     success_insertData,
                     error_insertData);

}

function error_insertData(transId, err) {

  ////alert("error_insertData " +JSON.stringify(err));
}

function success_insertData(transId1, resultset) {//transId1
  //alert("success_insertData: " + JSON.stringify(resultset));
  //from CreateAssessment
  var currenrtFrm = kony.application.getCurrentForm().id;
  if(currenrtFrm == "frmForm1"){
    selectAssAftInsert(); //select from local db since CreateAssessment already inserted to db
    frmForm1A.show();
  }else if(currenrtFrm == "frmPreConfirmA"){
    frmPreConfirmB.show();
  }

}


function selectAssAftInsert()
{
  try
  {
    var query = "SELECT * FROM Engagement where AsstId=" + assessmentId;
    kony.db.executeSql(transId1,//transId1,
                       query,
                       null,
                       success_AssAftInsert,
                       error_sqlSelectAsst);



  }
  catch(err)
  {
    kony.print("error while selecting "+ err);
  }
}

function success_AssAftInsert(transId, resultset)
{

  if(resultset !== null)
  {
    var row = kony.db.sqlResultsetRowItem(transId, resultset, 0);
    currAsst = JSON.parse(row.objModel);
    //alert("success_AssAftInsert selected asst: " +JSON.stringify(row));
    //alert("success_AssAftInsert selected objModel: " +JSON.stringify(currAsst));
    frmForm1A.show();
  }


}

function SelectOfflineAsst() {
  try
  {
    kony.db.transaction(dbObject,
                        sqlSelectOfflineAsst,
                        error_SelectAssessment,
                        null);
  }
  catch(err)
  {
    kony.print("error in  select offline assessment "+ err);
  }
}

function sqlSelectOfflineAsst(transId)
{
  try
  {
    ////alert("engId: " + engId);
    var query = "SELECT * FROM Engagement where engId=" + engId;
    kony.db.executeSql(transId,
                       query,
                       null,
                       success_sqlSelectAsst,
                       error_sqlSelectAsst);

  }
  catch(err)
  {
    kony.print("error while selecting "+ err);
  }
}

function SelectAssessment()
{

  try
  {
    kony.db.transaction(dbObject,
                        sqlSelectAsst,
                        error_SelectAssessment,
                        null);
  }
  catch(err)
  {
    kony.print("error in  select assessment "+ err);
  }
}

function error_SelectAssessment(transId, err){
  //alert("error_SelectAssessment: " + JSON.stringify(err));
}

function sqlSelectAsst(transId)
{
  try
  {
    var query = "SELECT * FROM Engagement where AsstId=" + assessmentId;
    kony.db.executeSql(transId,
                       query,
                       null,
                       success_sqlSelectAsst,
                       error_sqlSelectAsst);



  }
  catch(err)
  {
    kony.print("error while selecting "+ err);
  }
}

function success_sqlSelectAsst(transId, resultset)
{

  if(resultset !== null)
  {
    var row = kony.db.sqlResultsetRowItem(transId, resultset, 0);
    currAsst = JSON.parse(row.objModel);
    //alert("selected asst: " +JSON.stringify(row));
    ////alert("selected objModel: " +JSON.stringify(currAsst));
  }


}

function SelectAllAssts()
{
  try
  {
    kony.db.transaction(dbObject,
                        sqlSelectAll,
                        errorCallback,
                        null);
  }
  catch(err)
  {
    kony.print("error in  select transaction "+ err);
  }
}

function sqlSelectAll(transId)
{
  try
  {
    var query = "SELECT * FROM Engagement";
    kony.db.executeSql(transId,
                       query,
                       null,
                       success_sqlSelectAll,
                       errorCallback);

  }
  catch(err)
  {
    kony.print("error while selecting "+ err);
  }
}

function success_sqlSelectAll(transId, list)
{
  var dataForRowTemp = [];

  if(list !== null)
  {
    var max = list.rows.length; //alert("success_sqlSelectAll max: " + max);
    if(max == null || max == undefined || max == 0){
      frmDashboard.segIncomLst.widgetDataMap = {boxSegTemp: "boxSegTemp",lblSecHdr: "lblSecHdr"};
      var data = {lblSecHdr: "You don't have any In progress Engagements", template: boxSegTemp};
      dataForRowTemp.push(data);
      frmDashboard.inProgrsCallout.setVisibility(false);
      kony.application.setApplicationBadgeValue("0");
    }else{
      frmDashboard.inProgrsCallout.setVisibility(true);
      frmDashboard.txtQtOpenPOp.text = max;
      kony.application.setApplicationBadgeValue(""+max);
      frmDashboard.segIncomLst.widgetDataMap ={lblHdr1: "lblHdr1",lblDate:"lblDate",lblSite: "lblSite",lblDept: "lblDept",lblStatus: "lblStatus",lblPrimCont: "lblPrimCont",btnDeleteFrmDB:"btnDeleteFrmDB",flxSegInCmpLst: "flxSegInCmpLst",SegMyForms:"SegMyForms"};
      for ( var i = 0; i <= max - 1; i++ )
      {
        var rowItem = kony.db.sqlResultsetRowItem(transId, list, i);
        ////alert(JSON.stringify(rowItem));
        var objModelVal = JSON.parse(rowItem.objModel);

        ////alert(JSON.stringify(rowItem.Site));
        var siteName = "";        
        if (rowItem.Site !== null){
          siteName = rowItem.Site.toString();
        }else{
          //siteName = objModelVal.Site.Name;
        }
        var siteNameLen = siteName.length;
        if(siteNameLen > 46){
          var siteName = siteName.substring(0, 44);	
          siteName = siteName+"...";
        }else{
          var siteName = siteName;
        }


        var deptName = "";
        if (rowItem.Dept !== null) {
          deptName = rowItem.Dept.toString();
        }else{
          //deptName = objModelVal.Department.Name;
        }

        var deptNameLen = deptName.length;
        if(deptNameLen > 46){
          var deptName = deptName.substring(0, 44);	
          deptName = deptName+"...";
        }else{
          var deptName = deptName;
        }

        var engementId = "";
        if (rowItem.engID !== null) {
          engementId = rowItem.engID.toString();
        }

        var AssetId = "";
        if (rowItem.AsstId !== null) {
          AssetId = rowItem.AsstId.toString();
        }

        var assetTyp = objModelVal.AssessmentType.Name;

        var primaComName = objModelVal.UdfFields.primarycompanyid.Value.Name;
        if (primaComName !== null) {
          var primaComNameLen = primaComName.length;
          if(primaComNameLen > 46){
            var primaComName = primaComName.substring(0, 41);	
            primaComName = primaComName+"...";
          }else{
            var primaComName = primaComName;
          }
        } else {
          primaComName = "";
        }
        var ConductedDateUTC = objModelVal.ConductedDateUTC;

        var options = {year: 'numeric', month: 'short', day: 'numeric',hour:'numeric', minute:'numeric', second:'numeric' };
        var formattedDate= (new Date(ConductedDateUTC)).toLocaleDateString('EN', options);
        formattedDate = formattedDate.replace(',', '');

        var engagDate = new Date(objModelVal.UdfFields.engagementdt.Value);

        frmForm2.dateEngag.dateComponents = [engagDate.getDate(), engagDate.getMonth()+1, engagDate.getFullYear()];


        var data  = {SegMyForms:{info: { "engementId": engementId}},btnDeleteFrmDB: {info: { "engementId": engementId}},lblHdr1:{text:assetTyp+ " " +AssetId,info: { type:assetTyp, "engementId": engementId}},lblDept:{text:deptName,info: { "engementId": engementId}},lblDate:{text:"Created "+formattedDate,info: { "engementId": engementId}},lblStatus:{text:"In Progress", skin:lblClrCompleted,info: { "engementId": engementId}},lblSite:{text:siteName,info: { "engementId": engementId}},lblPrimCont:{text:primaComName, info: { "engementId": engementId}},flxSegInCmpLst:{skin:flxCompleted},template:SegMyForms};
        dataForRowTemp.push(data);
      }

      //sort by assessment type and then descending created date
      dataForRowTemp.sort(function(a, b) {
        var textA = a.lblHdr1.info.type.toUpperCase();
        var textB = b.lblHdr1.info.type.toUpperCase();
        var dateA = new Date(a.lblDate.text);
        var dateB = new Date(b.lblDate.text);
        if (textA < textB)
          return -1;
        else if (textA > textB)
          return 1;

        if (dateB < dateA)
          return -1;
        else if (dateB > dateA)
          return 1;

        return 0;

      });

    }
    frmDashboard.segIncomLst.setData(dataForRowTemp);
  }
}

function popDelYes() { //alert("yes engIdToDelete: "+engIdToDelete);
  popupDelete.dismiss();
  try
  {
    kony.db.transaction(dbObject,
                        deleteMyFormsSelected,
                        errorCallback,
                        null);
  }
  catch(err)
  {
    kony.print("error in  select transaction "+ err);
  }
}

function popDelCancel() { //alert("cancel");
  popupDelete.dismiss();
}


function submitToDelete() {
  popupDelete.lblPopTxt.text = "Are you sure you want to delete this in-progress engagement? This will only delete the engagement from your device. "+
    "Please also delete the record from IMPACT via a desktop computer.";
  popupDelete.show();
}

var engIdToDelete;

function deleteEngagFromDB(eventObj)
{
  engIdToDelete = eventObj.info.engementId;
  submitToDelete(); 


  ////alert("1"+engIdToDelete);
  //   try
  //   {
  //     kony.db.transaction(dbObject,
  //                         deleteMyFormsSelected,
  //                         errorCallback,
  //                         null);
  //   }
  //   catch(err)
  //   {
  //     kony.print("error in  select transaction "+ err);
  //   }
}
var transId1;
function deleteMyFormsSelected(transId)
{
  transId1 = transId;

  try
  {
    ////alert("2"+engIdToDelete);
    var query = "delete FROM Engagement where engID = " + engIdToDelete;
    kony.db.executeSql(transId1,
                       query,
                       null,
                       success_deleteFromDB,
                       errorCallback);

  }
  catch(err)
  {
    kony.print("error while selecting "+ err);
  }
}


function success_deleteFromDB()
{
  ////alert(resultset);
  // SelectAllAssts();
  ////alert(transId1);

  try
  {
    var query = "SELECT * FROM Engagement";
    kony.db.executeSql(transId1,
                       query,
                       null,
                       success_sqlSelectAll,
                       errorCallback);

  }catch(err)
  {
    kony.print("error in  select transaction "+ err);
  }
}

function SaveForm1A(source) {
  //alert("selectedKey "+frmForm2.cbxWorkForceTyp.selectedKey+"\ncurrAsst.UdfFields.workforcetypeid.Value.Id: "+currAsst.UdfFields.workforcetypeid.Value.Id);
  var locationId, pricontractorId, data, selKey;

  if (isEmpty(frmForm2.cbxWorkForceTyp.selectedKey) === true) selKey = frmForm2.cbxWorkForceTyp.selectedKey;
  else selKey = null;

  //location
  if (frmForm1A.txtEngagLocation.info !== null) {
    locationId = frmForm1A.txtEngagLocation.info.locationId;
  } else locationId = "";

  if (frmForm1A.txtEngagPriContractor.info !== null && isEmpty(frmForm1A.txtEngagPriContractor.text) === true) {
    pricontractorId = frmForm1A.txtEngagPriContractor.info.pricontractorId;
    if (selKey == "1") selKey = null; //if employee is selected, unselect it

    //remove employee crew
    data =  [[2, "Contractor Crew"],
             [3,"Mixed Crew"]];

  } else {
    pricontractorId = "";
    data =  [[2, "Contractor Crew"],
             [1, "Employee Crew"],
             [3,"Mixed Crew"]];
  }

  frmForm2.cbxWorkForceTyp.masterData = data;

  //   if (isEmpty(currAsst.UdfFields.workforcetypeid.Value.Id)=== true) {
  //     frmForm2.cbxWorkForceTyp.selectedKey = currAsst.UdfFields.workforcetypeid.Value.Id;
  //   } else 
  frmForm2.cbxWorkForceTyp.selectedKey = selKey;
	
  var subcontName = frmForm1A.txtSubContrName.text;
  if (subcontName === null) subcontName = "";	

  currAsst.UdfFields.mswsubcontractorname.Values = {"9":subcontName};
  currAsst.UdfFields.mswsubcontractorname.Value = subcontName;
  frmPreConfirmB.txtSubContrName.text = subcontName;
  
  currAsst.Location = {"Id": locationId,"Name":frmForm1A.txtEngagLocation.text};
  //primary contractor
  currAsst.UdfFields.primarycompanyid.Value = {"Id": pricontractorId, "Name":frmForm1A.txtEngagPriContractor.text};
  ////alert("UPDATED objModel: " + JSON.stringify(currAsst));
  if (source == "Next") UpdateAssessment();
  else SaveAssessment(); //Home
}

function SavePreConfirmA(source){

  if (frmPreConfirmA.txtEngagSite.info !== null) {
    sitIdNum = frmPreConfirmA.txtEngagSite.info.siteId;
    sitId = frmPreConfirmA.txtEngagSite.text;
  }
  else {
    sitIdNum = "";
    sitId = "";
  }
  if (frmPreConfirmA.txtEngagDept.info !== null) {
    deptId = frmPreConfirmA.txtEngagDept.info.dept; 
    deptName = frmPreConfirmA.txtEngagDept.text;
  }
  else {
    deptId = "";
    deptName = "";
  }


  currAsst.Department = {"Id": deptId, "Name":deptName};
  currAsst.Site	= {"Id": sitIdNum, "Name": sitId};

  kony.print("sitId "+sitId+"\ndeptName "+deptName);
  if (source == "Next") UpdateAssessment();
  else if (source == "Home"){ 
    kony.print("isEmpty(sitId) "+isEmpty(sitId)+"\nisEmpty(deptName) "+isEmpty(deptName));
    if (isEmpty(sitId) === true && isEmpty(deptName) === true) { 
      kony.print("SaveAssessment");
      SaveAssessment(); //Home
    } else {
      resetGlbVariables();
      frmDashboard.show();
    }
  }
}

function SavePreConfirmB(source) {
  ////alert("frmPreConfirmB");
  var locationId, pricontractorId;

  //location
  if (frmPreConfirmB.txtEngagLocation.info !== null) {
    locationId = frmPreConfirmB.txtEngagLocation.info.locationId;
  } else locationId = "";

  if (frmPreConfirmB.txtEngagPriContractor.info !== null) {
    pricontractorId = frmPreConfirmB.txtEngagPriContractor.info.pricontractorId;
  } else pricontractorId = "";
	
  var subcontName = frmPreConfirmB.txtSubContrName.text;
  if (subcontName === null) subcontName = "";	

  currAsst.UdfFields.mswsubcontractorname.Values = {"9":subcontName};
  currAsst.UdfFields.mswsubcontractorname.Value = subcontName;
  
  currAsst.Location = {"Id": locationId,"Name":frmPreConfirmB.txtEngagLocation.text}; //alert("currAsst.Location " +JSON.stringify(currAsst.Location));
  //primary contractor
  currAsst.UdfFields.primarycompanyid.Value = {"Id": pricontractorId, "Name":frmPreConfirmB.txtEngagPriContractor.text};
  ////alert("UPDATED objModel: " + JSON.stringify(currAsst));
  if (source == "Next") UpdateAssessment();
  else SaveAssessment(); //Home

}


function SaveForm2(source) {
  ////alert("SaveForm2");
  //conducteddate & reporteddate need to have values

  var TimeOfDay = frmForm2.cbxEngagTimeofDay.selectedKeyValue; 
  var WorkforceType = frmForm2.cbxWorkForceTyp.selectedKeyValue;
  var wkcrewsubofprim = frmForm2.cbxWorkCrew.selectedKeyValue;
  var SpecializedAct = frmForm2.cbxSpecializedActivity.selectedKeyValues;

  var specificLoc = frmForm2.txtEngagSpecificLoc.text;
  var otherSpecAct = frmForm2.txtOtherSpecilizedAct.text; 
 // var subcontName = frmForm2.txtSubContrName.text;
  var arrSpecAct = [];
  var arrDate = frmForm2.dateEngag.dateComponents;
  var calendarDate = new Date(arrDate[1]+"/"+arrDate[0]+"/"+arrDate[2]+" "+arrDate[3]+":"+arrDate[4]+":"+arrDate[5]);
  var options = {year: 'numeric', month: 'short', day: 'numeric',hour:'numeric', minute:'numeric', second:'numeric' };

  var EngagDate = calendarDate.toISOString();
  //alert(calendarDate.toISOString()+"\ndateComp "+ calendarDate.toLocaleDateString('EN',options)+"\nEngagDate "+EngagDate);

  if (otherSpecAct === null) otherSpecAct = "";
  if (specificLoc === null) specificLoc = "";
  //if (subcontName === null) subcontName = "";
  currAsst.UdfFields.engagementdt.Value = EngagDate;
  currAsst.UdfFields.mswotherspecactshortnote.Values = {"9":otherSpecAct};
  currAsst.UdfFields.mswotherspecactshortnote.Value = otherSpecAct;
  currAsst.UdfFields.mswspecificlocation.Values = {"9":specificLoc};
  currAsst.UdfFields.mswspecificlocation.Value = specificLoc;
  //currAsst.UdfFields.mswsubcontractorname.Values = {"9":subcontName};
  //currAsst.UdfFields.mswsubcontractorname.Value = subcontName;
  if (TimeOfDay !== null) currAsst.UdfFields.timeofdayid.Value = {"Id":TimeOfDay[0], "Name":TimeOfDay[1]};
  else currAsst.UdfFields.timeofdayid.Value = {"Id": null, "Name": ""};
  if (WorkforceType !== null) currAsst.UdfFields.workforcetypeid.Value = {"Id":WorkforceType[0], "Name": WorkforceType[1]};
  else currAsst.UdfFields.workforcetypeid.Value = {"Id": null, "Name": ""};
  if (wkcrewsubofprim !==null ) currAsst.UdfFields.wkcrewsubofprimid.Value = {"Id":wkcrewsubofprim[0], "Name":wkcrewsubofprim[1]};
  else currAsst.UdfFields.wkcrewsubofprimid.Value = {"Id": null, "Name": ""};

  if (category == "ptw") {
    var permitNum = "";
    var permitDet = "";
    if (frmForm2.txtPermitNum.text !== null) permitNum = frmForm2.txtPermitNum.text;
    if (frmForm2.txtPermitDetails.text !== null) permitDet = frmForm2.txtPermitDetails.text;
    currAsst.UdfFields.mswptwpnshortnote.Values = {"9": permitNum};
    currAsst.UdfFields.mswptwpnshortnote.Value = permitNum;
    currAsst.UdfFields.mswptwpcshortnote.Values = {"9": permitDet};
    currAsst.UdfFields.mswptwpcshortnote.Value = permitDet;
  }
  //alert("SpecializedAct " +SpecializedAct);
  if (category == "fieldverification" || category == "chesmfv") {
	for(var i=0; i<=16; i++) {
      currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[i].Id = 0;
    }
    if (SpecializedAct !==null) {
      var max = SpecializedAct.length;
      for (var i=0; i < max; i++) {
        var str = SpecializedAct[i].toString();
        var arr = str.split(',');
        var obj = {"Id":arr[0], "Name":arr[1]};
        
        if (arr[1] == "Emergency Management (EM)") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[0].Id = arr[0];
        } else if (arr[1] == "Job Safety Analysis (JSA)") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[1].Id = arr[0];
        } else if (arr[1] == "Permit to Work (PTW)") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[2].Id = arr[0];
        } else if (arr[1] == "Short Service Employee Management (SSE)") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[3].Id = arr[0];
        } else if (arr[1] == "Confined Space Entry (CSE)") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[4].Id = arr[0];
        } else if (arr[1] == "Diving") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[5].Id = arr[0];
        } else if (arr[1] == "Electrical Work (De-Energized)") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[6].Id = arr[0];
        } else if (arr[1] == "Electrical Work (Energized/Live)") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[7].Id = arr[0];
        } else if (arr[1] == "Excavation (Entry)") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[8].Id = arr[0];
        } else if (arr[1] == "Excavation (No Entry)") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[9].Id = arr[0];
        } else if (arr[1] == "Hot Work") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[10].Id = arr[0];
        } else if (arr[1] == "Isolation of Hazardous Energy (IHE)") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[11].Id = arr[0];
        } else if (arr[1] == "Lifting & Rigging") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[12].Id = arr[0];
        } else if (arr[1] == "Other (including local V&V)") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[13].Id = arr[0];
        } else if (arr[1] == "Portable Gas Detection") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[14].Id = arr[0];
        } else if (arr[1] == "Vacuum Truck  Ops (Control of Static Electricity- Transfer of flammable/combustible or classified area work)") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[15].Id = arr[0];
        } else if (arr[1] == "Work at Height") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[16].Id = arr[0];
        }
      }
    }
  } else {
    for(var j=0; j<=10; j++) {
      currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[j].Id = 0;
    }
    if (SpecializedAct !==null) {
      var max = SpecializedAct.length;
      for (var j=0; j < max; j++) {
        var str = SpecializedAct[j].toString();
        var arr = str.split(',');
        var obj = {"Id":arr[0], "Name":arr[1]};
        if (arr[1] == "Confined Space") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[0].Id = arr[0];
        } else if (arr[1] == "Control of Static Electricity") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[1].Id = arr[0];
        } else if (arr[1] == "Diving") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[2].Id = arr[0];
        } else if (arr[1] == "Excavation") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[3].Id = arr[0];
        } else if (arr[1] == "Electrical") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[4].Id = arr[0];
        } else if (arr[1] == "Hot Work") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[5].Id = arr[0];
        } else if (arr[1] == "Isolation of Hazardous Energy") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[6].Id = arr[0];
        } else if (arr[1] == "Lifting and Rigging") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[7].Id = arr[0];
        } else if (arr[1] == "Portable Gas Detection") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[8].Id = arr[0];
        } else if (arr[1] == "Work at Height") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[9].Id = arr[0];
        } else if (arr[1] == "Other") {
          currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[10].Id = arr[0];
        }
      }
    }
  }


  if (source == "Next") UpdateAssessment();
  else SaveAssessment(); //Home
}

function UpdateAsstId() {
  kony.db.transaction(dbObject,
                      sqlUpdateAsstId,
                      errorCallback,
                      successCallback);
}
//Site, SiteId, Dept, DeptId
function sqlUpdateAsstId(transId) {
  try {
    ////alert("UpdateAsstId\nengId: "+engId+"\nassessmentId: "+assessmentId);
    var query = "Update Engagement SET AsstId ='"+ assessmentId +  "' where engId=" + engId;
    //var query = "Update Engagement SET AsstId ="+ assessmentId+", Site = '"+frmPreConfirmA.txtEngagSite.text+"' , SiteId = "+frmPreConfirmA.txtEngagSite.info.siteId+", Dept = '"+frmPreConfirmA.txtEngagDept.text+"', DeptId = "+frmPreConfirmA.txtEngagDept.info.dept+" where engId = " + engId;
    //Execute sql statement

    kony.db.executeSql(transId,
                       query,
                       null,
                       success_insertData,
                       errorCallback);
  } catch (err) {
    //alert("UpdateAsstId err: " + JSON.stringify(err));
  }
}

function SaveAssessment() { //from Home button

  kony.db.transaction(dbObject,
                      SqlSaveAssessment,
                      errorCallback,
                      successCallback);

}

function SqlSaveAssessment(transId)
{ 
  var query = "Update Engagement SET objModel ='"+ JSON.stringify(currAsst)+  "', " +
      "Site ='" + sitId + "', " +
      "SiteId='" + sitIdNum + "', " +
      "Dept='" + deptName + "', " +
      "DeptId='" + deptId+ "' "; // + "where engId=" + engId;
  if(isEmpty(engId)=== false)
    query = query + "where AsstId=" + assessmentId;
  else query = query + "where engId=" + engId;

  kony.db.executeSql(transId,
                     query,
                     null,
                     success_save,
                     errorCallback);
}

function success_save(status, resultset) {
  resetGlbVariables();
  frmDashboard.show();
}

function UpdateAssessment()
{
  //if(networkAvailable() == false){
  kony.db.transaction(dbObject,
                      UpdateOfflineAssessmentTemp,
                      errorCallback,
                      successCallback);

  //   }
  //   else {
  //     kony.db.transaction(dbObject,
  //                         UpdateAssessmentTemp,
  //                         errorCallback,
  //                         successCallback);
  //   }
}


function UpdateAssessmentTemp(transId)
{ 
  var query = "Update Engagement SET objModel ='"+ JSON.stringify(currAsst)+  "', " +
      "Site ='" + sitId + "', " +
      "SiteId='" + sitIdNum + "', " +
      "Dept='" + deptName + "', " +
      "DeptId='" + deptId+ "' " +
      "where AsstId=" + assessmentId;
  //   alert("Site ='" + sitId + "', " +
  //       "SiteId='" + sitIdNum + "', " +
  //       "Dept='" + deptName + "', " +
  //       "DeptId='" + deptId+ "' " +
  //       "where AsstId=" + assessmentId);
  kony.db.executeSql(transId,
                     query,
                     null,
                     success_sqlUpdate,
                     errorCallback);
}

function UpdateOfflineAssessmentTemp(transId)
{
  var query = "Update Engagement SET objModel ='"+ JSON.stringify(currAsst)+  "', " +
      "Site ='" + sitId + "', " +
      "SiteId='" + sitIdNum + "', " +
      "Dept='" + deptName + "', " +
      "DeptId='" + deptId+ "' "; 
  if(isEmpty(engId)=== false)
    query = query + "where AsstId=" + assessmentId;
  else query = query + "where engId=" + engId;

  kony.db.executeSql(transId,
                     query,
                     null,
                     success_sqlUpdate,
                     errorCallback);
}

function error_sqlSelectAsst(transId, err)
{
  if(err !== null)
  {
    //alert("error_sqlSelectAsst: " + JSON.stringify(err));
  }

}


function success_sqlUpdate(transId, resultset)
{
  ////alert("row updated");
  if (kony.application.getCurrentForm().id == "frmPreConfirmB") {
    callPopup("The engagement - "+ assessmentId + ", was successfully saved.");


  } else if (kony.application.getCurrentForm().id == "frmPreConfirmA" && networkAvailable() == false) {
    callPopup("The engagement was saved locally.");
    resetGlbVariables();

  }

  //frmForm1.destroy();
  //frmForm2.destroy();
  //frmQtCategory1.destroy();
  //frmDynamicJSA1.destroy();
  //frmIncompLst.destroy();
  //frmDashboard.show();
  var currenrtFrm = kony.application.getCurrentForm().id;
  if(currenrtFrm == "frmForm1A"){
    frmForm2.show();
  }if(currenrtFrm == "frmForm2"){
    frmQtCategory1.show();
  }if(currenrtFrm == "frmQtCategory1"){ 
    if (isEmpty(assessmentId) === false)
      frmPreConfirmA.show();
    else frmPreConfirmB.show();

  }if(currenrtFrm == "frmPreConfirmA"){
    if(networkAvailable() == false){

      frmDashboard.show();
    }else{
      frmPreConfirmB.show();

    }
  }if(currenrtFrm == "frmPreConfirmB"){

    resetGlbVariables();
    frmDashboard.show();
  }
}



function CancelAssessment()
{

  try
  {
    //     if(networkAvailable() === true){
    //       kony.db.transaction(dbObject,
    //                           sqlCancelAsst,
    //                           error_CancelAssessment,
    //                           null);
    //     } else {
    kony.db.transaction(dbObject,
                        sqlCancelOfflineAsst,
                        error_CancelAssessment,
                        null);
    //}
  }
  catch(err)
  {
    kony.print("error in cancel assessment "+ err);
  }
}

function error_CancelAssessment(transId, err){
  //alert("error_CancelAssessment: " + JSON.stringify(err));
}

function sqlCancelAsst(transId)
{ ////alert("sqlCancelAsst AsstId=" + assessmentId);
  try
  {
    var query = "delete FROM Engagement where AsstId=" + assessmentId;
    kony.db.executeSql(transId,
                       query,
                       null,
                       success_sqlCancelAsst,
                       error_sqlCancelAsst);

  }
  catch(err)
  {
    kony.print("error while canceling "+ err);
  }
}

function sqlCancelOfflineAsst(transId)
{
  try
  {
    var query = "delete FROM Engagement ";// where engId=" + engId;
    if(isEmpty(engId)=== false)
      query = query + "where AsstId=" + assessmentId;
    else query = query + "where engId=" + engId;

    kony.db.executeSql(transId,
                       query,
                       null,
                       success_sqlCancelAsst,
                       error_sqlCancelAsst);

  }
  catch(err)
  {
    kony.print("error while canceling "+ err);
  }
}

function success_sqlCancelAsst(transId, resultset)
{
  //callPopup("Cancel successful");


  resetGlbVariables();

  frmDashboard.show();
  //   if(resultset !== null)
  //   {
  //     var row = kony.db.sqlResultsetRowItem(transId, resultset, 0);
  //     currAsst = JSON.parse(row.objModel);
  //   }


}

function error_sqlCancelAsst(transId, err){
  //alert("error_sqlCancelAsst: " + JSON.stringify(err));
}