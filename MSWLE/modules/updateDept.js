function updateDeptSites() {

  var favSiteDepts =[];

  favSiteDepts = kony.store.getItem("objFavSites");
  var updateSites ="";
  var count = 0;
  if(favSiteDepts === null || favSiteDepts === undefined){
    callPopup("Your Favorite Sites list is Empty, please add in favorite section");
    return;
  }else{
    
    for (var i = 0; i < favSiteDepts.length; i++){
      var siteIdSaved =  favSiteDepts[i][0].SiteId;
      if(updateSites !== ""){
        updateSites = updateSites+","+ siteIdSaved;
        count = count + 1;
      }else{
        updateSites = siteIdSaved;
        count = count + 1;
      }

    }


    //alert(count+" "+updateSites);
  }

  try{
    var spTokenExpiryDiff = spTokenExpiry();
    if(spTokenExpiryDiff < 55){
      //alert("sp token not expired");
    }else{
      sessionexpired();
      //popupSessionExp.show();
      return;
    }
    if(networkAvailable() == false){
      callPopup("Please check your internet connectivity and try again");
    }else{
      var updateDepartment = {};
      updateDepartment["serviceID"] = "DepartmentUpdate$DeptUpdate";  //"ServerLogService$LogDeptUpdate";
      var updateDepartment_httpheaders = {
        "Authorization": "ImpactAPI token=\""+Authorization+ "\""
      };

      updateDepartment["site"] = updateSites;
      updateDepartment["loop_count"] = count;
      updateDepartment["loop_separator"] = ","; 
      updateDepartment["search"] = "";
      updateDepartment["skip"] = "0";
      updateDepartment["top"] = "5000";
      updateDepartment["returnmodel"] = "DepartmentModel";
      updateDepartment["httpheaders"] = updateDepartment_httpheaders;
      var updateDepartment_httpconfigs = {};
      updateDepartment["httpconfig"] = updateDepartment_httpconfigs;
      DepartmentUpdate$DeptUpdate = mfintegrationsecureinvokerasync(updateDepartment, "DepartmentUpdate", "DeptUpdate", updateDeptCallback);
      //ServerLogService$LogDeptUpdate = mfintegrationsecureinvokerasync(updateDepartment, "ServerLogService", "LogDeptUpdate", updateDeptCallback);
      kony.application.showLoadingScreen(loadingSkin, "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, null);
    }
  }catch(err){
    kony.print("error in updateDeptSites function "+err);
    //alert(err);
  }
}


function updateDeptCallback(status, Location) {

  try{
    if(status == 400){
      if(Location["opstatus"] == 0){
        var favSiteDepts =[];
        favSiteDepts = kony.store.getItem("objFavSites");
        //serverName = decode(Location.FileBody); kony.print("updateDeptCallback serverName: "+serverName);
        kony.application.dismissLoadingScreen();
        if(Location["LoopDataset"].length > 0){
          for (var i = 0; i < Location["LoopDataset"].length; i++){
            favSiteDepts[i][1] = Location["LoopDataset"][i]["Depts"]
          }
          deptUpdateDate();
          updateDeptTxt();
          callPopup("Favorite sites and departments updated successfully");
        }else{
          callPopup("unable to update favorite sites and departments, please try later");
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
        callPopup("Unable to process your request, please try again later");
      }
    }
  }catch(err){
    kony.print("error in updateDeptCallback callback"+err);
  }
}


function deptUpdateDate(){

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  if(dd<10) {
    dd='0'+dd
  }
  if(mm<10) {
    mm='0'+mm
  }
  today = mm+'/'+dd+'/'+yyyy;
  kony.store.setItem("DeptUpdTEDate", ""+today);
}

function updateDeptTxt(){
  var date2 = kony.store.getItem("DeptUpdTEDate");
  if(date2 === null || date2 === undefined ){
    frmSettings.rctUpdateDept.text = "Click <u>here</u> to refresh the Departments associated with your favorite Sites, Last update performed "+ 0 +" days ago" ;
  }else{
    var date2 = new Date(kony.store.getItem("DeptUpdTEDate"));
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10) {
      dd='0'+dd
    }
    if(mm<10) {
      mm='0'+mm
    }
    today = mm+'/'+dd+'/'+yyyy;
    var date1 = new Date(today);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var dateDissStr = Math.ceil(timeDiff / (1000 * 3600 * 24));

    frmSettings.rctUpdateDept.text = "Click <u>here</u> to refresh the Departments associated with your favorite Sites, Last update performed "+ dateDissStr +" days ago" ;
  }
}
