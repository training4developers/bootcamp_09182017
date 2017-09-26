

fetch('http://localhost:3010/widgets')
  .then(res => res.json())
  .then(widgets => console.log(widgets));

const widget = {
  name: 'New Widget',
};

fetch('http://localhost:3010/widgets', {
  method: 'POST',
  header: { 'Content-Type': 'application/json'},
  body: JSON.stringify(widget),
}).then(res => res.json()).then(results => console.log(results));

const widgetId = "test%56test";

fetch('http://localhost:3010/widgets/' + encodeURIComponent(widgetId), {
  method: 'DELETE'
}).then(res => res.json()).then(widget => console.log(widget));


// write me some code which will insert a new widget, then fetch all of the
// widgets so that I can use them





