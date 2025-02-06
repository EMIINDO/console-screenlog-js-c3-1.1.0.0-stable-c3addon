"use strict";

{
	globalThis.C3.Plugins.MassiveCube_screenlogjs.Acts =
	{
		initlog(json) {

			function isJSON(str) {

			    if( typeof( str ) !== 'string' ) { 
			        return false;
			    }
			    try {
			    	JSON.parse(str);
			        return true;
			    } catch (e) {
			        return false;
			    }
			}

			if(isJSON(json)) {
				let obj = JSON.parse(json);
				this.screenl["init"](obj);
			} else {
				console["warn"]("Screenlog-Plugin: String is not a valid JSON!");
			}

		},
		deleteLog() {
			this.screenl["destroy"]();
		},
		clearLog() {
			this.screenl["clear"]();
		}

	};
}