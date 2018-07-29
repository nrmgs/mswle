package com.chevron.hes.mswle;

import com.konylabs.middleware.common.DataPostProcessor;
import com.konylabs.middleware.controller.DataControllerRequest;
import com.konylabs.middleware.dataobject.Dataset;
import com.konylabs.middleware.dataobject.Param;
import com.konylabs.middleware.dataobject.Record;
import com.konylabs.middleware.dataobject.Result;
import com.konylabs.middleware.session.Session;



//import com.konylabs.middleware.session.Session;
import java.util.ArrayList;
import java.util.Enumeration;



//import java.util.Iterator;
import org.apache.log4j.Logger;

public class SitesPostProcessor implements DataPostProcessor
{
	public static final Logger LOG = Logger.getLogger(SitesPostProcessor.class);

	public Object execute(Result result, DataControllerRequest dcRequest)
			throws Exception
			{
		try
		{

			Dataset MSWLE = new Dataset("Data");
			Dataset CHESM = new Dataset("CHESM");
			ArrayList<Record> MSWLWSites = new ArrayList<Record>();
			
			ArrayList<Record> CHESMSites = new ArrayList<Record>();
			 Dataset CollectionName= result.findDataset("Data");
            
//			 ArrayList<Record> records1 = CollectionName.getRecords();
//             String SiteId= records1.get(0).getParam("SiteId").getValue();    
//             String SiteName= records1.get(0).getParam("SiteName").getValue(); 
//             
//             
//             Param newParam = new Param();
//             newParam.setName("Data");
//             newParam.setValue(SiteName);
//             result.setParam(newParam);
//             
			if (CollectionName != null)
			{
					
				ArrayList<Record> records = CollectionName.getRecords();
				
				for (int i =0;i<records.size();i++){
					String SiteName= records.get(i).getParam("SiteName").getValue();
//					 String firstStr = SiteName.substring(0, 1);
//					 Character a = firstStr.charAt(0);
					 char character = SiteName.charAt(0); // This gives the character 'a'
						int ascii = (int) character; // ascii is now 97.
						String  str = Character.toString((char)ascii);
					 if(str.equals("")){
							CHESMSites.add(records.get(i));
						}else{
							MSWLWSites.add(records.get(i));
						}
				}
//				for(Record record : records){
//					//String SiteId= record.getParam("SiteId").getValue();    
//	                String SiteName= record.getParam("SiteName").getValue(); 
//				    String firstStr = SiteName.substring(0, 2);
//						if(firstStr == "BA"){
//							CHESMSites.add(record);
//						}else{
//							MSWLWSites.add(record);
//						}
//				}
//			
			}
			
		     
		      
		      
			//MSWLE.setRecords(MSWLWSites);
			CHESM.setRecords(CHESMSites);
			MSWLE.setRecords(MSWLWSites);
			
			result.setDataSet(CHESM);
			result.setDataSet(MSWLE);
			
			LOG.debug("<<<<<<<<<<<<<<<END SitesPostProcessor POSTPROCESSOR>>>>>>>>>>>>>>>");
		}
		catch (Exception e)
		{
			LOG.debug("Exception in SitesPostProcessor postprocessor:" + e);
		}
		return result;
			}
}
