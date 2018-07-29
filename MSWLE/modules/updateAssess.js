//Type your code here

//Type your code here

function updateAssessmentService() {

  try{
    var spTokenExpiryDiff = spTokenExpiry();
    if(spTokenExpiryDiff < 55){
      // alert("sp token not expired");
    }else{
      sessionexpired();
      //popupSessionExp.show();
      return;
    }
    if(networkAvailable() == false){
      callPopup("Please check your internet connectivity and try again");
    }else{

      //save fields of PreConfirmB
      var lctnId, pricontractorId;
      //location
      if (frmPreConfirmB.txtEngagLocation.info !== null) {
        lctnId = frmPreConfirmB.txtEngagLocation.info.locationId;
      } else lctnId = "";

      if (frmPreConfirmB.txtEngagPriContractor.info !== null) {
        pricontractorId = frmPreConfirmB.txtEngagPriContractor.info.pricontractorId;
      } else pricontractorId = "";

      currAsst.Location = {"Id": lctnId,"Name":frmPreConfirmB.txtEngagLocation.text};
      //primary contractor
      if(category == "chesmfv"){
        if(networkAvailable() === true){
        if(frmPreConfirmB.txtEngagPriContractor.text==null || frmPreConfirmB.txtEngagPriContractor.text.trim()=="" || frmPreConfirmB.txtEngagPriContractor.text==undefined){
          callPopup("Please enter Name of Primary Contractor.");
          return false;
        }
        
      }  
      } 
       
      
      currAsst.UdfFields.primarycompanyid.Value = {"Id": pricontractorId, "Name":frmPreConfirmB.txtEngagPriContractor.text};



      if(category == "jsa"){
        UpdateJSA();
      }else if(category == "fieldverification"){
        UpdateFV();
      }else if(category == "ptw"){
        UpdatePTW();
      }else if(category == "generic"){
        UpdateGeneric();
      }else if(category == "chesmfv"){
        UpdateFV();
      }

    }
  }catch(err){
    kony.print("error in updateAssessmentService function "+err);
  }

}

function UpdateJSA() {

  try {
    var updateAsst_inputparam = {};

    updateAsst_inputparam["assessment"] = assessmentId;

    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-1"].Value !== null) {
      updateAsst_inputparam["prep1id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-1"].Value[0].Id;
      updateAsst_inputparam["prep1name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-1"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-2a"].Value !== null) {
      updateAsst_inputparam["prep2aid"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-2a"].Value[0].Id;
      updateAsst_inputparam["prep2aname"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-2a"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-2b"].Value !== null) {
      updateAsst_inputparam["prep2bid"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-2b"].Value[0].Id;
      updateAsst_inputparam["prep2bname"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-2b"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-3"].Value !== null) {
      updateAsst_inputparam["prep3id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-3"].Value[0].Id;
      updateAsst_inputparam["prep3name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-3"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-4a"].Value !== null) {
      updateAsst_inputparam["prep4aid"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-4a"].Value[0].Id;
      updateAsst_inputparam["prep4aname"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-4a"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-4b"].Value !== null) {
      updateAsst_inputparam["prep4bid"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-4b"].Value[0].Id;
      updateAsst_inputparam["prep4bname"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-4b"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-5a"].Value !== null) {
      updateAsst_inputparam["prep5aid"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-5a"].Value[0].Id;
      updateAsst_inputparam["prep5aname"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-5a"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-5b"].Value !== null) {
      updateAsst_inputparam["prep5bid"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-5b"].Value[0].Id;
      updateAsst_inputparam["prep5bname"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-prep-5b"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-6"].Value !== null) {
      updateAsst_inputparam["gen6id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-6"].Value[0].Id;
      updateAsst_inputparam["gen6name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-6"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-7"].Value !== null) {
      updateAsst_inputparam["gen7id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-7"].Value[0].Id;
      updateAsst_inputparam["gen7name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-7"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-8"].Value !== null) {
      updateAsst_inputparam["gen8id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-8"].Value[0].Id;
      updateAsst_inputparam["gen8name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-8"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-9"].Value !== null) {
      updateAsst_inputparam["gen9id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-9"].Value[0].Id;
      updateAsst_inputparam["gen9name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-9"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-10a"].Value !== null) {
      updateAsst_inputparam["gen10aid"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-10a"].Value[0].Id;
      updateAsst_inputparam["gen10aname"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-10a"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-10b"].Value !== null) {
      updateAsst_inputparam["gen10bid"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-10b"].Value[0].Id;
      updateAsst_inputparam["gen10bname"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-10b"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-11"].Value !== null) {
      updateAsst_inputparam["gen11id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-11"].Value[0].Id;
      updateAsst_inputparam["gen11name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-11"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-12"].Value !== null) {
      updateAsst_inputparam["gen12id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-12"].Value[0].Id;
      updateAsst_inputparam["gen12name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-gendoc-12"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-hazanal-13"].Value !== null) {
      updateAsst_inputparam["haz13id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-hazanal-13"].Value[0].Id;
      updateAsst_inputparam["haz13name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-hazanal-13"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-hazanal-14"].Value !== null) {
      updateAsst_inputparam["haz14id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-hazanal-14"].Value[0].Id;
      updateAsst_inputparam["haz14name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-hazanal-14"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-hazanal-15"].Value !== null) {
      updateAsst_inputparam["haz15id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-hazanal-15"].Value[0].Id;
      updateAsst_inputparam["haz15name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-hazanal-15"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-hazanal-16"].Value !== null) {
      updateAsst_inputparam["haz16id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-hazanal-16"].Value[0].Id;
      updateAsst_inputparam["haz16name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-hazanal-16"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-hazanal-17"].Value !== null) {
      updateAsst_inputparam["haz17id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-hazanal-17"].Value[0].Id;
      updateAsst_inputparam["haz17name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-hazanal-17"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-stopwk-18"].Value !== null) {
      updateAsst_inputparam["stopwk18id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-stopwk-18"].Value[0].Id;
      updateAsst_inputparam["stopwk18name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-stopwk-18"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-stopwk-19"].Value !== null) {
      updateAsst_inputparam["stopwk19id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-stopwk-19"].Value[0].Id;
      updateAsst_inputparam["stopwk19name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-stopwk-19"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-stopwk-20"].Value !== null) {
      updateAsst_inputparam["stopwk20id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-stopwk-20"].Value[0].Id;
      updateAsst_inputparam["stopwk20name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-stopwk-20"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-humperf-21"].Value !== null) {
      updateAsst_inputparam["humperf21id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-humperf-21"].Value[0].Id;
      updateAsst_inputparam["humperf21name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-humperf-21"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-humperf-22"].Value !== null) {
      updateAsst_inputparam["humperf22id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-humperf-22"].Value[0].Id;
      updateAsst_inputparam["humperf22name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-humperf-22"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-humperf-23"].Value !== null) {
      updateAsst_inputparam["humperf23id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-humperf-23"].Value[0].Id;
      updateAsst_inputparam["humperf23name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-humperf-23"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-vnv-24"].Value !== null) {
      updateAsst_inputparam["vnv24id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-vnv-24"].Value[0].Id;
      updateAsst_inputparam["vnv24name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-vnv-24"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-vnv-25"].Value !== null) {
      updateAsst_inputparam["vnv25id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-vnv-25"].Value[0].Id;
      updateAsst_inputparam["vnv25name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-vnv-25"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-comm-26"].Value !== null) {
      updateAsst_inputparam["comm26id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-comm-26"].Value[0].Id;
      updateAsst_inputparam["comm26name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-comm-26"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-comm-27"].Value !== null) {
      updateAsst_inputparam["comm27id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-comm-27"].Value[0].Id;
      updateAsst_inputparam["comm27name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-comm-27"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-comm-28"].Value !== null) {
      updateAsst_inputparam["comm28id"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-comm-28"].Value[0].Id;
      updateAsst_inputparam["comm28name"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-comm-28"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-close-29a"].Value !== null) {
      updateAsst_inputparam["close29aid"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-close-29a"].Value[0].Id;
      updateAsst_inputparam["close29aname"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-close-29a"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-close-29b"].Value !== null) {
      updateAsst_inputparam["close29bid"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-close-29b"].Value[0].Id;
      updateAsst_inputparam["close29bname"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-close-29b"].Value[0].Name;
    }

    if (currAsst.UdfFields["udf-msw-jsa-eng-sectionc-fdbk-999"].Value !== null) {
      updateAsst_inputparam["feedbackid"] = currAsst.UdfFields["udf-msw-jsa-eng-sectionc-fdbk-999"].Value[0].Id;
      updateAsst_inputparam["feedbackname"] =  currAsst.UdfFields["udf-msw-jsa-eng-sectionc-fdbk-999"].Value[0].Name;
    }

    updateAsst_inputparam["prep1comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-prep-1-comments"].Value;
    updateAsst_inputparam["prep2acomm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-prep-2a-comments"].Value;
    updateAsst_inputparam["prep2bcomm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-prep-2b-comments"].Value;
    updateAsst_inputparam["prep3comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-prep-3-comments"].Value;
    updateAsst_inputparam["prep4acomm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-prep-4a-comments"].Value;
    updateAsst_inputparam["prep4bcomm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-prep-4b-comments"].Value;
    updateAsst_inputparam["prep5acomm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-prep-5a-comments"].Value;
    updateAsst_inputparam["prep5bcomm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-prep-5b-comments"].Value;
    updateAsst_inputparam["gen6comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-gendoc-6-comments"].Value;
    updateAsst_inputparam["gen7comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-gendoc-7-comments"].Value;
    updateAsst_inputparam["gen8comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-gendoc-8-comments"].Value;
    updateAsst_inputparam["gen9comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-gendoc-9-comments"].Value;
    updateAsst_inputparam["gen10acomm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-gendoc-10a-comments"].Value;
    updateAsst_inputparam["gen10bcomm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-gendoc-10b-comments"].Value;
    updateAsst_inputparam["gen11comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-gendoc-11-comments"].Value;
    updateAsst_inputparam["gen12comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-gendoc-12-comments"].Value;
    updateAsst_inputparam["haz13comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-hazanal-13-comments"].Value;
    updateAsst_inputparam["haz14comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-hazanal-14-comments"].Value;
    updateAsst_inputparam["haz15comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-hazanal-15-comments"].Value;
    updateAsst_inputparam["haz16comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-hazanal-16-comments"].Value;
    updateAsst_inputparam["haz17comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-hazanal-17-comments"].Value;
    updateAsst_inputparam["stopwk18comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-stopwk-18-comments"].Value;
    updateAsst_inputparam["stopwk19comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-stopwk-19-comments"].Value;
    updateAsst_inputparam["stopwk20comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-stopwk-20-comments"].Value;     
    updateAsst_inputparam["humperf21comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-humperf-21-comments"].Value;
    updateAsst_inputparam["humperf22comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-humperf-22-comments"].Value;
    updateAsst_inputparam["humperf23comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-humperf-23-comments"].Value;
    updateAsst_inputparam["vnv24comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-vnv-24-comments"].Value;
    updateAsst_inputparam["vnv25comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-vnv-25-comments"].Value;
    updateAsst_inputparam["comm26comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-comm-26-comments"].Value;
    updateAsst_inputparam["comm27comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-comm-27-comments"].Value;
    updateAsst_inputparam["comm28comm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-comm-28-comments"].Value;
    updateAsst_inputparam["close29acomm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-close-29a-comments"].Value;
    updateAsst_inputparam["close29bcomm"] = currAsst.UdfFields["msw-jsa-eng-sectionc-close-29b-comments"].Value;

    updateAsst_inputparam["locId"] = currAsst.Location.Id;
    updateAsst_inputparam["locName"] = currAsst.Location.Name;
    updateAsst_inputparam["pricompid"] = currAsst.UdfFields.primarycompanyid.Value.Id;
    updateAsst_inputparam["pricompname"] = currAsst.UdfFields.primarycompanyid.Value.Name;
    updateAsst_inputparam["wkcrewsubid"] = currAsst.UdfFields.wkcrewsubofprimid.Value.Id;
    updateAsst_inputparam["wkcrewsubname"] = currAsst.UdfFields.wkcrewsubofprimid.Value.Name;
    updateAsst_inputparam["timeid"] = currAsst.UdfFields.timeofdayid.Value.Id;
    updateAsst_inputparam["timename"] = currAsst.UdfFields.timeofdayid.Value.Name;
    updateAsst_inputparam["wforceid"] = currAsst.UdfFields.workforcetypeid.Value.Id;
    updateAsst_inputparam["wforcename"] = currAsst.UdfFields.workforcetypeid.Value.Name; 

    updateAsst_inputparam["otherspecialact"] = currAsst.UdfFields.mswotherspecactshortnote.Value;
    updateAsst_inputparam["specificloc"] = currAsst.UdfFields.mswspecificlocation.Value;
    updateAsst_inputparam["subcontname"] = currAsst.UdfFields.mswsubcontractorname.Value;

    updateAsst_inputparam["workflowId"] = currAsst.WorkflowStatus.Id;
    updateAsst_inputparam["worflowName"] = currAsst.WorkflowStatus.Name;

    updateAsst_inputparam["engagementdt"] = currAsst.UdfFields.engagementdt.Value;
    updateAsst_inputparam["ConductedDateUTC"] = currAsst.ConductedDateUTC;
    updateAsst_inputparam["ReportedDateUTC"] = currAsst.ReportedDateUTC;
    updateAsst_inputparam["Version"] = "1";

    updateAsst_inputparam["confinedid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[0].Id;
    updateAsst_inputparam["statelecid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[1].Id;
    updateAsst_inputparam["divingid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[2].Id;
    updateAsst_inputparam["excavid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[3].Id;
    updateAsst_inputparam["elecid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[4].Id;
    updateAsst_inputparam["hotworkid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[5].Id;
    updateAsst_inputparam["isolationid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[6].Id;
    updateAsst_inputparam["liftingid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[7].Id;
    updateAsst_inputparam["portgasid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[8].Id;
    updateAsst_inputparam["workhtid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[9].Id;
    updateAsst_inputparam["otheractid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[10].Id;

    updateAsst_inputparam["workflowId"] = "4";
    updateAsst_inputparam["workflowName"] = "Closed";

    updateAsst_inputparam["serviceID"] = "Assessments$UpdateAssessment_JSA";  //"ServerLogService$LogUpdate_JSA";
    var updateAsst_httpheaders = {
      "Content-Type":"application/json",
      "Authorization": "ImpactAPI token=\"" + Authorization + "\""
    };
    updateAsst_inputparam["httpheaders"] = updateAsst_httpheaders;
    var updateAsst_httpconfigs = {};
    updateAsst_inputparam["httpconfig"] = updateAsst_httpconfigs;
    //alert(JSON.stringify(updateAsst_inputparam));
    Assessments$UpdateAssessment_JSA = mfintegrationsecureinvokerasync(updateAsst_inputparam, "Assessments", "UpdateAssessment_JSA", updateAssessment_callback);
    //ServerLogService$LogUpdate_JSA = mfintegrationsecureinvokerasync(updateAsst_inputparam, "ServerLogService", "LogUpdate_JSA", updateAssessment_callback);
    kony.application.showLoadingScreen(loadingSkin, "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, null);

  }catch(err){
    //alert(""+JSON.stringify("err in update jsa assessment "+err) );
  }
}

function UpdateGeneric() {
  try {
    var updateAsst_inputparam = {};

    updateAsst_inputparam["assessment"] = assessmentId;


    if (currAsst.UdfFields["udf-msw-gen-eng-sectionc-engloc-1"].Value !== null) {
      updateAsst_inputparam["loc1id"] = currAsst.UdfFields["udf-msw-gen-eng-sectionc-engloc-1"].Value[0].Id;
      updateAsst_inputparam["loc1name"] =  currAsst.UdfFields["udf-msw-gen-eng-sectionc-engloc-1"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-gen-eng-sectionc-engtop-2"].Value !== null) {
      updateAsst_inputparam["top2id"] = currAsst.UdfFields["udf-msw-gen-eng-sectionc-engtop-2"].Value[0].Id;
      updateAsst_inputparam["top2name"] =  currAsst.UdfFields["udf-msw-gen-eng-sectionc-engtop-2"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-gen-eng-sectionc-engtop-3"].Value !== null) {
      updateAsst_inputparam["top3id"] = currAsst.UdfFields["udf-msw-gen-eng-sectionc-engtop-3"].Value[0].Id;
      updateAsst_inputparam["top3name"] =  currAsst.UdfFields["udf-msw-gen-eng-sectionc-engtop-3"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-gen-eng-sectionc-engtop-4"].Value !== null) {
      updateAsst_inputparam["top4id"] = currAsst.UdfFields["udf-msw-gen-eng-sectionc-engtop-4"].Value[0].Id;
      updateAsst_inputparam["top4name"] =  currAsst.UdfFields["udf-msw-gen-eng-sectionc-engtop-4"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-gen-eng-sectionc-engtop-5"].Value !== null) {
      updateAsst_inputparam["top5id"] = currAsst.UdfFields["udf-msw-gen-eng-sectionc-engtop-5"].Value[0].Id;
      updateAsst_inputparam["top5name"] =  currAsst.UdfFields["udf-msw-gen-eng-sectionc-engtop-5"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-gen-eng-sectionc-engtop-6"].Value !== null) {
      updateAsst_inputparam["top6id"] = currAsst.UdfFields["udf-msw-gen-eng-sectionc-engtop-6"].Value[0].Id;
      updateAsst_inputparam["top6name"] =  currAsst.UdfFields["udf-msw-gen-eng-sectionc-engtop-6"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-gen-eng-sectionc-engtop-7"].Value !== null) {
      updateAsst_inputparam["top7id"] = currAsst.UdfFields["udf-msw-gen-eng-sectionc-engtop-7"].Value[0].Id;
      updateAsst_inputparam["top7name"] =  currAsst.UdfFields["udf-msw-gen-eng-sectionc-engtop-7"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-gen-eng-sectionc-engtop-8"].Value !== null) {
      updateAsst_inputparam["top8id"] = currAsst.UdfFields["udf-msw-gen-eng-sectionc-engtop-8"].Value[0].Id;
      updateAsst_inputparam["top8name"] =  currAsst.UdfFields["udf-msw-gen-eng-sectionc-engtop-8"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-gen-eng-sectionc-focarea-9"].Value !== null) {
      updateAsst_inputparam["area9id"] = currAsst.UdfFields["udf-msw-gen-eng-sectionc-focarea-9"].Value[0].Id;
      updateAsst_inputparam["area9name"] =  currAsst.UdfFields["udf-msw-gen-eng-sectionc-focarea-9"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-gen-eng-sectionc-focarea-10"].Value !== null) {
      updateAsst_inputparam["area10id"] = currAsst.UdfFields["udf-msw-gen-eng-sectionc-focarea-10"].Value[0].Id;
      updateAsst_inputparam["area10name"] =  currAsst.UdfFields["udf-msw-gen-eng-sectionc-focarea-10"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-gen-eng-sectionc-focarea-11"].Value !== null) {
      updateAsst_inputparam["area11id"] = currAsst.UdfFields["udf-msw-gen-eng-sectionc-focarea-11"].Value[0].Id;
      updateAsst_inputparam["area11name"] =  currAsst.UdfFields["udf-msw-gen-eng-sectionc-focarea-11"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-gen-eng-sectionc-focarea-12"].Value !== null) {
      updateAsst_inputparam["area12id"] = currAsst.UdfFields["udf-msw-gen-eng-sectionc-focarea-12"].Value[0].Id;
      updateAsst_inputparam["area12name"] =  currAsst.UdfFields["udf-msw-gen-eng-sectionc-focarea-12"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-gen-eng-sectionc-focarea-13"].Value !== null) {
      updateAsst_inputparam["area13id"] = currAsst.UdfFields["udf-msw-gen-eng-sectionc-focarea-13"].Value[0].Id;
      updateAsst_inputparam["area13name"] =  currAsst.UdfFields["udf-msw-gen-eng-sectionc-focarea-13"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-gen-eng-sectionc-focarea-14"].Value !== null) {
      updateAsst_inputparam["area14id"] = currAsst.UdfFields["udf-msw-gen-eng-sectionc-focarea-14"].Value[0].Id;
      updateAsst_inputparam["area14name"] =  currAsst.UdfFields["udf-msw-gen-eng-sectionc-focarea-14"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-gen-eng-sectionc-engaud-15"].Value !== null) {
      updateAsst_inputparam["aud15id"] = currAsst.UdfFields["udf-msw-gen-eng-sectionc-engaud-15"].Value[0].Id;
      updateAsst_inputparam["aud15name"] =  currAsst.UdfFields["udf-msw-gen-eng-sectionc-engaud-15"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-gen-eng-sectionc-engaud-16"].Value !== null) {
      updateAsst_inputparam["aud16id"] = currAsst.UdfFields["udf-msw-gen-eng-sectionc-engaud-16"].Value[0].Id;
      updateAsst_inputparam["aud16name"] =  currAsst.UdfFields["udf-msw-gen-eng-sectionc-engaud-16"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-gen-eng-sectionc-fdbk-999"].Value !== null) {
      updateAsst_inputparam["feedbackid"] = currAsst.UdfFields["udf-msw-gen-eng-sectionc-fdbk-999"].Value[0].Id;
      updateAsst_inputparam["feedbackname"] =  currAsst.UdfFields["udf-msw-gen-eng-sectionc-fdbk-999"].Value[0].Name;
    }

    updateAsst_inputparam["loc1comm"] = currAsst.UdfFields["msw-gen-eng-sectionc-engloc-1-comments"].Value;
    updateAsst_inputparam["top2comm"] = currAsst.UdfFields["msw-gen-eng-sectionc-engtop-2-comments"].Value;
    updateAsst_inputparam["top3comm"] = currAsst.UdfFields["msw-gen-eng-sectionc-engtop-3-comments"].Value;
    updateAsst_inputparam["top4comm"] = currAsst.UdfFields["msw-gen-eng-sectionc-engtop-4-comments"].Value;
    updateAsst_inputparam["top5comm"] = currAsst.UdfFields["msw-gen-eng-sectionc-engtop-5-comments"].Value;
    updateAsst_inputparam["top6comm"] = currAsst.UdfFields["msw-gen-eng-sectionc-engtop-6-comments"].Value;
    updateAsst_inputparam["top7comm"] = currAsst.UdfFields["msw-gen-eng-sectionc-engtop-7-comments"].Value;
    updateAsst_inputparam["top8comm"] = currAsst.UdfFields["msw-gen-eng-sectionc-engtop-8-comments"].Value;
    updateAsst_inputparam["top9comm"] = currAsst.UdfFields["msw-gen-eng-sectionc-focarea-9-comments"].Value;
    updateAsst_inputparam["area10comm"] = currAsst.UdfFields["msw-gen-eng-sectionc-focarea-10-comments"].Value;
    updateAsst_inputparam["area11comm"] = currAsst.UdfFields["msw-gen-eng-sectionc-focarea-11-comments"].Value;
    updateAsst_inputparam["area12comm"] = currAsst.UdfFields["msw-gen-eng-sectionc-focarea-12-comments"].Value;
    updateAsst_inputparam["area13comm"] = currAsst.UdfFields["msw-gen-eng-sectionc-focarea-13-comments"].Value;
    updateAsst_inputparam["area14comm"] = currAsst.UdfFields["msw-gen-eng-sectionc-focarea-14-comments"].Value;
    updateAsst_inputparam["aud15comm"] = currAsst.UdfFields["msw-gen-eng-sectionc-engaud-15-comments"].Value;
    updateAsst_inputparam["aud16comm"] = currAsst.UdfFields["msw-gen-eng-sectionc-engaud-16-comments"].Value;

    updateAsst_inputparam["locId"] = currAsst.Location.Id;
    updateAsst_inputparam["locName"] = currAsst.Location.Name;
    updateAsst_inputparam["pricompid"] = currAsst.UdfFields.primarycompanyid.Value.Id;
    updateAsst_inputparam["pricompname"] = currAsst.UdfFields.primarycompanyid.Value.Name;
    updateAsst_inputparam["wkcrewsubid"] = currAsst.UdfFields.wkcrewsubofprimid.Value.Id;
    updateAsst_inputparam["wkcrewsubname"] = currAsst.UdfFields.wkcrewsubofprimid.Value.Name;
    updateAsst_inputparam["timeid"] = currAsst.UdfFields.timeofdayid.Value.Id;
    updateAsst_inputparam["timename"] = currAsst.UdfFields.timeofdayid.Value.Name;
    updateAsst_inputparam["wforceid"] = currAsst.UdfFields.workforcetypeid.Value.Id;
    updateAsst_inputparam["wforcename"] = currAsst.UdfFields.workforcetypeid.Value.Name; 

    updateAsst_inputparam["otherspecialact"] = currAsst.UdfFields.mswotherspecactshortnote.Value;
    updateAsst_inputparam["specificloc"] = currAsst.UdfFields.mswspecificlocation.Value;
    updateAsst_inputparam["subcontname"] = currAsst.UdfFields.mswsubcontractorname.Value;

    updateAsst_inputparam["workflowId"] = currAsst.WorkflowStatus.Id;
    updateAsst_inputparam["worflowName"] = currAsst.WorkflowStatus.Name;

    updateAsst_inputparam["engagementdt"] = currAsst.UdfFields.engagementdt.Value;
    updateAsst_inputparam["ConductedDateUTC"] = currAsst.ConductedDateUTC;
    updateAsst_inputparam["ReportedDateUTC"] = currAsst.ReportedDateUTC;
    updateAsst_inputparam["Version"] = "1";

    updateAsst_inputparam["confinedid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[0].Id;
    updateAsst_inputparam["statelecid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[1].Id;
    updateAsst_inputparam["divingid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[2].Id;
    updateAsst_inputparam["excavid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[3].Id;
    updateAsst_inputparam["elecid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[4].Id;
    updateAsst_inputparam["hotworkid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[5].Id;
    updateAsst_inputparam["isolationid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[6].Id;
    updateAsst_inputparam["liftingid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[7].Id;
    updateAsst_inputparam["portgasid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[8].Id;
    updateAsst_inputparam["workhtid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[9].Id;
    updateAsst_inputparam["otheractid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[10].Id;

    updateAsst_inputparam["workflowId"] = "4";
    updateAsst_inputparam["workflowName"] = "Closed";

    updateAsst_inputparam["serviceID"] = "Assessments$UpdateAssessment_GEN"; //"ServerLogService$LogUpdate_GEN";//
    var updateAsst_httpheaders = {
      "Content-Type":"application/json",
      "Authorization": "ImpactAPI token=\"" + Authorization + "\""
    };
    updateAsst_inputparam["httpheaders"] = updateAsst_httpheaders;
    var updateAsst_httpconfigs = {};
    updateAsst_inputparam["httpconfig"] = updateAsst_httpconfigs;
    //alert(JSON.stringify(updateAsst_inputparam));
    Assessments$UpdateAssessment_GEN = mfintegrationsecureinvokerasync(updateAsst_inputparam, "Assessments", "UpdateAssessment_GEN", updateAssessment_callback);
    //ServerLogService$LogUpdate_GEN = mfintegrationsecureinvokerasync(updateAsst_inputparam, "ServerLogService", "LogUpdate_GEN", updateAssessment_callback);
    kony.application.showLoadingScreen(loadingSkin, "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, null);

  }catch(err){
    alert(""+JSON.stringify("err in update generic assessment "+err) );
  }

}

function UpdatePTW() {

  try {
    var updateAsst_inputparam = {};

    updateAsst_inputparam["assessment"] = assessmentId;

    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-prep-1"].Value !== null) {
      updateAsst_inputparam["prep1id"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-prep-1"].Value[0].Id;
      updateAsst_inputparam["prep1name"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-prep-1"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-prep-2"].Value !== null) {
      updateAsst_inputparam["prep2id"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-prep-2"].Value[0].Id;
      updateAsst_inputparam["prep2name"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-prep-2"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-prep-3a"].Value !== null) {
      updateAsst_inputparam["prep3aid"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-prep-3a"].Value[0].Id;
      updateAsst_inputparam["prep3aname"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-prep-3a"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-prep-3b"].Value !== null) {
      updateAsst_inputparam["prep3bid"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-prep-3b"].Value[0].Id;
      updateAsst_inputparam["prep3bname"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-prep-3b"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-4"].Value !== null) {
      updateAsst_inputparam["gen4id"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-4"].Value[0].Id;
      updateAsst_inputparam["gen4name"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-4"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-5"].Value !== null) {
      updateAsst_inputparam["gen5id"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-5"].Value[0].Id;
      updateAsst_inputparam["gen5name"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-5"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-6"].Value !== null) {
      updateAsst_inputparam["gen6id"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-6"].Value[0].Id;
      updateAsst_inputparam["gen6name"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-6"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-7a"].Value !== null) {
      updateAsst_inputparam["gen7aid"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-7a"].Value[0].Id;
      updateAsst_inputparam["gen7aname"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-7a"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-7b"].Value !== null) {
      updateAsst_inputparam["gen7bid"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-7b"].Value[0].Id;
      updateAsst_inputparam["gen7bname"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-7b"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-8a"].Value !== null) {
      updateAsst_inputparam["gen8aid"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-8a"].Value[0].Id;
      updateAsst_inputparam["gen8aname"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-8a"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-8b"].Value !== null) {
      updateAsst_inputparam["gen8bid"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-8b"].Value[0].Id;
      updateAsst_inputparam["gen8bname"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-8b"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-9"].Value !== null) {
      updateAsst_inputparam["gen9id"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-9"].Value[0].Id;
      updateAsst_inputparam["gen9name"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gendoc-9"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-authack-10a"].Value !== null) {
      updateAsst_inputparam["auth10aid"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-authack-10a"].Value[0].Id;
      updateAsst_inputparam["auth10aname"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-authack-10a"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-authack-10b"].Value !== null) {
      updateAsst_inputparam["auth10bid"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-authack-10b"].Value[0].Id;
      updateAsst_inputparam["auth10bname"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-authack-10b"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-authack-11"].Value !== null) {
      updateAsst_inputparam["auth11id"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-authack-11"].Value[0].Id;
      updateAsst_inputparam["auth11name"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-authack-11"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-authack-12"].Value !== null) {
      updateAsst_inputparam["auth12id"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-authack-12"].Value[0].Id;
      updateAsst_inputparam["auth12name"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-authack-12"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-authack-13a"].Value !== null) {
      updateAsst_inputparam["auth13aid"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-authack-13a"].Value[0].Id;
      updateAsst_inputparam["auth13aname"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-authack-13a"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-authack-13b"].Value !== null) {
      updateAsst_inputparam["auth13bid"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-authack-13b"].Value[0].Id;
      updateAsst_inputparam["auth13bname"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-authack-13b"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gastest-14a"].Value !== null) {
      updateAsst_inputparam["gas14aid"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gastest-14a"].Value[0].Id;
      updateAsst_inputparam["gas14aname"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gastest-14a"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gastest-14b"].Value !== null) {
      updateAsst_inputparam["gas14bid"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gastest-14b"].Value[0].Id;
      updateAsst_inputparam["gas14bname"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gastest-14b"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gastest-14c"].Value !== null) {
      updateAsst_inputparam["gas14cid"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gastest-14c"].Value[0].Id;
      updateAsst_inputparam["gas14cname"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-gastest-14c"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-comm-15"].Value !== null) {
      updateAsst_inputparam["comm15id"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-comm-15"].Value[0].Id;
      updateAsst_inputparam["comm15name"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-comm-15"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-comm-16"].Value !== null) {
      updateAsst_inputparam["comm16id"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-comm-16"].Value[0].Id;
      updateAsst_inputparam["comm16name"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-comm-16"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-wkmon-17"].Value !== null) {
      updateAsst_inputparam["wkmon17id"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-wkmon-17"].Value[0].Id;
      updateAsst_inputparam["wkmon17name"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-wkmon-17"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-wkpak-18"].Value !== null) {
      updateAsst_inputparam["wkpak18id"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-wkpak-18"].Value[0].Id;
      updateAsst_inputparam["wkpack18name"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-wkpak-18"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-wkpak-19"].Value !== null) {
      updateAsst_inputparam["wkpack19id"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-wkpak-19"].Value[0].Id;
      updateAsst_inputparam["wkpack19name"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-wkpak-19"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-reval-20a"].Value !== null) {
      updateAsst_inputparam["reval20aid"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-reval-20a"].Value[0].Id;
      updateAsst_inputparam["reval20aname"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-reval-20a"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-reval-20b"].Value !== null) {
      updateAsst_inputparam["reval20bid"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-reval-20b"].Value[0].Id;
      updateAsst_inputparam["reval20bname"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-reval-20b"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-reval-20c"].Value !== null) {
      updateAsst_inputparam["reval20cid"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-reval-20c"].Value[0].Id;
      updateAsst_inputparam["reval20cname"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-reval-20c"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-reval-20d"].Value !== null) {
      updateAsst_inputparam["reval20did"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-reval-20d"].Value[0].Id;
      updateAsst_inputparam["reval20dname"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-reval-20d"].Value[0].Name;
    }
    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-reval-20e"].Value !== null) {
      updateAsst_inputparam["reval20eid"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-reval-20e"].Value[0].Id;
      updateAsst_inputparam["reval20ename"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-reval-20e"].Value[0].Name;
    }

    if (currAsst.UdfFields["udf-msw-ptw-eng-sectionc-fdbk-999"].Value !== null) {
      updateAsst_inputparam["feedbackid"] = currAsst.UdfFields["udf-msw-ptw-eng-sectionc-fdbk-999"].Value[0].Id;
      updateAsst_inputparam["feedbackname"] =  currAsst.UdfFields["udf-msw-ptw-eng-sectionc-fdbk-999"].Value[0].Name;
    }

    updateAsst_inputparam["prep1comm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-prep-1-comments"].Value;
    updateAsst_inputparam["prep2comm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-prep-2-comments"].Value;
    updateAsst_inputparam["prep3acomm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-prep-3a-comments"].Value;
    updateAsst_inputparam["prep3bcomm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-prep-3b-comments"].Value;
    updateAsst_inputparam["gen4comm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-gendoc-4-comments"].Value;
    updateAsst_inputparam["gen5comm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-gendoc-5-comments"].Value;
    updateAsst_inputparam["gen6comm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-gendoc-6-comments"].Value;
    updateAsst_inputparam["gen7acomm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-gendoc-7a-comments"].Value;
    updateAsst_inputparam["gen7bcomm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-gendoc-7b-comments"].Value;
    updateAsst_inputparam["gen8acomm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-gendoc-8a-comments"].Value;
    updateAsst_inputparam["gen8bcomm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-gendoc-8b-comments"].Value;
    updateAsst_inputparam["gen9comm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-gendoc-9-comments"].Value;
    updateAsst_inputparam["auth10acomm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-authack-10a-comments"].Value;
    updateAsst_inputparam["auth10bcomm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-authack-10b-comments"].Value;
    updateAsst_inputparam["auth11comm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-authack-11-comments"].Value;
    updateAsst_inputparam["auth12comm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-authack-12-comments"].Value;
    updateAsst_inputparam["auth13acomm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-authack-13a-comments"].Value;
    updateAsst_inputparam["auth13bcomm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-authack-13b-comments"].Value;
    updateAsst_inputparam["gas14acomm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-gastest-14a-comments"].Value;
    updateAsst_inputparam["gas14bcomm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-gastest-14b-comments"].Value;
    updateAsst_inputparam["gas14ccomm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-gastest-14c-comments"].Value;
    updateAsst_inputparam["comm15comm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-comm-15-comments"].Value;
    updateAsst_inputparam["comm16comm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-comm-16-comments"].Value;
    updateAsst_inputparam["wkmon17comm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-wkmon-17-comments"].Value;  
    updateAsst_inputparam["wkpak18comm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-wkpak-18-comments"].Value;
    updateAsst_inputparam["wkpak19comm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-wkpak-19-comments"].Value;
    updateAsst_inputparam["reval20acomm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-reval-20a-comments"].Value;
    updateAsst_inputparam["reval20bcomm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-reval-20b-comments"].Value;
    updateAsst_inputparam["reval20ccomm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-reval-20c-comments"].Value;
    updateAsst_inputparam["reval20dcomm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-reval-20d-comments"].Value;
    updateAsst_inputparam["reval20ecomm"] = currAsst.UdfFields["msw-ptw-eng-sectionc-reval-20e-comments"].Value;

    updateAsst_inputparam["locId"] = currAsst.Location.Id;
    updateAsst_inputparam["locName"] = currAsst.Location.Name;
    updateAsst_inputparam["pricompid"] = currAsst.UdfFields.primarycompanyid.Value.Id;
    updateAsst_inputparam["pricompname"] = currAsst.UdfFields.primarycompanyid.Value.Name;
    updateAsst_inputparam["wkcrewsubid"] = currAsst.UdfFields.wkcrewsubofprimid.Value.Id;
    updateAsst_inputparam["wkcrewsubname"] = currAsst.UdfFields.wkcrewsubofprimid.Value.Name;
    updateAsst_inputparam["timeid"] = currAsst.UdfFields.timeofdayid.Value.Id;
    updateAsst_inputparam["timename"] = currAsst.UdfFields.timeofdayid.Value.Name;
    updateAsst_inputparam["wforceid"] = currAsst.UdfFields.workforcetypeid.Value.Id;
    updateAsst_inputparam["wforcename"] = currAsst.UdfFields.workforcetypeid.Value.Name; 

    updateAsst_inputparam["otherspecialact"] = currAsst.UdfFields.mswotherspecactshortnote.Value;
    updateAsst_inputparam["specificloc"] = currAsst.UdfFields.mswspecificlocation.Value;
    updateAsst_inputparam["subcontname"] = currAsst.UdfFields.mswsubcontractorname.Value;

    updateAsst_inputparam["workflowId"] = currAsst.WorkflowStatus.Id;
    updateAsst_inputparam["worflowName"] = currAsst.WorkflowStatus.Name;

    updateAsst_inputparam["engagementdt"] = currAsst.UdfFields.engagementdt.Value;
    updateAsst_inputparam["ConductedDateUTC"] = currAsst.ConductedDateUTC;
    updateAsst_inputparam["ReportedDateUTC"] = currAsst.ReportedDateUTC;
    updateAsst_inputparam["Version"] = "1";

    updateAsst_inputparam["confinedid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[0].Id;
    updateAsst_inputparam["statelecid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[1].Id;
    updateAsst_inputparam["divingid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[2].Id;
    updateAsst_inputparam["excavid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[3].Id;
    updateAsst_inputparam["elecid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[4].Id;
    updateAsst_inputparam["hotworkid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[5].Id;
    updateAsst_inputparam["isolationid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[6].Id;
    updateAsst_inputparam["liftingid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[7].Id;
    updateAsst_inputparam["portgasid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[8].Id;
    updateAsst_inputparam["workhtid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[9].Id;
    updateAsst_inputparam["otheractid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup'].Value[10].Id;

    updateAsst_inputparam["permitnumber"] = currAsst.UdfFields.mswptwpnshortnote.Value;
    updateAsst_inputparam["permitdetails"] = currAsst.UdfFields.mswptwpcshortnote.Value;

    updateAsst_inputparam["workflowId"] = "4";
    updateAsst_inputparam["workflowName"] = "Closed";

    updateAsst_inputparam["serviceID"] = "Assessments$UpdateAssessment_PTW"; //"ServerLogService$LogUpdate_PTW";
    var updateAsst_httpheaders = {
      "Content-Type":"application/json",
      "Authorization": "ImpactAPI token=\"" + Authorization + "\""
    };
    updateAsst_inputparam["httpheaders"] = updateAsst_httpheaders;
    var updateAsst_httpconfigs = {};
    updateAsst_inputparam["httpconfig"] = updateAsst_httpconfigs;
    //alert(JSON.stringify(updateAsst_inputparam));
    Assessments$UpdateAssessment_PTW = mfintegrationsecureinvokerasync(updateAsst_inputparam, "Assessments", "UpdateAssessment_PTW", updateAssessment_callback);
    //ServerLogService$LogUpdate_PTW = mfintegrationsecureinvokerasync(updateAsst_inputparam, "ServerLogService", "LogUpdate_PTW", updateAssessment_callback);
    kony.application.showLoadingScreen(loadingSkin, "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, null);

  }catch(err){
    alert(""+JSON.stringify("err in update ptw assessment "+err) );
  }
}

function UpdateFV() {

  try {
    var updateAsst_inputparam = {};

    updateAsst_inputparam["assessment"] = assessmentId;

    updateAsst_inputparam["jsa1id"] = currAsst.UdfFields["msw-udf-fv-eng-jsa-1"].Value[0].Id;
    updateAsst_inputparam["jsa1name"] =  currAsst.UdfFields["msw-udf-fv-eng-jsa-1"].Value[0].Name;
    updateAsst_inputparam["jsa2id"] = currAsst.UdfFields["msw-udf-fv-eng-jsa-2"].Value[0].Id;
    updateAsst_inputparam["jsa2name"] =  currAsst.UdfFields["msw-udf-fv-eng-jsa-2"].Value[0].Name;
    updateAsst_inputparam["jsa3id"] = currAsst.UdfFields["msw-udf-fv-eng-jsa-3"].Value[0].Id;
    updateAsst_inputparam["jsa3name"] =  currAsst.UdfFields["msw-udf-fv-eng-jsa-3"].Value[0].Name;
    updateAsst_inputparam["jsa4id"] = currAsst.UdfFields["msw-udf-fv-eng-jsa-4"].Value[0].Id;
    updateAsst_inputparam["jsa4name"] =  currAsst.UdfFields["msw-udf-fv-eng-jsa-4"].Value[0].Name;
    updateAsst_inputparam["jsa5id"] = currAsst.UdfFields["msw-udf-fv-eng-jsa-5"].Value[0].Id;
    updateAsst_inputparam["jsa5name"] =  currAsst.UdfFields["msw-udf-fv-eng-jsa-5"].Value[0].Name;
    updateAsst_inputparam["jsa6id"] = currAsst.UdfFields["msw-udf-fv-eng-jsa-6"].Value[0].Id;
    updateAsst_inputparam["jsa6name"] =  currAsst.UdfFields["msw-udf-fv-eng-jsa-6"].Value[0].Name;
    updateAsst_inputparam["jsa7id"] = currAsst.UdfFields["msw-udf-fv-eng-jsa-7"].Value[0].Id;
    updateAsst_inputparam["jsa7name"] =  currAsst.UdfFields["msw-udf-fv-eng-jsa-7"].Value[0].Name;
    updateAsst_inputparam["jsa8id"] = currAsst.UdfFields["msw-udf-fv-eng-jsa-8"].Value[0].Id;
    updateAsst_inputparam["jsa8name"] =  currAsst.UdfFields["msw-udf-fv-eng-jsa-8"].Value[0].Name;
    updateAsst_inputparam["jsa9id"] = currAsst.UdfFields["msw-udf-fv-eng-jsa-9"].Value[0].Id;
    updateAsst_inputparam["jsa9name"] =  currAsst.UdfFields["msw-udf-fv-eng-jsa-9"].Value[0].Name;

    updateAsst_inputparam["ssem1id"] = currAsst.UdfFields["msw-udf-fv-eng-ssem-1"].Value[0].Id;
    updateAsst_inputparam["ssem1name"] =  currAsst.UdfFields["msw-udf-fv-eng-ssem-1"].Value[0].Name;
    updateAsst_inputparam["ssem2id"] = currAsst.UdfFields["msw-udf-fv-eng-ssem-2"].Value[0].Id;
    updateAsst_inputparam["ssem2name"] =  currAsst.UdfFields["msw-udf-fv-eng-ssem-2"].Value[0].Name;
    updateAsst_inputparam["ssem3id"] = currAsst.UdfFields["msw-udf-fv-eng-ssem-3"].Value[0].Id;
    updateAsst_inputparam["ssem3name"] =  currAsst.UdfFields["msw-udf-fv-eng-ssem-3"].Value[0].Name;

    updateAsst_inputparam["em1id"] = currAsst.UdfFields["msw-udf-fv-eng-em-1"].Value[0].Id;
    updateAsst_inputparam["em1name"] =  currAsst.UdfFields["msw-udf-fv-eng-em-1"].Value[0].Name;
    updateAsst_inputparam["em2id"] = currAsst.UdfFields["msw-udf-fv-eng-em-2"].Value[0].Id;
    updateAsst_inputparam["em2name"] =  currAsst.UdfFields["msw-udf-fv-eng-em-2"].Value[0].Name;
    updateAsst_inputparam["em3id"] = currAsst.UdfFields["msw-udf-fv-eng-em-3"].Value[0].Id;
    updateAsst_inputparam["em3name"] =  currAsst.UdfFields["msw-udf-fv-eng-em-3"].Value[0].Name;

    updateAsst_inputparam["ptw1id"] = currAsst.UdfFields["msw-udf-fv-eng-ptw-1"].Value[0].Id;
    updateAsst_inputparam["ptw1name"] =  currAsst.UdfFields["msw-udf-fv-eng-ptw-1"].Value[0].Name;
    updateAsst_inputparam["ptw2id"] = currAsst.UdfFields["msw-udf-fv-eng-ptw-2"].Value[0].Id;
    updateAsst_inputparam["ptw2name"] =  currAsst.UdfFields["msw-udf-fv-eng-ptw-2"].Value[0].Name;
    updateAsst_inputparam["ptw3id"] = currAsst.UdfFields["msw-udf-fv-eng-ptw-3"].Value[0].Id;
    updateAsst_inputparam["ptw3name"] =  currAsst.UdfFields["msw-udf-fv-eng-ptw-3"].Value[0].Name;
    updateAsst_inputparam["ptw4id"] = currAsst.UdfFields["msw-udf-fv-eng-ptw-4"].Value[0].Id;
    updateAsst_inputparam["ptw4name"] =  currAsst.UdfFields["msw-udf-fv-eng-ptw-4"].Value[0].Name;
    updateAsst_inputparam["ptw5id"] = currAsst.UdfFields["msw-udf-fv-eng-ptw-5"].Value[0].Id;
    updateAsst_inputparam["ptw5name"] =  currAsst.UdfFields["msw-udf-fv-eng-ptw-5"].Value[0].Name;

    updateAsst_inputparam["cse1id"] = currAsst.UdfFields["msw-udf-fv-eng-cse-1"].Value[0].Id;
    updateAsst_inputparam["cse1name"] =  currAsst.UdfFields["msw-udf-fv-eng-cse-1"].Value[0].Name;
    updateAsst_inputparam["cse2id"] = currAsst.UdfFields["msw-udf-fv-eng-cse-2"].Value[0].Id;
    updateAsst_inputparam["cse2name"] =  currAsst.UdfFields["msw-udf-fv-eng-cse-2"].Value[0].Name;
    updateAsst_inputparam["cse3id"] = currAsst.UdfFields["msw-udf-fv-eng-cse-3"].Value[0].Id;
    updateAsst_inputparam["cse3name"] =  currAsst.UdfFields["msw-udf-fv-eng-cse-3"].Value[0].Name;
    updateAsst_inputparam["cse4id"] = currAsst.UdfFields["msw-udf-fv-eng-cse-4"].Value[0].Id;
    updateAsst_inputparam["cse4name"] =  currAsst.UdfFields["msw-udf-fv-eng-cse-4"].Value[0].Name;
    updateAsst_inputparam["cse5id"] = currAsst.UdfFields["msw-udf-fv-eng-cse-5"].Value[0].Id;
    updateAsst_inputparam["cse5name"] =  currAsst.UdfFields["msw-udf-fv-eng-cse-5"].Value[0].Name;
    updateAsst_inputparam["cse6id"] = currAsst.UdfFields["msw-udf-fv-eng-cse-6"].Value[0].Id;
    updateAsst_inputparam["cse6name"] =  currAsst.UdfFields["msw-udf-fv-eng-cse-6"].Value[0].Name;
    updateAsst_inputparam["cse7id"] = currAsst.UdfFields["msw-udf-fv-eng-cse-7"].Value[0].Id;
    updateAsst_inputparam["cse7name"] =  currAsst.UdfFields["msw-udf-fv-eng-cse-7"].Value[0].Name;
    updateAsst_inputparam["cse8id"] = currAsst.UdfFields["msw-udf-fv-eng-cse-8"].Value[0].Id;
    updateAsst_inputparam["cse8name"] =  currAsst.UdfFields["msw-udf-fv-eng-cse-8"].Value[0].Name;
    updateAsst_inputparam["cse9id"] = currAsst.UdfFields["msw-udf-fv-eng-cse-9"].Value[0].Id;
    updateAsst_inputparam["cse9name"] =  currAsst.UdfFields["msw-udf-fv-eng-cse-9"].Value[0].Name;

    updateAsst_inputparam["dv1id"] = currAsst.UdfFields["msw-udf-fv-eng-dv-1"].Value[0].Id;
    updateAsst_inputparam["dv1name"] =  currAsst.UdfFields["msw-udf-fv-eng-dv-1"].Value[0].Name;
    updateAsst_inputparam["dv2id"] = currAsst.UdfFields["msw-udf-fv-eng-dv-2"].Value[0].Id;
    updateAsst_inputparam["dv2name"] =  currAsst.UdfFields["msw-udf-fv-eng-dv-2"].Value[0].Name;
    updateAsst_inputparam["dv3id"] = currAsst.UdfFields["msw-udf-fv-eng-dv-3"].Value[0].Id;
    updateAsst_inputparam["dv3name"] =  currAsst.UdfFields["msw-udf-fv-eng-dv-3"].Value[0].Name;
    updateAsst_inputparam["dv4id"] = currAsst.UdfFields["msw-udf-fv-eng-dv-4"].Value[0].Id;
    updateAsst_inputparam["dv4name"] =  currAsst.UdfFields["msw-udf-fv-eng-dv-4"].Value[0].Name;
    updateAsst_inputparam["dv5id"] = currAsst.UdfFields["msw-udf-fv-eng-dv-5"].Value[0].Id;
    updateAsst_inputparam["dv5name"] =  currAsst.UdfFields["msw-udf-fv-eng-dv-5"].Value[0].Name;
    updateAsst_inputparam["dv6id"] = currAsst.UdfFields["msw-udf-fv-eng-dv-6"].Value[0].Id;
    updateAsst_inputparam["dv6name"] =  currAsst.UdfFields["msw-udf-fv-eng-dv-6"].Value[0].Name;
    updateAsst_inputparam["dv7id"] = currAsst.UdfFields["msw-udf-fv-eng-dv-7"].Value[0].Id;
    updateAsst_inputparam["dv7name"] =  currAsst.UdfFields["msw-udf-fv-eng-dv-7"].Value[0].Name;
    updateAsst_inputparam["dv8id"] = currAsst.UdfFields["msw-udf-fv-eng-dv-8"].Value[0].Id;
    updateAsst_inputparam["dv8name"] =  currAsst.UdfFields["msw-udf-fv-eng-dv-8"].Value[0].Name;
    updateAsst_inputparam["dv9id"] = currAsst.UdfFields["msw-udf-fv-eng-dv-9"].Value[0].Id;
    updateAsst_inputparam["dv9name"] =  currAsst.UdfFields["msw-udf-fv-eng-dv-9"].Value[0].Name;
    updateAsst_inputparam["dv10id"] = currAsst.UdfFields["msw-udf-fv-eng-dv-10"].Value[0].Id;
    updateAsst_inputparam["dv10name"] =  currAsst.UdfFields["msw-udf-fv-eng-dv-10"].Value[0].Name;

    updateAsst_inputparam["ewde1id"] = currAsst.UdfFields["msw-udf-fv-eng-ewde-1"].Value[0].Id;
    updateAsst_inputparam["ewde1name"] =  currAsst.UdfFields["msw-udf-fv-eng-ewde-1"].Value[0].Name;
    updateAsst_inputparam["ewde2id"] = currAsst.UdfFields["msw-udf-fv-eng-ewde-2"].Value[0].Id;
    updateAsst_inputparam["ewde2name"] =  currAsst.UdfFields["msw-udf-fv-eng-ewde-2"].Value[0].Name;
    updateAsst_inputparam["ewde3id"] = currAsst.UdfFields["msw-udf-fv-eng-ewde-3"].Value[0].Id;
    updateAsst_inputparam["ewde3name"] =  currAsst.UdfFields["msw-udf-fv-eng-ewde-3"].Value[0].Name;
    updateAsst_inputparam["ewde4id"] = currAsst.UdfFields["msw-udf-fv-eng-ewde-4"].Value[0].Id;
    updateAsst_inputparam["ewde4name"] =  currAsst.UdfFields["msw-udf-fv-eng-ewde-4"].Value[0].Name;
    updateAsst_inputparam["ewde5id"] = currAsst.UdfFields["msw-udf-fv-eng-ewde-5"].Value[0].Id;
    updateAsst_inputparam["ewde5name"] =  currAsst.UdfFields["msw-udf-fv-eng-ewde-5"].Value[0].Name;
    updateAsst_inputparam["ewde6id"] = currAsst.UdfFields["msw-udf-fv-eng-ewde-6"].Value[0].Id;
    updateAsst_inputparam["ewde6name"] =  currAsst.UdfFields["msw-udf-fv-eng-ewde-6"].Value[0].Name;
    updateAsst_inputparam["ewde7id"] = currAsst.UdfFields["msw-udf-fv-eng-ewde-7"].Value[0].Id;
    updateAsst_inputparam["ewde7name"] =  currAsst.UdfFields["msw-udf-fv-eng-ewde-7"].Value[0].Name;
    updateAsst_inputparam["ewde8id"] = currAsst.UdfFields["msw-udf-fv-eng-ewde-8"].Value[0].Id;
    updateAsst_inputparam["ewde8name"] =  currAsst.UdfFields["msw-udf-fv-eng-ewde-8"].Value[0].Name;
    updateAsst_inputparam["ewde9id"] = currAsst.UdfFields["msw-udf-fv-eng-ewde-9"].Value[0].Id;
    updateAsst_inputparam["ewde9name"] =  currAsst.UdfFields["msw-udf-fv-eng-ewde-9"].Value[0].Name;

    updateAsst_inputparam["ewel1id"] = currAsst.UdfFields["msw-udf-fv-eng-ewel-1"].Value[0].Id;
    updateAsst_inputparam["ewel1name"] =  currAsst.UdfFields["msw-udf-fv-eng-ewel-1"].Value[0].Name;
    updateAsst_inputparam["ewel2id"] = currAsst.UdfFields["msw-udf-fv-eng-ewel-2"].Value[0].Id;
    updateAsst_inputparam["ewel2name"] =  currAsst.UdfFields["msw-udf-fv-eng-ewel-2"].Value[0].Name;
    updateAsst_inputparam["ewel3id"] = currAsst.UdfFields["msw-udf-fv-eng-ewel-3"].Value[0].Id;
    updateAsst_inputparam["ewel3name"] =  currAsst.UdfFields["msw-udf-fv-eng-ewel-3"].Value[0].Name;
    updateAsst_inputparam["ewel4id"] = currAsst.UdfFields["msw-udf-fv-eng-ewel-4"].Value[0].Id;
    updateAsst_inputparam["ewel4name"] =  currAsst.UdfFields["msw-udf-fv-eng-ewel-4"].Value[0].Name;
    updateAsst_inputparam["ewel5id"] = currAsst.UdfFields["msw-udf-fv-eng-ewel-5"].Value[0].Id;
    updateAsst_inputparam["ewel5name"] =  currAsst.UdfFields["msw-udf-fv-eng-ewel-5"].Value[0].Name;
    updateAsst_inputparam["ewel6id"] = currAsst.UdfFields["msw-udf-fv-eng-ewel-6"].Value[0].Id;
    updateAsst_inputparam["ewel6name"] =  currAsst.UdfFields["msw-udf-fv-eng-ewel-6"].Value[0].Name;
    updateAsst_inputparam["ewel7id"] = currAsst.UdfFields["msw-udf-fv-eng-ewel-7"].Value[0].Id;
    updateAsst_inputparam["ewel7name"] =  currAsst.UdfFields["msw-udf-fv-eng-ewel-7"].Value[0].Name;
    updateAsst_inputparam["ewel8id"] = currAsst.UdfFields["msw-udf-fv-eng-ewel-8"].Value[0].Id;
    updateAsst_inputparam["ewel8name"] =  currAsst.UdfFields["msw-udf-fv-eng-ewel-8"].Value[0].Name;
    updateAsst_inputparam["ewel9id"] = currAsst.UdfFields["msw-udf-fv-eng-ewel-9"].Value[0].Id;
    updateAsst_inputparam["ewel9name"] =  currAsst.UdfFields["msw-udf-fv-eng-ewel-9"].Value[0].Name;
    updateAsst_inputparam["ewel10id"] = currAsst.UdfFields["msw-udf-fv-eng-ewel-10"].Value[0].Id;
    updateAsst_inputparam["ewel10name"] =  currAsst.UdfFields["msw-udf-fv-eng-ewel-10"].Value[0].Name;
    updateAsst_inputparam["ewel11id"] = currAsst.UdfFields["msw-udf-fv-eng-ewel-11"].Value[0].Id;
    updateAsst_inputparam["ewel11name"] =  currAsst.UdfFields["msw-udf-fv-eng-ewel-11"].Value[0].Name;

    updateAsst_inputparam["evacne1id"] = currAsst.UdfFields["msw-udf-fv-eng-evacne-1"].Value[0].Id;
    updateAsst_inputparam["evacne1name"] =  currAsst.UdfFields["msw-udf-fv-eng-evacne-1"].Value[0].Name;
    updateAsst_inputparam["evacne1id"] = currAsst.UdfFields["msw-udf-fv-eng-evacne-1"].Value[0].Id;
    updateAsst_inputparam["evacne1name"] =  currAsst.UdfFields["msw-udf-fv-eng-evacne-1"].Value[0].Name;
    updateAsst_inputparam["evacne1id"] = currAsst.UdfFields["msw-udf-fv-eng-evacne-1"].Value[0].Id;
    updateAsst_inputparam["evacne1name"] =  currAsst.UdfFields["msw-udf-fv-eng-evacne-1"].Value[0].Name;
    updateAsst_inputparam["evacne1id"] = currAsst.UdfFields["msw-udf-fv-eng-evacne-1"].Value[0].Id;
    updateAsst_inputparam["evacne1name"] =  currAsst.UdfFields["msw-udf-fv-eng-evacne-1"].Value[0].Name;
    updateAsst_inputparam["evacne1id"] = currAsst.UdfFields["msw-udf-fv-eng-evacne-1"].Value[0].Id;
    updateAsst_inputparam["evacne1name"] =  currAsst.UdfFields["msw-udf-fv-eng-evacne-1"].Value[0].Name;
    updateAsst_inputparam["evacne6id"] = currAsst.UdfFields["msw-udf-fv-eng-evacne-6"].Value[0].Id;
    updateAsst_inputparam["evacne6name"] =  currAsst.UdfFields["msw-udf-fv-eng-evacne-6"].Value[0].Name;

    updateAsst_inputparam["evace1id"] = currAsst.UdfFields["msw-udf-fv-eng-evace-1"].Value[0].Id;
    updateAsst_inputparam["evace1name"] =  currAsst.UdfFields["msw-udf-fv-eng-evace-1"].Value[0].Name;
    updateAsst_inputparam["evace2id"] = currAsst.UdfFields["msw-udf-fv-eng-evace-2"].Value[0].Id;
    updateAsst_inputparam["evace2name"] =  currAsst.UdfFields["msw-udf-fv-eng-evace-2"].Value[0].Name;
    updateAsst_inputparam["evace3id"] = currAsst.UdfFields["msw-udf-fv-eng-evace-3"].Value[0].Id;
    updateAsst_inputparam["evace3name"] =  currAsst.UdfFields["msw-udf-fv-eng-evace-3"].Value[0].Name;
    updateAsst_inputparam["evace4id"] = currAsst.UdfFields["msw-udf-fv-eng-evace-4"].Value[0].Id;
    updateAsst_inputparam["evace4name"] =  currAsst.UdfFields["msw-udf-fv-eng-evace-4"].Value[0].Name;
    updateAsst_inputparam["evace5id"] = currAsst.UdfFields["msw-udf-fv-eng-evace-5"].Value[0].Id;
    updateAsst_inputparam["evace5name"] =  currAsst.UdfFields["msw-udf-fv-eng-evace-5"].Value[0].Name;
    updateAsst_inputparam["evace6id"] = currAsst.UdfFields["msw-udf-fv-eng-evace-6"].Value[0].Id;
    updateAsst_inputparam["evace6name"] =  currAsst.UdfFields["msw-udf-fv-eng-evace-6"].Value[0].Name;
    updateAsst_inputparam["evace7id"] = currAsst.UdfFields["msw-udf-fv-eng-evace-7"].Value[0].Id;
    updateAsst_inputparam["evace7name"] =  currAsst.UdfFields["msw-udf-fv-eng-evace-7"].Value[0].Name;
    updateAsst_inputparam["evace8id"] = currAsst.UdfFields["msw-udf-fv-eng-evace-8"].Value[0].Id;
    updateAsst_inputparam["evace8name"] =  currAsst.UdfFields["msw-udf-fv-eng-evace-8"].Value[0].Name;
    updateAsst_inputparam["evace9id"] = currAsst.UdfFields["msw-udf-fv-eng-evace-9"].Value[0].Id;
    updateAsst_inputparam["evace9name"] =  currAsst.UdfFields["msw-udf-fv-eng-evace-9"].Value[0].Name;
    updateAsst_inputparam["evace10id"] = currAsst.UdfFields["msw-udf-fv-eng-evace-10"].Value[0].Id;
    updateAsst_inputparam["evace10name"] =  currAsst.UdfFields["msw-udf-fv-eng-evace-10"].Value[0].Name;
    updateAsst_inputparam["evace11id"] = currAsst.UdfFields["msw-udf-fv-eng-evace-11"].Value[0].Id;
    updateAsst_inputparam["evace11name"] =  currAsst.UdfFields["msw-udf-fv-eng-evace-11"].Value[0].Name;
    updateAsst_inputparam["evace12id"] = currAsst.UdfFields["msw-udf-fv-eng-evace-12"].Value[0].Id;
    updateAsst_inputparam["evace12name"] =  currAsst.UdfFields["msw-udf-fv-eng-evace-12"].Value[0].Name;

    updateAsst_inputparam["hw1id"] = currAsst.UdfFields["msw-udf-fv-eng-hw-1"].Value[0].Id;
    updateAsst_inputparam["hw1name"] =  currAsst.UdfFields["msw-udf-fv-eng-hw-1"].Value[0].Name;
    updateAsst_inputparam["hw2id"] = currAsst.UdfFields["msw-udf-fv-eng-hw-2"].Value[0].Id;
    updateAsst_inputparam["hw2name"] =  currAsst.UdfFields["msw-udf-fv-eng-hw-2"].Value[0].Name;
    updateAsst_inputparam["hw3id"] = currAsst.UdfFields["msw-udf-fv-eng-hw-3"].Value[0].Id;
    updateAsst_inputparam["hw3name"] =  currAsst.UdfFields["msw-udf-fv-eng-hw-3"].Value[0].Name;
    updateAsst_inputparam["hw4id"] = currAsst.UdfFields["msw-udf-fv-eng-hw-4"].Value[0].Id;
    updateAsst_inputparam["hw4name"] =  currAsst.UdfFields["msw-udf-fv-eng-hw-4"].Value[0].Name;
    updateAsst_inputparam["hw5id"] = currAsst.UdfFields["msw-udf-fv-eng-hw-5"].Value[0].Id;
    updateAsst_inputparam["hw5name"] =  currAsst.UdfFields["msw-udf-fv-eng-hw-5"].Value[0].Name;
    updateAsst_inputparam["hw6id"] = currAsst.UdfFields["msw-udf-fv-eng-hw-6"].Value[0].Id;
    updateAsst_inputparam["hw6name"] =  currAsst.UdfFields["msw-udf-fv-eng-hw-6"].Value[0].Name;
    updateAsst_inputparam["hw7id"] = currAsst.UdfFields["msw-udf-fv-eng-hw-7"].Value[0].Id;
    updateAsst_inputparam["hw7name"] =  currAsst.UdfFields["msw-udf-fv-eng-hw-7"].Value[0].Name;

    updateAsst_inputparam["ihe1id"] = currAsst.UdfFields["msw-udf-fv-eng-ihe-1"].Value[0].Id;
    updateAsst_inputparam["ihe1name"] =  currAsst.UdfFields["msw-udf-fv-eng-ihe-1"].Value[0].Name;
    updateAsst_inputparam["ihe2id"] = currAsst.UdfFields["msw-udf-fv-eng-ihe-2"].Value[0].Id;
    updateAsst_inputparam["ihe2name"] =  currAsst.UdfFields["msw-udf-fv-eng-ihe-2"].Value[0].Name;
    updateAsst_inputparam["ihe3id"] = currAsst.UdfFields["msw-udf-fv-eng-ihe-3"].Value[0].Id;
    updateAsst_inputparam["ihe3name"] =  currAsst.UdfFields["msw-udf-fv-eng-ihe-3"].Value[0].Name;
    updateAsst_inputparam["ihe4id"] = currAsst.UdfFields["msw-udf-fv-eng-ihe-4"].Value[0].Id;
    updateAsst_inputparam["ihe4name"] =  currAsst.UdfFields["msw-udf-fv-eng-ihe-4"].Value[0].Name;
    updateAsst_inputparam["ihe5id"] = currAsst.UdfFields["msw-udf-fv-eng-ihe-5"].Value[0].Id;
    updateAsst_inputparam["ihe5name"] =  currAsst.UdfFields["msw-udf-fv-eng-ihe-5"].Value[0].Name;
    updateAsst_inputparam["ihe6id"] = currAsst.UdfFields["msw-udf-fv-eng-ihe-6"].Value[0].Id;
    updateAsst_inputparam["ihe6name"] =  currAsst.UdfFields["msw-udf-fv-eng-ihe-6"].Value[0].Name;
    updateAsst_inputparam["ihe7id"] = currAsst.UdfFields["msw-udf-fv-eng-ihe-7"].Value[0].Id;
    updateAsst_inputparam["ihe7name"] =  currAsst.UdfFields["msw-udf-fv-eng-ihe-7"].Value[0].Name;

    updateAsst_inputparam["lr1id"] = currAsst.UdfFields["msw-udf-fv-eng-lr-1"].Value[0].Id;
    updateAsst_inputparam["lr1name"] =  currAsst.UdfFields["msw-udf-fv-eng-lr-1"].Value[0].Name;
    updateAsst_inputparam["lr2id"] = currAsst.UdfFields["msw-udf-fv-eng-lr-2"].Value[0].Id;
    updateAsst_inputparam["lr2name"] =  currAsst.UdfFields["msw-udf-fv-eng-lr-2"].Value[0].Name;
    updateAsst_inputparam["lr3id"] = currAsst.UdfFields["msw-udf-fv-eng-lr-3"].Value[0].Id;
    updateAsst_inputparam["lr3name"] =  currAsst.UdfFields["msw-udf-fv-eng-lr-3"].Value[0].Name;
    updateAsst_inputparam["lr4id"] = currAsst.UdfFields["msw-udf-fv-eng-lr-4"].Value[0].Id;
    updateAsst_inputparam["lr4name"] =  currAsst.UdfFields["msw-udf-fv-eng-lr-4"].Value[0].Name;
    updateAsst_inputparam["lr5id"] = currAsst.UdfFields["msw-udf-fv-eng-lr-5"].Value[0].Id;
    updateAsst_inputparam["lr5name"] =  currAsst.UdfFields["msw-udf-fv-eng-lr-5"].Value[0].Name;
    updateAsst_inputparam["lr6id"] = currAsst.UdfFields["msw-udf-fv-eng-lr-6"].Value[0].Id;
    updateAsst_inputparam["lr6name"] =  currAsst.UdfFields["msw-udf-fv-eng-lr-6"].Value[0].Name;
    updateAsst_inputparam["lr7id"] = currAsst.UdfFields["msw-udf-fv-eng-lr-7"].Value[0].Id;
    updateAsst_inputparam["lr7name"] =  currAsst.UdfFields["msw-udf-fv-eng-lr-7"].Value[0].Name;
    updateAsst_inputparam["lr8id"] = currAsst.UdfFields["msw-udf-fv-eng-lr-8"].Value[0].Id;
    updateAsst_inputparam["lr8name"] =  currAsst.UdfFields["msw-udf-fv-eng-lr-8"].Value[0].Name;
    updateAsst_inputparam["lr9id"] = currAsst.UdfFields["msw-udf-fv-eng-lr-9"].Value[0].Id;
    updateAsst_inputparam["lr9name"] =  currAsst.UdfFields["msw-udf-fv-eng-lr-9"].Value[0].Name;

    updateAsst_inputparam["pgd1id"] = currAsst.UdfFields["msw-udf-fv-eng-pgd-1"].Value[0].Id;
    updateAsst_inputparam["pgd1name"] =  currAsst.UdfFields["msw-udf-fv-eng-pgd-1"].Value[0].Name;
    updateAsst_inputparam["pgd2id"] = currAsst.UdfFields["msw-udf-fv-eng-pgd-2"].Value[0].Id;
    updateAsst_inputparam["pgd2name"] =  currAsst.UdfFields["msw-udf-fv-eng-pgd-2"].Value[0].Name;
    updateAsst_inputparam["pgd3id"] = currAsst.UdfFields["msw-udf-fv-eng-pgd-3"].Value[0].Id;
    updateAsst_inputparam["pgd3name"] =  currAsst.UdfFields["msw-udf-fv-eng-pgd-3"].Value[0].Name;
    updateAsst_inputparam["pgd4id"] = currAsst.UdfFields["msw-udf-fv-eng-pgd-4"].Value[0].Id;
    updateAsst_inputparam["pgd4name"] =  currAsst.UdfFields["msw-udf-fv-eng-pgd-4"].Value[0].Name;
    updateAsst_inputparam["pgd5id"] = currAsst.UdfFields["msw-udf-fv-eng-pgd-5"].Value[0].Id;
    updateAsst_inputparam["pgd5name"] =  currAsst.UdfFields["msw-udf-fv-eng-pgd-5"].Value[0].Name;
    updateAsst_inputparam["pgd6id"] = currAsst.UdfFields["msw-udf-fv-eng-pgd-6"].Value[0].Id;
    updateAsst_inputparam["pgd6name"] =  currAsst.UdfFields["msw-udf-fv-eng-pgd-6"].Value[0].Name;

    updateAsst_inputparam["wah1id"] = currAsst.UdfFields["msw-udf-fv-eng-wah-1"].Value[0].Id;
    updateAsst_inputparam["wah1name"] =  currAsst.UdfFields["msw-udf-fv-eng-wah-1"].Value[0].Name;
    updateAsst_inputparam["wah2id"] = currAsst.UdfFields["msw-udf-fv-eng-wah-2"].Value[0].Id;
    updateAsst_inputparam["wah2name"] =  currAsst.UdfFields["msw-udf-fv-eng-wah-2"].Value[0].Name;
    updateAsst_inputparam["wah3id"] = currAsst.UdfFields["msw-udf-fv-eng-wah-3"].Value[0].Id;
    updateAsst_inputparam["wah3name"] =  currAsst.UdfFields["msw-udf-fv-eng-wah-3"].Value[0].Name;
    updateAsst_inputparam["wah4id"] = currAsst.UdfFields["msw-udf-fv-eng-wah-4"].Value[0].Id;
    updateAsst_inputparam["wah4name"] =  currAsst.UdfFields["msw-udf-fv-eng-wah-4"].Value[0].Name;
    updateAsst_inputparam["wah5id"] = currAsst.UdfFields["msw-udf-fv-eng-wah-5"].Value[0].Id;
    updateAsst_inputparam["wah5name"] =  currAsst.UdfFields["msw-udf-fv-eng-wah-5"].Value[0].Name;
    updateAsst_inputparam["wah6id"] = currAsst.UdfFields["msw-udf-fv-eng-wah-6"].Value[0].Id;
    updateAsst_inputparam["wah6name"] =  currAsst.UdfFields["msw-udf-fv-eng-wah-6"].Value[0].Name;
    updateAsst_inputparam["wah7id"] = currAsst.UdfFields["msw-udf-fv-eng-wah-7"].Value[0].Id;
    updateAsst_inputparam["wah7name"] =  currAsst.UdfFields["msw-udf-fv-eng-wah-7"].Value[0].Name;
    updateAsst_inputparam["wah8id"] = currAsst.UdfFields["msw-udf-fv-eng-wah-8"].Value[0].Id;
    updateAsst_inputparam["wah8name"] =  currAsst.UdfFields["msw-udf-fv-eng-wah-8"].Value[0].Name;

    updateAsst_inputparam["vto1id"] = currAsst.UdfFields["msw-udf-fv-eng-vto-1"].Value[0].Id;
    updateAsst_inputparam["vto1name"] =  currAsst.UdfFields["msw-udf-fv-eng-vto-1"].Value[0].Name; 
    updateAsst_inputparam["vto2id"] = currAsst.UdfFields["msw-udf-fv-eng-vto-2"].Value[0].Id;
    updateAsst_inputparam["vto2name"] =  currAsst.UdfFields["msw-udf-fv-eng-vto-2"].Value[0].Name;
    updateAsst_inputparam["vto3id"] = currAsst.UdfFields["msw-udf-fv-eng-vto-3"].Value[0].Id;
    updateAsst_inputparam["vto3name"] =  currAsst.UdfFields["msw-udf-fv-eng-vto-3"].Value[0].Name;
    updateAsst_inputparam["vto4id"] = currAsst.UdfFields["msw-udf-fv-eng-vto-4"].Value[0].Id;
    updateAsst_inputparam["vto4name"] =  currAsst.UdfFields["msw-udf-fv-eng-vto-4"].Value[0].Name;
    updateAsst_inputparam["vto5id"] = currAsst.UdfFields["msw-udf-fv-eng-vto-5"].Value[0].Id;
    updateAsst_inputparam["vto5name"] =  currAsst.UdfFields["msw-udf-fv-eng-vto-5"].Value[0].Name;
    updateAsst_inputparam["vto6id"] = currAsst.UdfFields["msw-udf-fv-eng-vto-6"].Value[0].Id;
    updateAsst_inputparam["vto6name"] =  currAsst.UdfFields["msw-udf-fv-eng-vto-6"].Value[0].Name;



    updateAsst_inputparam["jsa1comm"] = currAsst.UdfFields["MSW_UDF_FV_JSA_1_comments"].Value;
    updateAsst_inputparam["jsa2comm"] = currAsst.UdfFields["MSW_UDF_FV_JSA_2_comments"].Value;
    updateAsst_inputparam["jsa3comm"] = currAsst.UdfFields["MSW_UDF_FV_JSA_3_comments"].Value;
    updateAsst_inputparam["jsa4comm"] = currAsst.UdfFields["MSW_UDF_FV_JSA_4_comments"].Value;
    updateAsst_inputparam["jsa5comm"] = currAsst.UdfFields["MSW_UDF_FV_JSA_5_comments"].Value;
    updateAsst_inputparam["jsa6comm"] = currAsst.UdfFields["MSW_UDF_FV_JSA_6_comments"].Value;
    updateAsst_inputparam["jsa7comm"] = currAsst.UdfFields["MSW_UDF_FV_JSA_7_comments"].Value;
    updateAsst_inputparam["jsa8comm"] = currAsst.UdfFields["MSW_UDF_FV_JSA_8_comments"].Value;
    updateAsst_inputparam["jsa9comm"] = currAsst.UdfFields["MSW_UDF_FV_JSA_9_comments"].Value;

    updateAsst_inputparam["ssem1comm"] = currAsst.UdfFields["MSW_UDF_FV_SSEM_1_comments"].Value;
    updateAsst_inputparam["ssem2comm"] = currAsst.UdfFields["MSW_UDF_FV_SSEM_2_comments"].Value;
    updateAsst_inputparam["ssem3comm"] = currAsst.UdfFields["MSW_UDF_FV_SSEM_3_comments"].Value;

    updateAsst_inputparam["em1comm"] = currAsst.UdfFields["MSW_UDF_FV_EM_1_comments"].Value;
    updateAsst_inputparam["em2comm"] = currAsst.UdfFields["MSW_UDF_FV_EM_2_comments"].Value;
    updateAsst_inputparam["em3comm"] = currAsst.UdfFields["MSW_UDF_FV_EM_3_comments"].Value;

    updateAsst_inputparam["ptw1comm"] = currAsst.UdfFields["MSW_UDF_FV_PTW_1_comments"].Value;
    updateAsst_inputparam["ptw2comm"] = currAsst.UdfFields["MSW_UDF_FV_PTW_2_comments"].Value;
    updateAsst_inputparam["ptw3comm"] = currAsst.UdfFields["MSW_UDF_FV_PTW_3_comments"].Value;
    updateAsst_inputparam["ptw4comm"] = currAsst.UdfFields["MSW_UDF_FV_PTW_4_comments"].Value;
    updateAsst_inputparam["ptw5comm"] = currAsst.UdfFields["MSW_UDF_FV_PTW_5_comments"].Value;

    updateAsst_inputparam["cse1comm"] = currAsst.UdfFields["MSW_UDF_FV_CSE_1_comments"].Value;
    updateAsst_inputparam["cse2comm"] = currAsst.UdfFields["MSW_UDF_FV_CSE_2_comments"].Value;
    updateAsst_inputparam["cse3comm"] = currAsst.UdfFields["MSW_UDF_FV_CSE_3_comments"].Value;
    updateAsst_inputparam["cse4comm"] = currAsst.UdfFields["MSW_UDF_FV_CSE_4_comments"].Value;
    updateAsst_inputparam["cse5comm"] = currAsst.UdfFields["MSW_UDF_FV_CSE_5_comments"].Value;
    updateAsst_inputparam["cse6comm"] = currAsst.UdfFields["MSW_UDF_FV_CSE_6_comments"].Value;
    updateAsst_inputparam["cse7comm"] = currAsst.UdfFields["MSW_UDF_FV_CSE_7_comments"].Value;
    updateAsst_inputparam["cse8comm"] = currAsst.UdfFields["MSW_UDF_FV_CSE_8_comments"].Value;
    updateAsst_inputparam["cse9comm"] = currAsst.UdfFields["MSW_UDF_FV_CSE_9_comments"].Value;

    updateAsst_inputparam["div1comm"] = currAsst.UdfFields["MSW_UDF_FV_DV_1_comments"].Value;
    updateAsst_inputparam["div2comm"] = currAsst.UdfFields["MSW_UDF_FV_DV_2_comments"].Value;
    updateAsst_inputparam["div3comm"] = currAsst.UdfFields["MSW_UDF_FV_DV_3_comments"].Value;
    updateAsst_inputparam["div4comm"] = currAsst.UdfFields["MSW_UDF_FV_DV_4_comments"].Value;
    updateAsst_inputparam["div5comm"] = currAsst.UdfFields["MSW_UDF_FV_DV_5_comments"].Value;
    updateAsst_inputparam["div6comm"] = currAsst.UdfFields["MSW_UDF_FV_DV_6_comments"].Value;
    updateAsst_inputparam["div7comm"] = currAsst.UdfFields["MSW_UDF_FV_DV_7_comments"].Value;
    updateAsst_inputparam["div8comm"] = currAsst.UdfFields["MSW_UDF_FV_DV_8_comments"].Value;
    updateAsst_inputparam["div9comm"] = currAsst.UdfFields["MSW_UDF_FV_DV_9_comments"].Value;
    updateAsst_inputparam["div10comm"] = currAsst.UdfFields["MSW_UDF_FV_DV_10_comments"].Value;

    updateAsst_inputparam["ewde1comm"] = currAsst.UdfFields["MSW_UDF_FV_EWDE_1_comments"].Value;
    updateAsst_inputparam["ewde2comm"] = currAsst.UdfFields["MSW_UDF_FV_EWDE_2_comments"].Value;
    updateAsst_inputparam["ewde3comm"] = currAsst.UdfFields["MSW_UDF_FV_EWDE_3_comments"].Value;
    updateAsst_inputparam["ewde4comm"] = currAsst.UdfFields["MSW_UDF_FV_EWDE_4_comments"].Value;
    updateAsst_inputparam["ewde5comm"] = currAsst.UdfFields["MSW_UDF_FV_EWDE_5_comments"].Value;
    updateAsst_inputparam["ewde6comm"] = currAsst.UdfFields["MSW_UDF_FV_EWDE_6_comments"].Value;
    updateAsst_inputparam["ewde7comm"] = currAsst.UdfFields["MSW_UDF_FV_EWDE_7_comments"].Value;
    updateAsst_inputparam["ewde8comm"] = currAsst.UdfFields["MSW_UDF_FV_EWDE_8_comments"].Value;
    updateAsst_inputparam["ewde9comm"] = currAsst.UdfFields["MSW_UDF_FV_EWDE_9_comments"].Value;

    updateAsst_inputparam["ewel1comm"] = currAsst.UdfFields["MSW_UDF_FV_EWEL_1_comments"].Value;
    updateAsst_inputparam["ewel2comm"] = currAsst.UdfFields["MSW_UDF_FV_EWEL_2_comments"].Value;
    updateAsst_inputparam["ewel3comm"] = currAsst.UdfFields["MSW_UDF_FV_EWEL_3_comments"].Value;
    updateAsst_inputparam["ewel4comm"] = currAsst.UdfFields["MSW_UDF_FV_EWEL_4_comments"].Value;
    updateAsst_inputparam["ewel5comm"] = currAsst.UdfFields["MSW_UDF_FV_EWEL_5_comments"].Value;
    updateAsst_inputparam["ewel6comm"] = currAsst.UdfFields["MSW_UDF_FV_EWEL_6_comments"].Value;
    updateAsst_inputparam["ewel7comm"] = currAsst.UdfFields["MSW_UDF_FV_EWEL_7_comments"].Value;
    updateAsst_inputparam["ewel8comm"] = currAsst.UdfFields["MSW_UDF_FV_EWEL_8_comments"].Value;
    updateAsst_inputparam["ewel9comm"] = currAsst.UdfFields["MSW_UDF_FV_EWEL_9_comments"].Value;
    updateAsst_inputparam["ewel10comm"] = currAsst.UdfFields["MSW_UDF_FV_EWEL_10_comments"].Value;
    updateAsst_inputparam["ewel11comm"] = currAsst.UdfFields["MSW_UDF_FV_EWEL_11_comments"].Value;

    updateAsst_inputparam["evacne1comm"] = currAsst.UdfFields["MSW_UDF_FV_EVACNE_1_comments"].Value;
    updateAsst_inputparam["evacne2comm"] = currAsst.UdfFields["MSW_UDF_FV_EVACNE_2_comments"].Value;
    updateAsst_inputparam["evacne3comm"] = currAsst.UdfFields["MSW_UDF_FV_EVACNE_3_comments"].Value;
    updateAsst_inputparam["evacne4comm"] = currAsst.UdfFields["MSW_UDF_FV_EVACNE_4_comments"].Value;
    updateAsst_inputparam["evacne5comm"] = currAsst.UdfFields["MSW_UDF_FV_EVACNE_5_comments"].Value;
    updateAsst_inputparam["evacne6comm"] = currAsst.UdfFields["MSW_UDF_FV_EVACNE_6_comments"].Value;

    updateAsst_inputparam["evace1comm"] = currAsst.UdfFields["MSW_UDF_FV_EVACE_1_comments"].Value;
    updateAsst_inputparam["evace2comm"] = currAsst.UdfFields["MSW_UDF_FV_EVACE_2_comments"].Value;
    updateAsst_inputparam["evace3comm"] = currAsst.UdfFields["MSW_UDF_FV_EVACE_3_comments"].Value;
    updateAsst_inputparam["evace4comm"] = currAsst.UdfFields["MSW_UDF_FV_EVACE_4_comments"].Value;
    updateAsst_inputparam["evace5comm"] = currAsst.UdfFields["MSW_UDF_FV_EVACE_5_comments"].Value;
    updateAsst_inputparam["evace6comm"] = currAsst.UdfFields["MSW_UDF_FV_EVACE_6_comments"].Value;
    updateAsst_inputparam["evace7comm"] = currAsst.UdfFields["MSW_UDF_FV_EVACE_7_comments"].Value;
    updateAsst_inputparam["evace8comm"] = currAsst.UdfFields["MSW_UDF_FV_EVACE_8_comments"].Value;
    updateAsst_inputparam["evace9comm"] = currAsst.UdfFields["MSW_UDF_FV_EVACE_9_comments"].Value;
    updateAsst_inputparam["evace10comm"] = currAsst.UdfFields["MSW_UDF_FV_EVACE_10_comments"].Value;
    updateAsst_inputparam["evace11comm"] = currAsst.UdfFields["MSW_UDF_FV_EVACE_11_comments"].Value;
    updateAsst_inputparam["evace12comm"] = currAsst.UdfFields["MSW_UDF_FV_EVACE_12_comments"].Value;

    updateAsst_inputparam["hw1comm"] = currAsst.UdfFields["MSW_UDF_FV_HW_1_comments"].Value;
    updateAsst_inputparam["hw2comm"] = currAsst.UdfFields["MSW_UDF_FV_HW_2_comments"].Value;
    updateAsst_inputparam["hw3comm"] = currAsst.UdfFields["MSW_UDF_FV_HW_3_comments"].Value;
    updateAsst_inputparam["hw4comm"] = currAsst.UdfFields["MSW_UDF_FV_HW_4_comments"].Value;
    updateAsst_inputparam["hw5comm"] = currAsst.UdfFields["MSW_UDF_FV_HW_5_comments"].Value;
    updateAsst_inputparam["hw6comm"] = currAsst.UdfFields["MSW_UDF_FV_HW_6_comments"].Value;
    updateAsst_inputparam["hw7comm"] = currAsst.UdfFields["MSW_UDF_FV_HW_7_comments"].Value;

    updateAsst_inputparam["ihe1comm"] = currAsst.UdfFields["MSW_UDF_FV_IHE_1_comments"].Value;
    updateAsst_inputparam["ihe2comm"] = currAsst.UdfFields["MSW_UDF_FV_IHE_2_comments"].Value;
    updateAsst_inputparam["ihe3comm"] = currAsst.UdfFields["MSW_UDF_FV_IHE_3_comments"].Value;
    updateAsst_inputparam["ihe4comm"] = currAsst.UdfFields["MSW_UDF_FV_IHE_4_comments"].Value;
    updateAsst_inputparam["ihe5comm"] = currAsst.UdfFields["MSW_UDF_FV_IHE_5_comments"].Value;
    updateAsst_inputparam["ihe6comm"] = currAsst.UdfFields["MSW_UDF_FV_IHE_6_comments"].Value;
    updateAsst_inputparam["ihe7comm"] = currAsst.UdfFields["MSW_UDF_FV_IHE_7_comments"].Value;

    updateAsst_inputparam["lr1comm"] = currAsst.UdfFields["MSW_UDF_FV_LR_1_comments"].Value;
    updateAsst_inputparam["lr2comm"] = currAsst.UdfFields["MSW_UDF_FV_LR_2_comments"].Value;
    updateAsst_inputparam["lr3comm"] = currAsst.UdfFields["MSW_UDF_FV_LR_3_comments"].Value;
    updateAsst_inputparam["lr4comm"] = currAsst.UdfFields["MSW_UDF_FV_LR_4_comments"].Value;
    updateAsst_inputparam["lr5comm"] = currAsst.UdfFields["MSW_UDF_FV_LR_5_comments"].Value;
    updateAsst_inputparam["lr6comm"] = currAsst.UdfFields["MSW_UDF_FV_LR_6_comments"].Value;
    updateAsst_inputparam["lr7comm"] = currAsst.UdfFields["MSW_UDF_FV_LR_7_comments"].Value;
    updateAsst_inputparam["lr8comm"] = currAsst.UdfFields["MSW_UDF_FV_LR_8_comments"].Value;
    updateAsst_inputparam["lr9comm"] = currAsst.UdfFields["MSW_UDF_FV_LR_9_comments"].Value;

    updateAsst_inputparam["pgd1comm"] = currAsst.UdfFields["MSW_UDF_FV_PGD_1_comments"].Value;
    updateAsst_inputparam["pgd2comm"] = currAsst.UdfFields["MSW_UDF_FV_PGD_2_comments"].Value;
    updateAsst_inputparam["pgd3comm"] = currAsst.UdfFields["MSW_UDF_FV_PGD_3_comments"].Value;
    updateAsst_inputparam["pgd4comm"] = currAsst.UdfFields["MSW_UDF_FV_PGD_4_comments"].Value;
    updateAsst_inputparam["pgd5comm"] = currAsst.UdfFields["MSW_UDF_FV_PGD_5_comments"].Value;
    updateAsst_inputparam["pgd6comm"] = currAsst.UdfFields["MSW_UDF_FV_PGD_6_comments"].Value;

    updateAsst_inputparam["wah1comm"] = currAsst.UdfFields["MSW_UDF_FV_WAH_1_comments"].Value;
    updateAsst_inputparam["wah2comm"] = currAsst.UdfFields["MSW_UDF_FV_WAH_2_comments"].Value;
    updateAsst_inputparam["wah3comm"] = currAsst.UdfFields["MSW_UDF_FV_WAH_3_comments"].Value;
    updateAsst_inputparam["wah4comm"] = currAsst.UdfFields["MSW_UDF_FV_WAH_4_comments"].Value;
    updateAsst_inputparam["wah5comm"] = currAsst.UdfFields["MSW_UDF_FV_WAH_5_comments"].Value;
    updateAsst_inputparam["wah6comm"] = currAsst.UdfFields["MSW_UDF_FV_WAH_6_comments"].Value;
    updateAsst_inputparam["wah7comm"] = currAsst.UdfFields["MSW_UDF_FV_WAH_7_comments"].Value;
    updateAsst_inputparam["wah8comm"] = currAsst.UdfFields["MSW_UDF_FV_WAH_8_comments"].Value;

    updateAsst_inputparam["vto1comm"] = currAsst.UdfFields["MSW_UDF_FV_VTO_1_comments"].Value;
    updateAsst_inputparam["vto2comm"] = currAsst.UdfFields["MSW_UDF_FV_VTO_2_comments"].Value;
    updateAsst_inputparam["vto3comm"] = currAsst.UdfFields["MSW_UDF_FV_VTO_3_comments"].Value;
    updateAsst_inputparam["vto4comm"] = currAsst.UdfFields["MSW_UDF_FV_VTO_4_comments"].Value;
    updateAsst_inputparam["vto5comm"] = currAsst.UdfFields["MSW_UDF_FV_VTO_5_comments"].Value;
    updateAsst_inputparam["vto6comm"] = currAsst.UdfFields["MSW_UDF_FV_VTO_6_comments"].Value;

    updateAsst_inputparam["scoreid"] = currAsst.UdfFields["MSW_VV_SCOREID"].Value.Id;
    updateAsst_inputparam["scorename"] = "";
    updateAsst_inputparam["othercomm"] = currAsst.UdfFields["MSW_UDF_FV_OTHER_comments"].Value;

    updateAsst_inputparam["locId"] = currAsst.Location.Id;
    updateAsst_inputparam["locName"] = currAsst.Location.Name;
    updateAsst_inputparam["pricompid"] = currAsst.UdfFields.primarycompanyid.Value.Id;
    updateAsst_inputparam["pricompname"] = currAsst.UdfFields.primarycompanyid.Value.Name;
    updateAsst_inputparam["wkcrewsubid"] = currAsst.UdfFields.wkcrewsubofprimid.Value.Id;
    updateAsst_inputparam["wkcrewsubname"] = currAsst.UdfFields.wkcrewsubofprimid.Value.Name;
    updateAsst_inputparam["timeid"] = currAsst.UdfFields.timeofdayid.Value.Id;
    updateAsst_inputparam["timename"] = currAsst.UdfFields.timeofdayid.Value.Name;
    updateAsst_inputparam["wforceid"] = currAsst.UdfFields.workforcetypeid.Value.Id;
    updateAsst_inputparam["wforcename"] = currAsst.UdfFields.workforcetypeid.Value.Name; 

    updateAsst_inputparam["otherspecialact"] = currAsst.UdfFields.mswotherspecactshortnote.Value;
    updateAsst_inputparam["specificloc"] = currAsst.UdfFields.mswspecificlocation.Value;
    updateAsst_inputparam["subcontname"] = currAsst.UdfFields.mswsubcontractorname.Value;

    updateAsst_inputparam["workflowId"] = currAsst.WorkflowStatus.Id;
    updateAsst_inputparam["worflowName"] = currAsst.WorkflowStatus.Name;

    updateAsst_inputparam["engagementdt"] = currAsst.UdfFields.engagementdt.Value;
    updateAsst_inputparam["ConductedDateUTC"] = currAsst.ConductedDateUTC;
    updateAsst_inputparam["ReportedDateUTC"] = currAsst.ReportedDateUTC;
    updateAsst_inputparam["Version"] = "1";

    updateAsst_inputparam["emid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[0].Id;
    updateAsst_inputparam["jsaid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[1].Id;
    updateAsst_inputparam["ptwid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[2].Id;
    updateAsst_inputparam["sseid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[3].Id;
    updateAsst_inputparam["cseid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[4].Id;
    updateAsst_inputparam["divid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[5].Id;
    updateAsst_inputparam["deenid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[6].Id;
    updateAsst_inputparam["liveid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[7].Id;
    updateAsst_inputparam["entryid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[8].Id;
    updateAsst_inputparam["noentid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[9].Id;
    updateAsst_inputparam["hwid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[10].Id;
    updateAsst_inputparam["iheid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[11].Id;
    updateAsst_inputparam["liftid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[12].Id;
    updateAsst_inputparam["otherid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[13].Id;
    updateAsst_inputparam["portid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[14].Id;
    updateAsst_inputparam["vacid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[15].Id;
    updateAsst_inputparam["workid"] = currAsst.UdfFields['udf-msw-specialized-activity-flagsgroup2'].Value[16].Id;

    if(category == "chesmfv")
    {

      updateAsst_inputparam["AssessmentTypeId"] = "209";
      updateAsst_inputparam["AssessmentTypeName"] = "CHESM Field Verification";

    }else{
      updateAsst_inputparam["AssessmentTypeId"] = "208";
      updateAsst_inputparam["AssessmentTypeName"] = "Field Verification";
    } 

    updateAsst_inputparam["workflowId"] = "4";
    updateAsst_inputparam["workflowName"] = "Closed";

    updateAsst_inputparam["serviceID"] = "Assessments$UpdateAssessment_FV";
    var updateAsst_httpheaders = {
      "Content-Type":"application/json",
      "Authorization": "ImpactAPI token=\"" + Authorization + "\""
    };
    updateAsst_inputparam["httpheaders"] = updateAsst_httpheaders;
    var updateAsst_httpconfigs = {};
    updateAsst_inputparam["httpconfig"] = updateAsst_httpconfigs;
    //alert(JSON.stringify(updateAsst_inputparam));
    Assessments$UpdateAssessment_FV = mfintegrationsecureinvokerasync(updateAsst_inputparam, "Assessments", "UpdateAssessment_FV", updateAssessment_callback);
    kony.application.showLoadingScreen(loadingSkin, "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, null);

  }catch(err){
    //alert(""+JSON.stringify("err in update fv assessment "+err) );
  }
}

function updateAssessment_callback(status, UpdateAssessment){
  try{ //alert("UpdateAssessment_Callback\n" + JSON.stringify(UpdateAssessment));
    if(status == 400){

      if(UpdateAssessment["opstatus"] === 0){

        kony.application.dismissLoadingScreen();
        kony.print("UpdateAssessment\n"+JSON.stringify(UpdateAssessment));
        //serverName = decode(UpdateAssessment.FileBody); kony.print("UpdateAssessment serverName: "+serverName);
        if(UpdateAssessment.AssessmentId){
         // callPopup("The engagement - "+UpdateAssessment.AssessmentId + ", was successfully transmitted.");
         // frmOneClear();
         // frmTwoClear();
         // CancelAssessment();
          
           popupConfirm.lblPopTxt.text="The engagement - "+UpdateAssessment.AssessmentId + ", was successfully transmitted. Do you want to email the form?";
           popupConfirm.show();
          
          //     assessmentId = null;
          //     engId = null;
          //frmDashboard.show();
        }
        else{
          //alert(JSON.stringify(UpdateAssessment));
          callPopup("Connectivity issues prevent this engagement to be submitted. Please click save and retry when the connectivity issues are resolved.\n");
        }

      }
      else if(UpdateAssessment["opstatus"] === 8009){
        kony.application.dismissLoadingScreen();
        if(UpdateAssessment.httpStatusCode == 401){
          var updateErr = JSON.parse(UpdateAssessment.Errors);
          if(updateErr.Message == "Unknown user name or password"){
            callPopup("Unknown user name or password, please contact your IMPACT Administrator");
          }else if(updateErr.Message == "Account is locked"){
            callPopup("Account is locked, please contact your IMPACT Administrator");
          }else if(updateErr.Message == "Authentication required"){
            sessionexpired();
          }else{
            callPopup("Unable to process your request, please try again ");
          }
        }else if(UpdateAssessment.httpStatusCode == 403){
          callPopup("User has no access to create/update an assessment");

        }else if(UpdateAssessment.httpStatusCode == 409){
          callPopup("The engagement has been edited in IMPACT which generated a conflict.");

        }else{
          callPopup("Unable to process your request, please try again");
        }
      }

      else if(UpdateAssessment["opstatus"] === 9001 || UpdateAssessment["opstatus"] === 1000 || UpdateAssessment["opstatus"] === 8005){
        kony.application.dismissLoadingScreen();
        callPopup("Sorry! We are Unable to process your request at this time, Kindly come back after some time. We appriciate your patience");
      }
      else{
        kony.application.dismissLoadingScreen();
        var updateAssRes = JSON.parse(UpdateAssessment["httpResponse"]["response"]);


        if(updateAssRes.httpStatusCode == 401){
          var updateErr = JSON.parse(updateAssRes.Errors);
          if(updateErr.Message == "Unknown user name or password"){
            callPopup("Unknown user name or password, please contact your IMPACT Administrator");
          }else if(updateErr.Message == "Account is locked"){
            callPopup("Account is locked, please contact your IMPACT Administrator");
          }else if(updateErr.Message == "Authentication required"){
            sessionexpired();
          }else{
            callPopup("Unable to process your request, please try again ");
          }
        }else if(updateAssRes.httpStatusCode == 403){
          callPopup("User has no access to create/update an assessment");

        }else if(updateAssRes.httpStatusCode == 409){
          callPopup("The engagement has been edited in IMPACT which generated a conflict.");

        }else{
          callPopup("Unable to process your request, please try again");
        }


      }

    }
  }catch(err){
    kony.print("error in UpdateAssessment_Callback function "+err);
  }
}