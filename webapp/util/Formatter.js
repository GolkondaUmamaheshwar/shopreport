sap.ui.define(function() {
	"use strict";

	var formatter = {

		
		Measure : function (oValue){
			var oValue;
	   
			if(oValue =="g"){
	   var oText= "grams"
			  return oText;
	   
           }else if(oValue == "kg"){
		   return "kilogram";
		   }
		   else
		   {
			return oValue;
	   
		   }
    
        },
	   MeasureState : function (oValue){
		var oValue;
   
		if(oValue =="g"){
   
		  return "Warning";
   
	   }else if(oValue == "kg"){
	   return "Success";
	   }
	   else
	   {
		return "Error";
   
	   }
   },
       
     weightState :  function (fValue) {
	 	try {
    		fValue = parseFloat(fValue);
     		if (fValue < 0) {
				return "None";
	 		} else if (fValue < 1000) {
			return "Success";
		} else if (fValue < 2000) {
				return "Warning";
			} else {
				return "Error";
	 		}
	} catch (err) {
	 		return "None";
	 	}
	},
	


	};
	
	return formatter;

}, /* bExport= */ true);
