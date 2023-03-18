---
aside: false
---

<!--@include: /partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/rates">

# Rates

Using our Rate Method, users are now able to easily retrieve their rates list.

<!--@include: /partials/authorization.md-->

<template #params>

- `base` (optional) <span>String</span>, Filter by rate base.
- `currency` (optional) <span>String</span>, Filter by rate currency.
- `date` (optional) <span>String</span>, Filter by rate date.
- `sort` (optional) <span>String</span>, sort rates.
    - sort[created_at]=asc

</template>


<template #code>

```bash
$ curl --request GET \
  https://api.azpays.net/v1/rates
```

</template>

</CodeBox>

<Response jfile="response/azpays/rate/rates" >

<template #result>

- `id` <span>String</span>, The uuid of rate.
- `network_uuid` <span>String</span>, The uuid of network.
- `base` <span>String</span>, The currency to be exchanged from. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `currency` <span>String</span>, The currency to be exchanged to. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `sell` <span>Decimal</span>, The sell price of rate.
- `buy` <span>Decimal</span>, The buy price of rate.
- `description` <span>String</span>, The description of rate.

</template>

</Response>


<CodeBox lang="Restful" method="GET" endpoint="/v1/rates/{rate_uuid}">

# Rate Details

Using our Rate Details Method, users are now able to easily see their Rates information.

<!--@include: /partials/authorization.md-->

<template #params>

- `rate_uuid` <span>String</span>, The uuid of rate.

</template>

<template #code>

```bash
$ curl --request GET \
  https://api.azpays.net/v1/rates/{rate_uuid}
```

</template>

</CodeBox>

<Response jfile="response/azpays/rate/rate" >

<template #result>

- `id` <span>String</span>, The uuid of rate.
- `network_uuid` <span>String</span>, The uuid of network.
- `base` <span>String</span>, The currency to be exchanged from. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `currency` <span>String</span>, The currency to be exchanged to. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `sell` <span>Decimal</span>, The sell price of rate.
- `buy` <span>Decimal</span>, The buy price of rate.
- `description` <span>String</span>, The description of rate.

</template>

</Response>


<CodeBox lang="Restful" method="POST" endpoint="/v1/rates">

# Create Rate

Using our Create Rate Method, users are now able to easily Create their own rates.

<!--@include: /partials/authorization.md-->

<template #params>

- `network_uuid` <span>String</span>, The uuid of network.
- `base` <span>String</span>, The currency to be exchanged from. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `currency` <span>String</span>, The currency to be exchanged to. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `sell` <span>Decimal</span>, The sell price of rate.
- `buy` <span>Decimal</span>, The buy price of rate.
- `description` <span>String</span>, The description of rate.

</template>

<template #code>

```bash
$ curl --request POST \
  https://api.azpays.net/v1/rates \
  -d '{
    "network_id": "9893a4d5-ad57-4c55-8620-57e9510ace4a",
    "base": "EUR",
    "currency": "USD",
    "sell": 21.00,
    "buy": 30.05,
    "description": "this is test"
  }'
```

</template>

</CodeBox>

<Response jfile="response/azpays/rate/create-rate" >

<template #result>

- `id` <span>String</span>, The uuid of rate.
- `network_uuid` <span>String</span>, The uuid of network.
- `base` <span>String</span>, The currency to be exchanged from. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `currency` <span>String</span>, The currency to be exchanged to. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `sell` <span>Decimal</span>, The sell price of rate.
- `buy` <span>Decimal</span>, The buy price of rate.
- `description` <span>String</span>, The description of rate.

</template>

</Response>

<CodeBox lang="Restful" method="PUT" endpoint="/v1/rates/{rate_uuid}">

# Update Rate

Using our Update Rate Method, users are now able to easily update their rates information.

<!--@include: /partials/authorization.md-->

<template #params>

- `rate_uuid` <span>String</span>, The uuid of rate.
- `base` <span>String</span>, The currency to be exchanged from. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `currency` <span>String</span>, The currency to be exchanged to. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `sell` <span>Decimal</span>, The sell price of rate.
- `buy` <span>Decimal</span>, The buy price of rate.
- `description` <span>String</span>, The description of rate.

</template>

<template #code>

```bash
$ curl --request PUT \
  https://api.azpays.net/v1/rates/{rate_uuid} \
  -d '{
    "base": "GBP",
    "currency": "USD",
    "sell": 15.51,
    "buy": 13.14,
    "description": "this is test2"
  }'
```

</template>

</CodeBox>

<Response jfile="response/azpays/rate/update-rate" >

<template #result>

- `id` <span>String</span>, The uuid of rate.
- `network_uuid` <span>String</span>, The uuid of network.
- `base` <span>String</span>, The currency to be exchanged from. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `currency` <span>String</span>, The currency to be exchanged to. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `sell` <span>Decimal</span>, The sell price of rate.
- `buy` <span>Decimal</span>, The buy price of rate.
- `description` <span>String</span>, The description of rate.

</template>

</Response>

<CodeBox lang="Restful" method="DELETE" endpoint="/v1/rates/{rate_uuid}">

# Delete Rate

Using our Delete Rate Method, users are now able to easily delete their rates.

<!--@include: /partials/authorization.md-->

<template #params>

- `rate_uuid` <span>String</span>, The uuid of rate.

</template>

<template #code>

```bash
$ curl --request DELETE \
  https://api.azpays.net/v1/rates/{rate_uuid} \
```

</template>

</CodeBox>

<Response jfile="response/azpays/rate/delete-rate" >

<template #result>

- `id` <span>String</span>, The uuid of deleted rate.

</template>

</Response>
