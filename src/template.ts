import {getTemplate} from "https://deno.land/x/view_engine@v10.6.0/lib/adapters/oak/oak.utils.ts";

export class Template
{
    public getIndex(): string
    {
        const index = `
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    &nbsp;
                </div>
                <div class="col-8">
                    <h1 class="xtitle"><%= it.appname %></h1>
                    <p><%= it.appdescription %></p>
                    <img class="img-fluid" src="/img/cover_wide.jpeg" alt="Deno">
                </div>
                <div class="col">
                    &nbsp;
                </div>
            </div>
            <div class="row">
                <div class="col">
                    &nbsp;
                </div>
                <div class="col-8">
                    <p class="mt-2 py-2">
                        <a href="/features" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
                    </p>
                </div>
                <div class="col">
                    &nbsp;
                </div>
            </div>
            <div class="row">
                <div class="col">
                    &nbsp;
                </div>
            </div>
        </div>
        <script src="/js/index.js"></script>
        `;
        return Template.getPage().replace("<%~ it.body %>", index);
    }

    private static getPage(): string
    {
        const page = `
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <header class="mb-auto">
                <div>
                    <h3 class="float-md-start mb-0 xtitle"><%= it.appname %></h3>
                    <nav class="nav nav-masthead justify-content-center float-md-end mr-4">
                        <a id="menuitem0" class="nav-link active" aria-current="page" href="/">Home</a>
                        <a id="menuitem1" class="nav-link" href="/features">Features</a>
                        <% if (it.sessionUser) { %>
                            <a id="menuitem2" class="nav-link" href="/logout">Logout</a>
                        <% } else { %>
                            <a id="menuitem2" class="nav-link" href="/login">Login</a>
                        <% } %>
                    </nav>
                </div>
            </header>
            <main class="px-3">
                <%~ it.body %>
            </main>
            <footer class="mt-auto text-white-50">
                <div class="text-end">
                    <% if (it.sessionUser) { %>
                        You are logged as <b><%= it.sessionUser %></b>. <a href="/logout">Logout</a>.
                    <% } else { %>
                            <%= it.appname %> template is made with
                            <a href="https://getbootstrap.com/" class="text-white">Bootstrap 5</a>.
                    <% } %>
                </div>
            </footer>
        </div>
        `;
        return Template.getTemplate().replace("<%~ it.body %>", page);
    }

    private static getTemplate(): string
    {
        return `
            <!doctype html>
            <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
                      rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
                      crossorigin="anonymous">
                <link href="/css/styles.css" rel="stylesheet" type="text/css">
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
                <link rel="icon" href="/favicon.ico" type="image/x-icon">
                <link rel="preconnect" href="https://fonts.gstatic.com">
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap" rel="stylesheet">
                <title>Tiny Deno</title>
            </head>
            <body class="text-white bg-dark">
            <main class="d-flex h-100">
                <%~ it.body %>
            </main>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
                    crossorigin="anonymous"></script>
            <script src="/js/menuitems.js"></script>
            </body>
            </html>
        `;

    }
}