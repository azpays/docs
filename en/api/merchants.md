---
aside: false
---

<!--@include: /partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/merchants">

# List

Using our merchants list Method, users are now able to easily retrieve their merchants list.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/merchants
```

</template>

</CodeBox>

<Response jfile="response/azpays/merchant/list" >
<template #result>

- `id` <span>String</span> the ID of merchant.
- `name` <span>String</span> the name of merchant.
- `tell` <span>Integer</span> the tell of merchant.
- `domain` <span>String</span> then domain of merchant.
- `ip` <span>Integer</span> IP.
- `description` <span>String</span> description.
- `support_email` <span>String</span> the email for support.
- `support_phone` <span>String</span> the phone for support.
- `support_url` <span>String</span> the url for support.
- `color` <span>String</span> color.
- `logo` <span>String</span> logo.
- `status` <span>Integer</span> The status of merchant. Check out [Status Codes](#status-codes).
- `merchant_purses` <span>Array of JSON Objects</span>, merchant purses.
    - `purse_id` <span>String</span> the id of purse.
    - `percentage` <span>Integer</span> percentage.
    - `fee` <span>Float</span> fee.
- `tags` <span>Array of JSON Objects</span> Tags of merchant.
    - `id` <span>String</span> the name of tag.
    - `title` <span>String</span> the title of tag.
    - `slug` <span>String</span> the slug of tag.
- `categories` <span>Array of JSON Objects</span> Categories of merchant.
    - `id` <span>String</span> the name of category.
    - `title` <span>String</span> the title of category.
    - `slug` <span>String</span> the slug of category.
    - `type` <span>String</span> the type of category. Check out [Category Type Codes](https://next-docs.trader4.net/en/api/category?lang=restful&pos=0#auto-withdraw-table).

</template>
</Response>


<CodeBox lang="Restful" method="GET" endpoint="/v1/merchants/{id}">

# Details

Using our merchant details Method, users are now able to easily retrieve their merchants information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/merchants/{id}
```

</template>

</CodeBox>

<Response jfile="response/azpays/merchant/read" >
<template #result>

- `id` <span>String</span> the ID of merchant.
- `name` <span>String</span> the name of merchant.
- `tell` <span>Integer</span> the tell of merchant.
- `domain` <span>String</span> then domain of merchant.
- `ip` <span>Integer</span> IP.
- `description` <span>String</span> description.
- `support_email` <span>String</span> the email for support.
- `support_phone` <span>String</span> the phone for support.
- `support_url` <span>String</span> the url for support.
- `color` <span>String</span> color.
- `logo` <span>String</span> logo.
- `status` <span>Integer</span> The status of merchant. Check out [Status Codes](#status-codes).
- `merchant_purses` <span>Array of JSON Objects</span>, merchant purses.
    - `purse_id` <span>String</span> the id of purse.
    - `percentage` <span>Integer</span> percentage.
    - `fee` <span>Float</span> fee.
- `tags` <span>Array of JSON Objects</span> Tags of merchant.
    - `id` <span>String</span> the name of tag.
    - `title` <span>String</span> the title of tag.
    - `slug` <span>String</span> the slug of tag.
- `categories` <span>Array of JSON Objects</span> Categories of merchant.
    - `id` <span>String</span> the name of category.
    - `title` <span>String</span> the title of category.
    - `slug` <span>String</span> the slug of category.
    - `type` <span>String</span> the type of category. Check out [Category Type Codes](https://next-docs.trader4.net/en/api/category?lang=restful&pos=0#auto-withdraw-table).

</template>
</Response>

<CodeBox lang="Restful" method="POST" endpoint="/v1/merchants">


# Store

<template #params>

- `name` <span>String</span> the name of merchant.
- `tell` <span>Integer</span> the tell of merchant.
- `domain` <span>String</span> then domain of merchant.
- `ip` <span>Integer</span> IP.
- `webhook` <span>String</span> webhook.
- `calllback` <span>String</span> callback.
- `description` <span>String</span> description.
- `support_email` <span>String</span> the email for support.
- `support_phone` <span>String</span> the phone for support.
- `support_url` <span>String</span> the url for support.
- `color` <span>String</span> color.
- `logo` <span>File</span> logo.
- `categories` <span>Array of Strings</span> Category IDs.
- `tags` <span>Array of Strings</span> Tag IDs.
- `merchant_purses` <span>Array of JSON Objects</span>, merchant purses.
    - `purse_id` <span>String</span> the id of purse.
    - `percentage` <span>Integer</span> percentage.
    - `fee` <span>Float</span> fee.

</template>

<template #code>

```bash
$ curl --request POST \
  https://api.trader4.net/v1/merchants \
  -d '{
    "name": "merchant",
    "tell": "+4493632722",
    "domain": "google7.com",
    "ip": "222.47.45.35",
    "webhook": "https://test.com/webhook",
    "callback": "https://test.com/callback",
    "description": "this is test",
    "support_email": "test@trader4.net",
    "support_phone": "+44845953933",
    "support_url": "https://www.yahoo.com",
    "color": "FFF3F3",
    "logo": null,
    "categories": ["98bdc2a2-4251-4619-9bb6-3905d22bea57", "98bdc2a2-3dbd-4b00-b9ed-bfcdeb94e3c3"],
    "tags": ["99bdc2a2-4251-4619-9bb6-3905d22bea81", "98bdc2a2-3dbd-4b00-b9ed-bfcdeb94e3c7"],
    "purses": [
        {
            "purse_id": "98b7b292-400b-4c16-a3a1-0a23d0ca31d4",
            "percentage": "90",
            "fee": 5.50
        },
        {
            "purse_id": "98b7b292-400b-4c16-a3a1-0a23d0ca31d4",
            "percentage": "12",
            "fee": 10
        }
    ]
  }'
```

</template>

</CodeBox>

<Response jfile="response/azpays/merchant/create" >
<template #result>

- `id` <span>String</span> the ID of merchant.
- `name` <span>String</span> the name of merchant.
- `tell` <span>Integer</span> the tell of merchant.
- `domain` <span>String</span> then domain of merchant.
- `ip` <span>Integer</span> IP.
- `description` <span>String</span> description.
- `support_email` <span>String</span> the email for support.
- `support_phone` <span>String</span> the phone for support.
- `support_url` <span>String</span> the url for support.
- `color` <span>String</span> color.
- `logo` <span>String</span> logo.
- `status` <span>Integer</span> The status of merchant. Check out [Status Codes](#status-codes).
- `merchant_purses` <span>Array of JSON Objects</span>, merchant purses.
    - `purse_id` <span>String</span> the id of purse.
    - `percentage` <span>Integer</span> percentage.
    - `fee` <span>Float</span> fee.
- `tags` <span>Array of JSON Objects</span> Tags of merchant.
    - `id` <span>String</span> the name of tag.
    - `title` <span>String</span> the title of tag.
    - `slug` <span>String</span> the slug of tag.
- `categories` <span>Array of JSON Objects</span> Categories of merchant.
    - `id` <span>String</span> the name of category.
    - `title` <span>String</span> the title of category.
    - `slug` <span>String</span> the slug of category.
    - `type` <span>String</span> the type of category. Check out [Category Type Codes](https://next-docs.trader4.net/en/api/category?lang=restful&pos=0#auto-withdraw-table).

</template>
</Response>


<CodeBox lang="Restful" method="PUT" endpoint="/v1/merchants/{id}">

# Update

Using our Update merchants Method, users are now able to easily Update their merchants information.

<template #params>

- `name` <span>String</span> the name of merchant.
- `tell` <span>Integer</span> the tell of merchant.
- `domain` <span>String</span> then domain of merchant.
- `ip` <span>Integer</span> IP.
- `webhook` <span>String</span> webhook.
- `calllback` <span>String</span> callback.
- `description` <span>String</span> description.
- `support_email` <span>String</span> the email for support.
- `support_phone` <span>String</span> the phone for support.
- `support_url` <span>String</span> the url for support.
- `color` <span>String</span> color.
- `logo` <span>File</span> logo.
- `categories` <span>Array of Strings</span> Category IDs.
- `tags` <span>Array of Strings</span> Tag IDs.
- `merchant_purses` <span>Array of JSON Objects</span>, merchant purses.
    - `purse_id` <span>String</span> the id of purse.
    - `percentage` <span>Integer</span> percentage.
    - `fee` <span>Float</span> fee.

</template>

<template #code>

```bash
$ curl --request PUT \
  https://api.trader4.net/v1/merchants/{id}
  -d '{
    "name": "merchant",
    "tell": "+4493632722",
    "domain": "google7.com",
    "ip": "222.47.45.35",
    "webhook": "https://test.com/webhook",
    "callback": "https://test.com/callback",
    "description": "this is test",
    "support_email": "test@trader4.net",
    "support_phone": "+44845953933",
    "support_url": "https://www.yahoo.com",
    "color": "FFF3F3",
    "logo": null,
    "categories": ["98bdc2a2-4251-4619-9bb6-3905d22bea57", "98bdc2a2-3dbd-4b00-b9ed-bfcdeb94e3c3"],
    "tags": ["99bdc2a2-4251-4619-9bb6-3905d22bea81", "98bdc2a2-3dbd-4b00-b9ed-bfcdeb94e3c7"],
    "purses": [
        {
            "purse_id": "98b7b292-400b-4c16-a3a1-0a23d0ca31d4",
            "percentage": "90",
            "fee": 5.50
        },
        {
            "purse_id": "98b7b292-400b-4c16-a3a1-0a23d0ca31d4",
            "percentage": "12",
            "fee": 10
        }
    ]
  }'
  
```

</template>

</CodeBox>

<Response jfile="response/azpays/merchant/update" >
<template #result>

- `id` <span>String</span> the ID of merchant.
- `name` <span>String</span> the name of merchant.
- `tell` <span>Integer</span> the tell of merchant.
- `domain` <span>String</span> then domain of merchant.
- `ip` <span>Integer</span> IP.
- `description` <span>String</span> description.
- `support_email` <span>String</span> the email for support.
- `support_phone` <span>String</span> the phone for support.
- `support_url` <span>String</span> the url for support.
- `color` <span>String</span> color.
- `logo` <span>String</span> logo.
- `status` <span>Integer</span> The status of merchant. Check out [Status Codes](#status-codes).
- `merchant_purses` <span>Array of JSON Objects</span>, merchant purses.
    - `purse_id` <span>String</span> the id of purse.
    - `percentage` <span>Integer</span> percentage.
    - `fee` <span>Float</span> fee.
- `tags` <span>Array of JSON Objects</span> Tags of merchant.
    - `id` <span>String</span> the name of tag.
    - `title` <span>String</span> the title of tag.
    - `slug` <span>String</span> the slug of tag.
- `categories` <span>Array of JSON Objects</span> Categories of merchant.
    - `id` <span>String</span> the name of category.
    - `title` <span>String</span> the title of category.
    - `slug` <span>String</span> the slug of category.
    - `type` <span>String</span> the type of category. Check out [Category Type Codes](https://next-docs.trader4.net/en/api/category?lang=restful&pos=0#auto-withdraw-table).

</template>
</Response>


<CodeBox lang="Restful" method="DELETE" endpoint="/v1/merchants/{id}">

# Delete

Using our Delete Method, users are now able to easily Delete their merchants information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request DELETE \
  https://api.trader4.net/v1/merchants/{id}
```

</template>

</CodeBox>

<Response jfile="response/azpays/merchant/delete" >
<template #result>

</template>
</Response>



<CodeBox lang="Restful" method="GET" endpoint="/v1/merchants/{id}/payments">

# Payments List

Using our payment list method, users are now able to easily retrieve their merchant payments information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/merchants/{id}/payments
```

</template>

</CodeBox>

<Response jfile="v1/payment/list" >

<template #result>

- Check out [Payments List](https://next-docs.azpays.net/en/api/payment?lang=restful&pos=0#list) for response structure.

</template>

</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/merchants/{id}/transactions">

# Transactions List

Using our transaction list method, users are now able to easily retrieve their merchant transactions information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/merchants/{id}/transactions
```

</template>

</CodeBox>

<Response jfile="response/azpays/transaction/list" >
<template #result>

- Check out [Transactions List](https://next-docs.azpays.net/en/api/transaction?lang=restful&pos=0#list) for response structure.

</template>
</Response>

### Status Codes
| CODE               | CONSTANT            | DESCRIPTION                                         |
|--------------------|---------------------|-----------------------------------------------------|
| <code>12100</code> | <pre>ACTIVE</pre>   | The merchant is active and have full functionality. |
| <code>12101</code> | <pre>INACTIVE</pre> | The merchant is inactive and just can read data.    |
| <code>12102</code> | <pre>BLOCKED</pre>  | The merchant is blocked so there is no response.    |