---
aside: true
---

<SelectLibraries
      :libraries="[
        {
          name: 'Python',
          link: 'https://github.com/azpays/python',
          code: 'pip install azpays',
        },
        {
          name: 'PHP',
          link: 'https://github.com/azpays/php',
          code: 'composer require azpays/azpays-php',
        },
        { name: 'Node.js', link: 'https://npmjs.com/azpays', code: 'npm install azpays' },
        { name: 'Go', link: 'https://golang.com/azpays', code: 'go @install azpays' },
      ]"
    >

# Quick Start

The markdown file may consist of multiple sections. Some may be purely
for documentation. Others will be recognized as specifying a web
service function.

</SelectLibraries>


<CodeBox lang="PHP" code-box-title="Purse List">

# Purse List

The markdown file may consist of multiple sections. Some may be purely
for documentation. Others will be recognized as specifying a web
service function.

<template #code>

```PHP
$azpays = new AzPays($config)->purseList();
```

</template>
</CodeBox>


<Response :title="'oAuth'" json-file-name="sample" >

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
