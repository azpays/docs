---
aside: false
---

<!--@include: /partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/networks">

# Networks

Using our Network Method, users are now able to easily retrieve their networks list.

<!--@include: /partials/authorization.md-->

<template #params>

- `name` (optional) <span>String</span>, Filter by network name.
- `gateway_id` (optional) <span>String</span>, Filter by gateway id.
- `countries` (optional) <span>String</span>, Filter by country name.
- `date` (optional) <span>String</span>, Filter by network date.
- `sort` (optional) <span>String</span>, sort networks.
    - sort[created_at]=asc

</template>


<template #code>

```bash
$ curl --request GET \
  https://api.azpays.net/v1/networks
```

</template>

</CodeBox>

<Response jfile="response/azpays/network/networks" >

<template #result>

- `id` <span>String</span>, The uuid of network.
- `gateway_uuid` <span>String</span>, The uuid of gateway.
- `name` <span>String</span>, The name of network.
- `fee` <span>Decimal</span>, The fee of network.
- `support_portal` <span>String</span>, The support portal of network.
- `support_email` <span>String</span>, The support email of network.
- `support_phone` <span>String</span>, The support phone of network.
- `processing_time` <span>Integer</span>, The processing time of network. (Microseconds)
- `confirm_time` <span>Integer</span>, The confirm time of network. (Microseconds)
- `payout_time` <span>Integer</span>, The payout time of network. (Microseconds)
- `countries` <span>Text</span>, The countries of network.
- `processors` <span>Text</span>, The processors of network.
- `logo` <span>String</span>, The URL of network logo.

</template>

</Response>


<CodeBox lang="Restful" method="GET" endpoint="/v1/networks/{network_uuid}">

# Network Details

Using our Network Details Method, users are now able to easily see their Networks information.

<!--@include: /partials/authorization.md-->

<template #params>

- `network_uuid` <span>String</span>, The uuid of network.

</template>

<template #code>

```bash
$ curl --request GET \
  https://api.azpays.net/v1/networks/{network_uuid}
```

</template>

</CodeBox>

<Response jfile="response/azpays/network/network" >

<template #result>

- `id` <span>String</span>, The uuid of network.
- `gateway_uuid` <span>String</span>, The uuid of gateway.
- `name` <span>String</span>, The name of network.
- `fee` <span>Decimal</span>, The fee of network.
- `support_portal` <span>String</span>, The support portal of network.
- `support_email` <span>String</span>, The support email of network.
- `support_phone` <span>String</span>, The support phone of network.
- `processing_time` <span>Integer</span>, The processing time of network. (Microseconds)
- `confirm_time` <span>Integer</span>, The confirm time of network. (Microseconds)
- `payout_time` <span>Integer</span>, The payout time of network. (Microseconds)
- `countries` <span>Text</span>, The countries of network.
- `processors` <span>Text</span>, The processors of network.
- `logo` <span>String</span>, The URL of network logo.

</template>

</Response>


<CodeBox lang="Restful" method="POST" endpoint="/v1/networks">

# Create Network

Using our Create Network Method, users are now able to easily Create their own networks.

<!--@include: /partials/authorization.md-->

<template #params>

- `gateway_uuid` <span>String</span>, The uuid of gateway.
- `name` <span>String</span>, The name of network.
- `fee` <span>Decimal</span>, The fee of network.
- `support_portal` <span>String</span>, The support portal of network.
- `support_email` <span>String</span>, The support email of network.
- `support_phone` <span>String</span>, The support phone of network.
- `processing_time` <span>Integer</span>, The processing time of network. (Microseconds)
- `confirm_time` <span>Integer</span>, The confirm time of network. (Microseconds)
- `payout_time` <span>Integer</span>, The payout time of network. (Microseconds)
- `countries` <span>Array of Strings</span>, The countries of network.
- `processors` <span>Text</span>, The processors of network.
- `logo` <span>File</span>, The file of network logo.

</template>

<template #code>

```bash
$ curl --request POST \
  https://api.azpays.net/v1/networks \
  -d '{
    "gateway_uuid": "98935c83-4df6-4a67-9906-78598803bb6d",
    "name": "network 1",
    "fee": "2.00",
    "support_portal": null,
    "support_email": "test@example.com",
    "support_phone": "+446562852235",
    "processing_time": "165165158451",
    "confirm_time": "165165158451",
    "payout_time": "165165158451",
    "countries": ["IRI", "USA"],
    "processors": "test",
    "logo": "logo.png"
  }'
```

</template>

</CodeBox>

<Response jfile="response/azpays/network/create-network" >

<template #result>

- `id` <span>String</span>, The uuid of network.
- `gateway_uuid` <span>String</span>, The uuid of gateway.
- `name` <span>String</span>, The name of network.
- `fee` <span>Decimal</span>, The fee of network.
- `support_portal` <span>String</span>, The support portal of network.
- `support_email` <span>String</span>, The support email of network.
- `support_phone` <span>String</span>, The support phone of network.
- `processing_time` <span>Integer</span>, The processing time of network. (Microseconds)
- `confirm_time` <span>Integer</span>, The confirm time of network. (Microseconds)
- `payout_time` <span>Integer</span>, The payout time of network. (Microseconds)
- `countries` <span>Text</span>, The countries of network.
- `processors` <span>Text</span>, The processors of network.
- `logo` <span>String</span>, The URL of network logo.

</template>

</Response>

<CodeBox lang="Restful" method="PUT" endpoint="/v1/networks/{network_uuid}">

# Update Network

Using our Update Network Method, users are now able to easily update their networks information.

<!--@include: /partials/authorization.md-->

<template #params>

- `network_uuid` <span>String</span>, The uuid of network.
- `name` <span>String</span>, The name of network.
- `fee` <span>Decimal</span>, The fee of network.
- `support_portal` <span>String</span>, The support portal of network.
- `support_email` <span>String</span>, The support email of network.
- `support_phone` <span>String</span>, The support phone of network.
- `processing_time` <span>Integer</span>, The processing time of network. (Microseconds)
- `confirm_time` <span>Integer</span>, The confirm time of network. (Microseconds)
- `payout_time` <span>Integer</span>, The payout time of network. (Microseconds)
- `countries` <span>Array of Strings</span>, The countries of network.
- `processors` <span>Text</span>, The processors of network.
- `logo` <span>File</span>, The file of network logo.

</template>

<template #code>

```bash
$ curl --request PUT \
  https://api.azpays.net/v1/networks/{network_uuid} \
  -d '{
    "name": "network 3",
    "fee": "3.00",
    "support_portal": null,
    "support_email": "test@example.com",
    "support_phone": "+446562852235",
    "processing_time": "165165158451",
    "confirm_time": "165165158451",
    "payout_time": "165165158451",
    "countries": ["IRI", "USA"],
    "processors": "test",
    "logo": "logo.png"
  }'
```

</template>

</CodeBox>

<Response jfile="response/azpays/network/update-network" >

<template #result>

- `id` <span>String</span>, The uuid of network.
- `gateway_uuid` <span>String</span>, The uuid of gateway.
- `name` <span>String</span>, The name of network.
- `fee` <span>Decimal</span>, The fee of network.
- `support_portal` <span>String</span>, The support portal of network.
- `support_email` <span>String</span>, The support email of network.
- `support_phone` <span>String</span>, The support phone of network.
- `processing_time` <span>Integer</span>, The processing time of network. (Microseconds)
- `confirm_time` <span>Integer</span>, The confirm time of network. (Microseconds)
- `payout_time` <span>Integer</span>, The payout time of network. (Microseconds)
- `countries` <span>Text</span>, The countries of network.
- `processors` <span>Text</span>, The processors of network.
- `logo` <span>String</span>, The URL of network logo.

</template>

</Response>

<CodeBox lang="Restful" method="DELETE" endpoint="/v1/networks/{network_uuid}">

# Delete Network

Using our Delete Network Method, users are now able to easily delete their networks.

<!--@include: /partials/authorization.md-->

<template #params>

- `network_uuid` <span>String</span>, The uuid of network.

</template>

<template #code>

```bash
$ curl --request DELETE \
  https://api.azpays.net/v1/networks/{network_uuid} \
```

</template>

</CodeBox>

<Response jfile="response/azpays/network/delete-network" >

<template #result>

- `id` <span>String</span>, The uuid of deleted network.

</template>

</Response>
