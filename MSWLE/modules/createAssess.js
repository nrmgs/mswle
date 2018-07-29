//Type your code here

var assessmentTypeName;
var assessmentTypeId;
var assessmenTime;
//var serverName="";
function createAssessmentService(deptID,deptName) {
  try{
    var spTokenExpiryDiff = spTokenExpiry();
    if(spTokenExpiryDiff < 55){
    }else{
      sessionexpired();
      return;
    }
    if(networkAvailable() == false){
      callPopup("Please check your internet connectivity and try again");
    }else{
      var assessmentDate = new Date();
      assessmenTime = assessmentDate.toISOString();
      var CreateAssessment_inputparam = {};

      CreateAssessment_inputparam["ResponsibilityAssignmentsID"] = userid;//"2132405";
      CreateAssessment_inputparam["ResponsibilityAssignmentsName"] = ""+lastName+", "+firstName;// "Wessolowski, Joaquin";
      CreateAssessment_inputparam["DepartmentId"] = ""+deptID;
      CreateAssessment_inputparam["DepartmentName"] = ""+deptName;
      CreateAssessment_inputparam["AssessmentTypeId"] = assessmentTypeId;
      CreateAssessment_inputparam["AssessmentTypeName"] = assessmentTypeName;
      CreateAssessment_inputparam["WorkflowStatusId"] = "1";
      CreateAssessment_inputparam["WorkflowStatusName"] = "Open";
      CreateAssessment_inputparam["PlannedRemovalDateUTC"] = "";
      CreateAssessment_inputparam["ConductedDateUTC"] = assessmenTime;
      CreateAssessment_inputparam["ReportedDateUTC"] = assessmenTime;

      if(category == "chesmfv"){
        //CreateAssessment_inputparam["pricompid"] = "26534";
       // CreateAssessment_inputparam["pricompname"] = "1 SOURCE ELECTRICAL CONTRACTORS INC";
        
        CreateAssessment_inputparam["pricompid"] = "4";
        CreateAssessment_inputparam["pricompname"] = "CHEVRON";
        
      }else{
        CreateAssessment_inputparam["pricompid"] = null;
        CreateAssessment_inputparam["pricompname"] = "";
      }

      //alert(JSON.stringify(CreateAssessment_inputparam));
      CreateAssessment_inputparam["serviceID"] = "Assessments$CreateAssessment";//"ServerLogService$LogCreateAssessment";
      var CreateAssessment_httpheaders = {
        "Content-Type":"application/json",
        "Authorization": "ImpactAPI token=\"" + Authorization + "\""
      };
      CreateAssessment_inputparam["httpheaders"] = CreateAssessment_httpheaders;
      var CreateAssessment_httpconfigs = {};
      CreateAssessment_inputparam["httpconfig"] = CreateAssessment_httpconfigs;
      Assessments$CreateAssessment = mfintegrationsecureinvokerasync(CreateAssessment_inputparam, "Assessments", "CreateAssessment", createAssessment_Callback);
      //ServerLogService$LogCreateAssessment = mfintegrationsecureinvokerasync(CreateAssessment_inputparam, "ServerLogService", "LogCreateAssessment", createAssessment_Callback);
      kony.application.showLoadingScreen(loadingSkin, "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, null);

    }
  }catch(err){
    kony.print("err in create assessment "+err );
  }
}


var assessmentId;
function createAssessment_Callback(status, CreateAssessment){
  try{ kony.print("createAssessment_Callback\n" + JSON.stringify(CreateAssessment));
      if(status == 400){

        if(CreateAssessment["opstatus"] === 0){


          kony.application.dismissLoadingScreen();
          assessmentId = CreateAssessment.AssessmentId;
          var strBase64 = CreateAssessment.FileBody;
          //serverName = decode(strBase64);
          //kony.print("serverName: "+serverName);
          if(assessmentId){
            callPopup("Assessment Initiated Successfully "+assessmentId);
            assessmentId = assessmentId;
            //frmForm1.flxEngagLocation.setEnabled(true);
            //frmForm1.flxEngagPriContractor.setEnabled(true);
            //alert("createAssessment_Callback engId: " + engId+"\nisEmpty(engId):"+isEmpty(engId));
            if (isEmpty(engId) === false) {
              InsertAssessment(assessmentId);
            }
            else {
              UpdateAsstId();
            }
            //           var currenrtFrm = kony.application.getCurrentForm().id;
            //           if(currenrtFrm == "frmForm1"){
            //             SelectAssessment(); //select from local db since CreateAssessment already inserted to db
            //             frmForm1A.show();
            //           }else if(currenrtFrm == "frmPreConfirmA"){
            //             frmPreConfirmB.show();
            //           }
          }else{
            callPopup("Unable to process your request, please try again");
          }
        }

        else if(CreateAssessment["opstatus"] === 8009){
          kony.application.dismissLoadingScreen();
          if(CreateAssessment.httpStatusCode == 401){
            var crrErr = JSON.parse(CreateAssessment.Errors);
            if(crrErr.Message == "Unknown user name or password"){
              callPopup("Unknown user name or password, please contact your IMPACT Administrator");
            }else if(crrErr.Message == "Account is locked"){
              callPopup("Account is locked, please contact your IMPACT Administrator");
            }else if(crrErr.Message == "Authentication required"){
              sessionexpired();
            }else{
              alert(CreateAssessment.errmsg_CreateAssessment)
              callPopup("Unable to process your request, please try again ");
            }
          }else if(CreateAssessment.httpStatusCode == 403){
            callPopup("User has no access to create an assessment");

          }else{
            callPopup("Unable to process your request, please try again");
          }
        } 
        else if(CreateAssessment["opstatus"] === 9001 || CreateAssessment["opstatus"] === 1000 || CreateAssessment["opstatus"] === 8005){
          kony.application.dismissLoadingScreen();
          callPopup("Sorry! We are Unable to process your request at this time, Kindly come back after some time. We appriciate your patience");
        }

        else{
          kony.application.dismissLoadingScreen();
          var cretAssRes = JSON.parse(CreateAssessment["httpResponse"]["response"]);
          if(cretAssRes.httpStatusCode == 401){
            var crrErr = JSON.parse(cretAssRes.Errors);
            if(crrErr.Message == "Unknown user name or password"){
              callPopup("Unknown user name or password, please contact your IMPACT Administrator");
            }else if(crrErr.Message == "Account is locked"){
              callPopup("Account is locked, please contact your IMPACT Administrator");
            }else if(crrErr.Message == "Authentication required"){
              sessionexpired();
            }else{
              alert(CreateAssessment.errmsg_CreateAssessment)
              callPopup("Unable to process your request, please try again ");
            }
          }else if(cretAssRes.httpStatusCode == 403){
            //var crrErr = JSON.parse(cretAssRes.Errors);
            callPopup("User has no access to create an assessment");

          }else{
            //var crrErr = JSON.parse(cretAssRes.Errors);
            //alert(JSON.stringify(crrErr.Message));
            //kony.application.dismissLoadingScreen();
            //callPopup("User has no access to create an assessment")
            callPopup("Unable to process your request, please try again");
          }
        }
      }
     }catch(err){
       kony.print("error in createAssessment_Callback function "+err);

     }
}


function primaryContractorSearch() {
  var searchValue = frmPrimaryContractor.txtSearchPrimaryContractor.text.trim();
  if (searchValue.length > 3) {
    getPrimaryContractors(searchValue);
  }
}

function getPrimaryContractors(searchValue) {
  try{
    var spTokenExpiryDiff = spTokenExpiry();
    if(spTokenExpiryDiff < 55){
    }else{
      sessionexpired();
      return;
    }
    if(networkAvailable() == false){
      callPopup("Please check your internet connectivity and try again");
    }else{
      var LookupPropertyDefinitions_inputparam = {};
      LookupPropertyDefinitions_inputparam["serviceID"] = "AssessmentLookups$LookupPropertyDefinitions";
      var LookupPropertyDefinitions_httpheaders = {
        "Content-Type":"application/json",
        "Authorization": "ImpactAPI token=\"" + Authorization + "\""
      };
      LookupPropertyDefinitions_inputparam["activity"] = "";
      LookupPropertyDefinitions_inputparam["search"] = searchValue;
      LookupPropertyDefinitions_inputparam["assessment"] = assessmentId;
      LookupPropertyDefinitions_inputparam["name"] = "primarycompanyid";

      LookupPropertyDefinitions_inputparam["httpheaders"] = LookupPropertyDefinitions_httpheaders;
      var LookupPropertyDefinitions_httpconfigs = {};
      LookupPropertyDefinitions_inputparam["httpconfig"] = LookupPropertyDefinitions_httpconfigs;
      AssessmentLookups$LookupPropertyDefinitions = mfintegrationsecureinvokerasync(LookupPropertyDefinitions_inputparam, "AssessmentLookups", "LookupPropertyDefinitions", getPrimaryContractors_Callback);
      kony.application.showLoadingScreen(loadingSkin, "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, null);
    }
  }catch(err){
    kony.print("error in getPrimaryContractors function "+err);
  }
}


function getPrimaryContractors_Callback(status, LookupPropertyDefinitions) {

  try{
    if(status == 400){
      if(LookupPropertyDefinitions["opstatus"] == 0){
        var primaryContractorLst = LookupPropertyDefinitions.Lookup;
        if(primaryContractorLst === null || primaryContractorLst === undefined){
          kony.application.dismissLoadingScreen();
          callPopup("No Primary Contractors found"); 

        }else{
          kony.application.dismissLoadingScreen();


          frmPrimaryContractor.segPriContractor.widgetDataMap = {boxSegPriContractor: "boxSegPriContractor",lblSecHdr: "lblSecHdr"};
          var dataForRowTemp = [];
          for (var i = 0; i < primaryContractorLst.length; i++){

            var data = {boxSegPriContractor: {info: { "pricontractor": primaryContractorLst[i]}},lblSecHdr: primaryContractorLst[i].Name,template: boxSegPriContractor};
            dataForRowTemp.push(data);

          }
          frmPrimaryContractor.segPriContractor.setData(dataForRowTemp);

        }
      }
      else if(LookupPropertyDefinitions["opstatus"] == 8009){
        kony.application.dismissLoadingScreen();
        if(LookupPropertyDefinitions.httpStatusCode == 401){
          var primaryErr = JSON.parse(LookupPropertyDefinitions.Errors);
          if(primaryErr.Message == "Unknown user name or password"){
            callPopup("Unknown user name or password, please contact your IMPACT Administrator");
          }else if(primaryErr.Message == "Account is locked"){
            callPopup("Account is locked, please contact your IMPACT Administrator");
          }else if(primaryErr.Message == "Authentication required"){
            sessionexpired();
          }else{
            callPopup("Unable to process your request, please try again ");
          }
        }else if(LookupPropertyDefinitions.httpStatusCode == 403){
          callPopup("User does not have access to the category");

        }else{
          kony.application.dismissLoadingScreen();
          callPopup("Unable to process your request, please try again");
        }

      }
      else if(LookupPropertyDefinitions["opstatus"] === 9001 || LookupPropertyDefinitions["opstatus"] === 1000 || LookupPropertyDefinitions["opstatus"] === 8005){
        kony.application.dismissLoadingScreen();
        callPopup("Sorry! We are Unable to process your request at this time, Kindly come back after some time. We appriciate your patience");
      }
      else{
        kony.application.dismissLoadingScreen();
        var primaryRes = JSON.parse(LookupPropertyDefinitions["httpResponse"]["response"]);
        if(primaryRes.httpStatusCode == 401){
          var primaryErr = JSON.parse(primaryRes.Errors);
          if(primaryErr.Message == "Unknown user name or password"){
            callPopup("Unknown user name or password, please contact your IMPACT Administrator");
          }else if(primaryErr.Message == "Account is locked"){
            callPopup("Account is locked, please contact your IMPACT Administrator");
          }else if(primaryErr.Message == "Authentication required"){
            sessionexpired();
          }else{
            callPopup("Unable to process your request, please try again ");
          }
        }else if(primaryRes.httpStatusCode == 403){
          callPopup("User does not have access to the category");

        }else{
          kony.application.dismissLoadingScreen();
          callPopup("Unable to process your request, please try again");
        }
      }

      //       else if(LookupPropertyDefinitions["httpStatusCode"] == 401){
      //         kony.application.dismissLoadingScreen();
      //         callPopup("Authentication Failed, Unknown user name or password");
      //       }else if(LookupPropertyDefinitions["httpStatusCode"] == 403){
      //         var Pri = JSON.parse(LookupPropertyDefinitions.Errors);
      //         callPopup(Pri.Message);
      //         kony.application.dismissLoadingScreen();
      //       }
      //       else{
      //         kony.application.dismissLoadingScreen();
      //         callPopup("Unable to process your request, please try again later");
      //       }
    }
  }catch(err){
    kony.print("error in getPrimaryContractors_Callback function "+err);
  }

}


function getLocation() {
  try{
    var spTokenExpiryDiff = spTokenExpiry();
    if(spTokenExpiryDiff < 55){
    }else{
      sessionexpired();
      return;
    }
    if(networkAvailable() == false){
      callPopup("Please check your internet connectivity and try again");
    }else{
      if (SelectPropertyDefinitions_inputparam == undefined) {
        var SelectPropertyDefinitions_inputparam = {};
      }
      SelectPropertyDefinitions_inputparam["serviceID"] = "AssessmentLookups$SelectPropertyDefinitions";
      var SelectPropertyDefinitions_httpheaders = {
        "Content-Type":"application/json",
        "Authorization": "ImpactAPI token=\"" + Authorization + "\""
      };

      SelectPropertyDefinitions_inputparam["assessment"] = assessmentId;
      SelectPropertyDefinitions_inputparam["SelectPropertyDefinitionName"] = "Location";
      SelectPropertyDefinitions_inputparam["httpheaders"] = SelectPropertyDefinitions_httpheaders;
      var SelectPropertyDefinitions_httpconfigs = {};
      SelectPropertyDefinitions_inputparam["httpconfig"] = SelectPropertyDefinitions_httpconfigs;
      AssessmentLookups$SelectPropertyDefinitions = mfintegrationsecureinvokerasync(SelectPropertyDefinitions_inputparam, "AssessmentLookups", "SelectPropertyDefinitions", getLocation_Callback);
      kony.application.showLoadingScreen(loadingSkin, "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, null);
    }
  }catch(err){
    kony.print("error in getLocation function "+err);
  }
}

var location;
function getLocation_Callback(status, SelectPropertyDefinitions) {
  try{
    if(status == 400){
      if(SelectPropertyDefinitions["opstatus"] == 0){
        location = SelectPropertyDefinitions.Lookup;

        if(location === null || location === undefined){
          kony.application.dismissLoadingScreen();
          callPopup("There are no Locations associated with this Engagement Site."); 

        }else{
          frmLocation.segLocation.widgetDataMap = {boxSegLocation: "boxSegLocation",lblSecHdr: "lblSecHdr"};
          var dataForRowTemp = [];
          for (var i = 0; i < location.length; i++){

            var data = {boxSegLocation: {info: { "location": location[i]}},lblSecHdr: location[i].Name,template: boxSegLocation};
            dataForRowTemp.push(data);

          }
          frmLocation.segLocation.setData(dataForRowTemp);
          frmLocation.show();
          kony.application.dismissLoadingScreen();
        }
      }
      else if(SelectPropertyDefinitions["opstatus"] == 8009){
        kony.application.dismissLoadingScreen();
        if(SelectPropertyDefinitions.httpStatusCode == 401){
          var locErr = JSON.parse(SelectPropertyDefinitions.Errors);
          if(locErr.Message == "Unknown user name or password"){
            callPopup("Unknown user name or password, please contact your IMPACT Administrator");
          }else if(locErr.Message == "Account is locked"){
            callPopup("Account is locked, please contact your IMPACT Administrator");
          }else if(locErr.Message == "Authentication required"){
            sessionexpired();
          }else{
            callPopup("Unable to process your request, please try again ");
          }
        }else if(SelectPropertyDefinitions.httpStatusCode == 403){
          callPopup("User does not have access to the category");

        }else{
          kony.application.dismissLoadingScreen();
          callPopup("Unable to process your request, please try again");
        }

      }
      else if(SelectPropertyDefinitions["opstatus"] === 9001 || SelectPropertyDefinitions["opstatus"] === 1000 || SelectPropertyDefinitions["opstatus"] === 8005){
        kony.application.dismissLoadingScreen();
        callPopup("Sorry! We are Unable to process your request at this time, Kindly come back after some time. We appriciate your patience");
      }

      else{
        kony.application.dismissLoadingScreen();
        var locRes = JSON.parse(SelectPropertyDefinitions["httpResponse"]["response"]);
        if(locRes.httpStatusCode == 401){
          var locErr = JSON.parse(locRes.Errors);
          if(locErr.Message == "Unknown user name or password"){
            callPopup("Unknown user name or password, please contact your IMPACT Administrator");
          }else if(locErr.Message == "Account is locked"){
            callPopup("Account is locked, please contact your IMPACT Administrator");
          }else if(locErr.Message == "Authentication required"){
            sessionexpired();
          }else{
            callPopup("Unable to process your request, please try again ");
          }
        }else if(locRes.httpStatusCode == 403){
          callPopup("User does not have access to the category");

        }else{
          kony.application.dismissLoadingScreen();
          callPopup("Unable to process your request, please try again");
        }
      }
      //       else if(SelectPropertyDefinitions["httpStatusCode"] == 401){
      //         kony.application.dismissLoadingScreen();
      //         callPopup("Authentication Failed, Unknown user name or password");
      //       }else if(SelectPropertyDefinitions["httpStatusCode"] == 403){
      //         var Property = JSON.parse(SelectPropertyDefinitions.Errors);
      //         callPopup(Property.Message);
      //         kony.application.dismissLoadingScreen();
      //       }
      //       else{
      //         kony.application.dismissLoadingScreen();
      //         callPopup("Unable to process your request, please try again later");
      //       }
    }
  }catch(err){
    kony.print("error in getLocation_Callback function "+err);
  }
}

function onTextChanLocationSearch() {
  var objArray = [];
  sData = []


  objArray = location;

  var searchValue = frmLocation.txtSearchLocation.text.trim();
  if (searchValue.length == 0) {
    sData = location;
  }
  if (searchValue.length > 1) {
    sData = [];
    var length = objArray.length;

    for (var i = 0; i < objArray.length; i++) {
      //if (objArray[i].SiteName !== null || objArray[i].SiteName !== undefined) {
      var sName = "";
      if (objArray[i].Name != null && objArray[i].Name != undefined) {
        sName = objArray[i].Name;
      }
      if (sName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
        sData.push(objArray[i]);
      }

    }
  }
  searchLocationLst();
}



function searchLocationLst() {
  frmLocation.segLocation.widgetDataMap = {
    boxSegLocation: "boxSegLocation",
    lblSecHdr: "lblSecHdr"
  };
  var dataForRowTemp = [];
  //alert(sData)

  for (i = 0; i < sData.length; i++) {
    var data = {boxSegLocation: {info: { "location": sData[i]}},lblSecHdr: sData[i].Name,template: boxSegLocation};
    dataForRowTemp.push(data);
  }
  frmLocation.segLocation.setData(dataForRowTemp);
}

function onClickLocation(eventObj){
  var prevFrm = kony.application.getPreviousForm().id;
  var location = eventObj.info.location;
  var locationId = location.Id;
  var locationName = location.Name;

  frmForm1A.txtEngagLocation.text = locationName;
  frmForm1A.txtEngagLocation.info = {"locationId":locationId};


  //alert("locationId "+locationId+" locationName "+locationName);
  frmPreConfirmB.txtEngagLocation.text = locationName;
  frmPreConfirmB.txtEngagLocation.info = {"locationId":locationId};

  if(prevFrm == "frmForm1A"){
    frmForm1A.show();
  }else if(prevFrm == "frmPreConfirmB"){
    frmPreConfirmB.show();
  }

}


function onClickPriContractor(eventObj){
  var prevFrm = kony.application.getPreviousForm().id;
  var priContractor = eventObj.info.pricontractor;
  var pricontractorId = priContractor.Id;
  var pricontractorName = priContractor.Name;

  //alert("pricontractorId "+pricontractorId+" pricontractorName "+pricontractorName);
  frmForm1A.txtEngagPriContractor.text = pricontractorName;
  frmForm1A.txtEngagPriContractor.info = {"pricontractorId":pricontractorId};

  frmPreConfirmB.txtEngagPriContractor.text = pricontractorName;
  frmPreConfirmB.txtEngagPriContractor.info = {"pricontractorId":pricontractorId};


  if(prevFrm == "frmForm1A"){
    frmForm1A.show();
  }else if(prevFrm == "frmPreConfirmB"){
    frmPreConfirmB.show();
  }
  //frmForm1.show();

  //alert(frmForm1.txtEngagPriContractor.info.pricontractorId);

}

