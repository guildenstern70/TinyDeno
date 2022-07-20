/**
 * Tiny Deno
 * A template project for DENO
 * Copyright (c) 2022 Alessio Saltarin
 * MIT License
 */

import { Application, Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { configure, renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";

// Eta Views path
configure({
    views: `${Deno.cwd()}/views`
})

const router = new Router();
router.get("/", async (ctx: any) => {

    ctx.response.headers.set("Content-Type", "text/html");
    ctx.response.body = await renderFile("index", {
        appname: "Tiny Deno",
        appdescription: "Welcome to Tiny Deno"
    });
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

// Static Files
app.use(async (context, next) => {
    const root = `${Deno.cwd()}/static`
    try {
        await context.send({ root })
    } catch {
        await next()
    }
})

console.log("Running in: " + Deno.cwd());
app.addEventListener(
    "listen",
    (_e) => console.log("Listening on http://localhost:8080"),
);
await app.listen({ port: 8080 });

