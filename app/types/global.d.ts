// PNG изображения
declare module '*.png' {
    const value: string;
    export default value;
}

// WebP изображения
declare module '*.webp' {
    const value: string;
    export default value;
}

// JPEG изображения (расширение .jpeg)
declare module '*.jpeg' {
    const value: string;
    export default value;
}

// JPEG изображения (расширение .jpg)
declare module '*.jpg' {
    const value: string;
    export default value;
}

// Vue файлы
declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}