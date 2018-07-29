//Type your code hereho
function formDashInit(){
  
  frmDashboard.headerSegButtonLeft.skin = "sknBtnSelected";
  frmDashboard.headerSegButtonRIght.skin = "sknBtnUnSelected";
  frmDashboard.flxSelect.setVisibility(true);
  frmDashboard.flxMainNavigate.setVisibility(true);
 
  //setSegQtCatgryData();
  frmDashboard.segIncomLst.setVisibility(false);
  
  qtAnsArr = [];
  itemSel = [];
}



function leftSelectionDash(){
  
  frmDashboard.headerSegButtonLeft.skin = "sknBtnSelected";
  frmDashboard.headerSegButtonRIght.skin = "sknBtnUnSelected";
  frmDashboard.flxSelect.setVisibility(true);
  frmDashboard.flxMainNavigate.setVisibility(true);
 
  //setSegMainData();
  frmDashboard.segIncomLst.setVisibility(false);
  
}
function AS_Button_a71e80a85ffb4a9993f4f62aeb4b3bd8(eventobject) {
    return leftSelectionDash.call(this);
}

function rightSelectionDash(){
  
 frmDashboard.headerSegButtonLeft.skin = "sknBtnUnSelected";
 frmDashboard.headerSegButtonRIght.skin = "sknBtnSelected";
 frmDashboard.flxSelect.setVisibility(false);
 frmDashboard.flxMainNavigate.setVisibility(false);
 frmDashboard.segIncomLst.setVisibility(true);
//  frmDashboard.segIncomLst.widgetDataMap ={lblHdr1:"lblHdr1",lblHdr2:"lblHdr2",lblHdr3:"lblHdr3",flxSegInCmpLst:"flxSegInCmpLst"};
// 	var data  = 
// 	[
// 	  {lblHdr1:"JSA Engagement",lblHdr2:"Created Feb 21 2018 | Last Modified Feb 21 2018",lblHdr3:{text:"In Progress", skin:lblColorInProgress},flxSegInCmpLst:{skin:flxInprogress},template:flx4},
// 	  {lblHdr1:"JSA Engagement",lblHdr2:"Created Feb 21 2018 | Last Modified Feb 21 2018",lblHdr3:{text:"In Progress", skin:lblColorInProgress},flxSegInCmpLst:{skin:flxInprogress},template:flx4},
//       {lblHdr1:"JSA Engagement",lblHdr2:"Created Feb 22 2018 | Last Modified Feb 22 2018",lblHdr3:{text:"Completed", skin:lblClrCompleted},flxSegInCmpLst:{skin:flxCompleted},template:flx4},
	
//       {lblHdr1:"JSA Engagement",lblHdr2:"Created Feb 22 2018 | Last Modified Feb 22 2018",lblHdr3:{text:"Completed", skin:lblClrCompleted},flxSegInCmpLst:{skin:flxCompleted},template:flx4},
       
// 	];
//  frmDashboard.segIncomLst.setData(data);
   SelectAllAssts();
}




