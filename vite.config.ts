import path from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"
import UnoCSS from "unocss/vite"
import { defineConfig } from "vite"
import topLevelAwait from "vite-plugin-top-level-await"
import wasm from "vite-plugin-wasm"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), UnoCSS(), tailwindcss(), wasm(), topLevelAwait()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
})
