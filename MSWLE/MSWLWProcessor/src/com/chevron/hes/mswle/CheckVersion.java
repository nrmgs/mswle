package com.chevron.hes.mswle;

import java.util.HashMap;
import java.util.Iterator;

import org.apache.log4j.Logger;

import com.konylabs.middleware.common.DataPreProcessor;
import com.konylabs.middleware.common.DataPreProcessor2;
import com.konylabs.middleware.controller.DataControllerRequest;
import com.konylabs.middleware.controller.DataControllerResponse;
import com.konylabs.middleware.dataobject.Param;
import com.konylabs.middleware.dataobject.Result;

public class CheckVersion implements DataPreProcessor2
{
 public static final Logger LOG = Logger.getLogger(CheckVersion.class);
  



	public boolean execute(HashMap arg0, DataControllerRequest dcRequest,
			DataControllerResponse arg2, Result result) throws Exception {
		// TODO Auto-generated method stub
		
		boolean flag = true;
	    String minVersion = "";
	    String optionalVersion = "";
	    
	    String maintenanceVal = "";
	    String maintenanceMsgVal = "";
	    
	    try
	   {
	      LOG.debug("<<<<<<<<<<<<<<<START CHECKVERSION MSWLE PREPROCESSOR>>>>>>>>>>>>>>>");
	      
	     
	      
	      int appMajor = 0;
	      int appMinor = 0;
	      int appBuild = 0;
	      int minMajor = 0;
	      int minMinor = 0;
	      int minBuild = 0;
	      int optionalMajor = 0;
	      int optionalMinor = 0;
	      
	      int optionalBuild = 0;
	     
	     // LOG.debug("APPID: " + dcRequest.getParameter("appID"));
	     // if (dcRequest.getParameter("appID").toString().equalsIgnoreCase("MSWLE"))
	      //{
	        
	        minVersion = "1.0.0";
	        optionalVersion = "1.0.0";
	        
	        maintenanceVal = "off";
	        maintenanceMsgVal = "maintanance message here if maintenanceVal=on";
	        
	        
//	        Param mainParam = new Param();
//	        mainParam.setName("maintenanceVal");
//	        mainParam.setValue(maintenanceMsgVal);
//	        result.setParam(mainParam);
	     // }
	     // else
	     // {
	    	  
	      //  LOG.debug("into else part");
	      //}
	      //Iterator<String> reqParams = dcRequest.getParameterNames();
	      //while (reqParams.hasNext())
	      //{
	       // String reqParam = (String)reqParams.next();
	       // if (reqParam.equalsIgnoreCase("appver"))
	       //{
	        	
	        	 
	        //  LOG.debug("App Version param found in req params!!!");
	       //   String[] paramValues = dcRequest.getParameterValues(reqParam);
	       //   String appVersion = "";
	        //  for (int i = 0; i < paramValues.length; i++) {
	        //    appVersion = paramValues[i];
	        //  }
	        //  LOG.debug("Current app version: " + appVersion);
	        String appVersion = dcRequest.getParameter("appver");
	        String optionalFlagFromUI = dcRequest.getParameter("optionalFlagFromUI");
	          String[] appVersionSplit = appVersion.split("\\.", 3);
	          appMajor = Integer.parseInt(appVersionSplit[0]);
	          appMinor = Integer.parseInt(appVersionSplit[1]);
	          appBuild = Integer.parseInt(appVersionSplit[2]);
	          LOG.debug("Current app version: appMajor " + appMajor + " " + "appMinor " + appMinor + " " + "appBuild " + appBuild);
	          
	        
	            
	            String[] minVersionSplit = minVersion.split("\\.", 3);
	            minMajor = Integer.parseInt(minVersionSplit[0]);
	            minMinor = Integer.parseInt(minVersionSplit[1]);
	            minBuild = Integer.parseInt(minVersionSplit[2]);
	            
	            String[] optionalVersionSplit = optionalVersion.split("\\.", 3);
	            optionalMajor = Integer.parseInt(optionalVersionSplit[0]);
	            optionalMinor = Integer.parseInt(optionalVersionSplit[1]);
	            optionalBuild = Integer.parseInt(optionalVersionSplit[2]);
	            
	            Param versionParam = new Param();
	            versionParam.setName("version");
	            versionParam.setValue("1");
	            
	            Param optionalVersionParam = new Param();
	            optionalVersionParam.setName("version");
	            optionalVersionParam.setValue("2");
	            
	            Param optionalParam = new Param();
	            optionalParam.setName("optionalFlag");
	            optionalParam.setValue("true");
	            
	            Param maintenanceInputParam = new Param();
	            maintenanceInputParam.setName("Maintanance");
	            if (maintenanceVal.equalsIgnoreCase("on"))
	            {
	              String msg = maintenanceMsgVal;
	              maintenanceInputParam.setValue(msg);
	              result.setParam(maintenanceInputParam);
	              return false;
	            }
	            
	            int appflag = 0;
	            if (appMajor < minMajor)
	            {
	              LOG.debug("Force update - Major");
	              result.setParam(versionParam);
	              flag = false;
	              appflag = 1;
	            }
	            else if (appMajor == minMajor)
	            {
	              if (appMinor < minMinor)
	              {
	                LOG.debug("Force update - Major");
	                result.setParam(versionParam);
	                flag = false;
	                appflag = 1;
	              }
	              else if ((appMinor == minMinor) && 
	                (appBuild < minBuild))
	              {
	                LOG.debug("Force update - Major");
	                result.setParam(versionParam);
	                flag = false;
	                appflag = 1;
	              }
	            }
	            
	            if (appflag != 1 && optionalFlagFromUI.equalsIgnoreCase("false")) {
	              if (appMajor < optionalMajor)
	              {
	                LOG.debug("Optional Update");
	                result.setParam(optionalVersionParam);
	                result.setParam(optionalParam);
	                flag = false;
	              }
	              else if (appMajor == optionalMajor)
	              {
	                if (appMinor < optionalMinor)
	                {
	                  LOG.debug("Optional Update");
	                  result.setParam(optionalVersionParam);
	                  result.setParam(optionalParam);
	                  flag = false;
	                }
	                else if ((appMinor == optionalMinor) && 
	                  (appBuild < optionalBuild))
	                {
	                  LOG.debug("Optional Update");
	                  result.setParam(optionalVersionParam);
	                  result.setParam(optionalParam);
	                  flag = false;
	                }
	              }
	        //    }
	       //   }
	          
	        }
	      
	      LOG.debug("<<<<<<<<<<<<<<<END CHECKVERSION MSWLE PREPROCESSOR>>>>>>>>>>>>>>>");
	    }
	    catch (Exception e)
	    {
	      e.printStackTrace();
	      LOG.debug("Exception while checking the MSWLE version in CHECKVERSION :" + e);

          Param optionalVersionParam = new Param();
          optionalVersionParam.setName("version");
          optionalVersionParam.setValue(e.toString());
          flag = false;
	    }
		
      
       
	    return flag;
	} 
    
    
	
	 
}
