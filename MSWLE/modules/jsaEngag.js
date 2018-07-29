//Type your code here

var JSAQtCatLst = new Array();
JSAQtCatLst[0] = "Preparation";
JSAQtCatLst[1] = "General Documentation";
JSAQtCatLst[2] = "Hazard Analysis & Safeguard Doc";
JSAQtCatLst[3] = "Stop Work Authority";
JSAQtCatLst[4] = "Human Performance";
JSAQtCatLst[5] = "Verification & Validation";
JSAQtCatLst[6] = "Communication";
JSAQtCatLst[7] = "Close Out/Debrief";
JSAQtCatLst[8] = "Feedback";

var JSAQtHeader = new Array();
var FVQtHeader = [];

FVQtHeader = ["Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C"];

var ChesmFVQtHeader = [];

ChesmFVQtHeader = ["Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C","Section C"];


JSAQtHeader = ["The JSA was facilitated and documented in the following detail:",
               "General information was documented on the  JSA in the following detail:",
               "High consequence potential hazards and corresponding safeguards have been documented in the following detail:",
               "Stop work authority was discussed and documented on the JSA in the following detail:",
               "Human performance was discussed and documented on the JSA in the following detail:",
               "Verification and validation of safeguards prior to beginning work was discussed and documented on the JSA in the following detail:",   
               "The complete JSA was discussed and documented in the following detail:",
               "Upon completion of the task the following close out activities were discussed and documented on the JSA:",
               "Feedback Question"];


PTWQtHeader = ["Permits and work plans were prepared and documented in the following detail:",
               "General information was documented on the  permit(s)/work plan(s) in the following detail:",
               "Approval and acknowledgment of permit(s)/work plan(s) were documented in the following detail:",
               "Gas testing was planned, executed and documented on the permit in the following detail:",
               "Permit and work plan conditions were communicated with the work crew in the following detail:",
               "The PMCoW (and Area Controller if applicable) monitored the worksite in the following manner:",   
               "The work pack was maintained in the following manner:",
               "Permits were revalidated in the following manner:",
               "Feedback Question"];

GenericQtHeader = ["The engagement took place in the following location:",
                   "The engagement discussion included the following topic:",
                   "During the engagement, the following key focus areas were reinforced:",
                   "The engagement included the following personnel:",
                   "Feedback Question"];


var JSAQtAns = new Array();
JSAQtAns[0] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-prep-1-comments",noId:151,yesId:115,field:"udf-msw-jsa-eng-sectionc-prep-1", qt:"1.The JSA was conducted onsite where the work was scheduled to be conducted.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-prep-2a-comments",noId:152,yesId:116,field:"udf-msw-jsa-eng-sectionc-prep-2a", qt:"2A.Was a Planning Phase Hazard Analysis (PPHA) required for the task?  (If 'No', skip question 2B).",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-prep-2b-comments",noId:153,yesId:117,field:"udf-msw-jsa-eng-sectionc-prep-2b", qt:"2B.The PPHA was used to aid in the development of the JSA.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-prep-3-comments",noId:154,yesId:118,field:"udf-msw-jsa-eng-sectionc-prep-3", qt: "3.Permits were used to aid in the development of the JSA.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-prep-4a-comments",noId:155,yesId:119,field:"udf-msw-jsa-eng-sectionc-prep-4a", qt:"4A.Was a work plan (lift plan/SIMOPs plan) required for the task?  (If 'No', skip question 4B).",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-prep-4b-comments",noId:156,yesId:120,field:"udf-msw-jsa-eng-sectionc-prep-4b", qt:"4B.Work plans were used to aid in the development of the JSA.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-prep-5a-comments",noId:157,yesId:121,field:"udf-msw-jsa-eng-sectionc-prep-5a", qt:"5A.Was a library JSA used for this task?  (If 'No', skip question 5B).",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-prep-5b-comments",noId:158,yesId:122,field:"udf-msw-jsa-eng-sectionc-prep-5b", qt:"5B.Was the library JSA discussed and revised onsite by the work team?",ans:"none"}];

JSAQtAns[1] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-gendoc-6-comments",noId:159,yesId:123,field:"udf-msw-jsa-eng-sectionc-gendoc-6", qt:"6.Work location was documented on the JSA.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-gendoc-7-comments",noId:160,yesId:124,field:"udf-msw-jsa-eng-sectionc-gendoc-7", qt:"7.The task description was documented on the JSA.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-gendoc-8-comments",noId:161,yesId:125,field:"udf-msw-jsa-eng-sectionc-gendoc-8", qt:"8.Required PPE for the task was documented on the JSA.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-gendoc-9-comments",noId:162,yesId:126,field:"udf-msw-jsa-eng-sectionc-gendoc-9", qt:"9.Required tools & equipment necessary to complete the task were documented on the JSA.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-gendoc-10a-comments",noId:163,yesId:127,field:"udf-msw-jsa-eng-sectionc-gendoc-10a", qt:"10A.Were procedures (e.g.operating, maintenance, safety, D&C, etc.) necessary to conduct the task?  (If 'No', skip question 10B).",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-gendoc-10b-comments",noId:164,yesId:128,field:"udf-msw-jsa-eng-sectionc-gendoc-10b", qt:"10B.Required procedures were documented on the JSA and available at the worksite for the work team.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-gendoc-11-comments",noId:165,yesId:129,field:"udf-msw-jsa-eng-sectionc-gendoc-11", qt:"11.Emergency contact information was documented on the JSA.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-gendoc-12-comments",noId:166,yesId:130,field:"udf-msw-jsa-eng-sectionc-gendoc-12", qt:"12.General hazards were documented on the JSA.",ans:"none"}];

JSAQtAns[2] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-hazanal-13-comments",noId:167,yesId:131,field:"udf-msw-jsa-eng-sectionc-hazanal-13", qt:"13.All steps associated with the work task were discussed and documented on the JSA.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-hazanal-14-comments",noId:169,yesId:133,field:"udf-msw-jsa-eng-sectionc-hazanal-14", qt:"14.High consequence potential hazards were discussed and documented for each individual work step.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-hazanal-15-comments",noId:170,yesId:134,field:"udf-msw-jsa-eng-sectionc-hazanal-15", qt:"15.The potential for dropped objects was discussed and documented for each individual work step.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-hazanal-16-comments",noId:171,yesId:135,field:"udf-msw-jsa-eng-sectionc-hazanal-16", qt:"16.Safeguards/mitigations were discussed and documented for each hazard identified.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-hazanal-17-comments",noId:172,yesId:136,field:"udf-msw-jsa-eng-sectionc-hazanal-17", qt:"17.A responsible person was designated and documented to implement each identified safeguard.",ans:"none"},
              ];

JSAQtAns[3] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-stopwk-18-comments",noId:173,yesId:137,field:"udf-msw-jsa-eng-sectionc-stopwk-18", qt:"18.The SBU's Stop Work Authority Policy was discussed with the work crew.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-stopwk-19-comments",noId:174,yesId:138,field:"udf-msw-jsa-eng-sectionc-stopwk-19", qt:"19.Stop work situations specific to the task were discussed and documented on the JSA.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-stopwk-20-comments",noId:175,yesId:139,field:"udf-msw-jsa-eng-sectionc-stopwk-20", qt:"20.Critical steps where work must be stopped if not executed exactly as planned were discussed and documented on the JSA.",ans:"none"},
              ];

JSAQtAns[4] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-humperf-21-comments",noId:176,yesId:140,field:"udf-msw-jsa-eng-sectionc-humperf-21", qt:"21.The work team discussed and documented individual factors and potential error traps (e.g.fatigue, stress, distractions, poor communication, vague work guidance, etc.) on the JSA.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-humperf-22-comments",noId:177,yesId:141,field:"udf-msw-jsa-eng-sectionc-humperf-22", qt:"22.The work team discussed and documented performance modes (e.g.skill based, rule based, knowledge based) on the JSA.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-humperf-23-comments",noId:178,yesId:142,field:"udf-msw-jsa-eng-sectionc-humperf-23", qt:"23.The work team discussed actions to take if unplanned conditions or events occur (e.g.stop and seek assistance, etc.).",ans:"none"},
              ];

JSAQtAns[5] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-vnv-24-comments",noId:179,yesId:143,field:"udf-msw-jsa-eng-sectionc-vnv-24", qt:"24.The Person Managing Control of Work (or assigned responsible person) visually verified/validated each documented safeguard was in place and functioning appropriately prior to authorizing work team to begin work.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-vnv-25-comments",noId:180,yesId:144,field:"udf-msw-jsa-eng-sectionc-vnv-25", qt:"25.Verification & validation was documented (e.g.signature, initials, etc.) on the JSA prior to work activities beginning.",ans:"none"},

              ];

JSAQtAns[6] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-comm-26-comments",noId:181,yesId:145,field:"udf-msw-jsa-eng-sectionc-comm-26", qt:"26.The PMCoW facilitated the JSA discussion & documentation with the entire work team.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-comm-27-comments",noId:182,yesId:146,field:"udf-msw-jsa-eng-sectionc-comm-27", qt:"27.All work team members acknowledged their participation in and understanding of the JSA by signing the JSA.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-comm-28-comments",noId:183,yesId:147,field:"udf-msw-jsa-eng-sectionc-comm-28", qt:"28.The PMCoW signed the JSA prior to authorizing the work team to begin work activities.",ans:"none"},
              ];

JSAQtAns[7] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-close-29a-comments",noId:184,yesId:148,field:"udf-msw-jsa-eng-sectionc-close-29a", qt:"29A.Was the task close out/debrief observed during this engagement?  (If 'No', skip question 29B).",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-jsa-eng-sectionc-close-29b-comments",noId:185,yesId:149,field:"udf-msw-jsa-eng-sectionc-close-29b", qt:"29B.The PMCoW discussed and documented the completed task with the entire work team (including what went well, lessons learned, etc.).",ans:"none"},
              ];

JSAQtAns[8] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"",noId:186,yesId:150,field:"udf-msw-jsa-eng-sectionc-fdbk-999", qt:"Was feedback provided to the team during the close-out of this engagement?",ans:"none"}
              ];


var arrForQtAns = new Array();
var arrForDyAns = new Array();
var arrayLen = new Array();
var qtCategoryFrom = "";
function initQtAnsArr()
{

  if(qtCategoryFrom == "new"){

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

    for (i=0; i < arrayLen.length; i++)	{
      if (arrayQtAns[i] == "Other (including local V&V)") arrForQtAns[i] = [0 , 2];

      var total = arrayLen[i].length;

      if (category== "jsa") {
        //alert("arrayLen[i].length:" +arrayLen[i].length+"\narrayLen[i]:"+JSON.stringify(arrayLen[i]));
        for (var j=0; j < arrayLen[i].length; j++) {
          var qt = arrayLen[i][j].qt;
          var selQtNoArray = qt.split(".");
          var selQtNo = selQtNoArray[0]; 
          if(selQtNo == "2A" || selQtNo == "5A"||selQtNo == "4A"||selQtNo == "10A"||selQtNo == "29A"){
            total = total - 1;
          }
        }
      } else if (category == "ptw") {

        for (var j=0; j < arrayLen[i].length; j++) {
          var qt = arrayLen[i][j].qt;
          var selQtNoArray = qt.split(".");
          var selQtNo = selQtNoArray[0]; 
          if(selQtNo == "3A" || selQtNo == "7A"|| selQtNo == "8A"||selQtNo == "10A"||selQtNo == "13A"||selQtNo == "14A"||selQtNo == "20A"){
            total = total - 1;
          }
        }

      }

      arrForQtAns[i] = [0 , total];

    }

  }
}


//  question category selection
function setJSAQtCatLst(){
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
  //alert(arrForQtAns[0][0]+"\nsetJSAQtCatLst arrForQtAns "+JSON.stringify(arrForQtAns)); return;
  frmQtCategory1.segMain.widgetDataMap ={lblCategory:"lblCategory",lblQtAns:"lblQtAns",imgQtCatPlain:"imgQtCatPlain"};
  var dataForRowTemp  = [];

  for( i=0; i<arrayQtAns.length; i++){
    //alert(i+"arrForQtAns[i]: "+arrForQtAns[i]); //arrForQtAns[i][0]
    var data  =  {lblCategory: arrayQtAns[i], lblQtAns:arrForQtAns[i][0]+"/"+arrForQtAns[i][1],imgQtCatPlain:{skin:"sknQtCatPlain"},template:flxQtCatgry1};

    if(category == "fieldverification" || category == "chesmfv"){
      var selectedKey = frmForm2.cbxSpecializedActivity.selectedKeyValues;
      if(selectedKey != null || selectedKey != undefined){
        for(j = 0; j < selectedKey.length;j++){
          var keyOther = selectedKey[j][1];
          var index = arrayQtAns.indexOf(selectedKey[j][1]);
          //alert("selectedKey[j][0] "+selectedKey[j][0]+"\nselectedKey[j][1] "+selectedKey[j][1]+"\nindex "+index+"\narrayQtAns[i] "+arrayQtAns[i]+"\nJSON stringify selectedKey "+JSON.stringify(selectedKey[j]));  
          if(keyOther == arrayQtAns[i]){ //Other
            dataForRowTemp.push(data);
          }
        }
      }
      else{
        dataForRowTemp.push(data); 
      }
    }
    else{
      dataForRowTemp.push(data); 
    }


  }

  frmQtCategory1.segMain.setData(dataForRowTemp);  
  frmQtCategory1.show();
}
var arrayQtAns = [];
//var arrayLen = [];
var arrQtSecHdr = [];

function setQtJSA(){

  var skinSelected = "sknChkBxSelec";
  var skinUnSelect = "sknChkBxPlain";
  var dataForRowTemp = [];

  frmDynamicJSA1.segDynamicRowTemp.widgetDataMap = {commId: "commId", yesId:"yesId", noId:"noId", field:"field",lblDynaQt:"lblDynaQt",lblQtYes:"lblQtYes",imgQtNo:"imgQtNo",imgQtYes:"imgQtYes",lblQtNo:"lblQtNo",txtAreaComments:"txtAreaComments"};

  if(category == "jsa"){
    if(qtCategoryFrom == "new")
      arrForDyAns = JSAQtAns;
    arrQtSecHdr = JSAQtHeader;
  }else if(category == "fieldverification"){
    if(qtCategoryFrom == "new")
      arrForDyAns = FVQtAns;
    arrQtSecHdr = FVQtHeader;
  }else if(category == "ptw"){
    if(qtCategoryFrom == "new")
      arrForDyAns = PTWQtAns;
    arrQtSecHdr = FVQtHeader;
  }else if(category == "generic"){
    if(qtCategoryFrom == "new")
      arrForDyAns = GenericQtAns;
    arrQtSecHdr = JSAQtHeader;
  }else if(category == "chesmfv"){
    if(qtCategoryFrom == "new")
      arrForDyAns = ChesmFVQtAns;
    arrQtSecHdr = ChesmFVQtHeader;
  }

  //alert("jsa"+JSON.stringify(JSAQtAns) );
  //alert(itemSel1+" arrForDyAns\n"+JSON.stringify(arrForDyAns[itemSel1]));
  //alert("jsa"+JSAQtAns)
  for( i=0; i<arrForDyAns[itemSel1].length; i++){
    var skinNo = arrForDyAns[itemSel1][i].skinNo;
    var skinYes = arrForDyAns[itemSel1][i].skinYes;
    var comts = arrForDyAns[itemSel1][i].comts;
    var qt = arrForDyAns[itemSel1][i].qt;
    var commId = arrForDyAns[itemSel1][i].commId;
    var selQtNoArray = qt.split(".");
    var selQtNo = selQtNoArray[0]; 
    var visible = true;
    if (commId === "") visible = false;

    var data;
    if (commId === "MSW_UDF_FV_OTHER_comments") {
      data = {commId: commId, yesId: arrForDyAns[itemSel1][i].yesId, noId: arrForDyAns[itemSel1][i].noId, field: arrForDyAns[itemSel1][i].field,lblDynaQt:arrForDyAns[itemSel1][i].qt, lblQtYes:"Yes",imgQtNo:{info:{key:i,qt:arrForDyAns[itemSel1][i].qt,comts:""},skin:skinNo},imgQtYes:{info:{key:i,qt:arrForDyAns[itemSel1][i].qt,comts:""},skin:skinYes},lblQtNo:"No",txtAreaComments:{text:comts,placeholder:"Comments", isVisible: visible},template:dynaRowScore};
    } else {
      data = {commId: commId, yesId: arrForDyAns[itemSel1][i].yesId, noId: arrForDyAns[itemSel1][i].noId, field: arrForDyAns[itemSel1][i].field,lblDynaQt:arrForDyAns[itemSel1][i].qt, lblQtYes:"Yes",imgQtNo:{info:{key:i,qt:arrForDyAns[itemSel1][i].qt,comts:""},skin:skinNo},imgQtYes:{info:{key:i,qt:arrForDyAns[itemSel1][i].qt,comts:""},skin:skinYes},lblQtNo:"No",txtAreaComments:{text:comts,placeholder:"Comments", isVisible: visible},template:dynaRowFlex};
    }
    dataForRowTemp.push(data); 
  }


  frmDynamicJSA1.segDynamicRowTemp.data = [];
  frmDynamicJSA1.segDynamicRowTemp.setData(dataForRowTemp);  

  for( i=0; i<frmDynamicJSA1.segDynamicRowTemp.data.length; i++){
    var qtE = frmDynamicJSA1.segDynamicRowTemp.data[i]["lblDynaQt"];
    var skinYes = frmDynamicJSA1.segDynamicRowTemp.data[i]["imgQtYes"]["skin"];
    var skinNo = frmDynamicJSA1.segDynamicRowTemp.data[i]["imgQtNo"]["skin"];   
    var selQtNoArray = qtE.split(".");
    var selQtNo = selQtNoArray[0]; 

    if (category == "jsa" && skinNo == "sknChkGray") {
      if (selQtNo == "2A" ||selQtNo == "5A"||selQtNo == "10A"||selQtNo == "29A")  {
        //noSelect(selQtNo,i);
        frmDynamicJSA1.segDynamicRowTemp.removeAt(i+1); 
      } else if (selQtNo == "4A") {
        frmDynamicJSA1.segDynamicRowTemp.removeAt(i+1); 
      }
    } else if (category == "ptw" && skinNo == "sknChkGray") {
      if(selQtNo == "3A" || selQtNo == "7A"|| selQtNo == "8A"||selQtNo == "10A"||selQtNo == "13A"){
        frmDynamicJSA1.segDynamicRowTemp.removeAt(i+1); 
      } else if(selQtNo == "14A"){
        frmDynamicJSA1.segDynamicRowTemp.removeAt(i+2); 
        frmDynamicJSA1.segDynamicRowTemp.removeAt(i+1); 

      } else if(selQtNo == "20A"){
        for (var j=4; j>=1; j--) {
          frmDynamicJSA1.segDynamicRowTemp.removeAt(i+j);
        }
      }
    }
  }
  //frmDynamicJSA1.segDynamicRowTemp.scrollsToTop = true;
  if (itemSel1 == 13) {
    frmDynamicJSA1.dynaRowScore.setVisibility(true);
    frmDynamicJSA1.segDynamicRowTemp.setVisibility(false);
  }
  else {
    frmDynamicJSA1.dynaRowScore.setVisibility(false);
    frmDynamicJSA1.segDynamicRowTemp.setVisibility(true);
  }
  frmDynamicJSA1.show();
}



var itemSel1;

function getSelIndexSeg1(){
  itemSel1 = frmQtCategory1.segMain.selectedIndex[1]; 
  var lblCateg ="";
  if(category == "jsa"){
    arrQtSecHdr = JSAQtHeader;
  }else if(category == "fieldverification"){
    arrQtSecHdr = FVQtHeader;
    lblCateg = frmQtCategory1.segMain.selectedRowItems[0].lblCategory;
    itemSel1 = arrayQtAns.indexOf(lblCateg); //alert(lblCateg+itemSel1);
  }else if(category == "ptw"){
    arrQtSecHdr = PTWQtHeader;
  }else if(category == "generic"){
    arrQtSecHdr = GenericQtHeader;
  }else if(category == "chesmfv"){
    arrQtSecHdr = ChesmFVQtHeader;
    lblCateg = frmQtCategory1.segMain.selectedRowItems[0].lblCategory;
    itemSel1 = arrayQtAns.indexOf(lblCateg);
  }
  frmDynamicJSA1.lblQtSec.text = arrQtSecHdr[itemSel1];
  // frmDynamicJSA1.segDynamicRowTemp.scrollsToTop = true;
  if (itemSel1 == 13) {
    frmDynamicJSA1.dynaRowScore.setVisibility(true);
    frmDynamicJSA1.segDynamicRowTemp.setVisibility(false);
  }
  else {
    frmDynamicJSA1.dynaRowScore.setVisibility(false);
    frmDynamicJSA1.segDynamicRowTemp.setVisibility(true);
  }

  frmDynamicJSA1.show();
}



function onClickQtAns(eventObj)
{
  //alert(JSON.stringify(eventObj.id));
  var index =  JSON.stringify(eventObj.info.key);

  index = frmDynamicJSA1.segDynamicRowTemp.data.map((obj) => obj.lblDynaQt).indexOf(eventObj.info.qt);
  //alert(index + "\neventObj "+ JSON.stringify(eventObj));
  index = parseInt(index);
  var skinTest = eventObj.skin;
  var btnId = eventObj.id;
  var skinYesSel,skinNoSel = "";
  var selQt = eventObj.info.qt;
  var selQtNoArray = selQt.split(".");
  var selQtNo = selQtNoArray[0];
  //alert(index +" " +selQtNo + " " + JSON.stringify(frmDynamicJSA1.segDynamicRowTemp.data[index]));
  var commtsEnt = frmDynamicJSA1.segDynamicRowTemp.data[index]["txtAreaComments"]["text"];
  var field = frmDynamicJSA1.segDynamicRowTemp.data[index]["field"];
  var yesId = frmDynamicJSA1.segDynamicRowTemp.data[index]["yesId"];
  var noId = frmDynamicJSA1.segDynamicRowTemp.data[index]["noId"];
  var commId = frmDynamicJSA1.segDynamicRowTemp.data[index]["commId"];

  if(btnId == "imgQtYes"){

    if(category == "jsa"){
      if(selQtNo == "2A" || selQtNo == "5A"||selQtNo == "4A"||selQtNo == "10A"||selQtNo == "29A"){
        yesSelect(selQtNo,index); 
      }  
    }else if(category == "fieldverification"){
    }else if(category == "ptw"){
      if(selQtNo == "3A" || selQtNo == "7A"|| selQtNo == "8A"||selQtNo == "10A"||selQtNo == "13A"||selQtNo == "14A"||selQtNo == "20A"){
        yesSelect(selQtNo,index);
      }
    }else if(category == "generic"){

    }


    if(skinTest == "sknChkBxPlain"){

      skinYesSel = "sknChkBxSelec";
      //var skinNoSel = frmDynamicJSA.segDynamicRowTemp.data[index]["imgQtNo"]["skin"];
      skinNoSel = "sknChkBxPlain";
    }else{

      skinYesSel = "sknChkBxPlain";
      skinNoSel = frmDynamicJSA1.segDynamicRowTemp.data[index]["imgQtNo"]["skin"];
      //skinNoSel = "sknChkBxSelec";
    }

  }else if(btnId == "imgQtNo"){


    if(skinTest == "sknChkBxPlain"){
      //       if (isEmpty(commtsEnt) === false ){
      //         if ( (selQtNo == "2A" || selQtNo == "5A"||selQtNo == "4A"||selQtNo == "10A"||selQtNo == "29A") ||
      //             (selQtNo == "3A" || selQtNo == "7A"|| selQtNo == "8A"||selQtNo == "10A"||selQtNo == "13A"||selQtNo == "14A"||selQtNo == "20A"))
      //           {}
      //           else {
      //             callPopup("Please enter comments for the question "+selQtNo); 
      //           }
      //       }

      if(category == "jsa"){
        if(selQtNo == "2A" || selQtNo == "5A"||selQtNo == "4A"||selQtNo == "10A"||selQtNo == "29A"){
          noSelect(selQtNo,index, selQt);
          skinNoSel = "sknChkGray";
        }else{
          skinNoSel = "sknChkBxNoSel";
        }  
      }else if(category == "fieldverification"){
        skinNoSel = "sknChkBxNoSel";
      }else if(category == "ptw"){
        if(selQtNo == "3A" || selQtNo == "7A"|| selQtNo == "8A"||selQtNo == "10A"||selQtNo == "13A"||selQtNo == "14A"||selQtNo == "20A"){
          noSelect(selQtNo,index,selQt);
          skinNoSel = "sknChkGray";
        }else{
          skinNoSel = "sknChkBxNoSel";
        }
      }else if(category == "generic"){
        skinNoSel = "sknChkBxNoSel";
      }else if(category == "chesmfv"){
        skinNoSel = "sknChkBxNoSel";
      }
      skinYesSel = "sknChkBxPlain";
      // var skinYesSel = frmDynamicJSA.segDynamicRowTemp.data[index]["imgQtYes"]["skin"];

    }else{

      if(category == "jsa"){
        if(selQtNo == "2A" || selQtNo == "5A"||selQtNo == "4A"||selQtNo == "10A"||selQtNo == "29A"){
          yesSelect(selQtNo,index); 
        }  
      }else if(category == "fieldverification"){
      }else if(category == "ptw"){
        if(selQtNo == "3A" || selQtNo == "7A"|| selQtNo == "8A"||selQtNo == "10A"||selQtNo == "13A"||selQtNo == "14A"||selQtNo == "20A"){
          yesSelect(selQtNo,index);
        }
      }else if(category == "generic"){

      }
      //skinYesSel = "sknChkBxSelec";
      skinYesSel = frmDynamicJSA1.segDynamicRowTemp.data[index]["imgQtYes"]["skin"];
      skinNoSel = "sknChkBxPlain";
    }
  }

  var visible = true;
  if (commId === "") visible = false;

  var dataForRowTemp = {};
  dataForRowTemp = {commId:commId, yesId: yesId, noId: noId, field: field ,lblDynaQt:eventObj.info.qt, lblQtYes:"Yes",imgQtNo:{info:{key:index,qt:eventObj.info.qt,comts:commtsEnt},skin:skinNoSel},imgQtYes:{info:{key:index,qt:eventObj.info.qt,comts:commtsEnt},skin:skinYesSel},lblQtNo:"No",txtAreaComments:{text:commtsEnt,placeholder:"Comments",isVisible:visible},template:dynaRowFlex}

  frmDynamicJSA1.segDynamicRowTemp.widgetDataMap = {commId:"commId",yesId:"yesId", noId: "noId", field: "field", lblDynaQt:"lblDynaQt",lblQtYes:"lblQtYes",imgQtNo:"imgQtNo",imgQtYes:"imgQtYes",lblQtNo:"lblQtNo",txtAreaComments:"txtAreaComments"}
  frmDynamicJSA1.segDynamicRowTemp.setDataAt(dataForRowTemp, index );

}


function yesSelect(selQtNo,index){

  var qtin,qtinOne, qtinTwo, qtinThree; 
  var newElmt, newElmtOne, newElmtTwo, newElmtThree;
  //alert(arrForDyAns[itemSel1]);
  if(category == "jsa"){
    if(selQtNo == "2A"){ 
      newElmt = JSAQtAns[itemSel1][2];
      qtin = newElmt.qt;
    }else if(selQtNo == "4A"){
      newElmt = JSAQtAns[itemSel1][5];
      qtin = newElmt.qt;   
    }else if(selQtNo == "5A"){
      newElmt = JSAQtAns[itemSel1][7];
      qtin = newElmt.qt;   
    }else if(selQtNo == "10A"){
      newElmt = JSAQtAns[itemSel1][5];
      qtin= newElmt.qt;   
    }else if(selQtNo == "29A"){
      newElmt = JSAQtAns[itemSel1][1];
      qtin = newElmt.qt;   
    } 
  }else if(category == "fieldverification"){
  }else if(category == "ptw"){
    if(selQtNo == "3A"){ 
      newElmt = PTWQtAns[itemSel1][3]; 
      qtin= newElmt.qt;   
    }else if(selQtNo == "7A"){
      newElmt = PTWQtAns[itemSel1][4];
      qtin = newElmt.qt;   
    }else if(selQtNo == "8A"){
      newElmt = PTWQtAns[itemSel1][6];
      qtin = newElmt.qt;   
    }else if(selQtNo == "10A"){
      newElmt = PTWQtAns[itemSel1][1];
      qtin = newElmt.qt;   
    }else if(selQtNo == "13A"){
      newElmt = PTWQtAns[itemSel1][5];
      qtin = newElmt.qt;   
    }else if(selQtNo == "14A"){
      newElmt = PTWQtAns[itemSel1][1];
      qtin =newElmt.qt;
      newElmtOne = PTWQtAns[itemSel1][2];
      qtinOne = newElmtOne.qt;
    }else if(selQtNo == "20A"){
      newElmt = PTWQtAns[itemSel1][1];
      qtin = newElmt.qt; 
      newElmtOne = PTWQtAns[itemSel1][2];
      qtinOne = newElmtOne.qt;
      newElmtTwo = PTWQtAns[itemSel1][3];
      qtinTwo = newElmtTwo.qt;
      newElmtThree = PTWQtAns[itemSel1][4];
      qtinThree = newElmtThree.qt;
    } 
  }else if(category == "generic"){

  }

  if((index+1) < frmDynamicJSA1.segDynamicRowTemp.data.length){ //alert("qtin: " +qtin + "\nlblDynaQt:" +frmDynamicJSA1.segDynamicRowTemp.data[parseInt(index)+1]["lblDynaQt"]) ;
    if(qtin == frmDynamicJSA1.segDynamicRowTemp.data[parseInt(index)+1]["lblDynaQt"]){
    }else{

      var skinUnSelect = "sknChkBxPlain";
      var dataForRowTemp = {}; 
      dataForRowTemp = {commId: newElmt.commId, yesId: newElmt.yesId, noId: newElmt.noId, field: newElmt.field, lblDynaQt:qtin, lblQtYes:"Yes",imgQtNo:{info:{key:parseInt(index)+1,qt:qtin,comts:""},skin:skinUnSelect},imgQtYes:{info:{key:parseInt(index)+1,qt:qtin,comts:""},skin:skinUnSelect},lblQtNo:"No",txtAreaComments:{text:"",placeholder:"Comments"},template:dynaRowFlex};
      frmDynamicJSA1.segDynamicRowTemp.addDataAt(dataForRowTemp,(parseInt(index)+1));
      if(selQtNo == "14A"){
        var skinUnSelect = "sknChkBxPlain";
        dataForRowTemp = {commId: newElmtOne.commId, yesId: newElmtOne.yesId, noId: newElmtOne.noId, field: newElmtOne.field, lblDynaQt:qtinOne, lblQtYes:"Yes",imgQtNo:{info:{key:parseInt(index)+2,qt:qtinOne,comts:""},skin:skinUnSelect},imgQtYes:{info:{key:parseInt(index)+2,qt:qtinOne,comts:""},skin:skinUnSelect},lblQtNo:"No",txtAreaComments:{text:"",placeholder:"Comments"},template:dynaRowFlex};
        frmDynamicJSA1.segDynamicRowTemp.addDataAt(dataForRowTemp,(parseInt(index)+2));
      }else if(selQtNo == "20A"){
        var skinUnSelect = "sknChkBxPlain";
        dataForRowTemp = {commId: newElmtOne.commId, yesId: newElmtOne.yesId, noId: newElmtOne.noId, field: newElmtOne.field, lblDynaQt:qtinOne, lblQtYes:"Yes",imgQtNo:{info:{key:parseInt(index)+2,qt:qtinOne,comts:""},skin:skinUnSelect},imgQtYes:{info:{key:parseInt(index)+2,qt:qtinOne,comts:""},skin:skinUnSelect},lblQtNo:"No",txtAreaComments:{text:"",placeholder:"Comments"},template:dynaRowFlex};
        frmDynamicJSA1.segDynamicRowTemp.addDataAt(dataForRowTemp,(parseInt(index)+2));
        dataForRowTemp = {commId: newElmtTwo.commId, yesId: newElmtTwo.yesId, noId: newElmtTwo.noId, field: newElmtTwo.field, lblDynaQt:qtinTwo, lblQtYes:"Yes",imgQtNo:{info:{key:parseInt(index)+3,qt:qtinTwo,comts:""},skin:skinUnSelect},imgQtYes:{info:{key:parseInt(index)+3,qt:qtinTwo,comts:""},skin:skinUnSelect},lblQtNo:"No",txtAreaComments:{text:"",placeholder:"Comments"},template:dynaRowFlex};
        frmDynamicJSA1.segDynamicRowTemp.addDataAt(dataForRowTemp,(parseInt(index)+3));
        dataForRowTemp = {commId: newElmtThree.commId, yesId: newElmtThree.yesId, noId: newElmtThree.noId, field: newElmtThree.field, lblDynaQt:qtinThree, lblQtYes:"Yes",imgQtNo:{info:{key:parseInt(index)+4,qt:qtinThree,comts:""},skin:skinUnSelect},imgQtYes:{info:{key:parseInt(index)+4,qt:qtinThree,comts:""},skin:skinUnSelect},lblQtNo:"No",txtAreaComments:{text:"",placeholder:"Comments"},template:dynaRowFlex};
        frmDynamicJSA1.segDynamicRowTemp.addDataAt(dataForRowTemp,(parseInt(index)+4));
      }
    }
  }else{ 
    var skinUnSelect = "sknChkBxPlain";
    var dataForRowTemp = {}; 
    dataForRowTemp = {commId: newElmt.commId, yesId: newElmt.yesId, noId: newElmt.noId, field: newElmt.field, lblDynaQt:qtin, lblQtYes:"Yes",imgQtNo:{info:{key:parseInt(index)+1,qt:qtin,comts:""},skin:skinUnSelect},imgQtYes:{info:{key:parseInt(index)+1,qt:qtin,comts:""},skin:skinUnSelect},lblQtNo:"No",txtAreaComments:{text:"",placeholder:"Comments"},template:dynaRowFlex};
    frmDynamicJSA1.segDynamicRowTemp.addDataAt(dataForRowTemp,(parseInt(index)+1));
    if(selQtNo == "14A"){
      var skinUnSelect = "sknChkBxPlain";
      dataForRowTemp = {commId: newElmtOne.commId, yesId: newElmtOne.yesId, noId: newElmtOne.noId, field: newElmtOne.field, lblDynaQt:qtinOne, lblQtYes:"Yes",imgQtNo:{info:{key:parseInt(index)+2,qt:qtinOne,comts:""},skin:skinUnSelect},imgQtYes:{info:{key:parseInt(index)+2,qt:qtinOne,comts:""},skin:skinUnSelect},lblQtNo:"No",txtAreaComments:{text:"",placeholder:"Comments"},template:dynaRowFlex};
      frmDynamicJSA1.segDynamicRowTemp.addDataAt(dataForRowTemp,(parseInt(index)+2));
    }else if(selQtNo == "20A"){
      var skinUnSelect = "sknChkBxPlain";
      dataForRowTemp = {commId: newElmtOne.commId, yesId: newElmtOne.yesId, noId: newElmtOne.noId, field: newElmtOne.field, lblDynaQt:qtinOne, lblQtYes:"Yes",imgQtNo:{info:{key:parseInt(index)+2,qt:qtinOne,comts:""},skin:skinUnSelect},imgQtYes:{info:{key:parseInt(index)+2,qt:qtinOne,comts:""},skin:skinUnSelect},lblQtNo:"No",txtAreaComments:{text:"",placeholder:"Comments"},template:dynaRowFlex};
      frmDynamicJSA1.segDynamicRowTemp.addDataAt(dataForRowTemp,(parseInt(index)+2));
      dataForRowTemp = {commId: newElmtTwo.commId, yesId: newElmtTwo.yesId, noId: newElmtTwo.noId, field: newElmtTwo.field, lblDynaQt:qtinTwo, lblQtYes:"Yes",imgQtNo:{info:{key:parseInt(index)+3,qt:qtinTwo,comts:""},skin:skinUnSelect},imgQtYes:{info:{key:parseInt(index)+3,qt:qtinTwo,comts:""},skin:skinUnSelect},lblQtNo:"No",txtAreaComments:{text:"",placeholder:"Comments"},template:dynaRowFlex};
      frmDynamicJSA1.segDynamicRowTemp.addDataAt(dataForRowTemp,(parseInt(index)+3));
      dataForRowTemp = {commId: newElmtThree.commId, yesId: newElmtThree.yesId, noId: newElmtThree.noId, field: newElmtThree.field, lblDynaQt:qtinThree, lblQtYes:"Yes",imgQtNo:{info:{key:parseInt(index)+4,qt:qtinThree,comts:""},skin:skinUnSelect},imgQtYes:{info:{key:parseInt(index)+4,qt:qtinThree,comts:""},skin:skinUnSelect},lblQtNo:"No",txtAreaComments:{text:"",placeholder:"Comments"},template:dynaRowFlex};
      frmDynamicJSA1.segDynamicRowTemp.addDataAt(dataForRowTemp,(parseInt(index)+4));
    }

  }

  var dataForRowTemp  = [];

  for( i=0; i<frmDynamicJSA1.segDynamicRowTemp.data.length; i++){
    var qtE = frmDynamicJSA1.segDynamicRowTemp.data[i]["lblDynaQt"];
    var skinYes = frmDynamicJSA1.segDynamicRowTemp.data[i]["imgQtYes"]["skin"];
    var skinNo = frmDynamicJSA1.segDynamicRowTemp.data[i]["imgQtNo"]["skin"];
    var comtEnt = frmDynamicJSA1.segDynamicRowTemp.data[i]["txtAreaComments"]["text"];
    var field = frmDynamicJSA1.segDynamicRowTemp.data[i].field;
    var commId = frmDynamicJSA1.segDynamicRowTemp.data[i].commId;
    var yesId = frmDynamicJSA1.segDynamicRowTemp.data[i]["yesId"];
    var noId = frmDynamicJSA1.segDynamicRowTemp.data[i]["noId"];
    var visible = true;
    if (commId === "") visible = false;

    var data  = {commId: commId, yesId: yesId, noId: noId, field: field, lblDynaQt:qtE, lblQtYes:"Yes",imgQtNo:{info:{key:i,qt:qtE,comts:comtEnt},skin:skinNo},imgQtYes:{info:{key:i,qt:qtE},skin:skinYes},lblQtNo:"No",txtAreaComments:{text:comtEnt,placeholder:"Comments",isVisible:visible},template:dynaRowFlex};
    dataForRowTemp.push(data);  
  }
  frmDynamicJSA1.segDynamicRowTemp.widgetDataMap = {commId: "commId", yesId: "yesId", noId: "noId", field:"field",lblDynaQt:"lblDynaQt",lblQtYes:"lblQtYes",imgQtNo:"imgQtNo",imgQtYes:"imgQtYes",lblQtNo:"lblQtNo",txtAreaComments:"txtAreaComments"};
  frmDynamicJSA1.segDynamicRowTemp.data = [];
  frmDynamicJSA1.segDynamicRowTemp.setData(dataForRowTemp); 

}

function noSelect(selQtNo,index,selQt){
  //alert("noSelect " + selQtNo);

  var skinSelected = "sknChkBxSelec";
  var skinUnSelect = "sknChkBxPlain";
  var rowIndex = arrForDyAns[itemSel1].map((obj) => obj.qt).indexOf(selQt); 
  if(selQtNo == "14A"){
    for (var i=2; i>=1; i--) {
      frmDynamicJSA1.segDynamicRowTemp.removeAt(i);
      arrForDyAns[itemSel1][rowIndex+i].skinNo = skinUnSelect;
      arrForDyAns[itemSel1][rowIndex+i].skinYes = skinUnSelect;
      arrForDyAns[itemSel1][rowIndex+i].comts = "";
      currAsst.UdfFields[arrForDyAns[itemSel1][rowIndex+i].field].Value = [{Id: null, Name:""}];
      currAsst.UdfFields[arrForDyAns[itemSel1][rowIndex+i].commId].Values = {9:""};
      currAsst.UdfFields[arrForDyAns[itemSel1][rowIndex+i].commId].Value = "";
    }



  }else if(selQtNo == "20A"){
    for (var i=4; i>=1; i--) {
      frmDynamicJSA1.segDynamicRowTemp.removeAt(i);
      arrForDyAns[itemSel1][rowIndex+i].skinNo = skinUnSelect;
      arrForDyAns[itemSel1][rowIndex+i].skinYes = skinUnSelect;
      arrForDyAns[itemSel1][rowIndex+i].comts = "";
      currAsst.UdfFields[arrForDyAns[itemSel1][rowIndex+i].field].Value = [{Id: null, Name:""}];
      currAsst.UdfFields[arrForDyAns[itemSel1][rowIndex+i].commId].Values = {9:""};
      currAsst.UdfFields[arrForDyAns[itemSel1][rowIndex+i].commId].Value = "";
    }

  }else{ //alert ("noSelect:\n"+JSON.stringify(frmDynamicJSA1.segDynamicRowTemp.data[index+1])) ;
    frmDynamicJSA1.segDynamicRowTemp.removeAt(index+1); 
    arrForDyAns[itemSel1][rowIndex+1].skinNo = skinUnSelect;
    arrForDyAns[itemSel1][rowIndex+1].skinYes = skinUnSelect;
    arrForDyAns[itemSel1][rowIndex+1].comts = "";
    currAsst.UdfFields[arrForDyAns[itemSel1][rowIndex+1].field].Value = [{Id: null, Name:""}];
    currAsst.UdfFields[arrForDyAns[itemSel1][rowIndex+1].commId].Values = {9:""};
    currAsst.UdfFields[arrForDyAns[itemSel1][rowIndex+1].commId].Value = "";

  }

  var dataForRowTemp  = [];

  for( i=0; i<frmDynamicJSA1.segDynamicRowTemp.data.length; i++){
    var qtE = frmDynamicJSA1.segDynamicRowTemp.data[i]["lblDynaQt"];
    var skinYes = frmDynamicJSA1.segDynamicRowTemp.data[i]["imgQtYes"]["skin"];
    var skinNo = frmDynamicJSA1.segDynamicRowTemp.data[i]["imgQtNo"]["skin"];
    var comtEnt = frmDynamicJSA1.segDynamicRowTemp.data[i]["txtAreaComments"]["text"];
    var field = frmDynamicJSA1.segDynamicRowTemp.data[i].field;
    var commId = frmDynamicJSA1.segDynamicRowTemp.data[i].commId;   
    var yesId = frmDynamicJSA1.segDynamicRowTemp.data[i]["yesId"];
    var noId = frmDynamicJSA1.segDynamicRowTemp.data[i]["noId"];
    var visible = true;
    if (commId === "") visible = false;

    var data  = {commId: commId, yesId: yesId, noId: noId, field: field, lblDynaQt:qtE, lblQtYes:"Yes",imgQtNo:{info:{key:i,qt:qtE,comts:comtEnt},skin:skinNo},imgQtYes:{info:{key:i,qt:qtE},skin:skinYes},lblQtNo:"No",txtAreaComments:{text:comtEnt,placeholder:"Comments",isVisible:visible},template:dynaRowFlex};
    dataForRowTemp.push(data); 
  }
  frmDynamicJSA1.segDynamicRowTemp.widgetDataMap = {commId: "commId", yesId: "yesId", noId: "noId", field:"field",lblDynaQt:"lblDynaQt",lblQtYes:"lblQtYes",imgQtNo:"imgQtNo",imgQtYes:"imgQtYes",lblQtNo:"lblQtNo",txtAreaComments:"txtAreaComments"};
  frmDynamicJSA1.segDynamicRowTemp.data = [];
  frmDynamicJSA1.segDynamicRowTemp.setData(dataForRowTemp);  


}