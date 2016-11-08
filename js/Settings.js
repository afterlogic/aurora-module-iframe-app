'use strict';

var ko = require('knockout');

module.exports = {
	ServerModuleName: 'IframeApp',
	HashModuleName: 'iframeapp',
	
	/**
	 * Setting indicates if module is enabled by user or not.
	 * The Core subscribes to this setting changes and if it is **true** displays module tab in header and its screens.
	 * Otherwise the Core doesn't display module tab in header and its screens.
	 */
	enableModule: ko.observable(false),
	
	/**
	 * Initializes settings of the module.
	 * 
	 * @param {Object} oAppDataSection module section in AppData.
	 */
	init: function (oAppDataSection) {
		if (oAppDataSection)
		{
			this.enableModule(!!oAppDataSection.EnableModule);
		}
	},
	
	/**
	 * Updates module settings after editing.
	 * 
	 * @param {boolean} bEnableModule New value of setting 'EnableModule'
	 */
	update: function (bEnableModule) {
		this.enableModule(bEnableModule);
	}
};
