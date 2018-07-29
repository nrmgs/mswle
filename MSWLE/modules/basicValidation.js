//Type your code here

function isEmpty(val)
{

	if(val == "" || val ==null || val ==undefined)
	{
		return false;
	} else return true;


}
function checkSpecialChars(user)
{
    var username =user;
    var pattern = new RegExp(/[~`!$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
    //var pattern = new RegExp("/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\:<>\?]/"); //unacceptable chars
    if (pattern.test(username)) 
    	{
        return true;
	}else
	{
	   return false;
	}
  
}

function decode(stringToConvert) {
  try{
    var Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        decode: function(e) {
            var base64String = "";
            var characterCount, r, i;
            var s, o, u, a;
            var f = 0;
            e = e.replace(/[^A-Za-z0-9+/=]/g, "");
            while (f < e.length) {
                s = this._keyStr.indexOf(e.charAt(f++));
                o = this._keyStr.indexOf(e.charAt(f++));
                u = this._keyStr.indexOf(e.charAt(f++));
                a = this._keyStr.indexOf(e.charAt(f++));
                characterCount = s << 2 | o >> 4;
                r = (o & 15) << 4 | u >> 2;
                i = (u & 3) << 6 | a;
                base64String = base64String + String.fromCharCode(characterCount);
                if (u != 64) {
                    base64String = base64String + String.fromCharCode(r);
                }
                if (a != 64) {
                    base64String = base64String + String.fromCharCode(i);
                }
            }
            base64String = Base64._utf8_decode(base64String);
            return base64String;
        },
        _utf8_decode: function(e) {
            var base64String = "";
            var characterCount = 0;
            var r = 0,
                c1 = 0,
                c2 = 0,
                c3 = 0;
            while (characterCount < e.length) {
                r = e.charCodeAt(characterCount);
                if (r < 128) {
                    base64String += String.fromCharCode(r);
                    characterCount++;
                } else if (r > 191 && r < 224) {
                    c2 = e.charCodeAt(characterCount + 1);
                    base64String += String.fromCharCode((r & 31) << 6 | c2 & 63);
                    characterCount += 2;
                } else {
                    c2 = e.charCodeAt(characterCount + 1);
                    c3 = e.charCodeAt(characterCount + 2);
                    base64String += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    characterCount += 3;
                }
            }
            return base64String;
        }
    };
    if (stringToConvert !== null && stringToConvert !== undefined) {
        var returnBase64 = Base64.decode(stringToConvert);
        kony.print("blob data " + returnBase64);
        return returnBase64;
    } else {
        return null;
    }
  }
  catch(err)
  {
     kony.print(err);
  }
}