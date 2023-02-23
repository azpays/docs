---
aside: false
---

<!--@include: /partials/libraries.md-->


<CodeBox lang="Restful" method="GET" endpoint="/v1/claps">

# Clap List

Return User's clap list


<template #code>

```bash
$ curl --request GET \
 https://api.werify.net/v1/claps
  --header 'Accept: application/json'
```

</template>

</CodeBox>

<Response jfile="v1/werify/user/clap-list" >

</Response>

<br>
<hr>
<br>

<CodeBox lang="Restful" method="PUT" endpoint="/v1/claps/:url">

# Clap Detail

Return User's clap detail

<template #code>

```bash
$ curl --request PUT \
 https://api.werify.net/v1/claps/:url
  --header 'Accept: application/json'
```

</template>

</CodeBox>

<Response jfile="v1/werify/user/clap-list" >

</Response>

<br>
<hr>
<br>


<CodeBox lang="Restful" method="POST" endpoint="/v1/claps">

# Clap Service

Clap for selected topic url

    ✔️ topic_url       https://www.youtube.com/watch?v=jNssss


<template #code>

```bash
$ curl --request POST \
 https://api.werify.net/v1/claps
  --header 'Accept: application/json'
```

</template>

</CodeBox>

<Response jfile="v1/werify/user/clap-url" >

</Response>

<br>
<hr>
<br>

