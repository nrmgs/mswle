//Type your code here

isBlackBerry = false;
function isAndroid() {
    try {
        var devName = kony.os.deviceInfo().name;
        if (devName == "android") {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        kony.print("Error On isAndroid " + err);
    }

}

function isIos() {
    try {
        var devName = kony.os.deviceInfo().name;

        if (devName == "iPhone" || devName == "iPad" || devName == "iPhone Simulator") {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        kony.print("Error On isIos " + err);
    }

}

function isWindows() {
    try {
        var devName = kony.os.deviceInfo().name;
        if (devName.toLowerCase() == "windowsphone" || devName == "windows") {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        kony.print("Error On isWindows " + err);
    }

}




function checkUpgradetoStore() {

    popApplicationUpgrade.dismiss();
    if (isAndroid() && isBlackBerry == false) {
        kony.application.openURL("https://play.google.com/store/apps/details?id=com.sbi.SBAnywhereSaral");
        kony.application.exit();
    }

    if (isIos()) {
        kony.application.openURL("https://itunes.apple.com/in/app/state-bank-anywhere-saral/id1017661104?mt=8");
        kony.application.exit();
    }

    if (isBlackBerry) {
        kony.application.openURL("http://appworld.blackberry.com/webstore/?region=100&lang=en&IID=in:bb:apps:app-world-new:browse-download");
    }

    if (isWindows()) {
        kony.application.openURL("https://www.microsoft.com/en-in/store/p/sb-anywhere-saral/9nblggh1n7d1");
        // kony.application.exit();
        
    }

    
}