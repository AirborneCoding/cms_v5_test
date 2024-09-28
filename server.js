// path: /server.js
// const strapi = require('@strapi/strapi');
// const app = strapi({ distDir: './build' });
// app.start();

const { factories, compileStrapi, createStrapi } = require('@strapi/strapi');

async function startStrapi() {
    const app = await createStrapi();
    await app.start();
}

startStrapi();






