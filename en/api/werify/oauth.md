---
aside: false
---

<!--@include: /partials/libraries.md-->


<CodeBox lang="Restful" method="POST" endpoint="/v1/oauth/sign">

# Sign

Using our Sign Method, users are now able to easily request an One-Time Password (OTP) for added security. This powerful feature provides an extra layer of safety when it comes to your data security. With this added security, you can rest assured that your data is kept safe and secure.

`id` <sup><sub>String</sub></sup>, The identity of user account, it can be below items.

    ✔️ email                  hi@trader4.net   
    ✔️ mobile_number          +447888872720  
    ✔️ crypto                 bc1uw48ht4287287
    ✔️ phone_number           +445528888852

<template #code>

```bash
$ curl https://api.werify.net/v1/oauth/sign
  --header 'Accept: application/json'
```

</template>

</CodeBox>


<Response jfile="v1/werify/oauth/sign" >

</Response>
<br>
<hr>
<br>

<CodeBox lang="Restful" method="POST" endpoint="/v1/oauth/verify">

# Verify

Verification of Sent OTP code or Sent an email

`id` <sup><sub>String</sub></sup>, The identity of user account, it can be below items.

    ✔️ email                  hi@trader4.net   
    ✔️ mobile_number          +447888872720  
    ✔️ crypto                 bc1uw48ht4287287
    ✔️ phone_number           +445528888852

`code` <sup><sub>Integer</sub></sup>, Otp code sent

    ✔️ code          123456

<template #code>

```bash
$ curl https://api.werify.net/v1/oauth/verify
  --header 'Accept: application/json'
```

</template>

</CodeBox>

<Response jfile="v1/werify/oauth/verify" >

</Response>


<br>
<hr>
<br>

<CodeBox lang="Restful" method="GET" endpoint="/v1/oauth/qr">

# Qr

Request for generate qr token


<template #code>

```bash
$ curl --request GET \
 https://api.werify.net/v1/oauth/qr
  --header 'Accept: application/json'
```

</template>

</CodeBox>

<Response jfile="v1/werify/oauth/qr" >

</Response>

<br>
<hr>
<br>

<CodeBox lang="Restful" method="POST" endpoint="/v1/oauth/qr/authorize">

# Qr Authorize

Verification of qr token that generated

qr_token<sup><sub>String</sub></sup>, The token of qr generated, it can be below items.

    ✔️ qr_token                  wrfad882860130067e284a7

<template #code>

```bash
$ curl --request POST \
 https://api.werify.net/v1/oauth/qr/authorize
  --header 'Accept: application/json' - 'Authorization: Bearer [ACCESS_TOKEN]'
```

</template>

</CodeBox>

<Response jfile="v1/werify/oauth/qr-authorize" >

</Response>

<br>
<hr>
<br>



<CodeBox lang="Restful" method="POST" endpoint="/v1/oauth/qr">

# Qr Verification

Verification of qr token that generated and return user info

qr_token<sup><sub>String</sub></sup>, The qr token generated, it can be below items.

    ✔️ qr_token                  wrfad882860130067e284a7

<template #code>

```bash
$ curl --request POST \
 https://api.werify.net/v1/oauth/qr
  --header 'Accept: application/json' - 'Authorization: Bearer [ACCESS_TOKEN]'
```

</template>

</CodeBox>

<Response jfile="v1/werify/oauth/qr-authorize" >

</Response>








