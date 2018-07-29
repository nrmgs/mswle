//Type your code here
/*
version = 2 since our assumption is this will be the second update after creation of form
*/

var FVTemplate, JSATemplate, PTWTemplate, GenTemplate, CHESMFVTemplate;
var AssessmentTypes = {};

AssessmentTypes = {
  "Data": [
    {
      "Id": 144,
      "Name": "Action Plan"
    },
    {
      "Id": 140,
      "Name": "Field Verification"
    },
    {
      "Id": 143,
      "Name": "Generic Engagement"
    },
    {
      "Id": 141,
      "Name": "JSA Engagement"
    },
    {
      "Id": 142,
      "Name": "PTW Engagement"
    }
  ]
};

/*FVTemplate = {
  "UdfFields": {
    "engagementdt": {
      "$type": "datetime?",
      "Value": null
    },
    "timeofdayid": {
      "$type": "nameditem",
      "Value": {
        "Id": "",
        "Name": ""
      }
    },
    "wkcrewsubofprimid": {
      "$type": "nameditem",
      "Value": {
        "Id": null,
        "Name": ""
      }
    },
    "workforcetypeid": {
      "$type": "nameditem",
      "Value": {
        "Id": null,
        "Name": ""
      }
    },
    "primarycompanyid": {
      "$type": "nameditem",
      "Value": {
        "Id": null,
        "Name": ""
      }
    },
    "actplanapplicid": {
      "$type": "nameditem",
      "Value": null
    },        
    "udf-msw-specialized-activity-flagsgroup": 		{
      "$type": "multiselect",
      "Value": [
        {
          "Id": 0,
          "Name": "Confined Space"
        },
        {
          "Id": 0,
          "Name": "Control of Static Electricity"
        },
        {
          "Id": 0,
          "Name": "Diving"
        },
        {
          "Id": 0,
          "Name": "Excavation"
        },
        {
          "Id": 0,
          "Name": "Electrical"
        },
        {
          "Id": 0,
          "Name": "Hot Work"
        },
        {
          "Id": 0,
          "Name": "Isolation of Hazardous Energy"
        },
        {
          "Id": 0,
          "Name": "Lifting and Rigging"
        },
        {
          "Id": 0,
          "Name": "Portable Gas Detection"
        },
        {
          "Id": 0,
          "Name": "Work at Height"
        },
        {
          "Id": 0,
          "Name": "Other"
        }
      ]
    },
    "udf-msw-fv-eng-sectionc-jsa-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-fv-eng-sectionc-jsa-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-fv-eng-sectionc-jsa-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-fv-eng-sectionc-jsa-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-fv-eng-sectionc-jsa-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-fv-eng-sectionc-jsa-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-fv-eng-sectionc-jsa-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-fv-eng-sectionc-jsa-8": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-fv-eng-sectionc-jsa-9": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-fv-eng-sectionc-ssem-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-fv-eng-sectionc-ssem-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-fv-eng-sectionc-ssem-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-fv-eng-sectionc-ssem-4a": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-fv-eng-sectionc-ssem-4b": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-fv-eng-sectionc-ssem-5a": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-fv-eng-sectionc-ssem-5b": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-fv-eng-sectionc-ssem-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-fv-eng-sectionc-ssem-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-fv-eng-sectionc-emgt-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-fv-eng-sectionc-emgt-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-fv-eng-sectionc-ptw-1": {
      "$type": "multiselect",
      "Value": [{
        "Id": null,
        "Name": ""
      }]
    },
    "udf-msw-fv-eng-sectionc-ptw-2": {
      "$type": "multiselect",
      "Value": [{
        "Id": null,
        "Name": ""
      }]
    },
    "udf-msw-fv-eng-sectionc-ptw-3": {
      "$type": "multiselect",
      "Value": [{
        "Id": null,
        "Name": ""
      }]
    },
    "udf-msw-fv-eng-sectionc-ptw-4": {
      "$type": "multiselect",
      "Value": [{
        "Id": null,
        "Name": ""
      }]
    },
    "udf-msw-fv-eng-sectionc-fdbk-999": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-fv-eng-sectiond-csw-1": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-csw-2": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-csw-3": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-csw-4": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-csw-5a": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-csw-5b": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-csw-5c": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-div-1": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-div-2": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-div-3": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-div-4": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-div-5": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-div-6": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-elecwk-1": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-elecwk-2": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-elecwk-3": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-elecwk-4": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-elecwk-5": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-elecwk-6a": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-elecwk-6b": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-elecwk-6c": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-elecwk-7a": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-elecwk-7b": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-excav-1": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-excav-2": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-excav-3": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-excav-4a": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-excav-4b": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-excav-5a": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-excav-5b": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-excav-6a": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-excav-6b": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-excav-6c": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-hotwk-1": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-hotwk-2": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-hotwk-3": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-hotwk-4": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-hotwk-5": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-hotwk-6": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-hotwk-7": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-isohazen-1": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-isohazen-2": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-isohazen-3": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-isohazen-4": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-isohazen-5": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-lift-1": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-lift-2": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-lift-3": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-lift-4": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-lift-5a": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-lift-5b": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-lift-6a": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-lift-6b": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-pgd-1": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-pgd-2": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-pgd-3": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-wkathght-1": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-wkathght-2": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-wkathght-3": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-wkathght-4": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-wkathght-5": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-wkathght-6a": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-wkathght-6b": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-wkathght-7a": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-wkathght-7b": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-vactrkops-1": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-vactrkops-2": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-vactrkops-3": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-vactrkops-4": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-vactrkops-5": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-fv-eng-sectiond-fdbk-999": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-eng-applicability-flagsgroup": {
      "$type": "multiselect",
      "Value": []
    },
    "msw-fv-eng-sectionc-jsa-1-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-jsa-2-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-jsa-3-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-jsa-4-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-jsa-5-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-jsa-6-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-jsa-7-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-jsa-8-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-jsa-9-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-ssem-1-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-ssem-2-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-ssem-3-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-ssem-4a-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-ssem-4b-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-ssem-5a-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-ssem-5b-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-ssem-6-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-ssem-7-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-emgt-1-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-emgt-2-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-ptw-1-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-ptw-2-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-ptw-3-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "msw-fv-eng-sectionc-ptw-4-comments": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "mswspecificlocation": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },

    "mswsubcontractorname": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "mswotherspecactshortnote": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    }
  },
  "AssessmentId": 0,
  "Agency": null,
  "AssessmentLevel": null,
  "AssessmentPlannedDuration": null,
  "Company": null,
  "Occupation": null,
  "Location": {"Id":null, "Name":""},
  "Task": null,
  "WeatherCondition": null,
  "InvolvementType": null,
  "NoticeType": null,
  "Domain": null,
  "Shift": null,
  "Reason": null,
  "Method": null,
  "RouteType": null,
  "DriveType": null,
  "VehicleType": null,
  "Temperature": null,
  "Flags": [],
  "ResponsibilityAssignments": {},
  "Department": {},
  "AssessmentType": {
    "Id": 140,
    "Name": "Field Verification"
  },
  "WorkflowStatus": {
    "Id": "1",
    "Name": "Open"
  },
  "PlannedRemovalDateUTC": null,
  "ConductedDateUTC": null,
  "ReportedDateUTC": null,
  "ReferenceNumber": null,
  "ExternalReferenceNumber": null,
  "FeedbackDateUTC": null,
  "SpecificLocation": null,
  "NumberObserved": 0,
  "AssessmentTitle": null,
  "Note": null,
  "FeedbackNote": null,
  "PositiveNote": null,
  "ObserveeNote": null,
  "IncidentDisplayKey": null,
  "Coach": null,
  "Version": 1,
  "AttachmentList":{}
};*/

JSATemplate = {
  "UdfFields": {
    "engagementdt": {
      "$type": "datetime?",
      "Value": null
    },
    "timeofdayid": {
      "$type": "nameditem",
      "Value": {
        "Id": null,
        "Name": ""
      }
    },
    "wkcrewsubofprimid": {
      "$type": "nameditem",
      "Value": {
        "Id": null,
        "Name": ""
      }
    },
    "workforcetypeid": {
      "$type": "nameditem",
      "Value": {
        "Id": "",
        "Name": ""
      }
    },
    "primarycompanyid": {
      "$type": "nameditem",
      "Value": {
        "Id": null,
        "Name": ""
      }
    },
    "actplanapplicid": {
      "$type": "nameditem",
      "Value": null
    },        
    "udf-msw-specialized-activity-flagsgroup": 		{
      "$type": "multiselect",
      "Value": [
        {
          "Id": 0,
          "Name": "Confined Space"
        },
        {
          "Id": 0,
          "Name": "Control of Static Electricity"
        },
        {
          "Id": 0,
          "Name": "Diving"
        },
        {
          "Id": 0,
          "Name": "Excavation"
        },
        {
          "Id": 0,
          "Name": "Electrical"
        },
        {
          "Id": 0,
          "Name": "Hot Work"
        },
        {
          "Id": 0,
          "Name": "Isolation of Hazardous Energy"
        },
        {
          "Id": 0,
          "Name": "Lifting and Rigging"
        },
        {
          "Id": 0,
          "Name": "Portable Gas Detection"
        },
        {
          "Id": 0,
          "Name": "Work at Height"
        },
        {
          "Id": 0,
          "Name": "Other"
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-prep-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-prep-2a": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-prep-2b": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-prep-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-prep-4a": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-prep-4b": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-prep-5a": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-prep-5b": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-gendoc-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-gendoc-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-gendoc-8": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-gendoc-9": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-gendoc-10a": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-gendoc-10b": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-gendoc-11": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-gendoc-12": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-hazanal-13": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-hazanal-14": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-hazanal-15": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-hazanal-16": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-hazanal-17": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-stopwk-18": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-stopwk-19": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-stopwk-20": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-humperf-21": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-humperf-22": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-humperf-23": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-vnv-24": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-vnv-25": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-comm-26": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-comm-27": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-comm-28": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-close-29a": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-close-29b": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-jsa-eng-sectionc-fdbk-999": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-eng-applicability-flagsgroup": {
      "$type": "multiselect",
      "Value": []
    },
    "msw-jsa-eng-sectionc-prep-1-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-prep-2a-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-prep-2b-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-prep-3-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-prep-4a-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-prep-4b-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-prep-5a-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-prep-5b-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-gendoc-6-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-gendoc-7-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-gendoc-8-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-gendoc-9-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-gendoc-10a-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-gendoc-10b-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-gendoc-11-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-gendoc-12-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-hazanal-13-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-hazanal-14-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-hazanal-15-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-hazanal-16-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-hazanal-17-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-stopwk-18-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-stopwk-19-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-stopwk-20-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-humperf-21-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-humperf-22-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-humperf-23-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-vnv-24-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-vnv-25-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-comm-26-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-comm-27-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-comm-28-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-close-29a-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-jsa-eng-sectionc-close-29b-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "mswspecificlocation": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },

    "mswsubcontractorname": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "mswotherspecactshortnote": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    }
  },
  "AssessmentId": 0,
  "Agency": null,
  "AssessmentLevel": null,
  "AssessmentPlannedDuration": null,
  "Company": null,
  "Occupation": null,
  "Location": {"Id":null, "Name":""},

  "Task": null,
  "WeatherCondition": null,
  "InvolvementType": null,
  "NoticeType": null,
  "Domain": null,
  "Shift": null,
  "Reason": null,
  "Method": null,
  "RouteType": null,
  "DriveType": null,
  "VehicleType": null,
  "Temperature": null,
  "Flags": [],
  "ResponsibilityAssignments": {},
  "Department": {},
  "AssessmentType": {
    "Id": 141,
    "Name": "JSA Engagement"
  },
  "WorkflowStatus": {
    "Id": "1",
    "Name": "Open"
  },
  "PlannedRemovalDateUTC": null,
  "ConductedDateUTC": "",
  "ReportedDateUTC": "",
  "ReferenceNumber": null,
  "ExternalReferenceNumber": null,
  "FeedbackDateUTC": null,
  "SpecificLocation": null,
  "NumberObserved": 0,
  "AssessmentTitle": null,
  "Note": null,
  "FeedbackNote": null,
  "PositiveNote": null,
  "ObserveeNote": null,
  "IncidentDisplayKey": null,
  "Coach": null,
  "Version": 1,
  "AttachmentList":{}
};

PTWTemplate = {
  "UdfFields": {
    "engagementdt": {
      "$type": "datetime?",
      "Value": null
    },
    "timeofdayid": {
      "$type": "nameditem",
      "Value": {
        "Id": "",
        "Name": ""
      }
    },
    "wkcrewsubofprimid": {
      "$type": "nameditem",
      "Value": {
        "Id": null,
        "Name": ""
      }
    },
    "workforcetypeid": {
      "$type": "nameditem",
      "Value": {
        "Id": null,
        "Name": ""
      }
    },
    "primarycompanyid": {
      "$type": "nameditem",
      "Value": {
        "Id": null,
        "Name": ""
      }
    },
    "actplanapplicid": {
      "$type": "nameditem",
      "Value": null
    },        
    "udf-msw-specialized-activity-flagsgroup": 		{
      "$type": "multiselect",
      "Value": [
        {
          "Id": 0,
          "Name": "Confined Space"
        },
        {
          "Id": 0,
          "Name": "Control of Static Electricity"
        },
        {
          "Id": 0,
          "Name": "Diving"
        },
        {
          "Id": 0,
          "Name": "Excavation"
        },
        {
          "Id": 0,
          "Name": "Electrical"
        },
        {
          "Id": 0,
          "Name": "Hot Work"
        },
        {
          "Id": 0,
          "Name": "Isolation of Hazardous Energy"
        },
        {
          "Id": 0,
          "Name": "Lifting and Rigging"
        },
        {
          "Id": 0,
          "Name": "Portable Gas Detection"
        },
        {
          "Id": 0,
          "Name": "Work at Height"
        },
        {
          "Id": 0,
          "Name": "Other"
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-prep-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-prep-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-prep-3a": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-prep-3b": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-gendoc-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-gendoc-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-gendoc-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-gendoc-7a": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-gendoc-7b": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-gendoc-8a": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-gendoc-8b": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-gendoc-9": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-authack-10a": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-authack-10b": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-authack-11": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-authack-12": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-authack-13a": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-authack-13b": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-gastest-14a": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-gastest-14b": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-gastest-14c": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-comm-15": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-comm-16": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-wkmon-17": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-wkpak-18": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-wkpak-19": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-reval-20a": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-reval-20b": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-reval-20c": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-reval-20d": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-reval-20e": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-ptw-eng-sectionc-fdbk-999": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-eng-applicability-flagsgroup": {
      "$type": "multiselect",
      "Value": []
    },
    "mswptwpnshortnote": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "mswptwpcshortnote": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-prep-1-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-prep-2-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-prep-3a-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-prep-3b-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-gendoc-4-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-gendoc-5-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-gendoc-6-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-gendoc-7a-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-gendoc-7b-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-gendoc-8a-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-gendoc-8b-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-gendoc-9-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-authack-10a-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-authack-10b-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-authack-11-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-authack-12-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-authack-13a-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-authack-13b-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-gastest-14a-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-gastest-14b-comments": { 
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-gastest-14c-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-comm-15-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-comm-16-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-wkmon-17-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-wkpak-18-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-wkpak-19-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-reval-20a-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-reval-20b-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-reval-20c-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-reval-20d-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-ptw-eng-sectionc-reval-20e-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": "" 
    },
    "mswspecificlocation": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },

    "mswsubcontractorname": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "mswotherspecactshortnote": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    }
  },
  "AssessmentId": 0,
  "Agency": null,
  "AssessmentLevel": null,
  "AssessmentPlannedDuration": null,
  "Company": null,
  "Occupation": null,
  "Location": {"Id":null, "Name":""},
  "Task": null,
  "WeatherCondition": null,
  "InvolvementType": null,
  "NoticeType": null,
  "Domain": null,
  "Shift": null,
  "Reason": null,
  "Method": null,
  "RouteType": null,
  "DriveType": null,
  "VehicleType": null,
  "Temperature": null,
  "Flags": [],
  "ResponsibilityAssignments": {},
  "Department": {},
  "AssessmentType": {
    "Id": 142,
    "Name": "PTW Engagement"
  },
  "WorkflowStatus": {
    "Id": "1",
    "Name": "Open"
  },
  "PlannedRemovalDateUTC": null,
  "ConductedDateUTC": null,
  "ReportedDateUTC": null,
  "ReferenceNumber": null,
  "ExternalReferenceNumber": null,
  "FeedbackDateUTC": null,
  "SpecificLocation": null,
  "NumberObserved": 0,
  "AssessmentTitle": null,
  "Note": null,
  "FeedbackNote": null,
  "PositiveNote": null,
  "ObserveeNote": null,
  "IncidentDisplayKey": null,
  "Coach": null,
  "Version": 1,
  "AttachmentList":{}
};

GenTemplate = {
  "UdfFields": {
    "engagementdt": {
      "$type": "datetime?",
      "Value": null
    },
    "timeofdayid": {
      "$type": "nameditem",
      "Value": {
        "Id": "",
        "Name": ""
      }
    },
    "wkcrewsubofprimid": {
      "$type": "nameditem",
      "Value": {
        "Id": null,
        "Name": ""
      }
    },
    "workforcetypeid": {
      "$type": "nameditem",
      "Value": {
        "Id": null,
        "Name": ""
      }
    },
    "primarycompanyid": {
      "$type": "nameditem",
      "Value": {
        "Id": null,
        "Name": ""
      }
    },
    "actplanapplicid": {
      "$type": "nameditem",
      "Value": null
    },        
    "udf-msw-specialized-activity-flagsgroup": 		{
      "$type": "multiselect",
      "Value": [
        {
          "Id": 0,
          "Name": "Confined Space"
        },
        {
          "Id": 0,
          "Name": "Control of Static Electricity"
        },
        {
          "Id": 0,
          "Name": "Diving"
        },
        {
          "Id": 0,
          "Name": "Excavation"
        },
        {
          "Id": 0,
          "Name": "Electrical"
        },
        {
          "Id": 0,
          "Name": "Hot Work"
        },
        {
          "Id": 0,
          "Name": "Isolation of Hazardous Energy"
        },
        {
          "Id": 0,
          "Name": "Lifting and Rigging"
        },
        {
          "Id": 0,
          "Name": "Portable Gas Detection"
        },
        {
          "Id": 0,
          "Name": "Work at Height"
        },
        {
          "Id": 0,
          "Name": "Other"
        }
      ]
    },
    "udf-msw-gen-eng-sectionc-engloc-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": "",
          "Name": ""
        }
      ]
    },
    "udf-msw-gen-eng-sectionc-engtop-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": "",
          "Name": ""
        }
      ]
    },
    "udf-msw-gen-eng-sectionc-engtop-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": "",
          "Name": ""
        }
      ]
    },
    "udf-msw-gen-eng-sectionc-engtop-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": "",
          "Name": ""
        }
      ]
    },
    "udf-msw-gen-eng-sectionc-engtop-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": "",
          "Name": ""
        }
      ]
    },
    "udf-msw-gen-eng-sectionc-engtop-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": "",
          "Name": ""
        }
      ]
    },
    "udf-msw-gen-eng-sectionc-engtop-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": "",
          "Name": ""
        }
      ]
    },
    "udf-msw-gen-eng-sectionc-engtop-8": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": "",
          "Name": ""
        }
      ]
    },
    "udf-msw-gen-eng-sectionc-focarea-9": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": "",
          "Name": ""
        }
      ]
    },
    "udf-msw-gen-eng-sectionc-focarea-10": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": "",
          "Name": ""
        }
      ]
    },
    "udf-msw-gen-eng-sectionc-focarea-11": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": "",
          "Name": ""
        }
      ]
    },
    "udf-msw-gen-eng-sectionc-focarea-12": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": "",
          "Name": ""
        }
      ]
    },
    "udf-msw-gen-eng-sectionc-focarea-13": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": "",
          "Name": ""
        }
      ]
    },
    "udf-msw-gen-eng-sectionc-focarea-14": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": "",
          "Name": ""
        }
      ]
    },
    "udf-msw-gen-eng-sectionc-engaud-15": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": "",
          "Name": ""
        }
      ]
    },
    "udf-msw-gen-eng-sectionc-engaud-16": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": "",
          "Name": ""
        }
      ]
    },
    "udf-msw-gen-eng-sectionc-fdbk-999": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "udf-msw-eng-applicability-flagsgroup": {
      "$type": "multiselect",
      "Value": []
    },
    "msw-gen-eng-sectionc-engloc-1-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-gen-eng-sectionc-engtop-2-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-gen-eng-sectionc-engtop-3-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-gen-eng-sectionc-engtop-4-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-gen-eng-sectionc-engtop-5-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-gen-eng-sectionc-engtop-6-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-gen-eng-sectionc-engtop-7-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-gen-eng-sectionc-engtop-8-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-gen-eng-sectionc-focarea-9-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-gen-eng-sectionc-focarea-10-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-gen-eng-sectionc-focarea-11-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-gen-eng-sectionc-focarea-12-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-gen-eng-sectionc-focarea-13-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-gen-eng-sectionc-focarea-14-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-gen-eng-sectionc-engaud-15-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "msw-gen-eng-sectionc-engaud-16-comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "mswspecificlocation": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },

    "mswsubcontractorname": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    },
    "mswotherspecactshortnote": {
      "$type": "localizednote",
      "Values": {"9":""},
      "Value": ""
    }
  },
  "AssessmentId": 0,
  "Agency": null,
  "AssessmentLevel": null,
  "AssessmentPlannedDuration": null,
  "Company": null,
  "Occupation": null,
  "Location": {"Id":null, "Name":""},

  "Task": null,
  "WeatherCondition": null,
  "InvolvementType": null,
  "NoticeType": null,
  "Domain": null,
  "Shift": null,
  "Reason": null,
  "Method": null,
  "RouteType": null,
  "DriveType": null,
  "VehicleType": null,
  "Temperature": null,
  "Flags": [],
  "ResponsibilityAssignments": {},
  "Department": {},
  "AssessmentType": {
    "Id": 143,
    "Name": "Generic Engagement"
  },
  "WorkflowStatus": {
    "Id": "1",
    "Name": "Open"
  },
  "PlannedRemovalDateUTC": null,
  "ConductedDateUTC": "",
  "ReportedDateUTC": "",
  "ReferenceNumber": null,
  "ExternalReferenceNumber": null,
  "FeedbackDateUTC": null,
  "SpecificLocation": null,
  "NumberObserved": 0,
  "AssessmentTitle": null,
  "Note": null,
  "FeedbackNote": null,
  "PositiveNote": null,
  "ObserveeNote": null,
  "IncidentDisplayKey": null,
  "Coach": null,
  "Version": 1,
  "AttachmentList":{}
};

FVTemplate = {
  "UdfFields": {       
    "engagementdt": {
      "$type": "datetime?",
      "Value": null
    },
    "timeofdayid": {
      "$type": "nameditem",
      "Value": {
        "Id": null,
        "Name": ""
      }
    },
    "wkcrewsubofprimid": {
      "$type": "nameditem",
      "Value": {
        "Id": null,
        "Name": ""
      }
    },
    "workforcetypeid": {
      "$type": "nameditem",
      "Value": {
        "Id": null,
        "Name": ""
      }
    },
    "primarycompanyid": {
      "$type": "nameditem",
      "Value": {
        "Id": null,
        "Name": ""
      }
    },
    "actplanapplicid": {
      "$type": "nameditem",
      "Value": null
    },
    "udf-msw-specialized-activity-flagsgroup": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-specialized-activity-flagsgroup2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": 0,
          "Name": " Emergency Management (EM)"
        },
        {
          "Id": 0,
          "Name": " Job Safety Analysis (JSA)"
        },
        {
          "Id": 0,
          "Name": " Permit To Work (PTW)"
        },
        {
          "Id": 0,
          "Name": " Short Service Employee Management (SSE)"
        },
        {
          "Id": 0,
          "Name": "Confined Space Entry (CSE)"
        },
        {
          "Id": 0,
          "Name": "Diving"
        },
        {
          "Id": 0,
          "Name": "Electrical Work (De-Energized)"
        },
        {
          "Id": 0,
          "Name": "Electrical Work (Energized/Live)"
        },
        {
          "Id": 0,
          "Name": "Excavation (Entry)"
        },
        {
          "Id": 0,
          "Name": "Excavation (No Entry)"
        },
        {
          "Id": 0,
          "Name": "Hot Work"
        },
        {
          "Id": 0,
          "Name": "Isolation of Hazardous Energy (IHE)"
        },
        {
          "Id": 0,
          "Name": "Lifting & Rigging"
        },
        {
          "Id": 0,
          "Name": "Other (including local V&V)"
        },
        {
          "Id": 0,
          "Name": "Portable Gas Detection"
        },
        {
          "Id": 0,
          "Name": "Vacuum Truck Ops (Control of Static Electricity - Transfer of flammable/combustible or classified area work)"
        },
        {
          "Id": 0,
          "Name": "Work at Height"
        }
      ]
    },
    "msw-udf-fv-eng-jsa-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-jsa-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-jsa-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-jsa-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-jsa-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-jsa-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-jsa-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-jsa-8": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-jsa-9": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ssem-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ssem-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ssem-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-em-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-em-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-em-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ptw-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ptw-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ptw-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ptw-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ptw-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-cse-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-cse-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-cse-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-cse-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-cse-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-cse-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-cse-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-cse-8": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-cse-9": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },  
    "msw-udf-fv-eng-dv-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-dv-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-dv-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-dv-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-dv-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-dv-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-dv-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-dv-8": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-dv-9": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-dv-10": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },  
    "msw-udf-fv-eng-ewde-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewde-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewde-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewde-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewde-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewde-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewde-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewde-8": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewde-9": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewel-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewel-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewel-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewel-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewel-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewel-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewel-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewel-8": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewel-9": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewel-10": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewel-11": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evacne-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evacne-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evacne-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evacne-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evacne-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evacne-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-8": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-9": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-10": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-11": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-12": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-hw-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-hw-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-hw-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-hw-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-hw-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-hw-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-hw-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ihe-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ihe-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ihe-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ihe-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ihe-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ihe-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ihe-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-lr-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-lr-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-lr-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-lr-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-lr-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-lr-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-lr-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-lr-8": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-lr-9": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-pgd-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-pgd-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-pgd-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-pgd-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-pgd-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-pgd-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-wah-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-wah-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-wah-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-wah-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-wah-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-wah-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-wah-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-wah-8": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-vto-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-vto-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-vto-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-vto-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-vto-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-vto-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "MSW_UDF_FV_JSA_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_JSA_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_JSA_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_JSA_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_JSA_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_JSA_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_JSA_7_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_JSA_8_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_JSA_9_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_SSEM_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_SSEM_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_SSEM_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EM_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EM_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EM_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_PTW_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_PTW_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_PTW_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_PTW_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_PTW_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_CSE_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_CSE_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_CSE_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_CSE_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_CSE_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_CSE_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_CSE_7_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_CSE_8_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_CSE_9_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_DV_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_DV_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_DV_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_DV_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_DV_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_DV_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_DV_7_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_DV_8_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_DV_9_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_DV_10_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWDE_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWDE_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWDE_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWDE_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWDE_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWDE_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWDE_7_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWDE_8_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWDE_9_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWEL_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWEL_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWEL_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWEL_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWEL_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWEL_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWEL_7_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWEL_8_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWEL_9_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWEL_10_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWEL_11_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACNE_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACNE_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACNE_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACNE_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACNE_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACNE_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_7_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_8_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_9_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_10_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_11_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_12_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_HW_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_HW_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_HW_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_HW_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_HW_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_HW_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_HW_7_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_IHE_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_IHE_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_IHE_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_IHE_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_IHE_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_IHE_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_IHE_7_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_LR_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_LR_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_LR_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_LR_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_LR_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_LR_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_LR_7_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_LR_8_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_LR_9_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_PGD_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_PGD_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_PGD_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_PGD_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_PGD_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_PGD_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_WAH_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_WAH_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_WAH_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_WAH_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_WAH_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_WAH_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_WAH_7_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_WAH_8_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_VTO_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_VTO_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_VTO_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_VTO_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_VTO_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_VTO_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_OTHER_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_VV_SCOREID": {
      "$type": "nameditem",
      "Value": {
        "Id": 0,
        "Name": ""
      }
    },
    "mswspecificlocation": {
      "$type": "localizednote",
      "Values": "",
      "Value": ""
    },
    "mswsubcontractorname": {
      "$type": "localizednote",
      "Values": "",
      "Value": ""
    },
    "mswotherspecactshortnote": {
      "$type": "localizednote",
      "Values": "",
      "Value": ""
    }
  },
  "AssessmentId": 0,
  "Agency": null,
  "AssessmentLevel": null,
  "AssessmentPlannedDuration": null,
  "Company": null,
  "Occupation": null,
  "Location": {"Id":null, "Name":""},
  "Task": null,
  "WeatherCondition": null,
  "InvolvementType": null,
  "NoticeType": null,
  "Domain": null,
  "Shift": null,
  "Reason": null,
  "Method": null,
  "RouteType": null,
  "DriveType": null,
  "VehicleType": null,
  "Temperature": null,
  "Flags": [],
  "ResponsibilityAssignments": {},
  "Department": {},
  "AssessmentType": {
    "Id": 208,
    "Name": "Field Verification"
  },
  "WorkflowStatus": {
    "Id": "1",
    "Name": "Open"
  },
  "PlannedRemovalDateUTC": null,
  "ConductedDateUTC": null,
  "ReportedDateUTC": null,
  "ReferenceNumber": null,
  "ExternalReferenceNumber": null,
  "FeedbackDateUTC": null,
  "SpecificLocation": null,
  "NumberObserved": 0,
  "AssessmentTitle": null,
  "Note": null,
  "FeedbackNote": null,
  "PositiveNote": null,
  "ObserveeNote": null,
  "IncidentDisplayKey": null,
  "Coach": null,
  "Version": 1,
  "AttachmentList": {}
};

CHESMFVTemplate = {
  "UdfFields": {       
    "engagementdt": {
      "$type": "datetime?",
      "Value": null
    },
    "timeofdayid": {
      "$type": "nameditem",
      "Value": {
        "Id": null,
        "Name": ""
      }
    },
    "wkcrewsubofprimid": {
      "$type": "nameditem",
      "Value": {
        "Id": null,
        "Name": ""
      }
    },
    "workforcetypeid": {
      "$type": "nameditem",
      "Value": {
        "Id": null,
        "Name": ""
      }
    },
    "primarycompanyid": {
      "$type": "nameditem",
      "Value": {
        "Id": null,
        "Name": ""
      }
    },
    "actplanapplicid": {
      "$type": "nameditem",
      "Value": null
    },
    "udf-msw-specialized-activity-flagsgroup": {
      "$type": "multiselect",
      "Value": []
    },
    "udf-msw-specialized-activity-flagsgroup2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": 0,
          "Name": " Emergency Management (EM)"
        },
        {
          "Id": 0,
          "Name": " Job Safety Analysis (JSA)"
        },
        {
          "Id": 0,
          "Name": " Permit To Work (PTW)"
        },
        {
          "Id": 0,
          "Name": " Short Service Employee Management (SSE)"
        },
        {
          "Id": 0,
          "Name": "Confined Space Entry (CSE)"
        },
        {
          "Id": 0,
          "Name": "Diving"
        },
        {
          "Id": 0,
          "Name": "Electrical Work (De-Energized)"
        },
        {
          "Id": 0,
          "Name": "Electrical Work (Energized/Live)"
        },
        {
          "Id": 0,
          "Name": "Excavation (Entry)"
        },
        {
          "Id": 0,
          "Name": "Excavation (No Entry)"
        },
        {
          "Id": 0,
          "Name": "Hot Work"
        },
        {
          "Id": 0,
          "Name": "Isolation of Hazardous Energy (IHE)"
        },
        {
          "Id": 0,
          "Name": "Lifting & Rigging"
        },
        {
          "Id": 0,
          "Name": "Other (including local V&V)"
        },
        {
          "Id": 0,
          "Name": "Portable Gas Detection"
        },
        {
          "Id": 0,
          "Name": "Vacuum Truck Ops (Control of Static Electricity - Transfer of flammable/combustible or classified area work)"
        },
        {
          "Id": 0,
          "Name": "Work at Height"
        }
      ]
    },
    "msw-udf-fv-eng-jsa-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-jsa-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-jsa-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-jsa-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-jsa-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-jsa-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-jsa-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-jsa-8": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-jsa-9": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ssem-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ssem-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ssem-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-em-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-em-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-em-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ptw-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ptw-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ptw-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ptw-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ptw-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-cse-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-cse-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-cse-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-cse-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-cse-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-cse-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-cse-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-cse-8": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-cse-9": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },  
    "msw-udf-fv-eng-dv-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-dv-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-dv-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-dv-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-dv-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-dv-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-dv-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-dv-8": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-dv-9": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-dv-10": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },  
    "msw-udf-fv-eng-ewde-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewde-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewde-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewde-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewde-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewde-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewde-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewde-8": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewde-9": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewel-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewel-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewel-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewel-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewel-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewel-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewel-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewel-8": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewel-9": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewel-10": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ewel-11": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evacne-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evacne-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evacne-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evacne-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evacne-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evacne-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-8": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-9": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-10": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-11": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-evace-12": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-hw-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-hw-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-hw-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-hw-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-hw-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-hw-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-hw-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ihe-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ihe-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ihe-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ihe-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ihe-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ihe-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-ihe-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-lr-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-lr-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-lr-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-lr-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-lr-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-lr-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-lr-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-lr-8": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-lr-9": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-pgd-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-pgd-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-pgd-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-pgd-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-pgd-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-pgd-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-wah-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-wah-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-wah-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-wah-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-wah-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-wah-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-wah-7": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-wah-8": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-vto-1": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-vto-2": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-vto-3": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-vto-4": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-vto-5": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "msw-udf-fv-eng-vto-6": {
      "$type": "multiselect",
      "Value": [
        {
          "Id": null,
          "Name": ""
        }
      ]
    },
    "MSW_UDF_FV_JSA_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_JSA_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_JSA_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_JSA_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_JSA_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_JSA_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_JSA_7_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_JSA_8_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_JSA_9_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_SSEM_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_SSEM_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_SSEM_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EM_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EM_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EM_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_PTW_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_PTW_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_PTW_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_PTW_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_PTW_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_CSE_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_CSE_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_CSE_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_CSE_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_CSE_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_CSE_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_CSE_7_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_CSE_8_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_CSE_9_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_DV_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_DV_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_DV_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_DV_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_DV_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_DV_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_DV_7_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_DV_8_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_DV_9_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_DV_10_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWDE_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWDE_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWDE_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWDE_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWDE_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWDE_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWDE_7_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWDE_8_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWDE_9_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWEL_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWEL_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWEL_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWEL_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWEL_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWEL_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWEL_7_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWEL_8_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWEL_9_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWEL_10_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EWEL_11_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACNE_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACNE_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACNE_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACNE_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACNE_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACNE_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_7_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_8_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_9_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_10_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_11_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_EVACE_12_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_HW_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_HW_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_HW_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_HW_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_HW_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_HW_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_HW_7_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_IHE_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_IHE_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_IHE_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_IHE_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_IHE_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_IHE_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_IHE_7_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_LR_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_LR_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_LR_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_LR_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_LR_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_LR_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_LR_7_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_LR_8_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_LR_9_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_PGD_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_PGD_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_PGD_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_PGD_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_PGD_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_PGD_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_WAH_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_WAH_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_WAH_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_WAH_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_WAH_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_WAH_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_WAH_7_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_WAH_8_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_VTO_1_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_VTO_2_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_VTO_3_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_VTO_4_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_VTO_5_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_VTO_6_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_UDF_FV_OTHER_comments": {
      "$type": "localizednote",
      "Values": {
        "9": ""
      },
      "Value": ""
    },
    "MSW_VV_SCOREID": {
      "$type": "nameditem",
      "Value": {
        "Id": 0,
        "Name": ""
      }
    },
    "mswspecificlocation": {
      "$type": "localizednote",
      "Values": "",
      "Value": ""
    },
    "mswsubcontractorname": {
      "$type": "localizednote",
      "Values": "",
      "Value": ""
    },
    "mswotherspecactshortnote": {
      "$type": "localizednote",
      "Values": "",
      "Value": ""
    }
  },
  "AssessmentId": 0,
  "Agency": null,
  "AssessmentLevel": null,
  "AssessmentPlannedDuration": null,
  "Company": null,
  "Occupation": null,
  "Location": {"Id":null, "Name":""},
  "Task": null,
  "WeatherCondition": null,
  "InvolvementType": null,
  "NoticeType": null,
  "Domain": null,
  "Shift": null,
  "Reason": null,
  "Method": null,
  "RouteType": null,
  "DriveType": null,
  "VehicleType": null,
  "Temperature": null,
  "Flags": [],
  "ResponsibilityAssignments": {},
  "Department": {},
  "AssessmentType": {
    "Id": 209,
    "Name": "CHESM Field Verification"
  },
  "WorkflowStatus": {
    "Id": "1",
    "Name": "Open"
  },
  "PlannedRemovalDateUTC": null,
  "ConductedDateUTC": null,
  "ReportedDateUTC": null,
  "ReferenceNumber": null,
  "ExternalReferenceNumber": null,
  "FeedbackDateUTC": null,
  "SpecificLocation": null,
  "NumberObserved": 0,
  "AssessmentTitle": null,
  "Note": null,
  "FeedbackNote": null,
  "PositiveNote": null,
  "ObserveeNote": null,
  "IncidentDisplayKey": null,
  "Coach": null,
  "Version": 1,
  "AttachmentList": {}
};