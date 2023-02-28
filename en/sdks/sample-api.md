---
aside: true
---

<SelectLibraries
      :libraries="[
        {
          name: 'Python',
          link: 'https://www.google.com/',
          code: 'pip install',
        },
        {
          name: 'Php',
          link: 'https://www.google.com/',
          code: 'composer require stripe/stripe-php',
        },
        { name: 'Node.js', link: 'https://www.google.com/', code: 'npm install' },
        { name: 'Go', link: 'https://www.google.com/', code: 'test' },
      ]"
    >

# Quick Start

The markdown file may consist of multiple sections. Some may be purely
for documentation. Others will be recognized as specifying a web
service function.

</SelectLibraries>

<CodeBox lang="Ruby" code-box-title="Sample Ruby Code">

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh                            "

exec < /dev/tty && npx czg --hook || true
```

<template #code>

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

exec < /dev/tty && npx czg --hook || true
```

<br>

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

exec < /dev/tty && npx czg --hook || true
```

</template>
</CodeBox>
<CodeBox lang="Python" code-box-title="Sample Python Code 🐍">

# Quick Start 🔥

The markdown file may consist of multiple sections. Some may be purely
for documentation. Others will be recognized as specifying a web
service function.

<template #code>

```python
a, b = 0, 1
while b < 10:
    print(b)
    a, b = a, a + b
```

</template>

</CodeBox>

<CodeBox lang="Node.js" code-box-title="Sample Node Js Code 🔎">

# Quick Start 🔥

The markdown file may consist of multiple sections. Some may be purely
for documentation. Others will be recognized as specifying a web
service function.
<template #code>

```js
const express = require("express");
const crypto = require("crypto");
const app = express();
const Worker = require("webworker-threads").Worker;

app.get("/", (req, res) => {
  const worker = new Worker(function () {
    this.onmessage = function () {
      let counter = 0;
      while (counter < 1e9) {
        counter++;
      }

      postMessage(counter);
    };
  });

  worker.onmessage = function (message) {
    console.log(message.data);
    res.send("" + message.data);
  };

  worker.postMessage();
});

app.get("/fast", (req, res) => {
  res.send("This was fast!");
});

app.listen(3000);
```

```js
const express = require("express");
const crypto = require("crypto");
const app = express();
const Worker = require("webworker-threads").Worker;

app.get("/", (req, res) => {
  const worker = new Worker(function () {
    this.onmessage = function () {
      let counter = 0;
      while (counter < 1e9) {
        counter++;
      }

      postMessage(counter);
    };
  });

  worker.onmessage = function (message) {
    console.log(message.data);
    res.send("" + message.data);
  };

  worker.postMessage();
});

app.get("/fast", (req, res) => {
  res.send("This was fast!");
});

app.listen(3000);
```

</template>
</CodeBox>

<Response :title="'mock title'" json-file-name="sample" >

# Quick Start 🔥

The markdown file may consist of multiple sections. Some may be purely
for documentation. Others will be recognized as specifying a web
service function.

## Introduction section

The very first section an introduction. The title is the name of the
web service. The body contains an overview and probably a link to the
official, full documentation. All of that is by convention for
documentation purposes. The only _requirement_ is that the phrase
`Endpoint: <URI>` occur _somewhere_ in this first section, and be on
its own line.

    # Foobar Web Service v1.1

    Foobar is awesome-liscious.

    [Official docs](http://wherevs.com/dev).

    Endpoint: http://wherevs.com/api/v1

    Following are the available functions.

    ...

</Response>
