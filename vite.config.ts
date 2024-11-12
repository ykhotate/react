import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
	return {
		build: {
			outDir: './build',
			chunkSizeWarningLimit: 1600,
			rollupOptions: {
				output: {
					manualChunks(id) {
						if (id.includes('node_modules')) {
							return id
								.toString()
								.split('node_modules/')[1]
								.split('/')[0]
								.toString();
						}
					}
				}
			}
		},
		server: {
			open: false,
			strictPort: true,
			watch: {
				usePolling: true
			}
		},
		plugins: [
			react(),
			tsconfigPaths(),
			checker({
				typescript: true,
				eslint: {
					lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
				}
			})
		],
		base: env.VITE_BASE
	};
});
