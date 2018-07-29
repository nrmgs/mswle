package com.chevron.hes.mswle;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.apache.log4j.Logger;

import com.konylabs.middleware.common.DataPreProcessor2;
import com.konylabs.middleware.controller.DataControllerRequest;
import com.konylabs.middleware.controller.DataControllerResponse;
import com.konylabs.middleware.dataobject.Result;

public class LoginPreProcessor implements DataPreProcessor2
{
 public static final Logger LOG = Logger.getLogger(LoginPreProcessor.class);
  

  
  

	public boolean execute(HashMap hmInput, DataControllerRequest dcRequest,
			DataControllerResponse arg2, Result result) throws Exception {
		
		try
	    {
		String ipAddress = dcRequest.getHeader("ClientIP");
        if (ipAddress == null) {
          ipAddress = dcRequest.getRemoteAddr();
        }
        
        Iterator<String> reqParams = dcRequest.getParameterNames();
        while (reqParams.hasNext())
        {
          String reqParam = (String)reqParams.next();
          System.out.println("reqParam :: "+reqParam);
          }
   
        System.out.println("APPID: " + dcRequest.getParameter("appID"));
        LOG.debug("APPID: " + dcRequest.getParameter("appID"));
        String userName = dcRequest.getParameter("UserName");
        
		String password = "syntex";
		
		StringBuffer plainStr = new StringBuffer();
		plainStr.append(userName).append("*&%#$").append(password);
		
		System.out.println("plainStr :: "+plainStr.toString());
		//LOG.debug("<<<<<<<<<<<<<<<START LOGIN PREPROCESSOR>>>>>>>>>>>>>>>");
        //hmInput.put("jSessionId", newSession.getId());
		 hmInput.put("UserName", dcRequest.getParameter("UserName"));
        hmInput.put("Password", SHA1(plainStr.toString()));
       
        Iterator it = hmInput.entrySet().iterator();
        while (it.hasNext()) {
        	System.out.println(" LOGIN PREPROCESSOR Input:" + it.next());
        }
        //newSession.setMaxInactiveInterval(300);
      //}
        
        while (it.hasNext()) {
			Map.Entry<String, String> inputParam = (Map.Entry) it.next();
			System.out.println("InputParam: " + (String) inputParam.getKey()
					+ " Value: " + (String) inputParam.getValue());
		}
        System.out.println("<<<<<<<<<<<<<<<END LOGINPREPROCESSOR>>>>>>>>>>>>>>>");
    }
    catch (Exception e)
    {
    	System.out.println("Exception while updating the sessionId in LoginPreProcessor :" + e);
    }
    return true;
	}
	private static String convertToHex(byte[] data) { 
        StringBuffer buf = new StringBuffer();
        for (int i = 0; i < data.length; i++) { 
            int halfbyte = (data[i] >>> 4) & 0x0F;
            int two_halfs = 0;
            do { 
                if ((0 <= halfbyte) && (halfbyte <= 9)) 
                    buf.append((char) ('0' + halfbyte));
                else 
                    buf.append((char) ('a' + (halfbyte - 10)));
                halfbyte = data[i] & 0x0F;
            } while(two_halfs++ < 1);
        } 
        return buf.toString();
    } 
 
    public static String SHA1(String text) throws NoSuchAlgorithmException, UnsupportedEncodingException  { 
    MessageDigest md;
    md = MessageDigest.getInstance("SHA-1");
    byte[] sha1hash = new byte[40];
    md.update(text.getBytes("iso-8859-1"), 0, text.length());
    sha1hash = md.digest();
    return convertToHex(sha1hash);
    } 
    
    
	public static void main (String[] args){
//		String KAI ="SMCZ";
//		String password = "syntex";
//		String sample = KAI+"#"+password;
		//String resultHashedVal = SHA1("PDJN"+""+);
		//System.out.println(resultHashedVal);
		
		
		try {
			String sha1_ad1 = SHA1("MSLI*&%#$syntex");
			
			  String appVersion = "1.0.0";
	          String[] appVersionSplit = appVersion.split("\\.", 3);
			System.out.println(sha1_ad1);
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}    
//		String name = "Technology Ventures (CTV)";
//		char character = name.charAt(0); // This gives the character 'a'
//		int ascii = (int) character; // ascii is now 97.
//		String  str = Character.toString((char)ascii);
//	    System.out.println(str);
		       
		
	}
	 
}
