//Type your code here

var engagMyForms;
function onClickMyEngag(eventObj){ 

  engagMyForms = eventObj.info.engementId;
  //alert(engagMyForms);

  try
  {
    kony.db.transaction(dbObject,
                        selectAllMyEngag,
                        errorCallback,
                        null);
  }
  catch(err)
  {
    kony.print("error in  onClickMyEngag "+ err);
  }
}


function selectAllMyEngag(transId)
{

  try
  {

    var query = "SELECT * FROM Engagement where engID = " + engagMyForms;
    kony.db.executeSql(transId,
                       query,
                       null,
                       success_selectAllMyEngag,
                       errorCallback);

  }
  catch(err)
  {
    kony.print("error while selecting "+ err);
  }
}

var mswSpecializedAct;
function success_selectAllMyEngag(transId, list)
{
  var dataForRowTemp = [];
  var AsstId,siteName,deptName,siteID,deptID,engementId,assetTyp,primaComName,primaComID,locationName,locationID="";
  var TimeOfDay,WorkforceType,wkcrewsubofprim,specificLoc,subConName,permitDetails,permitNum,otherSpecialActTxt = "";

  if(list !== null)
  {
    var max = list.rows.length;
    if(max == null || max == undefined || max == 0){

    }else{
      for ( var i = 0; i <= max - 1; i++ )
      {
        var rowItem = kony.db.sqlResultsetRowItem(transId, list, i);
        //alert(JSON.stringify(rowItem));
        kony.print(JSON.stringify(rowItem));
        var objModelVal = JSON.parse(rowItem.objModel);
        currAsst = objModelVal;
        //alert(JSON.stringify(rowItem.Site));

        if (isEmpty(rowItem.AsstId)=== false){
          AsstId = "";
        }else{

          AsstId = rowItem.AsstId.toString();
        }

        if (isEmpty(rowItem.Site) === false){
          siteName = "";
        }else{
          siteName = rowItem.Site.toString();
        }

        if (isEmpty(rowItem.Dept) === false) {
          deptName  ="";
        }else{
          deptName = rowItem.Dept.toString();
        }


        //var siteID = "";        
        if (isEmpty(rowItem.SiteId)=== false){
          siteID = ""; 
        }else{
          siteID = rowItem.SiteId.toString();
        }

        //var deptID = "";        
        if (isEmpty(rowItem.DeptId)=== false){
          deptID = ""; 
        }else{
          deptID = rowItem.DeptId.toString();
        }


        //var engementId = "";
        if (isEmpty(rowItem.engID)=== false) {
          engementId = "";
        }else{
          engementId = rowItem.engID.toString();
        }


        assetTyp = objModelVal.AssessmentType.Name;

        if (isEmpty(objModelVal.UdfFields.primarycompanyid.Value.Name)=== false) {
          primaComName = "";
        }else{
          primaComName = objModelVal.UdfFields.primarycompanyid.Value.Name;
        }


        if (isEmpty(objModelVal.UdfFields.primarycompanyid.Value.Id )=== false) {
          primaComID = ""
        }else{
          primaComID = objModelVal.UdfFields.primarycompanyid.Value.Id;
        }

        if (isEmpty(objModelVal.Location.Name)=== false){
          locationName = "";
        }else{
          locationName = objModelVal.Location.Name.toString();
        }

        if (isEmpty(objModelVal.Location.Id )=== false){
          locationID = "";
        }else{
          locationID = objModelVal.Location.Id.toString();
        }

        var ConductedDateUTC = objModelVal.ConductedDateUTC;

        if (isEmpty(objModelVal.UdfFields.timeofdayid.Value.Id)=== false) {
          TimeOfDay = "";
        }else{
          TimeOfDay = objModelVal.UdfFields.timeofdayid.Value.Id;

        }


        if (isEmpty(objModelVal.UdfFields.workforcetypeid.Value.Id)=== false) {
          WorkforceType = "";
        }else{
          WorkforceType = objModelVal.UdfFields.workforcetypeid.Value.Id;
          prevWFType = WorkforceType;

        }

        if (isEmpty(objModelVal.UdfFields.wkcrewsubofprimid.Value.Id)=== false) {
          wkcrewsubofprim = "";
        }else{
          wkcrewsubofprim = objModelVal.UdfFields.wkcrewsubofprimid.Value.Id;

        }

        if (isEmpty(objModelVal.UdfFields.mswspecificlocation.Value)=== false) {
          specificLoc = "";
        }else{
          specificLoc = objModelVal.UdfFields.mswspecificlocation.Value;

        }

        if (isEmpty(objModelVal.UdfFields.mswsubcontractorname.Value)=== false) {
          subConName = "";
        }else{
          subConName = objModelVal.UdfFields.mswsubcontractorname.Value;

        }

        if(assetTyp == "PTW Engagement"){
          if (isEmpty(objModelVal.UdfFields.mswptwpnshortnote.Value)=== false) {
            permitNum = "";
          }else{
            permitNum = objModelVal.UdfFields.mswptwpnshortnote.Value;

          }

          if (isEmpty(objModelVal.UdfFields.mswptwpcshortnote.Value)=== false) {
            permitDetails = "";
          }else{
            permitDetails = objModelVal.UdfFields.mswptwpcshortnote.Value;

          }
        }
        var specializedAct;
        if (assetTyp == "Field Verification" || assetTyp == "CHESM Field Verification") {
          specializedAct = objModelVal.UdfFields["udf-msw-specialized-activity-flagsgroup2"].Value;
        } else {
          specializedAct = objModelVal.UdfFields["udf-msw-specialized-activity-flagsgroup"].Value; //alert("specializedAct.length: " + specializedAct.length);

        }
        //alert(assetTyp+"\nspecializedAct "+JSON.stringify(objModelVal.UdfFields["udf-msw-specialized-activity-flagsgroup2"]));
        mswSpecializedAct = [];
        for (var i=0; i < specializedAct.length; i++) {
          if(specializedAct[i].Id !== 0){
            mswSpecializedAct.push(specializedAct[i].Id);
          }
        }

        if (isEmpty(objModelVal.UdfFields.mswotherspecactshortnote.Value)=== false) {
          otherSpecialActTxt = "";
        }else{
          otherSpecialActTxt = objModelVal.UdfFields.mswotherspecactshortnote.Value;

        }

        qtCategoryFrom = "";
        if(assetTyp =="JSA Engagement"){
          category = "jsa";
          arrForDyAns = JSON.parse(JSON.stringify(JSAQtAns));
          //alert("1"+JSON.stringify(JSAQtAns) );
          populateQtAns(arrForDyAns,objModelVal);
        }else if(assetTyp =="Field Verification"){
          category = "fieldverification";
          arrForDyAns = JSON.parse(JSON.stringify(FVQtAns));
          populateQtAns(arrForDyAns,objModelVal);
        }else if(assetTyp =="PTW Engagement"){
          category = "ptw";
          arrForDyAns = JSON.parse(JSON.stringify(PTWQtAns));
          populateQtAns(arrForDyAns,objModelVal);
        }else if(assetTyp =="Generic Engagement"){
          category = "generic";
          arrForDyAns = JSON.parse(JSON.stringify(GenericQtAns));
          populateQtAns(arrForDyAns,objModelVal);
        }else if(assetTyp =="CHESM Field Verification"){
          category = "chesmfv";
          arrForDyAns = JSON.parse(JSON.stringify(ChesmFVQtAns));
          populateQtAns(arrForDyAns,objModelVal);
        }

      }
    }

  }
  //alert("siteName "+siteName+"deptName "+deptName+"engementId "+engementId+"primaComName "+primaComName+"ConductedDateUTC "+ConductedDateUTC+"siteID "+siteID+"deptID "+deptID+"locationName "+locationName+"locationID "+locationID+"primaComID "+primaComID);

  //     if(assetTyp =="JSA Engagement"){
  //       category = "jsa";
  //     }else if(assetTyp =="Field Verification"){
  //       category = "fieldverification";
  //     }else if(assetTyp =="PTW Engagement"){
  //       category = "ptw";
  //     }else if(assetTyp =="Generic Engagement"){
  //       category = "generic";
  //     }

  //resetGlbVariables();

  frmForm1.txtEngagSite.text = siteName;
  frmPreConfirmA.txtEngagSite.text = siteName;

  frmForm1.txtEngagSite.info = {"siteId" :siteID};
  frmPreConfirmA.txtEngagSite.info = {"siteId" :siteID};

  frmForm1.txtEngagDept.text = deptName;
  frmPreConfirmA.txtEngagDept.text = deptName;

  frmForm1.txtEngagDept.info = {"dept": deptID};
  frmPreConfirmA.txtEngagDept.info = {"dept": deptID};



  frmForm1A.txtEngagLocation.text = locationName;
  frmPreConfirmB.txtEngagLocation.text = locationName;


  frmForm1A.txtEngagLocation.info = {"locationId": locationID};
  frmPreConfirmB.txtEngagLocation.info = {"locationId": locationID};

  frmForm1A.txtEngagPriContractor.text = primaComName;
  frmPreConfirmB.txtEngagPriContractor.text = primaComName;

  frmForm1A.txtEngagPriContractor.info = {"pricontractorId":  primaComID};
  frmPreConfirmB.txtEngagPriContractor.info = {"pricontractorId":  primaComID};

  engId = engementId;
  assessmentId = AsstId;
  //alert(engId +""+assessmentId);
  //form2 fill values
  frmForm2.cbxEngagTimeofDay.selectedKey = TimeOfDay;
  frmForm2.cbxWorkForceTyp.selectedKey = WorkforceType;
  frmForm2.cbxWorkCrew.selectedKey =  wkcrewsubofprim;
  frmForm2.txtEngagSpecificLoc.text = specificLoc;
  //frmForm2.txtSubContrName.text = subConName;
  frmForm1A.txtSubContrName.text =subConName;
  frmPreConfirmB.txtSubContrName.text =subConName;

  frmForm2.cbxSpecializedActivity.selectedKeys = mswSpecializedAct; //alert(mswSpecializedAct+"\nfrmForm2.cbxSpecializedActivity.selectedKeys "+frmForm2.cbxSpecializedActivity.selectedKeys);
  if (category == "ptw") {
    frmForm2.txtPermitNum.text = permitNum;
    frmForm2.txtPermitDetails.text = permitDetails;
  }
  frmForm2.txtOtherSpecilizedAct.text = otherSpecialActTxt;
  ///arrayQtAns = JSAQtAns;
  //alert("2"+JSON.stringify(JSAQtAns) );
  //getSpecializedActvty();
  frmForm1.show();
}


function populateQtAns(array,objModelVal){
  var len = array.length;

  for(var i =0 ; i< len ;i++){
    var noQtAnsrd = 0;
    var deletedField = 0; 
    var total = array[i].length;
    for(var j =0 ; j< array[i].length ;j++){ 

      var selOption;
      if (array[i][j].field === "MSW_VV_SCOREID") {
        var comment = objModelVal.UdfFields[array[i][j].commId]['Value'] ;
        var scoreId = objModelVal.UdfFields["MSW_VV_SCOREID"].Value.Id;
        //alert("comment "+comment +"\nscore "+scoreId);
        if (isEmpty(comment)===true) {
          noQtAnsrd = noQtAnsrd+1;
          frmDynamicJSA1.dynaRowScore.flxRowScore.txtAreaComments.text = comment;
        }
        if (scoreId > 0) noQtAnsrd = noQtAnsrd+1;
        frmDynamicJSA1.dynaRowScore.flxRowScore.lbScore.selectedKey = scoreId;

        arrForQtAns[i] = [noQtAnsrd,2];
      } else {
        selOption = objModelVal.UdfFields[array[i][j].field].Value[0].Name;//objModelVal.UdfFields[array[i][j].field]['Value'][0]['Name'];
        var selQt = array[i][j].qt;
        var selQtNoArray = selQt.split(".");
        var selQtNo = selQtNoArray[0];


        if(category == "jsa"){

          //even if there's no answer, don't count for the total
          if(selQtNo == "2A" || selQtNo == "4A"||selQtNo == "5A"||selQtNo == "10A"||selQtNo == "29A"){
            total = total-1; //dont count skipped
          }

          if(selOption == "No"){
            if(selQtNo == "2A" || selQtNo == "4A"||selQtNo == "5A"||selQtNo == "10A"||selQtNo == "29A"){
              array[i][j].skinNo = "sknChkGray";
              //noQtAnsrd = noQtAnsrd+1; //skipped questions shouldnt be counted
              deletedField = deletedField+1;
              //total = total-1; //dont count skipped
            }else{
              array[i][j].skinNo = "sknChkBxNoSel";
              noQtAnsrd = noQtAnsrd+1;
            }
          }else if(selOption == "Yes"){
            array[i][j].skinYes = "sknChkBxSelec";
            if(selQtNo == "2A" || selQtNo == "4A"||selQtNo == "5A"||selQtNo == "10A"||selQtNo == "29A"){
              //don't count
            } else noQtAnsrd = noQtAnsrd+1;
          } 


        }else if(category == "fieldverification"||category == "chesmfv"){
          if(selOption == "No"){
            array[i][j].skinNo = "sknChkBxNoSel";
            noQtAnsrd = noQtAnsrd+1;
          }else if(selOption == "Yes"){
            array[i][j].skinYes = "sknChkBxSelec";
            noQtAnsrd = noQtAnsrd+1;
          } 
        }else if(category == "ptw"){
          if(selQtNo == "3A" || selQtNo == "7A"|| selQtNo == "8A"||selQtNo == "10A"||selQtNo == "13A"||selQtNo == "14A"||selQtNo == "20A"){
            total = total - 1;
          }

          if(selOption == "No"){
            if(selQtNo == "3A" || selQtNo == "7A"|| selQtNo == "8A"||selQtNo == "10A"||selQtNo == "13A"||selQtNo == "14A"||selQtNo == "20A"){
              array[i][j].skinNo = "sknChkGray";
              //noQtAnsrd = noQtAnsrd+1; //skipped questions shouldnt be counted
              deletedField = deletedField+1;
              if (selQtNo == "14A") deletedField = deletedField+1;
              else if (selQtNo == "20A") deletedField = deletedField+3;
            }else{
              array[i][j].skinNo = "sknChkBxNoSel";
              noQtAnsrd = noQtAnsrd+1;
            }
          }else if(selOption.toString() == "Yes"){
            array[i][j].skinYes = "sknChkBxSelec";
            if(selQtNo == "3A" || selQtNo == "7A"|| selQtNo == "8A"||selQtNo == "10A"||selQtNo == "13A"||selQtNo == "14A"||selQtNo == "20A"){
            } else noQtAnsrd = noQtAnsrd+1;
          } 
        }else if(category == "generic"){
          if(selOption == "No"){
            array[i][j].skinNo = "sknChkBxNoSel";
            noQtAnsrd = noQtAnsrd+1;
          }else if(selOption == "Yes"){
            array[i][j].skinYes = "sknChkBxSelec";
            noQtAnsrd = noQtAnsrd+1;
          } 
        }
        if (objModelVal.UdfFields[array[i][j].commId] != undefined)
          array[i][j].comts = objModelVal.UdfFields[array[i][j].commId]['Value'];

        var max = total - deletedField;

        arrForQtAns[i] = [noQtAnsrd,max]; //if (i==0)alert("arrForQtAns[0]: "+[noQtAnsrd,max]);
      }
      //arrForQtAns[i] = [noQtAnsrd,(array[i].length - deletedField)];
      //alert("reviewMyEngage arrForQtAns[i] "+arrForQtAns[i][0]+"/"+arrForQtAns[i][1]);
    }
  }
  //alert("reviewMyEngage arrForQtAns "+JSON.stringify(arrForQtAns));
}
