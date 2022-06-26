import template from './template.js';

export default {
  fetch(request, env, context) {
    return new Response(template(request.cf), {
      headers: {
        'content-type': 'text/html',
      },
    });
  },
};
