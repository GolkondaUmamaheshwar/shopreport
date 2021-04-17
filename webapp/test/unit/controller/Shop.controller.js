/*global QUnit*/

sap.ui.define([
	"ux/shopproducts/controller/Shop.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Shop Controller");

	QUnit.test("I should test the Shop controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
