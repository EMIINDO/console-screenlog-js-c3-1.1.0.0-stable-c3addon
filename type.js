"use strict";

{
	const SDK = globalThis.SDK;
const PLUGIN_CLASS = SDK.Plugins.MassiveCube_screenlogjs;
	
	PLUGIN_CLASS.Type = class MassiveCubeScreenLogPluginType extends SDK.ITypeBase
	{
		constructor(sdkPlugin, iObjectType)
		{
			super(sdkPlugin, iObjectType);
		}
	};
}