import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				about: resolve(__dirname, "about.html"),
				blog: resolve(__dirname, "blog.html"),
				contact: resolve(__dirname, "contact.html"),
				"contractor-dashboard": resolve(
					__dirname,
					"contractor-dashboard.html"
				),
				"farmer-dashboard": resolve(__dirname, "farmer-dashboard.html"),
				feedback: resolve(__dirname, "feedback.html"),
				privacy: resolve(__dirname, "privacy.html"),
				terms: resolve(__dirname, "terms.html"),
				// app: resolve(__dirname, "js/app.js"),
				// "contractor-dashboard-js": resolve(__dirname,"js/contractor-dashboard.js"),
				// "farmer-dashboard-js": resolve(__dirname, "js/farmer-dashboard.js"),
			},
		},
	},
});
