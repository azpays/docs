---
aside: false
---

<!--@include: /partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/merchants">

# Merchants

Using our merchants Method, users are now able to easily retrieve their merchants information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/merchants
```

</template>

</CodeBox>

<Response jfile="v1/merchants/get" >
<template #result>

- `name` <span>String</span> The name of merchants.
- `logo` <span>String</span> The logo of merchants.
- `categories` <span>String</span> the category selected.
- `tags` <span>String</span> the tag selected.
- `tell` <span>Integer</span> the tell of merchant.
- `domain` <span>String</span> then domain of merchants.
- `ip` <span>Integer</span> Ip.
- `description` <span>String</span> description.
- `support email` <span>String</span> the email for support.
- `support phone` <span>String</span> the phone for support.
- `support url` <span>String</span> the url for support.
- `color` <span>String</span> color.
- `status` <span>Integer</span> status.

</template>
</Response>


<CodeBox lang="Restful" method="GET" endpoint="/v1/merchants/{id}">

# Merchant Detail

Using our merchants Method, users are now able to easily retrieve their merchants information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/merchants/{id}
```

</template>

</CodeBox>

<Response jfile="v1/merchants/get" >
<template #result>

- `name` <span>String</span> The name of merchants.
- `logo` <span>String</span> The logo of merchants.
- `categories` <span>String</span> the category selected.
- `tags` <span>String</span> the tag selected.
- `tell` <span>Integer</span> the tell of merchant.
- `domain` <span>String</span> then domain of merchants.
- `ip` <span>Integer</span> Ip.
- `description` <span>String</span> description.
- `support email` <span>String</span> the email for support.
- `support phone` <span>String</span> the phone for support.
- `support url` <span>String</span> the url for support.
- `color` <span>String</span> color.
- `status` <span>Integer</span> status.


</template>
</Response>



<CodeBox lang="Restful" method="POST" endpoint="/v1/merchants">


# Store Merchants

<template #params>

- `name` <span>String</span> the name of merchants.
- `category` <span>String</span> the category selected.
- `tag` <span>String</span> the tag selected.
- `tell` <span>Integer</span> the tell of merchant.
- `domain` <span>String</span> then domain of merchants.
- `ip` <span>Integer</span> Ip.
- `description` <span>String</span> description.
- `support_email` <span>String</span> the email for support.
- `support_phone` <span>String</span> the phone for support.
- `support_url` <span>String</span> the url for support.
- `color` <span>String</span> color.
- `purse_id` <span>String</span> the id of purses .
- `percentage` <span>Integer</span>percentage.
- `fee` <span>Integer</span> fee.

- 
</template>

<template #code>

```bash
$ curl --request POST \
  https://api.trader4.net/v1/purses \
  -d '{
    "name": "merchant",
    "category": "category1",
    "tag": "main",
    "tell": "93632722",
    "domain": "trader4.com",
    "ip": "222.4567.45.35",
    "description": "this is test",
    "support_email": "trader@gmail.com",
    "support_phone" : "84593933",
    "support_url" : "www.yahoo.com",
    "color" : "fff33",
    "purse_id" : "98a91998-47fb-4196-b6b9-bfdf6157b6f9",
    "percentage" : "90",
    "fee" : "10",
  }'
```

</template>

</CodeBox>

<Response jfile="v1/merchants/get" >

<template #result>


- `name` <span>String</span> The name of merchants.
- `logo` <span>String</span> The logo of merchants.
- `categories` <span>String</span> the category selected.
- `tags` <span>String</span> the tag selected.
- `tell` <span>Integer</span> the tell of merchant.
- `domain` <span>String</span> then domain of merchants.
- `ip` <span>Integer</span> Ip.
- `description` <span>String</span> description.
- `support email` <span>String</span> the email for support.
- `support phone` <span>String</span> the phone for support.
- `support url` <span>String</span> the url for support.
- `color` <span>String</span> color.
- `status` <span>Integer</span> status.


</template>

</Response>




<CodeBox lang="Restful" method="PUT" endpoint="/v1/merchants/{id}">

# Update

Using our Update merchants Method, users are now able to easily Update their merchants information.

<template #params>

- `name` <span>String</span> the name of merchants.
- `logo` <span>String</span> the logo of merchants.
- `category` <span>String</span> the category selected.
- `tag` <span>String</span> the tag selected.
- `tell` <span>Integer</span> the tell of merchant.
- `domain` <span>String</span> then domain of merchants.
- `ip` <span>Integer</span> Ip.
- `description` <span>String</span> description.
- `support_email` <span>String</span> the email for support.
- `support_phone` <span>String</span> the phone for support.
- `support_url` <span>String</span> the url for support.
- `color` <span>String</span> color.
- `key` <span>Integer</span> key.

</template>
<template #code>

```bash
$ curl --request PUT \
  https://api.trader4.net/v1/merchants/{id}
  -d '{
    "name": "merchant",
    "logo": "logo.jpg",
    "category": "category1",
    "tag": "main",
    "tell": "93632722",
    "domain": "trader4.com",
    "ip": "222.4567.45.35",
    "description": "this is test",
    "support_email": "trader@gmail.com",
    "support_phone" : "84593933",
    "support_url" : "www.yahoo.com",
    "color" : "fff33",
    "key" : "3838383333",  
  }'
  
```

</template>

</CodeBox>

<Response jfile="v1/merchants/update" >

<template #result>

</template>

</Response>



<CodeBox lang="Restful" method="Delete" endpoint="/v1/merchants/{id}">

# Delete

Using our Delete Method, users are now able to easily Delete their merchants information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request Delete \
  https://api.trader4.net/v1/merchants/{id}
```

</template>

</CodeBox>

<Response jfile="v1/merchants/delete" >
<template #result>


</template>
</Response>


