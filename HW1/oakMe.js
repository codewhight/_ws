import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
    console.log('url=', ctx.request.url);
    const pathname = ctx.request.url.pathname;

    if (pathname == '/name') {
        ctx.response.body = `
        <html>
            <body>
                <h1>姓名: 林彥廷</h1>
                <a href="/">返回主頁面</a>
            </body>
        </html>`;
    } else if (pathname == '/age') {
        ctx.response.body = `
        <html>
            <body>
                <h1>年齡: 19</h1>
                <a href="/">返回主頁面</a>
            </body>
        </html>`;
    } else if (pathname == '/gender') {
        ctx.response.body = `
        <html>
            <body>
                <h1>性別: 男</h1>
                <a href="/">返回主頁面</a>
            </body>
        </html>`;
    } else {
        ctx.response.body = `
        <html>
            <body>
                <h1>自我介紹</h1>
                <ol>
                    <li><a href="/name">姓名</a></li>
                    <li><a href="/age">年齡</a></li>
                    <li><a href="/gender">性別</a></li>
                </ol>
            </body>
        </html>`;
    }
});

console.log('start at : http://127.0.0.1:8000');
await app.listen({ port: 8000 });
