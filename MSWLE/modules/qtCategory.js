//Type your code here



function submitToCall(){
  
 if(itemSel.length > 0){   
   popupSubmit.lblPopTxt.text = "Are you sure you’re ready to submit to IMPACT?";
   popupSubmit.show();
 }else{
   
   popupSubmit.lblPopTxt.text = "You have not answered any of the questions. Are you sure you’re ready to submit to IMPACT?";
   popupSubmit.show();
 }
}

function popSubYes(){
  itemSel = [];
  popupSubmit.dismiss();
  frmDashboard.show();
 
}
function popSubNo(){
  popupSubmit.dismiss();
 
}

function popCancelSub(){
   popupCancel.lblPopTxt.text = "Are you sure want to cancel? Unsaved data will be lost.";
   popupCancel.show();
 
}

function popCancelYes(){
  popupCancel.dismiss();
  //alert("popCancelYes engId: " + engId);
  //delete from local db
  var currenrtFrm = kony.application.getCurrentForm().id;
  if(currenrtFrm == "frmDynamicJSA1"){
    frmQtCategory1.show();
  }else{
    if (currenrtFrm !== "frmForm1"){
      CancelAssessment();
    } 
    else if (currenrtFrm === "frmForm1") {
      if (isEmpty(engId) == false) {
      resetGlbVariables();
      frmDashboard.show();
      }
      else CancelAssessment();
    }
  }
}
function popCancelNo(){
  popupCancel.dismiss();
 
}

function skipQuestions(){
  var answeredCat = 0;
   for( i=0; i<arrayQtAns.length; i++){
     //alert(arrForQtAns[i]+" : "+arrForQtAns[i][0]);
     if (arrForQtAns[i][0] > 0) answeredCat = answeredCat + 1;
   }
  //alert("answeredCat: " + answeredCat);
  
 if(answeredCat > 0){   
   UpdateAssessment();
 }else{
   
   popupSave.lblPopTxt.text = "You have not answered any of the questions. Are you sure want to continue?";
   popupSave.show();
 }
}

function cancelToLocDB(){
   popupSave.lblPopTxt.text = "Are you sure want to cancel?";
   popupSave.show();

}

function popsaveYes() {
  UpdateAssessment();
  popupSave.dismiss();
}


function popsaveNo(){
  popupSave.dismiss();
 
}