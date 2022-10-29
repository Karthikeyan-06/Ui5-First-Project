sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("zkarthik_ui5zkarthik_ui5.controller.View1", {

		onInit: function() {
			var otable = this.getView().byId("idstutable");
			var oModel = new sap.ui.model.json.JSONModel();

			oModel.setData([]);
			otable.setModel(oModel);

		},

		onadd: function(oEvent) {
			var oTab = this.getView().byId("idstutable").getModel().getProperty("/");

			var name = this.getView().byId("name").getValue();
			var dept = this.getView().byId("dept").getValue();
			var roll = this.getView().byId("roll").getValue();
			var ph = this.getView().byId("ph").getValue();
			var placed = this.getView().byId("placed").getValue();

			var list = [{
				"name": name,
				"dept": dept,
				"roll": roll,
				"ph": ph,
				"placed": placed
			}];

			oTab.push(list[0]);
			this.getView().byId("idstutable").getModel().setProperty("/", oTab);
		},

		onnext: function(evt) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View2");
		}

	});
});