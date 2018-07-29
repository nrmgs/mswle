
function getSpecializedActvty(){
  
  var selectedKey = frmForm2.cbxSpecializedActivity.selectedKeyValues;
  if(selectedKey != null || selectedKey != undefined){
    for(i = 0; i < selectedKey.length;i++){

      var keyOther = selectedKey[i][0];
      if(keyOther == "614"){ //Other
        frmForm2.flxOtherActivity.setVisibility(true);
        //frmForm2.flxPermit.top = 1400;
      }else{
        frmForm2.flxOtherActivity.setVisibility(false);
        //frmForm2.flxPermit.top = 1290;
      }
    }
  }else{
        frmForm2.flxOtherActivity.setVisibility(false);
        //frmForm2.flxPermit.top = 1290;
      }
}



function frmOneClear(){
  
  frmForm1.txtEngagSite.text = "";
  frmForm1.txtEngagDept.text = "";
  frmForm1A.txtEngagLocation.text = "";
  frmForm1A.txtEngagPriContractor.text = "";
  frmForm1A.txtSubContrName.text = "";
  
  frmPreConfirmA.txtEngagSite.text = "";
  frmPreConfirmA.txtEngagDept.text = "";
  frmPreConfirmB.txtEngagLocation.text = "";
  frmPreConfirmB.txtEngagPriContractor.text = "";
  frmPreConfirmB.txtSubContrName.text = "";
}

function frmTwoClear(){
    
  frmForm2.txtEngagSpecificLoc.text = "";
  frmForm2.cbxEngagTimeofDay.selectedKey = null;
  frmForm2.cbxWorkForceTyp.selectedKey = null;
  frmForm2.cbxWorkCrew.selectedKey = null;
  //frmForm2.txtSubContrName.text = "";
  frmForm2.cbxSpecializedActivity.selectedKeys = null;
  frmForm2.txtOtherSpecilizedAct.text = "";
  frmForm2.txtPermitNum.text = "";
  frmForm2.txtPermitDetails.text = "";
  frmForm2.flxPermit.top = 1290;
}


 








