---
aside: false
---

<!--@include: /partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/purses">

# Purses

Using our purses Method, users are now able to easily retrieve their purses information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/purses
```

</template>

</CodeBox>

<Response jfile="response/azpays/purse/list" >
<template #result>

- `id` <span>String</span> The ID of purses.
- `name` <span>String</span> The name of purses.
- `currency` <span>String</span> The currency selected. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `note` <span>String</span> note.
- `type` <span>Integer</span> type. Check out [Type Codes Table](#type-codes).
- `status` <span>Integer</span> status. Check out [Status Codes Table](#status-codes).
- `address` <span>String</span> address.
- `color` <span>String</span> color.
- `balance` <span>Integer</span> balance.
- `freeze` <span>Integer</span> freeze.
- `locked` <span>Integer</span> locked.

</template>
</Response>


<CodeBox lang="Restful" method="GET" endpoint="/v1/purses/{id}">

# Purses Detail

Using our purses Method, users are now able to easily retrieve their purses information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/purses/{id}
```

</template>

</CodeBox>

<Response jfile="response/azpays/purse/read" >
<template #result>

- `id` <span>String</span> The ID of purses.
- `name` <span>String</span> The name of purses.
- `currency` <span>String</span> The currency selected. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `note` <span>String</span> note.
- `type` <span>Integer</span> type. Check out [Type Codes Table](#type-codes).
- `status` <span>Integer</span> status. Check out [Status Codes Table](#status-codes).
- `address` <span>String</span> address.
- `color` <span>String</span> color.
- `balance` <span>Integer</span> balance.
- `freeze` <span>Integer</span> freeze.
- `locked` <span>Integer</span> locked.

</template>
</Response>



<CodeBox lang="Restful" method="POST" endpoint="/v1/purses">


# Store Purses

Using our Store Purses Method, users are now able to easily store their purses information.


<template #params>

- `name` (optional) <span>String</span>, The private custom name of purse.
- `currency` <span>String</span>, The currency that user selected. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `note` (optional) <span>String</span> The user private custom note.
- `color` <span>String</span> color.

</template>

<template #code>

```bash
$ curl --request POST \
  https://api.trader4.net/v1/purses \
  -d '{
      "name"  : "trader4",
      "currency": "AZP",
      "note"  : "Test purse for trader4",
      "color" : "000000",
  }'
```

</template>

</CodeBox>

<Response jfile="response/azpays/purse/create" >

<template #result>

- `id` <span>String</span> The ID of purses.
- `name` <span>String</span> The name of purses.
- `currency` <span>String</span> The currency selected. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `note` <span>String</span> note.
- `type` <span>Integer</span> type. Check out [Type Codes Table](#type-codes).
- `status` <span>Integer</span> status. Check out [Status Codes Table](#status-codes).
- `address` <span>String</span> address.
- `color` <span>String</span> color.
- `balance` <span>Integer</span> balance.
- `freeze` <span>Integer</span> freeze.
- `locked` <span>Integer</span> locked.

</template>

</Response>




<CodeBox lang="Restful" method="PUT" endpoint="/v1/purses/{id}">

# Update

Using our Update Purses Method, users are now able to easily Update their purses information.

<template #params>

- `name` (optional) <span>String</span>, The private custom name of purse.
- `color` <span>String</span> color.
- `note` (optional) <span>String</span> The user private custom note.

</template>
<template #code>

```bash
$ curl --request PUT \
  https://api.trader4.net/v1/purses/{id}
  -d '{
    "name"  : "trader4",
    "color" : "000000",
    "note"  : "test"    
  }'
  
```

</template>

</CodeBox>

<Response jfile="response/azpays/purse/update" >

<template #result>

- `id` <span>String</span> The ID of purses.
- `name` <span>String</span> The name of purses.
- `currency` <span>String</span> The currency selected. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `note` <span>String</span> note.
- `type` <span>Integer</span> type. Check out [Type Codes Table](#type-codes).
- `status` <span>Integer</span> status. Check out [Status Codes Table](#status-codes).
- `address` <span>String</span> address.
- `color` <span>String</span> color.
- `balance` <span>Integer</span> balance.
- `freeze` <span>Integer</span> freeze.
- `locked` <span>Integer</span> locked.



</template>

</Response>



<CodeBox lang="Restful" method="Delete" endpoint="/v1/purses/{id}">

# Delete

Using our Delete Method, users are now able to easily Delete their purses information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request Delete \
  https://api.trader4.net/v1/purses/{id}
```

</template>

</CodeBox>

<Response jfile="response/azpays/purse/delete" >
<template #result>

- `id` <span>String</span> The ID of purses.

</template>
</Response>

<CodeBox lang="Restful" method="POST" endpoint="/v1/purses/add-user">

# Add User

Using our Add User Purse Method, users are now able to easily connect a user to their purses.

<template #params>

- `purse_id` <span>String</span>, The ID of purse.
- `user_id` <span>String</span> The ID of user.
- `percentage` <span>Integer</span> A number between 1-100.

</template>
<template #code>

```bash
$ curl --request PUT \
  https://api.trader4.net/v1/purses/{id}
  -d '{
    "purse_id: "98b7b292-400b-4c16-a3a1-0a23d0ca31d4",
    "user_id: "98935731-cc1e-4af3-ae9a-3b5cf6e2e2c5",
    "percentage: "12"  
  }'
  
```

</template>

</CodeBox>

<Response jfile="response/azpays/purse/add-user" >

<template #result>

</template>

</Response>

### Type Codes
| CODE               | CONSTANT                       | DESCRIPTION                                     |
|--------------------|--------------------------------|-------------------------------------------------|
| <code>12000</code> | <pre>GENERAL</pre>             | The purse will be used for general.             |
| <code>12001</code> | <pre>DEPOSIT</pre>             | The purse will be used for deposit.             |
| <code>12002</code> | <pre>WITHDRAW</pre>            | The purse will be used for withdraw.            |
| <code>12003</code> | <pre>TRANSFER</pre>            | The purse will be used for transfer.            |
| <code>12004</code> | <pre>REFUND</pre>              | The purse will be used for refund.              |
| <code>12005</code> | <pre>BONUS</pre>               | The purse will be used for bonus.               |
| <code>12006</code> | <pre>COMMISSION</pre>          | The purse will be used for commission.          |
| <code>12007</code> | <pre>CASHBACK</pre>            | The purse will be used for cashback.            |
| <code>12008</code> | <pre>CASHBACK_REFUND</pre>     | The purse will be used for cashback refund.     |
| <code>12009</code> | <pre>CASHBACK_BONUS</pre>      | The purse will be used for cashback bonus.      |
| <code>12010</code> | <pre>CASHBACK_COMMISSION</pre> | The purse will be used for cashback commission. |
| <code>12011</code> | <pre>TEMPORARY</pre>           | The purse will be used for temporary events.    |


### Status Codes
| CODE               | CONSTANT            | DESCRIPTION                                      |
|--------------------|---------------------|--------------------------------------------------|
| <code>12100</code> | <pre>ACTIVE</pre>   | The purse is active and have full functionality. |
| <code>12101</code> | <pre>INACTIVE</pre> | The purse is inactive and just can read data.    |
| <code>12102</code> | <pre>BLOCKED</pre>  | The purse is blocked so there is no response.    |
