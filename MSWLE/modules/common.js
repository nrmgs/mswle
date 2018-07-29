var glbNetworkAvailable = false;
client = new kony.sdk();
//check network connectivity
function networkAvailable(){


  var isNetworkAvailable = kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
  //glbNetworkAvailable = isNetworkAvailable;
  kony.print("!!!!!!!!!!!!!!!!!!!!!!!!!! networkAvailable !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! "+isNetworkAvailable);
  if(isNetworkAvailable === true){
    if(client.currentClaimToken === null){
      // alert("1");
      //client.init("4dbf9e19402349ba1a01fcbdef681d8c","29e51d2f27a26c433dfe71280821a7de","https://100021651.auth.konycloud.com/appconfig",succKonyCallback, errCallback);//prod
      //client.init("91fd4bbc58492bc5bf576114764530b4","defaf09a1501cfb87fa6998435f0077c","https://100021651.auth.konycloud.com/appconfig",succKonyCallback, errCallback);//stg
      client.init("82565c7b37a0a06c8917917a827e1915","d0a51c64fc174eb185a02343555358eb ","https://100021651.auth.konycloud.com/appconfig",succKonyCallback, errCallback);//dev
    }
  }
  return isNetworkAvailable;
}

function succKonyCallback(){
  //alert(client);
}


function errCallback(){

}
function checkNetworkAndSync(){
  kony.application.showLoadingScreen(loadingSkin, "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, null);
  if(networkAvailable() === false){
    kony.application.dismissLoadingScreen();
    if(kony.store.getItem("accessToken") === null){
      callPopup("Please connect your device internet for authentication");
    }else if(kony.store.getItem("spToken") === null){
      callPopup("Please connect your device internet for authentication");
    }else {
      Authorization = kony.store.getItem("spToken");
      frmDashboard.lblUserName.text = "Welcome "+kony.store.getItem("givenName")+" "+kony.store.getItem("familyName");
      frmDashboard.show();
    }
  }else{
    kony.application.dismissLoadingScreen();
    if(kony.store.getItem("accessToken") === null){
      //if(kony.store.getItem("accessToken") != null)
    }else {
      var expiresOn = new Date(kony.store.getItem("expiresOn"));
      var currDate = new Date();
      kony.print("expiresOn "+expiresOn.toLocaleString());
      kony.print("curr date "+currDate.toLocaleString());
      if((currDate.toLocaleString()) > (expiresOn.toLocaleString())){
        //alert("Expired");
        callPopup("To ensure successful initial set up of MS Authenticator Profile you MUST use assigned Primary Email Address indicated in Chevron White Pages profile (e.g. JohnSmith@chevron.com)");//"Please authenticate to Login"
      }else{
        //alert("Not Expired");
        Authorization = kony.store.getItem("spToken");
        if(Authorization){
          frmDashboard.lblUserName.text = "Welcome "+kony.store.getItem("givenName")+" "+kony.store.getItem("familyName");
          frmDashboard.show();
        }else {
          callPopup("Please authenticate to Login");
        }

      }

    }
  }
}

function suKonyCallback(res){
  kony.application.dismissLoadingScreen();
  if(kony.store.getItem("accessToken") === null){
    //if(kony.store.getItem("accessToken") != null)
  }else {
    var expiresOn = new Date(kony.store.getItem("expiresOn"));
    var currDate = new Date();
    kony.print("expiresOn "+expiresOn.toLocaleString());
    kony.print("curr date "+currDate.toLocaleString());
    if((currDate.toLocaleString()) > (expiresOn.toLocaleString())){
      //alert("Expired");
      callPopup("Please authenticate to Login");
    }else{
      //alert("Not Expired");
      Authorization = kony.store.getItem("spToken");
      frmDashboard.lblUserName.text = "Welcome "+kony.store.getItem("givenName")+" "+kony.store.getItem("familyName");
      frmDashboard.show();
    }

  }
}
function erCallback(res){
  //alert(JSON.stringify(res));
  kony.print(JSON.stringify(res));
}
var frmSettingCalPage = "";
function backBtnPressed(){
  var currenrtFrm = kony.application.getCurrentForm().id;
  var prevFrm = kony.application.getPreviousForm().id;


  if(currenrtFrm == "frmForm1"){ 
    frmOneClear();
    resetGlbVariables();
    frmDashboard.show();
  }
  if(currenrtFrm == "frmForm1A"){
    //delete engag using engID
    //CancelAssessment();
    frmForm1.show();
  }

  if(currenrtFrm == "frmForm2"){
    if(networkAvailable() === false){
      frmForm1.show();
    }else{
      frmForm1A.show();
    }
  }
  if(currenrtFrm == "frmQtCategory1"){

    frmForm2.show();
  }
  if(currenrtFrm == "frmDynamicJSA1"){

    frmQtCategory1.show();
  }

  if(currenrtFrm == "frmPreConfirmA"){

    frmQtCategory1.show();
  }

  if(currenrtFrm == "frmPreConfirmB"){

    frmPreConfirmA.show();
  }

  if(currenrtFrm == "frmSettings"){
    if(frmSettingCalPage == "frmDashboard"){
      frmDashboard.show();
    }if(frmSettingCalPage == "frmForm1"){
      frmForm1.show();
    }if(frmSettingCalPage == "frmForm1A"){
      frmForm1A.show();
    }if(frmSettingCalPage == "frmForm2"){
      frmForm2.show();
    }if(frmSettingCalPage == "frmQtCategory1"){
      frmQtCategory1.show();
    }if(frmSettingCalPage == "frmDynamicJSA1"){
      frmDynamicJSA1.show();
    }if(frmSettingCalPage == "frmPreConfirmB"){
      frmPreConfirmB.show();
    }if(frmSettingCalPage == "frmPreConfirmA"){
      frmPreConfirmA.show();
    }

  }
  if(currenrtFrm == "frmAbout"){

    frmSettings.show();
  }
  if(currenrtFrm == "frmFavSite"){

    frmSettings.show();
  }
  if(currenrtFrm == "frmChesmFavSite"){

    frmSettings.show();
  }

  if(currenrtFrm == "frmSite"){
    if(prevFrm == "frmForm1"){
      frmForm1.show();
    }else if(prevFrm == "frmPreConfirmA"){
      frmPreConfirmA.show();
    }

  }if(currenrtFrm == "frmDepartment"){
    if(prevFrm == "frmForm1"){
      frmForm1.show();
    }else if(prevFrm == "frmPreConfirmA"){
      frmPreConfirmA.show();
    }
  }
  if(currenrtFrm == "frmLocation"){
    if(prevFrm == "frmForm1A"){
      frmForm1A.show();
    }else if(prevFrm == "frmPreConfirmB"){
      frmPreConfirmB.show();
    }
  }
  if(currenrtFrm == "frmPrimaryContractor"){
    if(prevFrm == "frmForm1A"){
      frmForm1A.txtEngagPriContractor.text = "";
      frmForm1A.txtEngagPriContractor.info = null;

      frmPreConfirmB.txtEngagPriContractor.text = "";
      frmPreConfirmB.txtEngagPriContractor.info = null;

      frmForm1A.show();
    }else if(prevFrm == "frmPreConfirmB"){

      frmForm1A.txtEngagPriContractor.text = "";
      frmForm1A.txtEngagPriContractor.info = null;

      frmPreConfirmB.txtEngagPriContractor.text = "";
      frmPreConfirmB.txtEngagPriContractor.info = null;
      frmPreConfirmB.show();
    }
  }


}

function callPopup(alertText){
  Popup.lblPopTxt.text = alertText;
  Popup.show();
}


function getTodayDate(){
  //alert("getTodayDate " + currAsst.UdfFields.engagementdt.Value);
  var mydate, mm, dd, yyyy;
  if (isEmpty(currAsst.UdfFields.engagementdt.Value) == false) {
    mydate = new Date();   
  } else mydate = new Date(currAsst.UdfFields.engagementdt.Value);

  mm = mydate.getMonth()+1; 
  dd = mydate.getDate();
  yyyy = mydate.getFullYear();
  //   var hh = mydate.getHours();
  //   var mins = mydate.getMinutes();
  //   var secs = mydate.getSeconds();
  frmForm2.dateEngag.dateComponents = [dd,mm,yyyy];
  frmForm2.dateEngag.validEndDate = [dd,mm,yyyy];
}


function registerIdleTimeOut(){

  try{
    kony.application.registerForIdleTimeout(5, idleTimeCallBack);

  }catch(err){
    kony.print("Error on registerIdleTimeOut "+err);
  }
}

function idleTimeCallBack(){
  destroyForms();
  frmStart.show();
}

function destroyForms(){
  frmDashboard.destroy();
  frmForm1.destroy();
  frmForm2.destroy();
  frmQtCategory1.destroy();
  frmDynamicJSA1.destroy();
  frmIncompLst.destroy();

  Popup.destroy();
  popupSubmit.destroy();
  popupSave.destroy();
  popupCancel.destroy();
}


function convertTime(){

  var expiresOn = new Date(1520891443242.3142);
  var currDate = new Date();

  kony.print("expiresOn "+expiresOn.toLocaleString());
  kony.print("curr date "+currDate.toLocaleString());

  if((currDate.toLocaleString()) > (expiresOn.toLocaleString())){

    //alert("Expired");
  }else{
    //alert("Not Expired");

  }

}


function hdrTxtChng(){
  frmDashboard.txtQtOpenPOp.setEnabled(false);
  frmForm1A.txtQtOpenPOp.setEnabled(false);
  frmPreConfirmB.txtQtOpenPOp.setEnabled(false);
  frmForm2.txtSpecLocPop.setEnabled(false);

  if(category == "jsa"){
    flxHdrTitle.lblHdrTitle.text = "Job Safety Analysis";

    assessmentTypeName = "JSA Engagement";
    assessmentTypeId = "141";

    frmForm2.flxPermit.setVisibility(false);
    frmForm2.lblSpecializedActivity.top = 660;
    frmForm2.cbxSpecializedActivity.top = 685;
    frmForm2.flxOtherActivity.top = 1180;
    frmForm2.flxOtherActivity.setVisibility(false);
  }else if(category == "fieldverification"){
    flxHdrTitle.lblHdrTitle.text = "Field Verification";

    assessmentTypeId = "208";
    assessmentTypeName = "Field Verification";

    frmForm2.flxPermit.setVisibility(false);
    frmForm2.lblSpecializedActivity.top = 660;
    frmForm2.cbxSpecializedActivity.top = 685;
    frmForm2.cbxSpecializedActivity.height='1600px';
    frmForm2.flxOtherActivity.top = 1300;
    frmForm2.flxOtherActivity.setVisibility(false);
  }else if(category == "ptw"){
    flxHdrTitle.lblHdrTitle.text = "Permit to Work";

    assessmentTypeName = "PTW Engagement";
    assessmentTypeId = "142";

    //getSpecializedActvty();
    frmForm2.flxPermit.setVisibility(true);
    frmForm2.lblSpecializedActivity.top = 860;
    frmForm2.cbxSpecializedActivity.top = 880;
    frmForm2.flxOtherActivity.top = 1360;
    frmForm2.flxOtherActivity.setVisibility(false);
  }else if(category == "generic"){
    flxHdrTitle.lblHdrTitle.text = "Generic Engagement";

    assessmentTypeId = "143";
    assessmentTypeName = "Generic Engagement";

    frmForm2.flxPermit.setVisibility(false);
    frmForm2.lblSpecializedActivity.top = 660;
    frmForm2.cbxSpecializedActivity.top = 685;
    frmForm2.flxOtherActivity.top = 1180;
    frmForm2.flxOtherActivity.setVisibility(false);
  }else if(category == "chesmfv"){
    flxHdrTitle.lblHdrTitle.text = "CHESM Field Verification";

    assessmentTypeId = "209";
    assessmentTypeName = "CHESM Field Verification";

    frmForm2.flxPermit.setVisibility(false);
    frmForm2.lblSpecializedActivity.top = 660;
    frmForm2.cbxSpecializedActivity.top = 685;
    frmForm2.cbxSpecializedActivity.height='1600px';
    frmForm2.flxOtherActivity.setVisibility(false);
  }


  var currenrtFrm = kony.application.getCurrentForm().id;
  if(currenrtFrm == "frmForm1"){

    if(assessmentId == null || assessmentId == ""){
      frmForm1.flxEngagSite.setEnabled(true);
      frmForm1.flxEngagDept.setEnabled(true);
    }else{
      frmForm1.flxEngagSite.setEnabled(false);
      frmForm1.flxEngagDept.setEnabled(false);
    }

    if(networkAvailable() == false){
      flxFooterNext.lblNext.text = "Next";
    }else{
      if(assessmentId == null || assessmentId == ""){
        flxFooterNext.lblNext.text = "Create Engagement";
      }else{
        flxFooterNext.lblNext.text = "Next";
      }

    }
  }if(currenrtFrm == "frmForm1A"){
    flxFooterNext.lblNext.text = "Next";
  }if(currenrtFrm == "frmForm2"){
    flxFooterNext.lblNext.text = "Next";
  }if(currenrtFrm == "frmQtCategory1"){
    //flxFooterNext.CreateEngCallout.setVisibility(false);
    flxFooterNext.lblNext.text = "Next";
  }if(currenrtFrm == "frmPreConfirmA"){ 
    if(networkAvailable() == false){
      if(assessmentId == null || assessmentId == ""){
        frmPreConfirmA.flxEngagSite.setEnabled(true);
        frmPreConfirmA.flxEngagDept.setEnabled(true);
      }else{
        frmPreConfirmA.flxEngagSite.setEnabled(false);
        frmPreConfirmA.flxEngagDept.setEnabled(false);
      }
      //flxFooterNext.CreateEngCallout.setVisibility(false);
      flxFooterNext.lblNext.text = "Save";


    }else{
      if(assessmentId == null || assessmentId == ""){
        frmPreConfirmA.flxEngagSite.setEnabled(true);
        frmPreConfirmA.flxEngagDept.setEnabled(true);

        //flxFooterNext.CreateEngCallout.setVisibility(true);

        flxFooterNext.lblNext.text = "Create Engagement";

      }else{
        frmPreConfirmA.flxEngagDept.setEnabled(false);
        frmPreConfirmA.flxEngagSite.setEnabled(false);

        //flxFooterNext.CreateEngCallout.setVisibility(false);

        flxFooterNext.lblNext.text = "Next";
      }

    }
  }


}

function formNavCancel(){ //alert("engId: "+engId+"\nassessmentId "+assessmentId);
  var currenrtFrm = kony.application.getCurrentForm().id;
  if(currenrtFrm == "frmForm1"){
    cancelPopup();
  }
  if(currenrtFrm == "frmForm1A"){
    cancelPopup();
  }
  if(currenrtFrm == "frmForm2"){
    cancelPopup();
  }if(currenrtFrm == "frmQtCategory1"){
    cancelPopup();
  }if(currenrtFrm == "frmDynamicJSA1"){
    cancelPopup();
  }if(currenrtFrm == "frmPreConfirmA"){
    cancelPopup();
  }if(currenrtFrm == "frmPreConfirmB"){
    cancelPopup();
  }
}

function cancelPopup(){
  popupCancel.lblPopTxt.text = "Are you sure want to Cancel?";
  popupCancel.show();
}

function onClickHome() { //alert("engId: "+engId+"\nassessmentId "+assessmentId);
  var currenrtFrm = kony.application.getCurrentForm().id; kony.print("engId: "+engId+"\nassessmentId "+assessmentId);
  if(currenrtFrm == "frmForm1"){
    if (frmForm1.txtEngagSite.info !== null) {
      sitIdNum = frmForm1.txtEngagSite.info.siteId;
      sitId = frmForm1.txtEngagSite.text;
    } else {
      sitIdNum = "";
      sitId ="";
    }

    if (frmForm1.txtEngagDept.info !== null) {
      deptId = frmForm1.txtEngagDept.info.dept;
      deptName = frmForm1.txtEngagDept.text; 
    } else {
      deptId = "";
      deptName = "";
    }

    if (isEmpty(sitId) === true && isEmpty(deptName) === true) {
      if(isEmpty(engId)=== false){
        InsertOfflineAssessment();
      }
      SaveAssessment();
    } else {
      resetGlbVariables();
      frmDashboard.show();
    }
  } else if(currenrtFrm == "frmForm1A"){
    SaveForm1A("Home");
  } else if(currenrtFrm == "frmForm2"){ 
    SaveForm2("Home");
  } else if(currenrtFrm == "frmQtCategory1"){
    SaveAssessment();
  } else if (currenrtFrm == "frmDynamicJSA1") {
    saveSelQt("Home");
  } else if(currenrtFrm == "frmPreConfirmA"){
    SavePreConfirmA("Home");
  } else if(currenrtFrm == "frmPreConfirmB"){
    SavePreConfirmB("Home");
  }
  //SaveAssessment();
}

function formNavNext(){ //alert("engId: "+engId+"\nassessmentId "+assessmentId);
  var currenrtFrm = kony.application.getCurrentForm().id;
  if(currenrtFrm == "frmForm1"){

    //SaveForm1(); //save to updated form1 to db
    //frmForm1A.show();
    //frmOneClear();
    if (frmForm1.txtEngagSite.info !== null) {
      sitIdNum = frmForm1.txtEngagSite.info.siteId;
      sitId = frmForm1.txtEngagSite.text;
    } else {
      sitIdNum = "";
      sitId ="";
    }

    if (frmForm1.txtEngagDept.info !== null) {
      deptId = frmForm1.txtEngagDept.info.dept;
      deptName = frmForm1.txtEngagDept.text; 
    } else {
      deptId = "";
      deptName = "";
    }

    //alert(sitId+sitIdNum+deptId+deptName);

    if(networkAvailable() == false){
      //save data here 
      //alert("frmForm1 engId:" + engId);
      if(isEmpty(engId)=== false){
        InsertOfflineAssessment();
      }else{
        //update form1 here with engId if exisintg

        UpdateAssessment();
      }
      frmForm2.show();
    }else{
      if(isEmpty(assessmentId)=== false){
        getselecSiteAndDept();
      }else{
        SelectAssessment(); //select from local db since CreateAssessment already inserted to db
        frmForm1A.show();
      }

    }
  }if(currenrtFrm == "frmForm1A"){

    if (category == "chesmfv"){

      if(networkAvailable() === true){
        if(frmForm1A.txtEngagPriContractor.text==null || frmForm1A.txtEngagPriContractor.text.trim()=="" || frmForm1A.txtEngagPriContractor.text==undefined){
          callPopup("Please enter Name of Primary Contractor.");
        }
        else{
          SaveForm1A("Next");//save loc and pri contractor
        }
      }else{
        SaveForm1A("Next");//save loc and pri contractor  
      } 


    }else{
      SaveForm1A("Next");//save loc and pri contractor  
    } 

    //alert("frmForm2.cbxSpecializedActivity.selectedKeys "+frmForm2.cbxSpecializedActivity.selectedKeys);
  }
  if(currenrtFrm == "frmForm2"){ 

    if (category == "fieldverification" || category == "chesmfv"){
      if(frmForm2.cbxSpecializedActivity.selectedKeys==null || frmForm2.cbxSpecializedActivity.selectedKeys.length==0 || 
         frmForm2.cbxSpecializedActivity.selectedKeys==undefined){
        callPopup("You have not selected any activity. Atleast one activity must be selected before proceeding.");
        return false;

      }else{
        if(frmForm2.cbxSpecializedActivity.selectedKeys.indexOf("1607")<0 && frmForm2.cbxSpecializedActivity.selectedKeys.indexOf("1608")<0 &&
           frmForm2.cbxSpecializedActivity.selectedKeys.indexOf("1609")<0 && frmForm2.cbxSpecializedActivity.selectedKeys.indexOf("1610")<0){
          popupYesNo.lblPopTxt.text="Atleast one of the JSA,PTW,SSE, or EM sections have not been selected. Are you sure you want to continue?";
          popupYesNo.show();

        }else{
          SaveForm2("Next");
        }

      }
    }else{
      SaveForm2("Next");
    }



    //frmQtCategory1.show();
  }if(currenrtFrm == "frmQtCategory1"){ 
    skipQuestions();
    //UpdateAssessment();
    //frmPreConfirmA.show();
  }if(currenrtFrm == "frmPreConfirmA"){
    if(isEmpty(frmPreConfirmA.txtEngagSite.text) == false){
      callPopup("please enter site");
      return false;
    } 
    if(isEmpty(frmPreConfirmA.txtEngagDept.text) == false){
      callPopup("please enter department");
      return false;
    }
    if(networkAvailable() == false){
      //save all details in local db
      SavePreConfirmA("Next");
      //frmDashboard.show();
    }else{
      if(assessmentId == null || assessmentId == ""){
        //update assessmentId write query
        //alert("assessmentId == null "+" engId "+ engId);
        getselecSiteAndDept();
      }else{
        frmPreConfirmB.show();
      }

    }
  }if(currenrtFrm == "frmPreConfirmB"){
    SavePreConfirmB("Next");
  }
}

function callDepartLst(){
  if(isEmpty(frmForm1.txtEngagSite.text) == false){
    callPopup("please enter site");
    return false;
  }else{
    frmDepartment.show();
  }
}

function updateSpecActs(){
  var selKeys = null;
  //alert(frmForm2.cbxSpecializedActivity.selectedKeys);
  if (isEmpty(frmForm2.cbxSpecializedActivity.selectedKeys) === true) selKeys = frmForm2.cbxSpecializedActivity.selectedKeys;
  frmForm2.cbxSpecializedActivity.selectedKeys = selKeys;
  if (category == "fieldverification" || category == "chesmfv"){
    //alert(frmForm2.cbxSpecializedActivity.masterData);
    var data = [[1610,"Emergency Management (EM)"],
                [1607,"Job Safety Analysis (JSA)"],
                [1608,"Permit to Work (PTW)"],
                [1609,"Short Service Employee Management (SSE)"],
                [1611,"Confined Space Entry (CSE)"],
                [1612,"Diving"],
                [1613,"Electrical Work (De-Energized)"],
                [1614,"Electrical Work (Energized/Live)" ],
                [1616,"Excavation (Entry)"],
                [1615,"Excavation (No Entry)" ],
                [1617,"Hot Work"],
                [1618,"Isolation of Hazardous Energy (IHE)"],
                [1619,"Lifting & Rigging"],
                [1623,"Other (including local V&V)"], 
                [1620,"Portable Gas Detection" ],
                [1622,"Vacuum Truck  Ops (Control of Static Electricity- Transfer of flammable/combustible or classified area work)"], 
                [1621,"Work at Height"]];

    frmForm2.cbxSpecializedActivity.masterData = data; 
    if (isEmpty(mswSpecializedAct) === true) {     
      frmForm2.cbxSpecializedActivity.selectedKeys = mswSpecializedAct; //from reopening
      mswSpecializedAct = null;
    } else frmForm2.cbxSpecializedActivity.selectedKeys = selKeys;

  }

}

//reset all global variables before showing dashboard.
function resetGlbVariables(){
  engId = null;
  assessmentId = null;

  var arrTemp = [];


  if(category == "jsa"){
    arrTemp = JSAQtAns;
  }else if(category == "fieldverification"){
    arrTemp = FVQtAns; 
  }else if(category == "ptw"){
    arrTemp = PTWQtAns;
  }else if(category == "generic"){
    arrTemp = GenericQtAns;
  }else if(category == "chesmfv"){
    arrTemp = ChesmFVQtAns; 
  }

  for(var i = 0; i < arrTemp.length; i++) {
    var qtAns = arrTemp[i];
    for(var j = 0; j < qtAns.length; j++) {
      arrTemp[i][j].skinNo = "sknChkBxPlain";
      arrTemp[i][j].skinYes = "sknChkBxPlain";
      arrTemp[i][j].comts = "";
    }
  }
  //alert(JSON.stringify(FVQtAns));
  frmDepartment.txtSearchDept.text = "";
  frmForm2.txtOtherSpecilizedAct.text = "";
  frmSite.txtSearchSeg.text = "";
  frmOneClear();
  frmTwoClear();
  frmForm1.destroy();
  frmForm1A.destroy();
  frmForm2.destroy();
  frmPreConfirmA.destroy();
  frmPreConfirmB.destroy();
  frmQtCategory1.destroy();
  frmDynamicJSA1.destroy();
  frmIncompLst.destroy();

}
function disableWidgets(){
  frmDashboard.txtFVtooltip.setEnabled(false);
  frmDashboard.txtChesmFVtooltip.setEnabled(false);
}

var engagementDesc =null;


function popupConfirmOnClickYes(){
  kony.print("popupConfirmOnClickYes");

  // Set the recipients.

  var to = [emailAddress];//emailAddress;//["naresheega@chevron.com","najr@chevron.com"];

  var cc=null;

  var bcc = null;


  // Message body.

  var attach =null;

  // Demonstrates how to print the attachment.

  var msgbody =  prepareMailTemplate();
  // Set the subject.

  var sub = engagementDesc;


  kony.print("msgbody: "+msgbody);
  //alert("msgbody: "+msgbody);
  // Send the email.

  kony.phone.openEmail(to, cc, bcc, sub, msgbody, true, attach);



  popupConfirm.dismiss();

  frmOneClear();

  frmTwoClear();

  CancelAssessment();

}



function prepareMailTemplate(){
  kony.print("prepareMailTemplate -->");



  var engagementType =assessmentTypeName;

 // var workcrew = null;
  var workcrewDesc="";

  var specializedCategoryDesc ="";

  var SpecializedAct =frmForm2.cbxSpecializedActivity.selectedKeyValues;

  kony.print("11111");
  //alert("11111");

  if (SpecializedAct !==null) {

    var max = SpecializedAct.length;

    for (var i=0; i < max; i++) {

      var str = SpecializedAct[i].toString();

      var arr = str.split(',');

      var obj = {"Id":arr[0], "Name":arr[1]};

      if(specializedCategoryDesc==""){
        specializedCategoryDesc = arr[1];
      }else{
        specializedCategoryDesc = specializedCategoryDesc+","+arr[1];
      }


    }

  }
   //alert("222222");


  if(frmForm2.cbxWorkCrew.selectedKey==1){

    workcrewDesc ="Yes";

  }else if (frmForm2.cbxWorkCrew.selectedKey==0){

    workcrewDesc ="No";

  } else {workcrewDesc =""; }

  //alert("33333");

  if(category == "jsa"){

    engagementDesc ="JSA Engagement: "+assessmentId;

  }else if(category == "fieldverification"){

    engagementDesc ="Field Verificatoin: "+assessmentId;

  }else if(category == "ptw"){

    engagementDesc ="PTW Engagement: "+assessmentId;

  }else if(category == "generic"){

    engagementDesc ="Generic Engagement: "+assessmentId;

  }else if(category == "chesmfv"){

    engagementDesc ="CHESM Field Verification: "+assessmentId;

  }

  //alert("44444");

  var sectionC = prepareSectionC();

  //alert("after sectionC");

  kony.print("sectionC: "+sectionC);

  var engagDate = new Date(currAsst.UdfFields.engagementdt.Value);
  var month = engagDate.getMonth()+1;
  var date = engagDate.getDate();
  var year = engagDate.getFullYear();
  engagDate = month+"/"+date+"/"+year;

  var location = currAsst.Location.Name;
  if(location==null || location==undefined){
    location ="";
  }


  //alert("7777");
  
  var permitSection="";
  if(category == "ptw"){
    permitSection="<tr><td>Permit number:</td>"+

      "<td>"+currAsst.UdfFields.mswptwpnshortnote.Value+"</td>"+

      "</tr>"+
      "<tr><td>Permit Details:</td>"+

      "<td>"+currAsst.UdfFields.mswptwpcshortnote.Value+"</td>"+

      "</tr>";
  }
  
  //alert("8888");
  
  var scoreSection="";
  var scoreID="";
  if(category == "fieldverification" || category == "chesmfv"){

    if(currAsst.UdfFields["MSW_VV_SCOREID"].Value!=null && currAsst.UdfFields["MSW_VV_SCOREID"].Value!=undefined){
      scoreSection="<tr><td>Score and Summary:</td>"+

        "<td>"+currAsst.UdfFields["MSW_VV_SCOREID"].Value.Id+"</td>"+

        "</tr>"
    }else{
      scoreSection="<tr><td>Score and Summary:</td>"+

        "<td>"+""+"</td>"+

        "</tr>"
    }

  }
  
  //alert("99999");
  
  var primaryContractorName="";
  if(currAsst.UdfFields.primarycompanyid!==null){
      if(currAsst.UdfFields.primarycompanyid.Value!==null && currAsst.UdfFields.primarycompanyid.Value!==undefined){
      if(currAsst.UdfFields.primarycompanyid.Value.Name!==null){
          primaryContractorName= currAsst.UdfFields.primarycompanyid.Value.Name;
      }

    }
  }
  
  
  //alert("11 after  primaryContractorName "+currAsst.UdfFields.primarycompanyid);
  
   //alert("22 after  primaryContractorName "+currAsst.UdfFields.primarycompanyid.Value);
  
   //alert("33 after  primaryContractorName "+currAsst.UdfFields.primarycompanyid.Value.Name);
  
  
  //alert("110 10 10 "+currAsst.UdfFields.mswspecificlocation.Value);
  
  //alert("11 11 11 "+currAsst.UdfFields.timeofdayid.Value.Name);
  
  //alert("12 12 12 "+currAsst.UdfFields.workforcetypeid.Value.Name);
  
  //alert("13 13 13 "+workcrewDesc);
  
  //alert("14 14 14 "+ primaryContractorName);
  
  //alert("15 15 15 "+currAsst.UdfFields.mswsubcontractorname.Value);
  
  //alert("16 16 16 "+ specializedCategoryDesc);
  
  //alert("11 11 11 "+ permitSection );
  
  
  var mailBody="<html><head></head><body><table cellspacing=\"10px\" align=\"center\"><th>"+engagementDesc+"</th>"+

      "<tr><td>Engagement Location:</td>"+

      "<td>"+sitId+" : "+deptName+" </td></tr>"+

      "<tr><td>Engagement Type:</td>"+

      "<td>"+engagementType+"</td>"+

      "</tr>"+

      "<tr>"+

      "<td>Status: </td>"+

      "<td>Closed</td>"+

      "</tr>"+

      "<tr>"+

      "<td><br/><b>General Information</b></td>"+

      "</tr>"+

      "<tr>"+

      "<td></br>Date of Engagement:</td>"+

      "<td>"+engagDate+"</td>"+

      "</tr>"+

      "<tr>"+

      "<td>Location: </td>"+

      "<td>"+location+"</td>"+

      "</tr>"+

      "<tr><td>Specific Location:</td>"+

      "<td>"+currAsst.UdfFields.mswspecificlocation.Value+"</td>"+

      "</tr>"+

      "<tr><td>Time of Day:</td>"+

      "<td>"+currAsst.UdfFields.timeofdayid.Value.Name+"</td>"+

      "</tr>"+

      "<tr><td>Workforce Type:</td>"+

      "<td>"+currAsst.UdfFields.workforcetypeid.Value.Name+"</td>"+

      "</tr>"+

      "<tr><td>Is the Work Crew a subcontractor of a primary contractor?:</td>"+

      "<td>"+workcrewDesc+"</td>"+

      "</tr>"+

      "<tr><td>Name of Primary Contractor:</td>"+

      "<td>"+primaryContractorName+"</td>"+

      "</tr>"+

      "<tr><td>If applicable,name of Subcontractor:</td>"+

      "<td>"+currAsst.UdfFields.mswsubcontractorname.Value+"</td>"+

      "</tr>"+

      "<tr><td width=\"15px\">Check all specialized activity Electrical that was being conducted during the engagement:</td>"+

      "<td width=\"15px\">"+specializedCategoryDesc+"</td></tr>"+
      "<tr><td>If Other specialized activity was selected,list:</td>"+

      "<td>"+currAsst.UdfFields.mswotherspecactshortnote.Value+"</td>"+

      "</tr>"+permitSection+

      "<tr><td><br/><b>Responsibilities</b></td></tr>"+

      "<tr><td>Created By:</td>"+

      "<td>"+""+lastName+", "+firstName+"</td>"+

      "</tr>"+

      "<tr><td>Conducted By:</td>"+

      "<td>"+""+lastName+", "+firstName+"</td>"+

      "</tr>"+

      //"</table>"+

      //"<table cellspacing=\"10px\">"+
      "<tr><td><b><br/>Section C</b></td></tr>"+
      "<tr>"+
      "<td><b>Questions</b></td>"+
      "<td><b>Answer</b></td>"+
      "<td><b>Comment</b></td>"+
      "</tr>"+sectionC+scoreSection+
      //"<tr><td>Score and Summary:</td>"+
      //"<td>"+currAsst.UdfFields["MSW_VV_SCOREID"].Value.Id+"</td>"+
      //"</tr>"+
      "</table>"+

      "</body>"+

      "</html>";


  //alert("before returning mailBody.");
  return mailBody;



}



function prepareSectionC(){

  //alert("inside prepareSectionC");

  var sectionCDesc="";



  if(category == "jsa"){

    arrayQtAns = JSAQtCatLst;

    arrayLen = JSAQtAns;

  }else if(category == "fieldverification"){

    arrayQtAns = FVQtCatLst;

    arrayLen = FVQtAns;

  }else if(category == "ptw"){

    arrayQtAns = PTWQtCatLst;

    arrayLen = PTWQtAns;

  }else if(category == "generic"){

    arrayQtAns = GenericQtCatLst;

    arrayLen = GenericQtAns;

  }else if(category == "chesmfv"){

    arrayQtAns = ChesmFVQtCatLst;

    arrayLen = ChesmFVQtAns;

  }

  //alert("55555");




  arrForDyAns = arrayLen;

  kony.print("arrForDyAns JSON "+JSON.stringify(arrForDyAns));
  //alert("arrForDyAns JSON "+JSON.stringify(arrForDyAns));
  kony.print("currAsst JSON "+JSON.stringify(currAsst));
  //alert("currAsst JSON "+JSON.stringify(currAsst));

  for( j=0; j<arrayQtAns.length; j++){



    //sectionCDesc=sectionCDesc+"<tr>"+arrayQtAns[j]+"</tr>";
    if(sectionCDesc==""){
      sectionCDesc="<tr><td><b>"+arrayQtAns[j]+"</b></td></tr>";
    }else{
      sectionCDesc=sectionCDesc+"<tr><td><b>"+arrayQtAns[j]+"</b></td></tr>";
    }

    for( i=0; i<arrForDyAns[j].length; i++){
      //alert("qt1 -->"+arrForDyAns[j][i].qt);
      // alert("qt2 -->"+arrForDyAns[j][i].field);
      //alert("qt3 -json->"+JSON.stringify(currAsst.UdfFields[arrForDyAns[j][i].field].Value[0]));
      //alert("qt4 -->"+currAsst.UdfFields[arrForDyAns[j][i].field].Value[0].Name);
      var tempObj = currAsst.UdfFields[arrForDyAns[j][i].field].Value[0];
      if(tempObj!=null && tempObj!=undefined){

        if(currAsst.UdfFields[ arrForDyAns[j][i].commId ]!=null && currAsst.UdfFields[ arrForDyAns[j][i].commId ]!=undefined){
          sectionCDesc=sectionCDesc+"<tr><td>"+arrForDyAns[j][i].qt+"</td><td>"+currAsst.UdfFields[arrForDyAns[j][i].field].Value[0].Name +"</td><td>"+currAsst.UdfFields[ arrForDyAns[j][i].commId ].Value+"</td></tr>";  //currAsst.UdfFields[ arrForDyAns[j][i].commId ].Value
        }else{
          sectionCDesc=sectionCDesc+"<tr><td>"+arrForDyAns[j][i].qt+"</td><td>"+currAsst.UdfFields[arrForDyAns[j][i].field].Value[0].Name +"</td><td>"+""+"</td></tr>";  //currAsst.UdfFields[ arrForDyAns[j][i].commId ].Value
        }
      }


    }


  }
 //alert("6666");
  return sectionCDesc;

}


function popupConfirmOnClickNo(){
  popupConfirm.dismiss();
  frmOneClear();
  frmTwoClear();
  CancelAssessment();

}