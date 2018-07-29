//Type your code here

var siteSelTab = "online";
var deptVal = "";
function leftSelSite(){
  siteSelTab = "online";
  frmSite.headerSegSiteLeft.skin = "sknBtnSelected";
  frmSite.headerSegSiteRIght.skin = "sknBtnUnSelected";
  frmSite.flxSearchSite.setVisibility(true);
  frmSite.segSites.setVisibility(true);
  frmSite.segSitesSaved.setVisibility(false);
}


function rightSelSite(){
  siteSelTab = "offline";
  frmSite.headerSegSiteLeft.skin = "sknBtnUnSelected";
  frmSite.headerSegSiteRIght.skin = "sknBtnSelected";
  frmSite.flxSearchSite.setVisibility(false);
  frmSite.segSites.setVisibility(false);
  frmSite.segSitesSaved.setVisibility(true);


  frmSite.segSitesSaved.widgetDataMap = {boxSegSite: "boxSegSite",lblSecHdr: "lblSecHdr"};
  var dataForRowTemp = [];
  var favSiteDepts =[];
  if(category == "chesmfv"){
    favSiteDepts = kony.store.getItem("objChesmFavSites");
  }else{
    favSiteDepts = kony.store.getItem("objFavSites");
  }

  //favSiteDepts = JSON.parse(favSiteDepts);
  if(favSiteDepts === null || favSiteDepts === undefined || favSiteDepts.length == 0){

    frmSite.segSitesSaved.widgetDataMap = {boxSegTemp: "boxSegTemp",lblSecHdr: "lblSecHdr"};
    var data = {lblSecHdr: "Please add your favorite sites via the Search Online section", template: boxSegTemp};
    dataForRowTemp.push(data);

  }else{
    for (var i = 0; i < favSiteDepts.length; i++)
    {

      var data = {boxSegSite: {info: { "site": favSiteDepts[i][0]}},lblSecHdr: favSiteDepts[i][0].SiteName, template: boxSegSite};
      dataForRowTemp.push(data);
    }
  }
  frmSite.segSitesSaved.setData(dataForRowTemp);
  favSiteDepts =[];
}


function onTextChanSitesSearch() {
  
  var searchValue = frmSite.txtSearchSeg.text.trim();
  if(networkAvailable() === false){
     if (searchValue.length >= 1) {
     callPopup("Internet connectivity required to search and select sites");
    }
    return;
  }
  
  var objArray = [];
  sData = []
  if(category == "chesmfv"){
    objArray = kony.store.getItem("objChesmSites");
  }else{
    objArray = kony.store.getItem("objSites");
  }
	
  
    
  
  objArray = JSON.parse(objArray);

  var searchValue = frmSite.txtSearchSeg.text.trim();
  if (searchValue.length == 0) {
    sData = [];
  }
  if (searchValue.length > 1) {
    if(objArray === null || objArray === undefined || objArray.length == 0){
    callPopup("No Sites found, please contact your IMPACT Administrator");
    
  }else{
    sData = [];
    var length = objArray.length;

    for (var i = 0; i < objArray.length; i++) {
      //if (objArray[i].SiteName !== null || objArray[i].SiteName !== undefined) {
      var sName = "";
      if (objArray[i].SiteName != null && objArray[i].SiteName != undefined) {
        sName = objArray[i].SiteName;
      }
      if (sName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
        sData.push(objArray[i]);
      }

    }
  }
  searchSiteLst();
    }
}

function searchSiteLst() {
  frmSite.segSites.widgetDataMap = {
    boxSegSite: "boxSegSite",
    lblSecHdr: "lblSecHdr"
  };
  var dataForRowTemp = [];
  for (i = 0; i < sData.length; i++) {
    var data = {
      boxSegSite: {
        info: {
          "site": sData[i]
        }
      },
      lblSecHdr: sData[i].SiteName,
      template: boxSegSite
    };
    dataForRowTemp.push(data);
  }
  frmSite.segSites.setData(dataForRowTemp);
}

function onClickSites(eventObj){
  var site = eventObj.info.site;
  var siteId = site.SiteId;
  var siteName = site.SiteName;
  var prevFrm = kony.application.getPreviousForm().id;
  if(siteSelTab == "offline"){
    var favSiteDepts =[];
    if(category == "chesmfv"){
      favSiteDepts = kony.store.getItem("objChesmFavSites");
    }else{
      favSiteDepts = kony.store.getItem("objFavSites");
    }
    if(favSiteDepts === null || favSiteDepts === undefined){

    }else{
      frmDepartment.segDept.widgetDataMap = {boxSegDept: "boxSegDept",lblSecHdr: "lblSecHdr"};
      var dataForRowTemp = [];
      for (var i = 0; i < favSiteDepts.length; i++){
        var siteIdSaved =  favSiteDepts[i][0].SiteId;
        if(siteId == siteIdSaved){

          dept = favSiteDepts[i][1];
          //alert("1"+JSON.stringify(dept) );
          dept = deptHiercharchy(dept);
          //alert("2"+JSON.stringify(dept) );
          dept = deptSort(dept);
          for (i = 0; i < dept.length; i++) {
            var data = {boxSegDept: {info: { "dept": dept[i]}},lblSecHdr: dept[i].DepartmentName,template: boxSegDept};
            dataForRowTemp.push(data);
          }
          frmDepartment.segDept.setData(dataForRowTemp);
          frmForm1.txtEngagDept.text="";
          frmPreConfirmA.txtEngagDept.text="";
          break;
        }
      }
      frmForm1.txtEngagSite.text = siteName;
      frmForm1.txtEngagSite.info ={"siteId":siteId};
      frmPreConfirmA.txtEngagSite.text = siteName;
      frmPreConfirmA.txtEngagSite.info ={"siteId":siteId};
      if(prevFrm == "frmForm1"){
        frmForm1.show();
      }else if(prevFrm == "frmPreConfirmA"){
        frmPreConfirmA.show();
      }
    }
  }else{

    //     if(networkAvailable() === false){
    //       callPopup("Internet connectivity required to search and select sites");
    //       return;
    //     }else{
    deptVal = "internet";
    kony.print("******************************"+deptVal);
    callLocation(siteId);
    frmForm1.txtEngagSite.text = siteName;
    frmForm1.txtEngagSite.info ={"siteId":siteId};
    frmPreConfirmA.txtEngagSite.text = siteName;
    frmPreConfirmA.txtEngagSite.info ={"siteId":siteId};
    //    }
  }

}


function onClickDept(eventObj){

  var prevFrm = kony.application.getPreviousForm().id;
  var dept = eventObj.info.dept;
  var deptId = dept.DepartmentId;
  var deptName = dept.deptName;
  frmForm1.txtEngagDept.text = deptName;
  frmForm1.txtEngagDept.info = {"dept":deptId};

  frmPreConfirmA.txtEngagDept.text = deptName;
  frmPreConfirmA.txtEngagDept.info = {"dept":deptId};

  if(prevFrm == "frmForm1"){
    frmForm1.show();
  }else if(prevFrm == "frmPreConfirmA"){
    frmPreConfirmA.show();
  }
}
var sitId, sitIdNum, deptId, deptName;
//btn create engagement
function getselecSiteAndDept(){

  var currenrtFrm = kony.application.getCurrentForm().id;

  if(currenrtFrm == "frmForm1"){
    sitId = frmForm1.txtEngagSite.text;
    deptName = frmForm1.txtEngagDept.text;

  }else if(currenrtFrm == "frmPreConfirmA"){
    sitId = frmPreConfirmA.txtEngagSite.text;
    deptName = frmPreConfirmA.txtEngagDept.text;
  }

  if(isEmpty(sitId) == false){
    callPopup("please enter site");
    return false;
  }

  if(isEmpty(deptName) == false){
    callPopup("please enter department");
    return false;
  }

  if(currenrtFrm == "frmForm1"){
    deptId = frmForm1.txtEngagDept.info.dept;
    sitIdNum = frmForm1.txtEngagSite.info.siteId;
  }else if(currenrtFrm == "frmPreConfirmA"){
    deptId = frmPreConfirmA.txtEngagDept.info.dept;
    sitIdNum = frmPreConfirmA.txtEngagSite.info.siteId;
  }
  //alert("getselecSiteAndDept\n" + sitId+" "+deptId+" "+deptName+"");
  createAssessmentService(deptId,deptName);
}