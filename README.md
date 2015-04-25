# loading
Another CSS3 loading animation tool for full-page &amp; blocks.

[Demo](http://shud.in/loading)

## Brief Usage of `loading`

#### HTML
Include `loading.css` and `loading.js` in `<head>`:
  
```html
<link rel="stylesheet" href="loading.css">
<script type="text/javascript" src="loading.js"></script>
```

Use `<i class="loading-full-page"></i>` or `<i class="loading-block"></i>`  to create a loading-effect layer. `.loading-full-page` for making a full-page layer and `.loading-block` for a block-inner layer.

And class `.loading-init` lets the layer animation running at beginning.

**Notice that `.loading-block` should be contained by an inline-block or any box-sized element, and `position: relative`.**

#### JavaScript

- `loading.start(selector)`
  - Start the loading animation of `selector`.
- `loading.end(selector)`
  - Finish the loading animation of `selector.`
- `loading.wait(time)`
  - Set a delay for animations (ms).

Go consecutively:

```javascript
loading.start('#layer-1').wait(3000).end('#layer-1');
```

Multiple timelines:
```javascript
// chaining
// start layer-1 -> wait -> end layer-1 -> wait -> start layer-2 -> wait -> end layer-2
loading.start('#layer-1').wait(3000).end('#layer-1').wait(3000).start('#layer-2').wait(3000).end('#layer-2');

// async
// start or finish layer-1 & layer-2 in the same time
loading.start('#layer-1').wait(3000).end('#layer-1');
loading.start('#layer-2').wait(3000).end('#layer-2');
```

## Project

Author: Shu Ding <ds303077135@gmail.com>

GitHub: [https://github.com/quietshu/loading](https://github.com/quietshu/loading)

License: MIT.

<3
