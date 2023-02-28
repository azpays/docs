---
aside: false
---

<!--@include: /partials/libraries.md-->


<CodeBox lang="Restful" method="GET" endpoint="/v1/authentication/info">

# User info

User info return information for current user.


<template #code>

```bash
$ curl --request GET \
 https://api.werify.net/v1/authentication/info
  --header 'Accept: application/json'
```

</template>

</CodeBox>

<Response jfile="v1/werify/user/info-get" >

</Response>

<br>
<hr>
<br>

<CodeBox lang="Restful" method="PUT" endpoint="/v1/authentication/update">

# User Update

Update user

The request body of user update can be below items.

    ✔️ firstname              john
    ✔️ lastname               smith
    ✔️ email                  john
    ✔️ mobile                 +447888872720
    ✔️ phone_number           +44123456
    ✔️ country                England
    ✔️ language               English
    ✔️ timezone               Asia/Singapore
    ✔️ currency               EUR
    ✔️ balance                2000

<template #code>

```bash
$ curl --request PUT \
 https://api.werify.net/v1/authentication/update
  --header 'Accept: application/json'
```

</template>

</CodeBox>

<Response jfile="v1/werify/user/user-update" >

</Response>

<br>
<hr>
<br>

<CodeBox lang="Restful" method="GET" endpoint="/v1/authentication/security">

# User Security

Return User security info


<template #code>

```bash
$ curl --request GET \
 https://api.werify.net/v1/authentication/security
  --header 'Accept: application/json'
```

</template>

</CodeBox>

<Response jfile="v1/werify/user/user-security" >

</Response>

<br>
<hr>
<br>


<CodeBox lang="Restful" method="PUT" endpoint="/v1/authentication/security">

# Update User Security

Update user security

    ✔️ anti_phishing            844ksldfjlasfiwsrjzx
    ✔️ google2fa_secret         3920rujkzlj0293ulkw904
    ✔️ email_2step              392djwkljzljv84jralij
    ✔️ google2fa_secret         39idaskj2390dkzlj9ja
    ✔️ email_2step              wkjedu8923jsiodsj
    ✔️ app_2step                38udskhsdjcnkw3jdalsj
    ✔️ same_wallet              yes
    ✔️ mobile_2step             sjkh8uye8ye
    ✔️ fund_password            jsohj823rjewd
    ✔️ registered_wallets       cjkdusi38jc
    ✔️ delay                    1


<template #code>

```bash
$ curl --request PUT \
 https://api.werify.net/v1/authentication/security
  --header 'Accept: application/json'
```

</template>

</CodeBox>

<Response jfile="v1/werify/user/user-security" >

</Response>

<br>
<hr>
<br>


<CodeBox lang="Restful" method="GET" endpoint="/v1/authentication/setting">

# User Setting

Return User setting list


<template #code>

```bash
$ curl --request GET \
 https://api.werify.net/v1/authentication/setting
  --header 'Accept: application/json'
```

</template>

</CodeBox>

<Response jfile="v1/werify/user/user-setting" >

</Response>

<br>
<hr>
<br>



<CodeBox lang="Restful" method="PUT" endpoint="/v1/authentication/setting">

# Update User Setting



Update user setting

    ✔️ daily_report         yes
    ✔️ auto_renewal         no
    ✔️ auto_withdraw        yes


<template #code>

```bash
$ curl --request PUT \
 https://api.werify.net/v1/authentication/setting
  --header 'Accept: application/json'
```

</template>


</CodeBox>


<Response jfile="v1/werify/user/user-setting" >

</Response>

<br>
<hr>
<br>
