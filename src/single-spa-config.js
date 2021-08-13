import * as singleSpa from 'single-spa'; //导入single-spa

singleSpa.registerApplication( //注册微前端服务
    'vueApp',
    async () => {
        console.log('???')
        return window.System.import('vueApp')
    },
    location => location.pathname.startsWith('/') // 配置微前端模块前缀
);

singleSpa.registerApplication(
    'viteApp',
    async () => import(
        /* webpackIgnore: true */
        'http://localhost:3000/src/main.js'
    ),
    location => location.pathname.startsWith('/vite-example')
);

singleSpa.start(); // 启动
