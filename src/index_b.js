import { Router } from 'itty-router';
import { withContent } from 'itty-router-extras';

const router = Router();

// GET collection index
router.get('/todos', async () => {
  const result = 'Todos Index!';
  return new Response(JSON.stringify({ message: result }), {
    headers: {
      'content-type': 'application/json',
    },
  });
});

// GET item
router.get('/todos/:id', async ({ params }) => {
  return new Response(JSON.stringify({ message: `Todo - ${params.id}` }), {
    headers: {
      'content-type': 'application/json',
    },
  });
});

// POST to the collection (we'll use async here)
router.post('/todos', withContent, async (req) => {
  console.log(req.content);
  // const content = await request.json();

  return new Response('Creating Todo: ' + JSON.stringify('content'));
});

// add some routes (will both safely trigger errorHandler)
router
  .get('/accidental', (request) => request.that.will.throw)
  .get('/intentional', () => {
    throw new Error('Bad Request');
  });

// 404 for everything else
router.all('*', () => new Response('Not Found.', { status: 404 }));

// a generic error handler
const errorHandler = (error) =>
  new Response(error.message || 'Server Error', {
    status: error.status || 500,
  });

// attach the router "handle" to the event handler
addEventListener('fetch', (event) =>
  event.respondWith(router.handle(event.request).catch(errorHandler))
);
