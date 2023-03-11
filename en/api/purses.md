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

<Response jfile="v1/purses/get" >
<template #result>

- `name` <span>String</span> The name of purses.
- `currency` <span>String</span> The currency selected.
- `note` <span>String</span> note.
- `status` <span>String</span> status.
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

<Response jfile="v1/purses/get" >
<template #result>

- `name` <span>String</span> The name of purses.
- `currency` <span>String</span> The currency selected.
- `note` <span>String</span> note.
- `status` <span>String</span> status.
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

- `currency` <span>String</span>, The currency that user selected. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `color` <span>String</span> color.

</template>

<template #code>

```bash
$ curl --request POST \
  https://api.trader4.net/v1/purses \
  -d '{
    "currency": "IRR",
    "color" : "000000",
  }'
```

</template>

</CodeBox>

<Response jfile="v1/purses/get" >

<template #result>

- `name` <span>String</span> The name of purses.
- `currency` <span>String</span> The currency selected.
- `note` <span>String</span> note.
- `status` <span>String</span> status.
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

- `name` <span>String</span> name.
- `color` <span>String</span> color.
- `note` <span>String</span> note.

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

<Response jfile="v1/purses/update" >

<template #result>

- `name` <span>String</span> The name of purses.
- `currency` <span>String</span> The currency selected.
- `note` <span>String</span> note.
- `status` <span>String</span> status.
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
$ curl --request GET \
  https://api.trader4.net/v1/purses/{id}
```

</template>

</CodeBox>

<Response jfile="v1/purses/delete" >
<template #result>


</template>
</Response>


