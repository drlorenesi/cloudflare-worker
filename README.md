# Cloudflare Worker Playground

## Quickstart

To create Cloudflare Workers you can install [wrangler](https://www.npmjs.com/package/wrangler) locally on your machine:

```bash
npm install -g wrangler
```

or run the `wrangler` commands direclty using `npx`.

Next, log in to your Cloudflare account and then check your credentials:

```bash
npx wrangler login
npx wrangler whoami
```

You can create a new project, develop and deploy using:

```bash
# Generate a new project
npx wrangler init .
# try it out
npm run start
# and then publish it
npm run deploy
```

You can also generate a project from a [template](https://developers.cloudflare.com/workers/get-started/quickstarts/):

```bash
# Use this starter to Build REST APIs or apps that require routing logic.
npm init cloudflare my-worker https://github.com/cloudflare/worker-template-router
```

## About Cloudflare Workers

In Workers, any incoming HTTP requests are referred to as "fetch" events. A Worker will respond to the HTTP request with the handler method that was assigned to the "fetch" event.

Both the [Service Worker](https://developers.cloudflare.com/workers/runtime-apis/fetch-event/#syntax-service-worker) and [Module Worker](https://developers.cloudflare.com/workers/runtime-apis/fetch-event/#syntax-module-worker) formats are able to handle "fetch" events, but with significant differences in their authoring syntax.

### ​​Syntax: Service Worker

In the Service Worker format, events are handled by using addEventListener to assign a handler to an event name. Additionally, the Service Worker specification assigns network requests to the "fetch" event, using the [FetchEvent](https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent) interface.

Incoming HTTP requests can be handled by assigning a "fetch" event handler:

```javascript
addEventListener('fetch', (event) => {
  event.respondWith(new Response('Hello'));
});
```

Or create an async function to hadle the incoming request:

```javascript
async function handleRequest(request) {
  return new Response('Hello world');
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});
```

### ​​Syntax: Module Worker

In the Module Worker format, events are handled by defining and exporting an object with method handlers corresponding to event names.

While an incoming HTTP request is still given the "fetch" name, a Module Worker does not surface the FetchEvent interface. Instead, Module Workers receive the [Request](https://developers.cloudflare.com/workers/runtime-apis/request/) and must reply with a [Response](https://developers.cloudflare.com/workers/runtime-apis/response/) directly.

```javascript
export default {
  fetch(request, env, context) {
    return new Response('Hello');
  },
};
```

Source: https://developers.cloudflare.com/workers/
