---
aside: false
---

<!--@include: /partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/gateways">

# Gateways

Using our Gateway Method, users are now able to easily retrieve their gateways list.

<!--@include: /partials/authorization.md-->

<template #params>

- `name` (optional) <span>String</span>, Filter by gateway name.
- `status` (optional) <span>Integer</span>, Filter by gateway name. Check out [Gateway Status Table](#gateway-status-table).
- `date` (optional) <span>String</span>, Filter by gateway date.
- `sort` (optional) <span>String</span>, sort gateways.
    - sort[created_at]=asc

</template>

<template #code>

```bash
$ curl --request GET \
  https://api.azpays.net/v1/gateways
```

</template>

</CodeBox>

<Response jfile="response/azpays/gateway/gateways" >

<template #result>

- `id` <span>String</span>, The uuid of gateway.
- `name` <span>String</span>, The name of gateway.
- `logo` <span>String</span>, The URL of gateway logo.
- `status` <span>Integer</span>, The status of gateway. Check out [Gateway Status Table](#gateway-status-table).

</template>

</Response>


<CodeBox lang="Restful" method="GET" endpoint="/v1/gateways/{gateway_uuid}">

# Gateway Details

Using our Gateway Details Method, users are now able to easily see their Gateways information.

<!--@include: /partials/authorization.md-->

<template #params>

- `gateway_uuid` <span>String</span>, The uuid of gateway.

</template>

<template #code>

```bash
$ curl --request GET \
  https://api.azpays.net/v1/gateways/{gateway_uuid}
```

</template>

</CodeBox>

<Response jfile="response/azpays/gateway/gateway" >

<template #result>

- `id` <span>String</span>, The uuid of gateway.
- `name` <span>String</span>, The name of gateway.
- `logo` <span>String</span>, The URL of gateway logo.
- `status` <span>Integer</span>, The status of gateway. Check out [Gateway Status Table](#gateway-status-table).

</template>

</Response>


<CodeBox lang="Restful" method="POST" endpoint="/v1/gateways">

# Create Gateway

Using our Create Gateway Method, users are now able to easily Create their own gateways.

<!--@include: /partials/authorization.md-->

<template #params>

- `name` <span>String</span>, The name of gateway.
- `logo` <span>File</span>, The file of gateway logo.

</template>

<template #code>

```bash
$ curl --request POST \
  https://api.azpays.net/v1/gateways \
  -d '{
    "name": "test",
    "logo": "logo.png"
  }'
```

</template>

</CodeBox>

<Response jfile="response/azpays/gateway/create-gateway" >

<template #result>

- `id` <span>String</span>, The uuid of gateway.
- `name` <span>String</span>, The name of gateway.
- `logo` <span>String</span>, The URL of gateway logo.
- `status` <span>Integer</span>, The status of gateway. Check out [Gateway Status Table](#gateway-status-table).

</template>

</Response>

<CodeBox lang="Restful" method="PUT" endpoint="/v1/gateways/{gateway_uuid}">

# Update Gateway

Using our Update Gateway Method, users are now able to easily update their gateways information.

<!--@include: /partials/authorization.md-->

<template #params>

- `gateway_uuid` <span>String</span>, The uuid of gateway.
- `name` <span>String</span>, The name of gateway.
- `logo` <span>File</span>, The file of gateway logo.

</template>

<template #code>

```bash
$ curl --request PUT \
  https://api.azpays.net/v1/gateways/{gateway_uuid} \
  -d '{
    "name": "sample gateway",
    "logo": "logo.png"
  }'
```

</template>

</CodeBox>

<Response jfile="response/azpays/gateway/update-gateway" >

<template #result>

- `id` <span>String</span>, The uuid of gateway.
- `name` <span>String</span>, The name of gateway.
- `logo` <span>String</span>, The URL of gateway logo.
- `status` <span>Integer</span>, The status of gateway. Check out [Gateway Status Table](#gateway-status-table).

</template>

</Response>

<CodeBox lang="Restful" method="DELETE" endpoint="/v1/gateways/{gateway_uuid}">

# Delete Gateway

Using our Delete Gateway Method, users are now able to easily delete their gateways.

<!--@include: /partials/authorization.md-->

<template #params>

- `gateway_uuid` <span>String</span>, The uuid of gateway.

</template>

<template #code>

```bash
$ curl --request DELETE \
  https://api.azpays.net/v1/gateways/{gateway_uuid} \
```

</template>

</CodeBox>

<Response jfile="response/azpays/gateway/delete-gateway" >

<template #result>

- `id` <span>String</span>, The uuid of deleted gateway.

</template>

</Response>

## Gateway Status Table

| CODE                    | CONSTANT                | DESCRIPTION                                                                                |
|-------------------------|-------------------------|--------------------------------------------------------|
| <code>14101</code>      | <pre>registered</pre>   | Gateway status is registered.                                 |
| <code>14102</code>      | <pre>activated</pre>    | Gateway status is activated.                                  |
| <code>14103</code>      | <pre>inactivated</pre>  | Gateway status is inactivated.                                |
