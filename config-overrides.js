const path = require('path');
const paths = require('./node_modules/react-scripts/config/paths');
const modules = require('./node_modules/react-scripts/config/modules');


module.exports = (config, _env) => {
	config.resolve = {
		...config.resolve,
			modules: ['node_modules', paths.appNodeModules, path.resolve('./src')].concat(
				modules.additionalModulePaths || []
		),
	};

	return config;
};
