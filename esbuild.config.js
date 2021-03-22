require('esbuild').build({
    entryPoints: [
        './/src/app.js',
        './/src/import_files.js',
        './/src/CSS/style.css'
    ],
    outdir: 'dist',
    bundle: true,
    minify: true,
    sourcemap: true,
    format: 'esm',
    splitting: true,
    define: {
        'process.env.NODE_ENV': '"production"',
    },
    watch: true,
    assetNames: 'assets/[name]-[hash]',
    loader: {
        '.jpg': 'file',
        '.webp': 'file',
        '.png': 'file'
    }
}).catch(() => process.exit(1))