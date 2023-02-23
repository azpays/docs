---
aside: false
---

<SelectLibraries
    :libraries="[
        {
            name: 'Restful',
            link: 'https://api.azpays.net/v1',
            code: 'https://api.azpays.net/v1'
        },
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

Welcome to **AzPays**! 🎉 We understand how important it is to stay connected with your customers, and that's why we offer SDKs that make it easy, fast and safe to connect to our products and services via APIs. So don't wait, get connected today! 🤝

</SelectLibraries>

<CodeBox lang="Restful" method="GET" endpoint="/v1/oauth/sign">

# Sign

Using our Sign Method, users are now able to easily request an One-Time Password (OTP) for added security. This powerful feature provides an extra layer of safety when it comes to your data security. With this added security, you can rest assured that your data is kept safe and secure.

`id` <sup><sub>String</sub></sup>, The identity of user account, it can be below items.

    ✔️ email                  hi@trader4.net   
    ✔️ mobile_number          +447888872720  
    ✔️ crypto                 bc1uw48ht4287287
    ✔️ phone_number           +445528888852

<template #code>

```bash
$ curl --request POST \
  https://api.azpays.net/v1/oauth/sign \
  --u 'id: hi@trader4.net'
```

</template>

</CodeBox>

<Response jfile="azpays/purse/list" >

## Schema
`succeed` <sup><sub>Boolean</sub></sup>  
`message` <sup><sub>String</sub></sup>  
`result` <sup><sub>JSON Array</sub></sup>  
`uuid` <sup><sub>UUID V4</sub></sup>  
`name` <sup><sub>String</sub></sup>, The name of purse, user sent in create form/request.  
`currency` <sup><sub>String</sub></sup>, The currency unit based on [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)  
`note` <sup><sub>String</sub></sup>, A note that user sent in create form/request.  
`status` <sup><sub>Integer</sub></sup>, The status of purse, Check out [Purse Status Table](#purse-status-table)  
`number` <sup><sub>Integer</sub></sup>, The unique generated number for purse.  
`color` <sup><sub>String</sub></sup>  
`balance` <sup><sub>Float</sub></sup>  
`freeze` <sup><sub>Float</sub></sup>  
`created_at` <sup><sub>Datetime</sub></sup>  
`updated_at` <sup><sub>Datetime</sub></sup>  
`meta` <sup><sub>JSON Array</sub></sup>

</Response>


## Purse Status Table

| CODE               | CONSTANT                           | DESCRIPTION                                                                                |
|--------------------|------------------------------------|--------------------------------------------------------------------------------------------|
| <code>11010</code> | <pre>purse_status_registered</pre> | The purse has been registered and not activated yet.                                       |
| <code>11011</code> | <pre>purse_status_active</pre>     | The purse is active, full functionality state.                                             |
| <code>11012</code> | <pre>purse_status_hold</pre>       | The purse is temporary is inactive, it happen by fraud system.                             |
| <code>11013</code> | <pre>purse_status_inactive</pre>   | The purse has been inactivated. In this state user can access read method.                 |
| <code>11014</code> | <pre>purse_status_blocked</pre>    | The purse disabled, it happen by fraud and/or anti-money laundering and/or legal requests. |

