// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import resolve from "rollup-plugin-node-resolve";

export default {
	input: "./src/view/main.tsx",
  output: {
    file: "./dist/js/main.js" ,
    format: "umd"
  },

	plugins: [
		typescript(),
    resolve({ jsnext: true })
	]
}
