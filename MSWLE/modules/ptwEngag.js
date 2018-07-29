//Type your code here

var PTWQtCatLst = new Array();
PTWQtCatLst[0] = "Preparation";
PTWQtCatLst[1] = "General Documentation";
PTWQtCatLst[2] = "Authorization and Acknowledgement";
PTWQtCatLst[3] = "Gas Testing";
PTWQtCatLst[4] = "Communication";
PTWQtCatLst[5] = "Worksite Monitoring";
PTWQtCatLst[6] = "Work Pack";
PTWQtCatLst[7] = "Revalidation";
PTWQtCatLst[8] = "Feedback";

var PTWQtAns = new Array();
PTWQtAns[0] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-prep-1-comments",noId:404,yesId:377,field:"udf-msw-ptw-eng-sectionc-prep-1" ,qt:"1.A permit(s)/work plan(s) was prepared for all high and medium hazard potential tasks observed during this engagement?",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-prep-2-comments",noId:405,yesId:378,field:"udf-msw-ptw-eng-sectionc-prep-2",qt:"2.The permit/work plan(s) was prepared with direct input from the Person Managing Control of Work (PMCoW).",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-prep-3a-comments",noId:406,yesId:379,field:"udf-msw-ptw-eng-sectionc-prep-3a",qt:"3A.Was a Planning Phase Hazard Analysis (PPHA) required for the task?  (If ‘No’, skip question 3B).",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-prep-3b-comments",noId:407,yesId:380,field:"udf-msw-ptw-eng-sectionc-prep-3b",qt:"3B.Was the PPHA used to aid in the development of the permit(s)/work plan(s)?",ans:"none"}
              ];

PTWQtAns[1] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-gendoc-4-comments",noId:408,yesId:381,field:"udf-msw-ptw-eng-sectionc-gendoc-4",qt:"4.A description of the task was documented on the permit/work plan.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-gendoc-5-comments",noId:409,yesId:382,field:"udf-msw-ptw-eng-sectionc-gendoc-5",qt:"5.The date and location of task was documented on the permit/work plan.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-gendoc-6-comments",noId:410,yesId:383,field:"udf-msw-ptw-eng-sectionc-gendoc-6",qt:"6.A description of the equipment to be worked on was documented on the permit/work plan.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-gendoc-7a-comments",noId:411,yesId:384,field:"udf-msw-ptw-eng-sectionc-gendoc-7a",qt:"7A.Were procedures (e.g.operating, maintenance, D&C, etc.)necessary to complete the permitted task?  (If ‘No’, skip question 7B).",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-gendoc-7b-comments",noId:412,yesId:385,field:"udf-msw-ptw-eng-sectionc-gendoc-7b",qt:"7B.Procedures necessary to conduct the task were documented on the permit/work plan.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-gendoc-8a-comments",noId:413,yesId:386,field:"udf-msw-ptw-eng-sectionc-gendoc-8a",qt:"8A.Were specialized permits required for the task?  (If ‘No’, skip question 8B).",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-gendoc-8b-comments",noId:414,yesId:387,field:"udf-msw-ptw-eng-sectionc-gendoc-8b",qt:"8B.Specialized permits were referenced and documented on the general permit to work.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-gendoc-9-comments",noId:415,yesId:388,field:"udf-msw-ptw-eng-sectionc-gendoc-9",qt:"9.Permit duration was within the allowable 16 hour range",ans:"none"}];

PTWQtAns[2] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-authack-10a-comments",noId:416,yesId:389,field:"udf-msw-ptw-eng-sectionc-authack-10a",qt:"10A.Was a subject matter expert (SME) required to plan and  authorize the task (e.g.electrical, diving, excavation, hot tapping activities, etc.)?  (If ‘No’, skip question 10B).",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-authack-10b-comments",noId:417,yesId:390,field:"udf-msw-ptw-eng-sectionc-authack-10b",qt:"10B.The SME signed and approved the permit/work plan.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-authack-11-comments",noId:418,yesId:391,field:"udf-msw-ptw-eng-sectionc-authack-11",qt:"11.The permit/work plan was signed and approved by an  authorized permit approver.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-authack-12-comments",noId:419,yesId:392,field:"udf-msw-ptw-eng-sectionc-authack-12",qt:"12.The PMCoW signed and acknowledged the permit/work plan.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-authack-13a-comments",noId:420,yesId:393,field:"udf-msw-ptw-eng-sectionc-authack-13a",qt:"13A.Was a high level Chevron manager’s approval required for this task?  (If ‘No’, skip question 13B).",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-authack-13b-comments",noId:421,yesId:394,field:"udf-msw-ptw-eng-sectionc-authack-13b",qt:"13B.A high level Chevron manager approved the permit/work plan(for work such as hot tapping, use of explosives while diving, diving in a confined space, etc.).",ans:"none"}
              ];

PTWQtAns[3] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-gastest-14a-comments",noId:422,yesId:395,field:"udf-msw-ptw-eng-sectionc-gastest-14a",qt:"14A.Was gas testing required for the task?  (If ‘No’, skip questions 14B – 14C).",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-gastest-14b-comments",noId:423,yesId:396,field:"udf-msw-ptw-eng-sectionc-gastest-14b",qt:"14B.The name of the qualified gas tester was documented on the permit.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-gastest-14c-comments",noId:424,yesId:397,field:"udf-msw-ptw-eng-sectionc-gastest-14c",qt:"14C.Gas testing results (initial and follow up (if required) were documented on the permit.",ans:"none"}
               ];

PTWQtAns[4] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-comm-15-comments",noId:425,yesId:398,field:"udf-msw-ptw-eng-sectionc-comm-15",qt:"15.The PMCoW reviewed all permit and work plan conditions with the entire work crew.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-comm-16-comments",noId:426,yesId:399,field:"udf-msw-ptw-eng-sectionc-comm-16",qt:"16.The PMCoW discussed stop work and permit/work plan revalidation/cancellation conditions with the entire work crew.",ans:"none"}
              ];

PTWQtAns[5] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-wkmon-17-comments",noId:427,yesId:400,field:"udf-msw-ptw-eng-sectionc-wkmon-17",qt:"17.The PMCoW monitored the worksite and work crew to ensure the task was being conducted in accordance with permit/work plan conditions.",ans:"none"}
               ];

PTWQtAns[6] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-wkpak-18-comments",noId:428,yesId:401,field:"udf-msw-ptw-eng-sectionc-wkpak-18",qt:"18.The work pack was maintained onsite where the task was being performed.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-wkpak-19-comments",noId:429,yesId:402,field:"udf-msw-ptw-eng-sectionc-wkpak-19",qt:"19.The work pack included all permits and work plans.",ans:"none"}
               ];

PTWQtAns[7] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-reval-20a-comments",noId:523,yesId:518,field:"udf-msw-ptw-eng-sectionc-reval-20a",qt:"20A.Were permits revalidated for this task?  (If ‘No’, skip questions 20B – 20E).",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-reval-20b-comments",noId:524,yesId:519,field:"udf-msw-ptw-eng-sectionc-reval-20b",qt:"20B.The PMCoW visually verified and validated that all permit conditions are being met and safeguards/mitigations(documented on the JSA) are in place and functioning.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-reval-20c-comments",noId:525,yesId:520,field:"udf-msw-ptw-eng-sectionc-reval-20c",qt:"20C.After conducting the V&V, the PMCOW revalidated the permit.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-reval-20d-comments",noId:526,yesId:521,field:"udf-msw-ptw-eng-sectionc-reval-20d",qt:"20D. Permit revalidation was captured via a wet ink signature on the permit located at the worksite with the work pack.",ans:"none"},
               {skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"msw-ptw-eng-sectionc-reval-20e-comments",noId:527,yesId:522,field:"udf-msw-ptw-eng-sectionc-reval-20e",qt:"20E.The permit revalidation duration was within the allowable permit duration range.",ans:"none"}             
               ];

PTWQtAns[8] = [{skinNo:"sknChkBxPlain",skinYes:"sknChkBxPlain",comts:"",commId:"",noId:430,yesId:403,field:"udf-msw-ptw-eng-sectionc-fdbk-999",qt:"Was feedback provided to the team during the close-out of this engagement?",ans:"none"}
               ];

/*
udf-msw-ptw-eng-sectionc-prep-1
udf-msw-ptw-eng-sectionc-prep-2
udf-msw-ptw-eng-sectionc-prep-3a
udf-msw-ptw-eng-sectionc-prep-3b
udf-msw-ptw-eng-sectionc-gendoc-4
udf-msw-ptw-eng-sectionc-gendoc-5
udf-msw-ptw-eng-sectionc-gendoc-6
udf-msw-ptw-eng-sectionc-gendoc-7a
udf-msw-ptw-eng-sectionc-gendoc-7b
udf-msw-ptw-eng-sectionc-gendoc-8a
udf-msw-ptw-eng-sectionc-gendoc-8b
udf-msw-ptw-eng-sectionc-gendoc-9
udf-msw-ptw-eng-sectionc-authack-10a
udf-msw-ptw-eng-sectionc-authack-10b
udf-msw-ptw-eng-sectionc-authack-11
udf-msw-ptw-eng-sectionc-authack-12
udf-msw-ptw-eng-sectionc-authack-13a
udf-msw-ptw-eng-sectionc-authack-13b
udf-msw-ptw-eng-sectionc-gastest-14a
udf-msw-ptw-eng-sectionc-gastest-14b
udf-msw-ptw-eng-sectionc-gastest-14c
udf-msw-ptw-eng-sectionc-comm-15
udf-msw-ptw-eng-sectionc-comm-16
udf-msw-ptw-eng-sectionc-wkmon-17
udf-msw-ptw-eng-sectionc-wkpak-18
udf-msw-ptw-eng-sectionc-wkpak-19
udf-msw-ptw-eng-sectionc-reval-20a
udf-msw-ptw-eng-sectionc-reval-20b
udf-msw-ptw-eng-sectionc-reval-20c
udf-msw-ptw-eng-sectionc-reval-20d
udf-msw-ptw-eng-sectionc-reval-20e


YES - 377 - 402, 518-522
NO - 404 - 429, 523-527 

"msw-ptw-eng-sectionc-prep-1-comments"
"msw-ptw-eng-sectionc-prep-2-comments"
"msw-ptw-eng-sectionc-prep-3a-comments"
"msw-ptw-eng-sectionc-prep-3b-comments"
"msw-ptw-eng-sectionc-gendoc-4-comments"
"msw-ptw-eng-sectionc-gendoc-5-comments"
"msw-ptw-eng-sectionc-gendoc-6-comments"
"msw-ptw-eng-sectionc-gendoc-7a-comments"
"msw-ptw-eng-sectionc-gendoc-7b-comments"
"msw-ptw-eng-sectionc-gendoc-8a-comments"
"msw-ptw-eng-sectionc-gendoc-8b-comments"
"msw-ptw-eng-sectionc-gendoc-9-comments"
"msw-ptw-eng-sectionc-authack-10a-comments"
"msw-ptw-eng-sectionc-authack-10b-comments"
"msw-ptw-eng-sectionc-authack-11-comments"
"msw-ptw-eng-sectionc-authack-12-comments"
"msw-ptw-eng-sectionc-authack-13a-comments"
"msw-ptw-eng-sectionc-authack-13b-comments"
"msw-ptw-eng-sectionc-gastest-14a-comments"
"msw-ptw-eng-sectionc-gastest-14b-comments"
"msw-ptw-eng-sectionc-gastest-14c-comments"
"msw-ptw-eng-sectionc-comm-15-comments"
"msw-ptw-eng-sectionc-comm-16-comments"
"msw-ptw-eng-sectionc-wkmon-17-comments"
"msw-ptw-eng-sectionc-wkpak-18-comments"
"msw-ptw-eng-sectionc-wkpak-19-comments"
"msw-ptw-eng-sectionc-reval-20a-comments"
"msw-ptw-eng-sectionc-reval-20b-comments"
"msw-ptw-eng-sectionc-reval-20c-comments"
"msw-ptw-eng-sectionc-reval-20d-comments"
"msw-ptw-eng-sectionc-reval-20e-comments"
*/