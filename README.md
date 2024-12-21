# BCF Chat UI

## Usage

Run `npm run build` to package the app for distribution.

Copy main.js and main.css to a folder on your site.

Add the following HTML to the footer template:

```html
<div id="chat-widget" class="chat-widget"></div>
```

Add the following HTML **inside the `<head>` tag** in the header template:

```html
<script
  src="https://www.unpkg.com/react@19.0.0/cjs/react.production.js"
  crossorigin="anonymous"
></script>
<script
  src="https://unpkg.com/react-dom@19.0.0/cjs/react-dom-client.production.js"
  crossorigin="anonymous"
></script>
<script src="/path/to/main.js"></script>
<link
  rel="stylesheet"
  href="https://unpkg.com/bootstrap@5.3.3/dist/css/bootstrap.min.css"
/>
<link rel="stylesheet" href="/path/to/main.css" />
```

Adjusting the `/path/to` placeholders as necessary. That's it! The widget should now show.
