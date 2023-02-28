---
aside: false
---

<Response :title="'mock title'" json-file-name="sample" >

# Quick Start

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
