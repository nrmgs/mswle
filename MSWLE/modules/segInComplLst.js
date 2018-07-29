//Type your code here


// function segIncompFrm()
// {
	
// 	//frmIncompLst.segIncomLst.widgetDataMap = {lblSecHdr:"lblSecHdr",lblDynaQt:"lblDynaQt",lblQtYes:"lblQtYes",imgQtNo:"imgQtNo",imgQtYes:"imgQtYes",lblQtNo:"lblQtNo",txtAreaComments:"txtAreaComments"};
// 	frmIncompLst.segIncomLst.widgetDataMap = {lblSecHdr:"lblSecHdr",lblDynaQt:"lblDynaQt"};
// 	frmIncompLst.segIncomLst.data = [
// 							[ {lblSecHdr:"Preparation",template:boxRefSegHdr},					
// 							    [
// 								   	 {lblDynaQt:"1. The JSA was conducted onsite \n where the work was scheduled to be \n conducted. ",template:flx1},
//                                       {lblDynaQt:"2A. Was a Planning Phase Hazard \n Analysis (PPHA) required for the \n task?  (If ‘No’, skip question 2B).",template:flx1},
//                                       {lblDynaQt:"2B. The PPHA was used to aid in\n the development of the JSA. ",template:flx1},
//                                        {lblDynaQt:"3. Permits were used to aid in\n the development of the JSA. ",template:flx1},
//                                        {lblDynaQt:"4A. Was a work plan (lift \nplan/SIMOPs plan) required for\n the task?  ",template:flx1}
// 								]
// 							],
							
// 							[ {lblSecHdr:"General Documentation",template:boxRefSegHdr},								
// 								[
// 									 {lblDynaQt:"1. The JSA was conducted onsite \n where the work was scheduled to be \n conducted. ",template:flx1},
//                                       {lblDynaQt:"2A. Was a Planning Phase Hazard \n Analysis (PPHA) required for the \n task?  (If ‘No’, skip question 2B).",template:flx1},
//                                       {lblDynaQt:"2B. The PPHA was used to aid in\n the development of the JSA. ",template:flx1},
//                                        {lblDynaQt:"3. Permits were used to aid in\n the development of the JSA. ",template:flx1},
//                                        {lblDynaQt:"4A. Was a work plan (lift \nplan/SIMOPs plan) required for\n the task?  ",template:flx1}
// 								 ]
// 							],
// 							[ {lblSecHdr:"Hazard Analysis & Safeguard Doc",template:boxRefSegHdr},
// 								[
// 									 {lblDynaQt:"1. The JSA was conducted onsite \n where the work was scheduled to be \n conducted. ",template:flx1},
//                               {lblDynaQt:"2A. Was a Planning Phase Hazard \n Analysis (PPHA) required for the \n task?  (If ‘No’, skip question 2B).",template:flx1},
//                               {lblDynaQt:"2B. The PPHA was used to aid in\n the development of the JSA. ",template:flx1},
//                                {lblDynaQt:"3. Permits were used to aid in\n the development of the JSA. ",template:flx1},
//                                {lblDynaQt:"4A. Was a work plan (lift \nplan/SIMOPs plan) required for\n the task?  ",template:flx1}
//                                                         ]
// 							]	
// 						];
// 	frmIncompLst.show();
// }
	


function onGestureFunction(commonWidget,gestureInfo)
{
	
	try
	{
		
		var GesType = ""+gestureInfo.gestureType;
     
		var currenrtFrm = kony.application.getCurrentForm().id;
      
		 if (GesType == "2") 
         { 
			var swipeDirection = ""+gestureInfo.swipeDirection;
			if (swipeDirection == "1") 
			{
				//alert("left");
                if(currenrtFrm == "frmForm1"){
					frmForm2.show();
						
                }else if(currenrtFrm == "frmForm2"){
				    frmForm3.show();	

                }else if(currenrtFrm == "frmForm3"){
					frmForm5.show();

                }else if(currenrtFrm == "frmForm5"){
					frmHome.show();

                }
			}
			else if (swipeDirection == "2") 
			{
				//alert("right");
                if(currenrtFrm == "frmForm1"){
					frmDashboard1.show();

                }else if(currenrtFrm == "frmForm2"){
					frmForm1.show();

                }else if(currenrtFrm == "frmForm3"){
					frmForm2.show();

                }else if(currenrtFrm == "frmForm5"){
					frmForm3.show();

                }
			}


		}

	}
	catch(err)
	{
		//alert("error in gesture call back"+err);
	}
}



function GenericGestureHandler()//This function registers the Gesture events for the widgets.
{
	try
	{
		
// 	  frmForm1.setGestureRecognizer(2, {fingers:1,swipedistance:50,swipevelocity:75}, onGestureFunction); // swipe with default parameters
//       frmForm2.setGestureRecognizer(2, {fingers:1,swipedistance:50,swipevelocity:75}, onGestureFunction); // swipe with default parameters
//       frmForm3.setGestureRecognizer(2, {fingers:1,swipedistance:50,swipevelocity:75}, onGestureFunction); // swipe with default parameters
//       frmForm5.setGestureRecognizer(2, {fingers:1,swipedistance:50,swipevelocity:75}, onGestureFunction); // swipe with default parameters
		
	}
	catch(err)
	{
		//alert("error while regestering the gestures"+err);
	}
}
	