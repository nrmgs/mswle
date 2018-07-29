//Type your code here
var prevKey = null, prevWFType = null;

function onSelectTime(eventObj) {
  var selectedKey = frmForm2.cbxEngagTimeofDay.selectedKeys;

  //alert(selectedKey);

  if(selectedKey != null || selectedKey != undefined){

    if(selectedKey.length > 1){
      if (prevKey == "1") {
        frmForm2.cbxEngagTimeofDay.selectedKey = 2;
        prevKey = 2;
      } else {
        frmForm2.cbxEngagTimeofDay.selectedKey = 1;
        prevKey = 1;
      }

    } else {
      prevKey = selectedKey;
    }
  }
}

function onSelectWFType() {
  var selectedKey = frmForm2.cbxWorkForceTyp.selectedKeys;
  var strKeys = "";

  if(selectedKey != null || selectedKey != undefined){

    if(selectedKey.length > 1){
      strKeys = selectedKey.toString();
      var arr = strKeys.split(',');

      if (arr[0] == prevWFType) {
        frmForm2.cbxWorkForceTyp.selectedKey = arr[1];
        prevWFType = arr[1];
      } else {
        frmForm2.cbxWorkForceTyp.selectedKey = arr[0];
        prevWFType = arr[0];
      }

    } else {
      prevWFType = selectedKey;
    }
  }
}

function onSelectCrew() {
  var selectedKey = frmForm2.cbxWorkCrew.selectedKeys;

  //alert(selectedKey);

  if(selectedKey != null || selectedKey != undefined){

    if(selectedKey.length > 1){
      if (prevKey == "1") {
        frmForm2.cbxWorkCrew.selectedKey = 2;
        prevKey = 2;
      } else {
        frmForm2.cbxWorkCrew.selectedKey = 1;
        prevKey = 1;
      }

    } else {
      prevKey = selectedKey;
    }
  }
}
