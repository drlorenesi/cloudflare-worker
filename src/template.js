import flag from 'country-code-emoji';

export default function template(cf) {
  const emoji = flag(cf.country) || '👋';

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cloudflare Info</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
      <style>
        body {
          background: #fff;
        }
        pre {
          overflow-x: auto;
          white-space: pre-wrap;
          white-space: -moz-pre-wrap;
          white-space: -pre-wrap;
          white-space: -o-pre-wrap;
          word-wrap: break-word;
        }
        pre code  {
          font-size: 12px;
          display: block;
          background: #eee;
          border-radius: 1rem;
          padding: 1rem;
        }
      </style>
      </head>
    <body>
    <div class="container">
      <h2>Hello there! Your're connecting from ${cf.city} in ${
    cf.country
  } ${emoji}</h2>
      <pre><code>${JSON.stringify(cf, null, 1)}</code></pre>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    </body>
    </html>
  `;
}
