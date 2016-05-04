import babel from 'rollup-plugin-babel';

export default {
	entry: 'src/index.js',
	dest: 'bundle.js',
	format: 'es6',
	plugins: [ babel() ]
};
