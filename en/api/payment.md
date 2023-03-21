---
aside: false
---

<!--@include: /partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/payments">

# List

Using our payment Method, users are now able to easily retrieve their payment information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/payments
```

</template>

</CodeBox>

<Response jfile="v1/payment/get" >
<template #result>

- `token` <span>String</span> The token of payment.
- `amount` <span>String</span> The amount of payment.
- `currency` <span>String</span> The currency selected.
- `factor` <span>String</span> factor.
- `description` <span>String</span> description.
- `started_at` <span>String</span> time start.
- `verified_at` <span>Integer</span> verified.
- `status` <span>Integer</span> status.


</template>
</Response>


<CodeBox lang="Restful" method="GET" endpoint="/v1/payments/{id}">

# Payment Detail

Using our payment Method, users are now able to easily retrieve their payment information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/payments/{id}
```

</template>

</CodeBox>

<Response jfile="v1/payment/get" >
<template #result>


- `token` <span>String</span> The token of payment.
- `amount` <span>String</span> The amount of payment.
- `currency` <span>String</span> The currency selected.
- `factor` <span>String</span> factor.
- `description` <span>String</span> description.
- `started_at` <span>String</span> time start.
- `verified_at` <span>Integer</span> verified.
- `status` <span>Integer</span> status.


</template>
</Response>



<CodeBox lang="Restful" method="POST" endpoint="/v1/payments">


# Store Payments

Using our Store payment Method, users are now able to easily store their payment information.


<template #params>

- `merchant_id` <span>String</span>.
- `amount` <span>String</span> amount of payment.

</template>

<template #code>

```bash
$ curl --request POST \
  https://api.trader4.net/v1/payments \
  -d '{
    "merchant_id": "98a98b24-fc37-4837-ab9e-aecad7198d5c",
    "amount" : "555",
  }'
```

</template>

</CodeBox>

<Response jfile="v1/payment/store" >

<template #result>

</template>

</Response>




<CodeBox lang="Restful" method="PUT" endpoint="/v1/payments/{id}">

# Update

Using our Update payment Method, users are now able to easily Update their payment information.

<template #params>

- `name` <span>String</span> name.
- `color` <span>String</span> color.
- `note` <span>String</span> note.

</template>
<template #code>

```bash
$ curl --request PUT \
  https://api.trader4.net/v1/payments/{id}
  -d '{
    "amount"  : "666",
    "description"  : "test"      
  }'
  
```

</template>

</CodeBox>

<Response jfile="v1/payment/update" >

<template #result>

</template>

</Response>



<CodeBox lang="Restful" method="Delete" endpoint="/v1/payments/{id}">

# Delete

Using our Delete Method, users are now able to easily Delete their payment information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request Delete \
  https://api.trader4.net/v1/payments/{id}
```

</template>

</CodeBox>

<Response jfile="v1/payment/delete" >
<template #result>


</template>
</Response>


