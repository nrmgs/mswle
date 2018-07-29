//Type your code here

// konyObject = new kony.sdk();
// function mbassinit()
// {
// konyObject.init("95e0051fc9ddd4c877339a8d65699b03","4fcd50075164a4f589f746a5ab2910bb","https://100021651.auth.konycloud.com/appconfig",mbassSuccessCallback, mbassErrorCallback);
// }
// function mbassSuccessCallback(resultset)
// {
// alert(JSON.stringify(resultset));
// }
// function mbassErrorCallback(error)
// {
// alert(JSON.stringify(error));
// }


var Authorization,userid,firstName,lastName,userName,forceLoginFun;

function callLogin(userName) { 
  try{
    if(networkAvailable() == false){
      callPopup("Please check your internet connectivity and try again");
    }else{
      if (Login_inputparam == undefined) {
        var Login_inputparam = {};
      }
      Login_inputparam["serviceID"] = "Security$Login";
      var Login_httpheaders = {"Content-Type":"application/json"};

      Login_inputparam["UserName"] = userName;
      //Login_inputparam["UserName"] = "SMCZ";
      Login_inputparam["httpheaders"] = Login_httpheaders;
      var Login_httpconfigs = {};
      Login_inputparam["httpconfig"] = Login_httpconfigs; 
      Security$Login = mfintegrationsecureinvokerasync(Login_inputparam, "Security", "Login", loginCallback);
      kony.application.showLoadingScreen(loadingSkin, "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, null);
    }
  }catch(err){
    kony.print("error in callLogin function "+err);
  }
}



function loginCallback(status, Login) {

  try{
    if(status == 400){ 
      if(Login["opstatus"] === 0){
        Authorization = Login.Authorization; 
        if(Authorization){
          userid = Login.user_id;
          firstName =Login.FirstName;
          lastName = Login.LastName;
          userName = Login.Username;
          var sPTokenDate = new Date();
          var sPTokenTime = sPTokenDate.getTime();
          kony.print(Authorization);
          kony.store.setItem("spToken", Authorization);

          kony.store.setItem("spTokenExpiresOn", sPTokenTime);
          if(sessionExpired){
            kony.application.dismissLoadingScreen();
            sessionExpired = false;
          }else{
            callSites();
          }
        }else{
			callPopup("An unexpected error has occurred. If this issue persists, please contact your IMPACT administrator.");
        }
      }
      else if(Login["opstatus"] === 8009){
        kony.application.dismissLoadingScreen();
        if(Login.httpStatusCode == 401){
          var Log = JSON.parse(Login.Errors);
          if(Log.Message == "Unknown user name or password"){
            callPopup("Unknown user name or password, please contact your IMPACT Administrator");
          }else if(Log.Message == "Account is locked"){
            callPopup("Account is locked, please contact your IMPACT Administrator");
          }else{
            callPopup("Unable to process your request, please try again ");
          }
        }else{
          callPopup("Unable to process your request, please try again ");
        }
      }
      else if(Login["opstatus"] === 9001 || Login["opstatus"] === 1000 || Login["opstatus"] === 8005){
        kony.application.dismissLoadingScreen();
        callPopup("Sorry! We are Unable to process your request at this time, Kindly come back after some time. We appriciate your patience");
      }
      else {
        kony.application.dismissLoadingScreen();

        var login = JSON.parse(Login["httpResponse"]["response"]);
        if(login.httpStatusCode == 401){
          var Log = JSON.parse(login.Errors);
          if(Log.Message == "Unknown user name or password"){
            callPopup("Unknown user name or password, please contact your IMPACT Administrator");
          }else if(Log.Message == "Account is locked"){
            callPopup("Account is locked, please contact your IMPACT Administrator");
          }else{
            callPopup("Unable to process your request, please try again ");
          }
        }else{
          callPopup("Unable to process your request, please try again ");
        }
      }
      //       else{
      //         alert(JSON.stringify(Login["opstatus"]));
      //         kony.application.dismissLoadingScreen();
      //         callPopup("Unable to process your request, please try again later");
      //       }
    } 
  }catch(err){
    kony.print("error in loginCallback function "+err);
  }
}


function callSites(eventobject) {

  try{
    if(networkAvailable() == false){
      callPopup("Please check your internet connectivity and try again");
    }else{
      if (Sites_inputparam == undefined) {
        var Sites_inputparam = {};
      }
      Sites_inputparam["serviceID"] = "SitesDepartments$GetSites";
      var Sites_httpheaders = {
        "Authorization": "ImpactAPI token=\""+Authorization+ "\""
      };

      Sites_inputparam["skip"] = "0";
      Sites_inputparam["top"] = "5000";
      Sites_inputparam["httpheaders"] = Sites_httpheaders;
      var Sites_httpconfigs = {};
      Sites_inputparam["httpconfig"] = Sites_httpconfigs;
      SitesDepartments$GetSites = mfintegrationsecureinvokerasync(Sites_inputparam, "SitesDepartments", "GetSites", sitesCallback);
      //ServerLogService$LogGetSites = mfintegrationsecureinvokerasync(Sites_inputparam, "ServerLogService", "LogGetSites", sitesCallback);
      kony.application.showLoadingScreen(loadingSkin, "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, null);
    }
  }catch(err){
    kony.print("error in callSites function "+err);
  }
}


function sitesCallback(status, Sites) {
  try{
    if(status == 400){
      if(Sites["opstatus"] == 0){
        //serverName = decode(Sites.FileBody);
        //kony.print("sitesCallback serverName " + serverName);
        kony.print(JSON.stringify(Sites.CHESM));
        kony.store.setItem("objSites", JSON.stringify(Sites.Data));
        kony.store.setItem("objChesmSites", JSON.stringify(Sites.CHESM));
        kony.application.dismissLoadingScreen();
        frmDashboard.show();
        kony.print(JSON.stringify(Sites.Data));
      }else if(Sites["httpStatusCode"] == 401){
        kony.application.dismissLoadingScreen();
        callPopup("Unknown user name or password");
      }else if(Sites["httpStatusCode"] == 403){
        kony.application.dismissLoadingScreen();

        callPopup(Sites.Errors.Message);
      }
      else{
        kony.application.dismissLoadingScreen();
        callPopup("Unable to process your request, please try again later");
      }
    }
  }catch(err){
    kony.print("error in sitesCallback function "+err);
  }
}


function callLocation(siteIdToGetLoc) {
  try{
    var spTokenExpiryDiff = spTokenExpiry();
    if(spTokenExpiryDiff < 55){
    }else{
      sessionexpired();
      return;
    }
    if(networkAvailable() === false){
      callPopup("Internet connectivity required to search and select sites");
    }else{
      kony.print(Authorization);
      var Location_inputparam = {};
      Location_inputparam["serviceID"] = "SitesDepartments$GetDepartments";
      var Location_httpheaders = {
        "Authorization": "ImpactAPI token=\""+Authorization+ "\""
      };
      Location_inputparam["site"] = siteIdToGetLoc;
      Location_inputparam["search"] = "";
      Location_inputparam["skip"] = "0";
      Location_inputparam["top"] = "5000";
      Location_inputparam["returnmodel"] = "DepartmentModel";
      Location_inputparam["httpheaders"] = Location_httpheaders;

      var Location_httpconfigs = {};
      Location_inputparam["httpconfig"] = Location_httpconfigs;
      SitesDepartments$GetDepartments = mfintegrationsecureinvokerasync(Location_inputparam, "SitesDepartments", "GetDepartments", locationCallback);
      kony.application.showLoadingScreen(loadingSkin, "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, null);
    }
  }catch(err){
    kony.print("error in callLocation function "+err);
  }
}

var dept=[];
function locationCallback(status, Location) {
  try{
    if(status == 400){
      if(Location["opstatus"] === 0){
        dept = Location.Depts;
        if(Location.Depts === null || Location.Depts === undefined){
          kony.application.dismissLoadingScreen();
          callPopup("You have selected an Inactive Sites, please review your selection"); 

        }else{

          if(deptVal == "favorite"){
            var favSiteDepts =[];
            favSiteDepts = kony.store.getItem("objFavSites");
            if(favSiteDepts === null || favSiteDepts === undefined || favSiteDepts === "null"){
              var favSiteDepts =[];
              favSiteDepts.push([site,Location.Depts]);
              kony.store.setItem("objFavSites", favSiteDepts);

            }else{

              for (var i = 0; i < favSiteDepts.length; i++){
                var siteIdSaved =  favSiteDepts[i][0].SiteId;

                if(site.SiteId == siteIdSaved){
                  favSiteDepts.splice(i,1);
                  break;
                }
              }
              favSiteDepts.push([site,Location.Depts]);
              kony.store.setItem("objFavSites", favSiteDepts);
            }
            favSiteDepts =[];
            kony.application.dismissLoadingScreen();
            callPopup(site.SiteName + " added to your favorites successfully"); 
          }else if(deptVal == "favoritechesm"){
            var favSiteDepts =[];
            favSiteDepts = kony.store.getItem("objChesmFavSites");
            if(favSiteDepts === null || favSiteDepts === undefined || favSiteDepts === "null"){
              var favSiteDepts =[];
              favSiteDepts.push([siteChesm,Location.Depts]);
              kony.store.setItem("objChesmFavSites", favSiteDepts);

            }else{

              for (var i = 0; i < favSiteDepts.length; i++){
                var siteIdSaved =  favSiteDepts[i][0].SiteId;

                if(siteChesm.SiteId == siteIdSaved){
                  favSiteDepts.splice(i,1);
                  break;
                }
              }
              favSiteDepts.push([siteChesm,Location.Depts]);
              kony.store.setItem("objChesmFavSites", favSiteDepts);
            }
            favSiteDepts =[];
            kony.application.dismissLoadingScreen();
            callPopup(siteChesm.SiteName + " added to your favorites successfully"); 
          }else if (deptVal == "internet"){
            dept = deptHiercharchy(dept);
            searchDeptLst(dept);
            var prevFrm = kony.application.getPreviousForm().id;
            if(prevFrm == "frmForm1"){
              frmForm1.show();
            }else if(prevFrm == "frmPreConfirmA"){
              frmPreConfirmA.show();
            }
            frmForm1.txtEngagDept.text = "";
            frmPreConfirmA.txtEngagDept.text = "";
            kony.application.dismissLoadingScreen();


          }

        }
      }
      else if(Location["opstatus"] === 8009){
         kony.application.dismissLoadingScreen();
          if(Location.httpStatusCode == 401){
          var departErr = JSON.parse(Location.Errors);
          if(departErr.Message == "Unknown user name or password"){
            callPopup("Unknown user name or password, please contact your IMPACT Administrator");
          }else if(departErr.Message == "Account is locked"){
            callPopup("Account is locked, please contact your IMPACT Administrator");
          }else if(departErr.Message == "Authentication required"){
            sessionexpired();
          }else{
            callPopup("Unable to process your request, please try again ");
          }
        }else if(Location.httpStatusCode == 403){
          //var crrErr = JSON.parse(cretAssRes.Errors);
         // callPopup("User does not have access to any active departments under the Site selected");
          callPopup("There are no Active departments for this Site,or you only have limited permissions in IMPACT. To resolve,please contact your IMPACT representative or submit a Remedy ticket.");

        }else{
          kony.application.dismissLoadingScreen();
          callPopup("Unable to process your request, please try again");
        }
      }
      
      else if(Location["opstatus"] === 9001 || Location["opstatus"] === 1000 || Location["opstatus"] === 8005){
        kony.application.dismissLoadingScreen();
        callPopup("Sorry! We are Unable to process your request at this time, Kindly come back after some time. We appriciate your patience");
      }
      else{
        kony.application.dismissLoadingScreen();
        var departRes = JSON.parse(Location["httpResponse"]["response"]);
        if(departRes.httpStatusCode == 401){
          var departErr = JSON.parse(departRes.Errors);
          if(departErr.Message == "Unknown user name or password"){
            callPopup("Unknown user name or password, please contact your IMPACT Administrator");
          }else if(departErr.Message == "Account is locked"){
            callPopup("Account is locked, please contact your IMPACT Administrator");
          }else if(departErr.Message == "Authentication required"){
            sessionexpired();
          }else{
            callPopup("Unable to process your request, please try again ");
          }
        }else if(departRes.httpStatusCode == 403){
          //var crrErr = JSON.parse(cretAssRes.Errors);
          //callPopup("User does not have access to any active departments under the Site selected");
          callPopup("There are no Active departments for this Site,or you only have limited permissions in IMPACT. To resolve,please contact your IMPACT representative or submit a Remedy ticket.");

        }else{
          kony.application.dismissLoadingScreen();
          callPopup("Unable to process your request, please try again");
        }
      }
    }
  }catch(err){
    kony.print("error in location callback"+err);
    //alert("error in location callback"+err);
  }
}

function spTokenExpiry(){
  var startTime = new Date(kony.store.getItem("spTokenExpiresOn"));
  var endTime = new Date();
  var difference = endTime.getTime() - startTime.getTime(); // This will give difference in milliseconds
  var resultInMinutes = Math.round(difference / 60000);
  //alert(resultInMinutes);
  return resultInMinutes; 
}

var deptSearch = [];
function deptSearchKey(){
  var objArray = [];
  deptSearch = []
  objArray = dept;
  var searchValue = frmDepartment.txtSearchDept.text.trim();
  if (searchValue.length == 0) {
    deptSearch = [];
    deptSearch = dept;
  }
  if (searchValue.length > 1) {
    deptSearch = [];
    var length = objArray.length;

    for (var i = 0; i < objArray.length; i++) {
      var sName = "";
      if (objArray[i].DepartmentName != null && objArray[i].DepartmentName != undefined) {
        sName = objArray[i].DepartmentName;
      }
      if (sName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
        deptSearch.push(objArray[i]);
      }

    }
  }
  searchDeptLst(deptSearch);
}

function searchDeptLst(deptSearch) {
  //deptSearch = deptHiercharchy(deptSearch);
  frmDepartment.segDept.widgetDataMap = {boxSegDept: "boxSegDept",lblSecHdr: "lblSecHdr"};
  var dataForRowTemp = [];

  for (i = 0; i < deptSearch.length; i++) {
    var data = {boxSegDept: {info: { "dept": deptSearch[i]}},lblSecHdr: deptSearch[i].DepartmentName,template: boxSegDept};
    dataForRowTemp.push(data);
  }
  frmDepartment.segDept.setData(dataForRowTemp);
}


var sessionExpired = false;


function sessionexpired(){
  sessionExpired = true;
  invokeMSAuthApp();
}


function deptHiercharchy(Depts){
  var parent = [];
  var child = [];
  var result = [];
  var result1 = [];
  var result2 = [];
  for (var i = 0; i < Depts.length; i++) {
    if (Depts[i].ParentDepartmentId == null || Depts[i].ParentDepartmentId == "null") {
      parent.push(Depts[i]);
    } else {
      child.push(Depts[i]);
    }
  }


  for (var i = 0; i < parent.length; i++) {
    for (var j = 0; j < child.length; j++) {

      if (parent[i].DepartmentId == child[j].ParentDepartmentId) {
        result.push(new Array(parent[i], child[j]));

      }
    }
  }


  for (var i = 0; i < result.length; i++) {
    for (var j = 0; j < child.length; j++) {

      if (result[i][1].DepartmentId == child[j].ParentDepartmentId) {
        result1.push(new Array(result[i], child[j]));

      }
    }
  }


  for (var i = 0; i < result1.length; i++) {
    for (var j = 0; j < child.length; j++) {

      if (result1[i][1].DepartmentId == child[j].ParentDepartmentId) {
        result2.push(new Array(result1[i], child[j]));

      }
    }
  }


  if(result2.length > 0){
    var final = [];
    for(var i = 0 ; i < result2.length ; i++){
      var str1 = result2[i][0][0][0].DepartmentName; 
      var str2 = result2[i][0][0][1].DepartmentName; 
      var str3 =  result2[i][0][1].DepartmentName;
      var str4 = result2[i][1].DepartmentName; 
      var str = str1+" → "+str2+" → "+str3+" → "+str4;
      var deptName =   result2[i][1].DepartmentName;
      var deptId = result2[i][1].DepartmentId;
      final.push({"DepartmentName":str,"DepartmentId":deptId,"deptName":deptName});
    }
    result2 = [];
  }else if(result1.length > 0){
    var final = [];
    for(var i = 0 ; i < result1.length ; i++){
      str1 = result1[i][0][0].DepartmentName;
      str2 = result1[i][0][1].DepartmentName; 
      str3 = result1[i][1].DepartmentName;
      var str = str1+" → "+str2+" → "+str3;
      var deptName =   result1[i][1].DepartmentName;
      var deptId = result1[i][1].DepartmentId;
      final.push({"DepartmentName":str,"DepartmentId":deptId,"deptName":deptName});
    }
    result1 = [];
  }else if(result.length > 0){
    var final = [];
    for (var i = 0; i < result.length; i++) {
      str1 = result[i][0].DepartmentName;
      str2 = result[i][1].DepartmentName;

      var str = str1+" → "+str2;
      var deptName =   result[i][1].DepartmentName;
      var deptId = result[i][1].DepartmentId;
      final.push({"DepartmentName":str,"DepartmentId":deptId,"deptName":deptName});
    }
    result = [];
  }else{

    var final = [];
    for (var i = 0; i < parent.length; i++) {
      var str1 = parent[i].DepartmentName;
      var deptId = parent[i].DepartmentId;
      final.push({"DepartmentName":str1,"DepartmentId":deptId,"deptName":str1});
    }
    parent = [];
  }
  child= [];
  return final;
}

function deptSort(Depts) {

  //alert("before sort: " + JSON.stringify(Depts));
  Depts.sort(function(a, b) {
    var textA = a.DepartmentName.toUpperCase();
    var textB = b.DepartmentName.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
  return Depts;
  //alert("after sort: " + JSON.stringify(Depts));
}