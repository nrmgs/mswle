//Type your code here

function leftSelFavSites(){
  frmFavSite.headerSegSiteLeft.skin = "sknBtnSelected";
  frmFavSite.headerSegSiteRIght.skin = "sknBtnUnSelected";
  frmFavSite.flxSearchSite.setVisibility(true);
  frmFavSite.segFavSites.setVisibility(true);
  frmFavSite.segFavSitesSaved.setVisibility(false);
}


function rightSelFavSites(){
 frmFavSite.headerSegSiteLeft.skin = "sknBtnUnSelected";
 frmFavSite.headerSegSiteRIght.skin = "sknBtnSelected";
  
 frmFavSite.flxSearchSite.setVisibility(false);
 frmFavSite.segFavSites.setVisibility(false);
 frmFavSite.segFavSitesSaved.setVisibility(true);
  
 setFavSites();
}

var sData = [];

function onTextChanFavSitesSearch() {
  var searchValue = frmFavSite.txtSearchSeg.text.trim();
  if(networkAvailable() === false){
     if (searchValue.length >= 1) {
     callPopup("Internet connectivity required to search and select sites");
    }
   
    return;
  }
    var objArray = [];
	sData = [];
    objArray = kony.store.getItem("objSites");
    objArray = JSON.parse(objArray);
    
  
    
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
            var sName = "";
            if (objArray[i].SiteName != null && objArray[i].SiteName != undefined) {
                sName = objArray[i].SiteName;
            }
            if (sName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
                sData.push(objArray[i]);
            }
            
        }
    }
    searchFavSiteLst();
}
}


function searchFavSiteLst() {
    frmFavSite.segFavSites.widgetDataMap = {
        boxRefSegHdr: "boxRefSegHdr",
        lblSecHdr: "lblSecHdr"
    };
    var dataForRowTemp = [];
    //alert(sData)

    for (i = 0; i < sData.length; i++) {
        var data = {
            boxRefSegHdr: {
                info: {
                    "site": sData[i]
                }
            },
            lblSecHdr: sData[i].SiteName,
            template: boxRefSegHdr
        };
        dataForRowTemp.push(data);
    }
    frmFavSite.segFavSites.setData(dataForRowTemp);
}


var site;

function onClickFavSites(eventObj) {
  
  site = eventObj.info.site;
  var siteId = site.SiteId;
  deptVal = "favorite";
  kony.print(deptVal);
  if(networkAvailable() == false){
     kony.application.dismissLoadingScreen();
     callPopup("Internet connectivity required to search and select sites");
  }else{
    
    var favSiteDepts =[];
    favSiteDepts = kony.store.getItem("objFavSites");
    if(favSiteDepts === null || favSiteDepts === undefined || favSiteDepts === "null"){
      callLocation(siteId);
    }else{
        kony.print(deptVal);
      var len = favSiteDepts.length;
      if(len < 10){
        callLocation(siteId);
      }else{
        callPopup("The maximum number of favorite sites is 10. Please navigate to the favorites tab to manage your favorites, prior to selecting new ones.");
      }

    }
  }
}





function delFavSites(eventObj){
  var siteId = eventObj.info.del;
  
  var favSiteDepts =[];
  favSiteDepts = kony.store.getItem("objFavSites");
  for (var i = 0; i < favSiteDepts.length; i++){
    var siteIdSaved =  favSiteDepts[i][0].SiteId;
    if(siteId == siteIdSaved){
      favSiteDepts.splice(i,1);
      break;
    }
  }
  kony.store.setItem("objFavSites", favSiteDepts);
  setFavSites();
}

function setFavSites(){
  frmFavSite.segFavSitesSaved.widgetDataMap = {boxSegFavSiteSaved: "boxSegFavSiteSaved",lblSecHdr: "lblSecHdr",boxDelFavSite:"boxDelFavSite"};
  var dataForRowTemp = [];
  var favSiteDepts =[];
  favSiteDepts = kony.store.getItem("objFavSites");
  if(favSiteDepts === null || favSiteDepts === undefined || favSiteDepts.length == 0){
    frmFavSite.segFavSitesSaved.widgetDataMap = {boxSegTemp: "boxSegTemp",lblSecHdr: "lblSecHdr"};
    var data = {lblSecHdr: "Please add your favorite sites via the Search Online section",template: boxSegTemp};
    dataForRowTemp.push(data);
    frmFavSite.segFavSitesSaved.setData(dataForRowTemp);
  }else{
    for (var i = 0; i < favSiteDepts.length; i++)
    {
      var data = {boxDelFavSite: {info: {"del": favSiteDepts[i][0].SiteId}},lblSecHdr: favSiteDepts[i][0].SiteName, template: boxSegFavSiteSaved};
      dataForRowTemp.push(data);
    }
    frmFavSite.segFavSitesSaved.setData(dataForRowTemp);
  }
 
  favSiteDepts =[];
  
}

