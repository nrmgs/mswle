//Type your code here

function leftSelChesmFavSites(){
  frmChesmFavSite.hdrChesmSiteLeft.skin = "sknBtnSelected";
  frmChesmFavSite.hdrChesmSiteRIght.skin = "sknBtnUnSelected";
  frmChesmFavSite.flxSearchChesmSite.setVisibility(true);
  frmChesmFavSite.segFavChesmSites.setVisibility(true);
  frmChesmFavSite.segFavChesmSitesSaved.setVisibility(false);
}


function rightSelChesmFavSites(){
  frmChesmFavSite.hdrChesmSiteLeft.skin = "sknBtnUnSelected";
  frmChesmFavSite.hdrChesmSiteRIght.skin = "sknBtnSelected";

  frmChesmFavSite.flxSearchChesmSite.setVisibility(false);
  frmChesmFavSite.segFavChesmSites.setVisibility(false);
  frmChesmFavSite.segFavChesmSitesSaved.setVisibility(true);

  setFavSitesChesm();
}

var sDataChesm = [];

function onTxtChanFavChsmSiteSearh() {
  
var searchValue = frmChesmFavSite.txtSearchChesmSeg.text.trim();
  if(networkAvailable() === false){
     if (searchValue.length >= 1) {
     callPopup("Internet connectivity required to search and select sites");
    }
   
    return;
  }
  
  var objArray = [];
  sDataChesm = [];
  objArray = kony.store.getItem("objChesmSites");
  objArray = JSON.parse(objArray);

  
  if (searchValue.length == 0) {
    sDataChesm = [];
  }
  if (searchValue.length > 1) {

    if(objArray === null || objArray === undefined || objArray.length == 0){
      callPopup("No Sites found, please contact your IMPACT Administrator");

    }else{
      sDataChesm = [];
      var length = objArray.length;

      for (var i = 0; i < objArray.length; i++) {
        //if (objArray[i].SiteName !== null || objArray[i].SiteName !== undefined) {
        var sName = "";
        if (objArray[i].SiteName != null && objArray[i].SiteName != undefined) {
          sName = objArray[i].SiteName;
        }
        if (sName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
          sDataChesm.push(objArray[i]);
        }

      }
    }
    searchFavChesmSiteLst();
  }
}


function searchFavChesmSiteLst() {
  frmChesmFavSite.segFavChesmSites.widgetDataMap = {
    boxRefSegHdrChesm: "boxRefSegHdrChesm",
    lblSecHdr: "lblSecHdr"
  };
  var dataForRowTemp = [];
  //alert(sData)

  for (i = 0; i < sDataChesm.length; i++) {
    var data = {
      boxRefSegHdrChesm: {
        info: {
          "site": sDataChesm[i]
        }
      },
      lblSecHdr: sDataChesm[i].SiteName,
      template: boxRefSegHdrChesm
    };
    dataForRowTemp.push(data);
  }
  frmChesmFavSite.segFavChesmSites.setData(dataForRowTemp);
}

var siteChesm;

function onClickFavSitesChesm(eventObj) {

  siteChesm = eventObj.info.site;
  var siteId = siteChesm.SiteId;
  deptVal = "favoritechesm";
  kony.print(deptVal);
  if(networkAvailable() == false){
    kony.application.dismissLoadingScreen();
    callPopup("Internet connectivity required to search and select sites");
  }else{
    kony.print(deptVal);
    var favSiteDepts =[];
    favSiteDepts = kony.store.getItem("objChesmFavSites");
    if(favSiteDepts === null || favSiteDepts === undefined || favSiteDepts === "null"){
      callLocation(siteId);
    }else{

      var len = favSiteDepts.length;
      if(len < 10){
        callLocation(siteId);
      }else{
        callPopup("The maximum number of favorite sites is 10. Please navigate to the favorites tab to manage your favorites, prior to selecting new ones.");
      }

    }


  }
}





function delChesmFavSites(eventObj){
  var siteId = eventObj.info.del;

  var favSiteDepts =[];
  favSiteDepts = kony.store.getItem("objChesmFavSites");
  for (var i = 0; i < favSiteDepts.length; i++){
    var siteIdSaved =  favSiteDepts[i][0].SiteId;
    if(siteId == siteIdSaved){
      favSiteDepts.splice(i,1);
      break;
    }
  }
  kony.store.setItem("objChesmFavSites", favSiteDepts);
  setFavSitesChesm();
}

function setFavSitesChesm(){
  frmChesmFavSite.segFavChesmSitesSaved.widgetDataMap = {SegChesmFavSiteSaved: "SegChesmFavSiteSaved",lblSecHdr: "lblSecHdr",boxDelFavSite:"boxDelFavSite"};
  var dataForRowTemp = [];
  var favSiteDepts =[];
  favSiteDepts = kony.store.getItem("objChesmFavSites");
  if(favSiteDepts === null || favSiteDepts === undefined || favSiteDepts.length == 0){
    frmChesmFavSite.segFavChesmSitesSaved.widgetDataMap = {boxSegTemp: "boxSegTemp",lblSecHdr: "lblSecHdr"};
    var data = {lblSecHdr: "Please add your favorite sites via the Search Online section",template: boxSegTemp};
    dataForRowTemp.push(data);
    frmChesmFavSite.segFavChesmSitesSaved.setData(dataForRowTemp);
  }else{
    for (var i = 0; i < favSiteDepts.length; i++)
    {
      var data = {boxDelFavSite: {info: {"del": favSiteDepts[i][0].SiteId}},lblSecHdr: favSiteDepts[i][0].SiteName, template: SegChesmFavSiteSaved};
      dataForRowTemp.push(data);
    }
    frmChesmFavSite.segFavChesmSitesSaved.setData(dataForRowTemp);
  }

  favSiteDepts =[];

}
