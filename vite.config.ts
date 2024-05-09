import path from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"
import UnoCSS from "unocss/vite"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), UnoCSS(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
})
