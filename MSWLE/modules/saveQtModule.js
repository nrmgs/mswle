//Type your code here

function saveSelQt(source){

  var noQtAnsrd = 0;
  var dataForRowTemp = [];
  var NotAnswered = "";
  var length = arrForDyAns[itemSel1].length;//frmDynamicJSA1.segDynamicRowTemp.data.length;

  if (itemSel1 == 13 ) {
    var comment = frmDynamicJSA1.dynaRowScore.flxRowScore.txtAreaComments.text;
    currAsst.UdfFields["MSW_UDF_FV_OTHER_comments"].Values = {9:comment};
    currAsst.UdfFields["MSW_UDF_FV_OTHER_comments"].Value = comment;
    if (isEmpty(comment)===true) noQtAnsrd = noQtAnsrd+1;
    if (score > 0) noQtAnsrd = noQtAnsrd+1;

  }
  else {
    for( i=0; i<frmDynamicJSA1.segDynamicRowTemp.data.length; i++){

      var qtE = frmDynamicJSA1.segDynamicRowTemp.data[i]["lblDynaQt"];

      var index = arrForDyAns[itemSel1].map((obj) => obj.qt).indexOf(qtE);

      var field = frmDynamicJSA1.segDynamicRowTemp.data[i].field;
      var commId = frmDynamicJSA1.segDynamicRowTemp.data[i].commId;
      var yesId = frmDynamicJSA1.segDynamicRowTemp.data[i]["yesId"];
      var noId = frmDynamicJSA1.segDynamicRowTemp.data[i]["noId"];

      var selQtNoArray = qtE.split(".");
      var selQtNo = selQtNoArray[0];
      var sknNo = frmDynamicJSA1.segDynamicRowTemp.data[i]["imgQtNo"]["skin"];
      var sknYes = frmDynamicJSA1.segDynamicRowTemp.data[i]["imgQtYes"]["skin"];
      var comtEntrd = frmDynamicJSA1.segDynamicRowTemp.data[i]["txtAreaComments"].text;
      //alert("sknNo: " + sknNo);

      //alert("index:"+index+"\ni:"+i+"\nfield:"+field+"\ncommId:"+commId+"\nyesId:"+yesId+"\nnoId:"+noId);  
      if(category == "generic" && sknNo == "sknChkBxNoSel") {    
        //alert("count!!");                         
        noQtAnsrd = noQtAnsrd+1;
        currAsst.UdfFields[field].Value = [{Id: noId, Name:"No"}];      
      } 

      if (category == "jsa") {
        if(selQtNo == "2A" || selQtNo == "4A"||selQtNo == "5A"||selQtNo == "10A"||selQtNo == "29A"){
          length = length - 1;
          if (sknNo == "sknChkGray") length = length - 1;
          if(sknYes == "sknChkBxSelec") noQtAnsrd = noQtAnsrd-1;
        }
      }

      if (category == "ptw") {

        if(selQtNo == "3A" || selQtNo == "7A"|| selQtNo == "8A"||selQtNo == "10A"||selQtNo == "13A"){
          length = length - 1;
          if (sknNo == "sknChkGray") length = length - 1;
          if(sknYes == "sknChkBxSelec") noQtAnsrd = noQtAnsrd-1;
        } else if(selQtNo == "14A"){
          length = length - 1;
          if (sknNo == "sknChkGray") length = length - 2;
          if(sknYes == "sknChkBxSelec") noQtAnsrd = noQtAnsrd-1;
        } else if(selQtNo == "20A"){
          length = length - 1;
          if (sknNo == "sknChkGray") length = length - 3;
          if(sknYes == "sknChkBxSelec") noQtAnsrd = noQtAnsrd-1;
        }
      }

      if(sknNo == "sknChkBxNoSel" && comtEntrd === "" && commId !== ""){
        NotAnswered += "," +selQtNo;
      }

      else if (sknNo == "sknChkBxNoSel" && commId === "") { //feedback
        noQtAnsrd = noQtAnsrd+1;
        currAsst.UdfFields[field].Value = [{Id: noId, Name:"No"}];
      }else if(sknNo == "sknChkBxNoSel" && comtEntrd !== ""){
        noQtAnsrd = noQtAnsrd+1;
        currAsst.UdfFields[field].Value = [{Id: noId, Name:"No"}];
      }else if(sknNo == "sknChkGray"){
        //noQtAnsrd = noQtAnsrd+1; //skipped questions shouldnt be counted
        //length = length-1;
        currAsst.UdfFields[field].Value = [{Id: noId, Name:"No"}];
      }else if(sknYes == "sknChkBxSelec"){
        noQtAnsrd = noQtAnsrd+1;
        currAsst.UdfFields[field].Value = [{Id: yesId, Name:"Yes"}];
      } else if(sknNo == "sknChkBxPlain" || sknYes == "sknChkBxPlain") {
        currAsst.UdfFields[field].Value = [{Id: null, Name:""}];
      }

      arrForDyAns[itemSel1][index].skinNo = sknNo;
      arrForDyAns[itemSel1][index].skinYes = sknYes;
      arrForDyAns[itemSel1][index].comts = comtEntrd;

      //save comment whatever it is
      if (commId != "") {
        currAsst.UdfFields[commId].Values = {9:comtEntrd};
        currAsst.UdfFields[commId].Value = comtEntrd;
      }


      //     alert("field: "+field+
      //           "\nsknNo: " + sknNo+
      //           "\sknYes: " + sknYes+
      //           "\nupdated field: " +JSON.stringify(currAsst.UdfFields[field].Value) +
      //           "\nupdated comment: " + JSON.stringify(currAsst.UdfFields[commId]));

    }
  }

  if (category === "generic") NotAnswered = ""; //comments are not a required field for No in Generic 

  if (NotAnswered !== "") {
    NotAnswered = NotAnswered.slice(1);
    callPopup("Please enter comments for the following questions: \n"+NotAnswered);     
    return false;
  } else
  {
    if (itemSel1 == 13) arrForQtAns[itemSel1] = [noQtAnsrd,2];
    else arrForQtAns[itemSel1] = [noQtAnsrd,length]; 
    //alert(itemSel1+"itemSel1: "+arrForQtAns[itemSel1]);
    if (source == "Home") SaveAssessment();
    else frmQtCategory1.show();
  }
}
var score = null;
function onSelectScore(obj) {
  score = frmDynamicJSA1.lbScore.selectedKey;
  currAsst.UdfFields.MSW_VV_SCOREID.Value = {"Id":score, "Name":""};

}