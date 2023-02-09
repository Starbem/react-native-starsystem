module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['module:metro-react-native-babel-preset'],
		plugins: [
			[
				'module-resolver',
				{
					extensions: ['.js', '.ios.js', '.android.js', '.json', '.tsx', '.ts'],
					root: ['./'],
					alias: {
						'@app': './',
					},
				},
			],
		],
	}
}
