"use strict";

{
	globalThis.C3.Plugins.MassiveCube_screenlogjs.Instance = class SingleGlobalInstance extends globalThis.ISDKInstanceBase
	{
		constructor()
		{
			super();

            const properties = this._getInitProperties();
			
			this.screenl = window["screenLog"];

		}
		
		_release()
		{
			super._release();
		}
		
		_saveToJson()
		{
			return {
				// data to be saved for savegames
			};
		}
		
		_loadFromJson(o)
		{
			// load state for savegames
		}
	};
}