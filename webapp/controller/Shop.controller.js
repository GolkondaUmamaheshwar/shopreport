sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/library",
        "sap/ui/model/json/JSONModel",
        "ux/shopproducts/util/Formatter"
        
        
], function(Controller, mobilelibrary, JSONModel, Formatter) {
    "use strict";
   // Formatter: Formatter;
    var PopinLayout = mobilelibrary.PopinLayout;

 var TableController = Controller.extend("ux.shopproducts.controller.Shop", {

		onInit: function() {
            // 	var oModel = new JSONModel(sap.ui.require.toUrl("sap/opu/odata/sap/EPM_REF_APPS_SHOP_SRV/Products.json"));
			// this.getView().setModel(oModel);
            
            this._sServiceUrl="sap/opu/odata/sap/EPM_REF_APPS_SHOP_SRV/";
		},

        
            onPopinLayoutChanged: function() {
			var oTable = this.byId("ProductsTable");
			var oComboBox = this.byId("idPopinLayout");
			var sPopinLayout = oComboBox.getSelectedKey();
			switch (sPopinLayout) {
				case "Block":
					oTable.setPopinLayout(PopinLayout.Block);
					break;
				case "GridLarge":
					oTable.setPopinLayout(PopinLayout.GridLarge);
					break;
				case "GridSmall":
					oTable.setPopinLayout(PopinLayout.GridSmall);
					break;
				default:
					oTable.setPopinLayout(PopinLayout.Block);
					break;
			}
        },
        
		onSelect: function(oEvent) {
			var bSelected = oEvent.getParameter("selected"),
				sText = oEvent.getSource().getText(),
				oTable = this.byId("ProductsTable"),
				aSticky = oTable.getSticky() || [];

			if (bSelected) {
				aSticky.push(sText);
			} else if (aSticky.length) {
				var iElementIndex = aSticky.indexOf(sText);
				aSticky.splice(iElementIndex, 1);
			}

			oTable.setSticky(aSticky);
		},

		onToggleInfoToolbar: function(oEvent) {
			var oTable = this.byId("ProductsTable");
			oTable.getInfoToolbar().setVisible(!oEvent.getParameter("pressed"));
        }
        
			
        });
    
       
        return TableController
	});
