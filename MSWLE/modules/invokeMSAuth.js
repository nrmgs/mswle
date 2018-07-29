//Type your code h

gblOptionalFlag = "false";
var accToken,givenName,familyName,expiresOn = "";
function invokeMSAuthApp(){
//    callLogin("NAJR");
//    return;
  try {
    
    if(networkAvailable() === true){
    var isAuthPresent = KonySSOFFI.schemaAvailable ("msauth://");
    if(!isAuthPresent){
      //alert("Please install Microsoft Authenticator app for Login.");
      var text = "Please install Microsoft Authenticator application to continue.";
      var balert = {message: text ,alertType: constants.ALERT_TYPE_CONFIRMATION ,alertTitle: "Info",yesLabel:"Install",
                    noLabel: "No", alertHandler: function(alr){
                      if (alr){
                        kony.application.openURL("https://itunes.apple.com/us/app/microsoft-authenticator/id983156458?mt=8");
                      }else{
                        // Do nothing
                      }
                    }};                                                
      var pspConf = {};  
      var installAlert = kony.ui.Alert(balert,pspConf);

      kony.application.dismissLoadingScreen();
      return;	//Stop the authentication flow.
    }
    KonySSOFFI.acquireTokenAsync({
      "authority" : "https://login.windows.net/chevron.onmicrosoft.com",
      "validateAuthority" : true,
      "resourceId" : "https://graph.windows.net",
      "clientId" : "63e23480-3932-4170-bdf9-50035f6b2e9c", //azure active directory application id //prod - 56020f20-0f07-47e6-9054-a9264f06bcdb //stg - 63e23480-3932-4170-bdf9-50035f6b2e9c dev - f8f9b950-f224-4896-b7b8-455d6e8b6180
      "redirectUri" : "x-msauth-com-chevron-hes-mswle://com.chevron.hes.mswle"
    }, function(result){
      kony.print("Success");
      kony.print(JSON.parse(result));
      var jsObj = JSON.parse(result[0]);
      kony.print(jsObj.accessToken)
      kony.print("jsObj  "+JSON.stringify(jsObj));
      //alert(JSON.stringify(jsObj));
      if(jsObj.accessToken != null){
        givenName = jsObj.userInfo.givenName;
        familyName = jsObj.userInfo.familyName;
        expiresOn = jsObj.expiresOn;
        accToken = jsObj.accessToken;
		validateMSToken();
      }



    }, function(error){

      var errObj = JSON.parse(error);
      //alert(error);
      //kony.print("-->"+errObj.errorCode+" "+errObj.errorDescription);

      if(errObj.errorCode != null){
        if(errObj.errorCode == "AD_ERROR_TOKENBROKER_UNKNOWN"){
          callPopup("User cancelled authentication flow, please login again to continue");
        }

      }else if(errObj.errorCode == null){
        if(errObj.errorDescription == "The Internet connection appears to be offline."){
          callPopup("Please check your internet connectivity and try again");
        }
      }
    });
      
    }else{
      callPopup("Please connect your device internet for authentication");
    }
  }catch(err){
    kony.print("error in authentication call to ms authenticator"+err);
  }

}


function validateMSToken(){
  try{
    if(networkAvailable() == false){
      callPopup("Please check your internet connectivity and try again");
    }else{
      kony.application.showLoadingScreen(loadingSkin, "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, null);
      var ValidateToken_inputparam = {};
      ValidateToken_inputparam["serviceID"] = "CustomValidation$ValidateToken";
      var ValidateToken_httpheaders = {"Content-Type":"application/json"};
      ValidateToken_inputparam["httpheaders"] = ValidateToken_httpheaders;
      var ValidateToken_httpconfigs = {};
      ValidateToken_inputparam["optionalFlagFromUI"] = gblOptionalFlag;
      ValidateToken_inputparam["httpconfig"] = ValidateToken_httpconfigs;
      ValidateToken_inputparam["Token"] = accToken;
      CustomValidation$ValidateToken = mfintegrationsecureinvokerasync(ValidateToken_inputparam, "CustomValidation", "ValidateToken", validateMSTokenCallback);
  }
  }catch(err){
    kony.print("error in validateMSToken function "+err);
  }
}
var emailAddress = null;
function validateMSTokenCallback(status,ValidateToken){
  //alert(JSON.stringify(ValidateToken));
  //alert(JSON.stringify(ValidateToken["opstatus"]));
  try{
    if(status == 400){
      if(ValidateToken["opstatus"] == 0 && ValidateToken["version"] == "" ){
        var user_attributes = ValidateToken.user_attributes ;
        emailAddress = user_attributes[0].emailAddress;
        var FirstName = user_attributes[0].FirstName;
        var LastName = user_attributes[0].LastName;
        var Name = user_attributes[0].Name;
        //alert("email"+  emailAddress);
        if(emailAddress == "" || emailAddress == null || emailAddress == undefined){
          kony.application.dismissLoadingScreen();
          callPopup("Authentication Failed, please login again");
        }else{
          frmDashboard.lblUserName.text = "Welcome "+FirstName+" "+LastName;
          kony.store.setItem("givenName", givenName);
          kony.store.setItem("familyName", familyName);
          kony.store.setItem("accessToken", accToken);
          kony.store.setItem("expiresOn", expiresOn);
          getCAIAPI(emailAddress); 
        }
      }
      //else if(ValidateToken["opstatus"] == undefined) {
        else if (ValidateToken["httpresponse"]["responsecode"] == 200 || kony.string.equalsIgnoreCase(ValidateToken.version, "1") || kony.string.equalsIgnoreCase(ValidateToken.version, "2")) {
          if (kony.string.equalsIgnoreCase(ValidateToken.version, "1")) {
            kony.application.dismissLoadingScreen();

            if (isAndroid() && isBlackBerry == false) {
              popApplicationUpgrade.lblUpgradeText.text = "A new and improved version of the application now available in the Chevron App store. Please open the app store and update the app";
            }
            if (isIos()) {
              popApplicationUpgrade.lblUpgradeText.text = "A new and improved version of the application now available in the Chevron App store. Please open the app store and update the app";
            }
            if (isBlackBerry) {
              popApplicationUpgrade.lblUpgradeText.text = "A new and improved version of the application now available in the Chevron App store. Please open the app store and update the app";
            }
            if (isWindows()) {
              popApplicationUpgrade.lblUpgradeText.text = "A new and improved version of the application now available in the Chevron App store. Please open the app store and update the app";
            }

            popApplicationUpgrade.show();

          } else if (kony.string.equalsIgnoreCase(ValidateToken.version, "2")) {
            kony.application.dismissLoadingScreen();
			gblOptionalFlag = ValidateToken.optionalFlag;
            popApplicationOptionalUpgrade.lblUpgradeText.text = "A new and improved version of the application now available in the Chevron App store. Please open the app store and update the app";
            popApplicationOptionalUpgrade.show();
          }
			
        }
               
       //      }
      else{
        kony.application.dismissLoadingScreen();
        callPopup("Unable to process your request, please try again later");
      }
    }
  }catch(err){
    kony.print("error in validateMSTokenCallback function "+err);
  }
} 

function getCAIAPI(emailAddress){
  try{
    if(networkAvailable() == false){
      callPopup("Please check your internet connectivity and try again");
    }else{
      var getCAIAPI_inputparam = {};
      getCAIAPI_inputparam["serviceID"] = "CustomValidation$GetCAI";
      var getCAIAPI_httpheaders = {"Content-Type":"application/json"};
      getCAIAPI_inputparam["httpheaders"] = getCAIAPI_httpheaders;
      var getCAIAPI_httpconfigs = {};
      getCAIAPI_inputparam["httpconfig"] = getCAIAPI_httpconfigs;
      getCAIAPI_inputparam["emailAddress"] = emailAddress;

      CustomValidation$ValidateToken = mfintegrationsecureinvokerasync(getCAIAPI_inputparam, "CustomValidation", "GetCAI", getCAIAPICallback);
    }
  }catch(err){
      kony.print("error in validateMSToken function "+err);
    }
}

function getCAIAPICallback(status,GetCAI){

  try{
    if(status == 400){
      if(GetCAI["opstatus"] == 0){
        kony.application.dismissLoadingScreen();
        var CAI = GetCAI.CAI;
        //alert(CAI);
        if(CAI == "" || CAI == undefined || CAI == "null"){
          callPopup("Authentication Failed, please login again");
        }else{
          kony.store.setItem("CAI", CAI);
          callLogin(CAI);
        }
      }
      else{
        kony.application.dismissLoadingScreen();
        callPopup("Unable to process your request, please try again later");
      }
    }
  }catch(err){
    kony.print("error in validateMSTokenCallback function "+err);
  }
}