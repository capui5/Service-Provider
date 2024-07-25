sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.sadara.ServiceProvider.controller.Home", {
		onInit: function () {

		},
		onServiceProviderPress: function () {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("ServiceProvider");
		},
		onServicePress: function () {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("Services");
		},
		onServiceProviderDetailPress: function () {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("ServiceProviderDetails");
		}

	});
});