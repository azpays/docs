---
aside: false
---

<!--@include: /partials/libraries.md-->


<CodeBox lang="Restful" method="GET" endpoint="/v1/comments">

# Comment List

Return User's comment list


<template #code>

```bash
$ curl --request GET \
 https://api.werify.net/v1/comments
  --header 'Accept: application/json'
```

</template>

</CodeBox>

<Response jfile="v1/werify/comment/comment-list" >

</Response>

<br>
<hr>
<br>

<CodeBox lang="Restful" method="GET" endpoint="/v1/comments/:id">

# Comment Detail

Return selected comment information

<template #code>

```bash
$ curl --request GET \
 https://api.werify.net/v1/comments/:id
  --header 'Accept: application/json'
```

</template>

</CodeBox>

<Response jfile="v1/werify/comment/comment-list" >

</Response>

<br>
<hr>
<br>

<CodeBox lang="Restful" method="POST" endpoint="/v1/comments">

# Comment Service

Add comment for selected topic

For using "report_id" should get report list that already exist in other services  

You can use different type for each topic :

<br>


Type: [
"blog": 0,
"video": 1,
"podcast': 2,
]

    ✔️ topic_id                   98791f36-6f26-4675-8713-26ed7fa1ac03
    ✔️ title(optional)            first title of comment 
    ✔️ comment                    this post is awesome
    ✔️ type(optional)             1 
    ✔️ description(optional)      this is sample description 
    ✔️ black_list(optional)       this is sample description 
    ✔️ report_id(optional)        98791f36-6f26-4675-8713-26ed7fa1ac03 


<template #code>

```bash
$ curl --request POST \
 https://api.werify.net/v1/comments
  --header 'Accept: application/json'
```

</template>

</CodeBox>

<Response jfile="v1/werify/comment/comment-create" >

</Response>

<br>
<hr>
<br>

<CodeBox lang="Restful" method="PUT" endpoint="/v1/comments/:id">

# Comment Update

User can update their own comments

You can use different status for each comment :

Status: [
"pend": 0,
"accept": 1,
"reject': 2,
]

    ✔️ title(optional)            first title of comment 
    ✔️ status                     1
    ✔️ description(optional)      this is sample description 
    ✔️ black_list(optional)       this is sample description


<template #code>

```bash
$ curl --request PUT \
 https://api.werify.net/v1/comments/:id
  --header 'Accept: application/json'
```

</template>

</CodeBox>

<Response jfile="v1/werify/comment/comment-update">

</Response>

<br>
<hr>
<br>
