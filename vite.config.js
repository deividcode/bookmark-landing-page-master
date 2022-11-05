import { defineConfig } from "vite";

// Plugins de postCss
import postcssnested from 'postcss-nested';
import autoPrefixer from 'autoprefixer';


export default defineConfig({
    // Como generara la ruta vite iniiando con: ./ ó /
    base: '',

    build:{
        minify:false,                        
    },
    // Config para agregar los plugins de postcss
    css: {
        postcss: {            
            plugins: [postcssnested, autoPrefixer]
        },
    },
});