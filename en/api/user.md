---
aside: false
---

<!--@include: /partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/account">

# Account

Using our Account Method, users are now able to easily retrieve their account information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/account
```

</template>

</CodeBox>

<Response jfile="v1/user/account" >

<template #result>

- `first_name` <span>String</span>, The first name of user.
- `middle_name` <span>String</span>, The middle name of user.
- `last_name` <span>String</span>, The last name of user.
- `email` <span>String</span>, The email address of user.
- `mobile` <span>String</span>, The mobile number of user.
- `phone_number` <span>String</span>, The phone number of user.
- `country` <span>String</span>, The country that user registered. Check out [ISO 3166-1 Alpha-3](https://www.iso.org/iso-3166-country-codes.html).
- `language` <span>String</span>, The language that user selected. Check out [ISO 639-1](https://www.iso.org/iso-639-language-codes.html).
- `timezone` <span>String</span>, The timezone that user selected. Check out [Timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
- `currency` <span>String</span>, The currency that user selected. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `last_connection` <span>Datetime</span>, The last time that user connected to our system. Check out [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html).
- `private` <span>Boolean</span>, The privacy of user profile.
- `avatar` <span>String</span>, The URL of user avatar.

</template>

</Response>

<CodeBox lang="Restful" method="PUT" endpoint="/v1/account">

# Update Account

Using our Update Account Method, users are now able to easily update their account information.


<template #params>

- `first_name` <span>String</span>, The first name of user.
- `middle_name` <span>String</span>, The middle name of user.
- `last_name` <span>String</span>, The last name of user.
- `country` <span>String</span>, The country that user registered. Check out [ISO 3166-1 Alpha-3](https://www.iso.org/iso-3166-country-codes.html).
- `language` <span>String</span>, The language that user selected. Check out [ISO 639-1](https://www.iso.org/iso-639-language-codes.html).
- `timezone` <span>String</span>, The timezone that user selected. Check out [Timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
- `currency` <span>String</span>, The currency that user selected. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).

</template>

<template #code>

```bash
$ curl --request PUT \
  https://api.trader4.net/v1/account \
  -d '{
    "first_name": "John",
    "middle_name": "Middle",
    "last_name": "Doe",
    "country": "USA",
    "language": "en-US",
    "timezone": "America/New_York",
    "currency": "USD"
  }'
```

</template>

</CodeBox>

<Response jfile="v1/user/update" >

<template #result>

- `first_name` <span>String</span>, The first name of user.
- `middle_name` <span>String</span>, The middle name of user.
- `last_name` <span>String</span>, The last name of user.
- `email` <span>String</span>, The email address of user.
- `mobile` <span>String</span>, The mobile number of user.
- `phone_number` <span>String</span>, The phone number of user.
- `country` <span>String</span>, The country that user registered. Check out [ISO 3166-1 Alpha-3](https://www.iso.org/iso-3166-country-codes.html).
- `language` <span>String</span>, The language that user selected. Check out [ISO 639-1](https://www.iso.org/iso-639-language-codes.html).
- `timezone` <span>String</span>, The timezone that user selected. Check out [Timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
- `currency` <span>String</span>, The currency that user selected. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `last_connection` <span>Datetime</span>, The last time that user connected to our system. Check out [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html).
- `private` <span>Boolean</span>, The privacy of user profile.
- `avatar` <span>String</span>, The URL of user avatar.

</template>

</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/account/settings">

# Settings

Using our Settings Method, users are now able to easily see their settings information.

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/account/settings
```

</template>

</CodeBox>

<Response jfile="v1/user/settings/settings" >

<template #result>

- `daily_report` <span>Time</span>, Send daily report of account activities at the specified time in user local timezone. Check out [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
- `auto_renewal` <span>Boolean</span>, The auto renewal of user subscription and services.
- `auto_withdraw` <span>Integer</span>, The auto withdraw of user.  Check out [Auto Withdraw Table](#auto-withdraw-table)

</template>

</Response>

<CodeBox lang="Restful" method="PUT" endpoint="/v1/account/settings">

# Update Settings
Using our Settings Method, users are now able to easily update their settings information.

<!--@include: /partials/authorization.md-->

<template #params>

- `daily_report` <span>Time</span>, Send daily report of account activities at the specified time in user local timezone. Check out [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
- `auto_renewal` <span>Boolean</span>, The auto renewal of user subscription and services.
- `auto_withdraw` <span>Integer</span>, The auto withdraw of user.  Check out [Auto Withdraw Table](#auto-withdraw-table)

</template>

<template #code>

```bash
$ curl --request PUT \
  https://api.trader4.net/v1/account/settings \
    -d '{
        "daily_report": "09:00",
        "auto_renewal": true,
        "auto_withdraw": 1"
    }'
```

</template>

</CodeBox>

<Response jfile="v1/user/settings/update" >

<template #result>

- `daily_report` <span>Time</span>, Send daily report of account activities at the specified time in user local timezone. Check out [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
- `auto_renewal` <span>Boolean</span>, The auto renewal of user subscription and services.
- `auto_withdraw` <span>Integer</span>, The auto withdraw of user.  Check out [Auto Withdraw Table](#auto-withdraw-table)

</template>

</Response>


<CodeBox lang="Restful" method="GET" endpoint="/v1/account/settings/notifications">

# Notifications
Using our Notifications Method, users are now able to easily get their notification information.

<!--@include: /partials/authorization.md-->

<template #params>

- `profit_email` <span>Boolean</span>, The profit email of user.
- `profit_push` <span>Boolean</span>, The profit push of user.
- `withdraw_email` <span>Boolean</span>, The withdraw email of user.
- `withdraw_push` <span>Boolean</span>, The withdraw push of user.
- `deposit_email` <span>Boolean</span>, The deposit email of user.
- `deposit_push` <span>Boolean</span>, The deposit push of user.
- `wallet_email` <span>Boolean</span>, The wallet email of user.
- `wallet_push` <span>Boolean</span>, The wallet push of user.
- `support_email` <span>Boolean</span>, The support email of user.
- `support_push` <span>Boolean</span>, The support push of user.
- `transaction_email` <span>Boolean</span>, The transaction email of user.
- `transaction_push` <span>Boolean</span>, The transaction push of user.
- `marketing_email` <span>Boolean</span>, The marketing email of user.

</template>

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/account/settings/notifications
```

</template>

</CodeBox>

<Response jfile="v1/user/settings/notification" >

<template #result>

- `profit_email` <span>Boolean</span>, The profit email of user.
- `profit_push` <span>Boolean</span>, The profit push of user.
- `withdraw_email` <span>Boolean</span>, The withdraw email of user.
- `withdraw_push` <span>Boolean</span>, The withdraw push of user.
- `deposit_email` <span>Boolean</span>, The deposit email of user.
- `deposit_push` <span>Boolean</span>, The deposit push of user.
- `wallet_email` <span>Boolean</span>, The wallet email of user.
- `wallet_push` <span>Boolean</span>, The wallet push of user.
- `support_email` <span>Boolean</span>, The support email of user.
- `support_push` <span>Boolean</span>, The support push of user.
- `transaction_email` <span>Boolean</span>, The transaction email of user.
- `transaction_push` <span>Boolean</span>, The transaction push of user.
- `marketing_email` <span>Boolean</span>, The marketing email of user.

</template>

</Response>

<CodeBox lang="Restful" method="PUT" endpoint="/v1/account/settings/notification">

# Update Notifications

Using our Notifications Method, users are now able to easily update their notification information.

<!--@include: /partials/authorization.md-->

<template #params>

- `profit_email` <span>Boolean</span>, The profit email of user.
- `profit_push` <span>Boolean</span>, The profit push of user.
- `withdraw_email` <span>Boolean</span>, The withdraw email of user.
- `withdraw_push` <span>Boolean</span>, The withdraw push of user.
- `deposit_email` <span>Boolean</span>, The deposit email of user.
- `deposit_push` <span>Boolean</span>, The deposit push of user.
- `wallet_email` <span>Boolean</span>, The wallet email of user.
- `wallet_push` <span>Boolean</span>, The wallet push of user.
- `support_email` <span>Boolean</span>, The support email of user.
- `support_push` <span>Boolean</span>, The support push of user.
- `transaction_email` <span>Boolean</span>, The transaction email of user.
- `transaction_push` <span>Boolean</span>, The transaction push of user.
- `marketing_email` <span>Boolean</span>, The marketing email of user.

</template>

<template #code>

```bash
$ curl --request PUT \
  https://api.trader4.net/v1/account/settings/notification \
    -d '{
        "profit_email": true,
        "profit_push": true,
        "withdraw_email": true,
        "withdraw_push": true,
        "deposit_email": true,
        "deposit_push": true,
        "wallet_email": true,
        "wallet_push": true,
        "support_email": true,
        "support_push": true,
        "transaction_email": true,
        "transaction_push": true,
        "marketing_email": true,
    }'
```

</template>

</CodeBox>

<Response jfile="v1/user/settings/notification" >

<template #result>

- `profit_email` <span>Boolean</span>, The profit email of user.
- `profit_push` <span>Boolean</span>, The profit push of user.
- `withdraw_email` <span>Boolean</span>, The withdraw email of user.
- `withdraw_push` <span>Boolean</span>, The withdraw push of user.
- `deposit_email` <span>Boolean</span>, The deposit email of user.
- `deposit_push` <span>Boolean</span>, The deposit push of user.
- `wallet_email` <span>Boolean</span>, The wallet email of user.
- `wallet_push` <span>Boolean</span>, The wallet push of user.
- `support_email` <span>Boolean</span>, The support email of user.
- `support_push` <span>Boolean</span>, The support push of user.
- `transaction_email` <span>Boolean</span>, The transaction email of user.
- `transaction_push` <span>Boolean</span>, The transaction push of user.
- `marketing_email` <span>Boolean</span>, The marketing email of user.

</template>

</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/account/security">

# Security

Return User security info

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
 https://api.trader4.net/v1/account/security
```

</template>

</CodeBox>

<Response jfile="v1/user/user-security" >

<template #result>

- `anti_phishing` <span>Boolean</span>, The anti phishing token of user.
- `google2fa_secret` <span>Boolean</span>, The google 2FA token of user.
- `email_2step` <span>Boolean</span>, The email to use for 2FA of user.
- `app_2step` <span>Boolean</span>, The app to use for 2FA of user.
- `mobile_2step` <span>Boolean</span>, The mobile number to use for 2FA of user.
- `same_wallet` <span>Boolean</span>, The same wallet of user.
- `fund_password` <span>Boolean</span>, The fund password of user.
- `registered_wallets` <span>Boolean</span>, The registered wallets of user.
- `delay` <span>Integer</span>, Minutes that operation process should delay before start running in background. By default it's set to 15 minutes.

</template>

</Response>

<CodeBox lang="Restful" method="PUT" endpoint="/v1/account/security">

# Update Security

Update user security info

<template #params>

- `anti_phishing` <span>Boolean</span>, The anti phishing token of user.
- `google2fa_secret` <span>Boolean</span>, The google 2FA of user.
- `email_2step` <span>Array of Strings</span>, The email to use for 2FA of user.
- `app_2step` <span>Array of Strings</span>, The app mac addresses to use for 2FA of user.
- `mobile_2step` <span>Array of Strings</span>, The mobile number to use for 2FA of user.
- `same_wallet` <span>Boolean</span>, The same wallet of user.
- `fund_password` <span>Boolean</span>, The fund password of user.
- `registered_wallets` <span>Boolean</span>, The registered wallets of user.
- `delay` <span>Integer</span>, Minutes that operation process should delay before start running in background. By default it's set to 15 minutes.

</template>

<template #code>

```bash
$ curl --request PUT \
 https://api.trader4.net/v1/account/security
  -d '{
        "anti_phishing": true,
        "google2fa_secret": true,
        "email_2step": ["hi@trader4.net"],
        "app_2step": ["XX:XX:XX:XX:XX:XX"],
        "mobile_2step": ["+447888872720", "+4478888727250],
        "same_wallet": true,
        "fund_password": true,
        "registered_wallets": true,
        "delay": 1,
    }'
```

</template>

</CodeBox>

<Response jfile="v1/user/user-security" >

<template #result>

- `anti_phishing` <span>Boolean</span>, The anti phishing token of user.
- `google2fa_secret` <span>Boolean</span>, The google 2FA token of user.
- `email_2step` <span>Boolean</span>, The email to use for 2FA of user.
- `app_2step` <span>Boolean</span>, The app to use for 2FA of user.
- `mobile_2step` <span>Boolean</span>, The mobile number to use for 2FA of user.
- `same_wallet` <span>Boolean</span>, The same wallet of user.
- `fund_password` <span>Boolean</span>, The fund password of user.
- `registered_wallets` <span>Boolean</span>, The registered wallets of user.
- `delay` <span>Integer</span>, Minutes that operation process should delay before start running in background. By default it's set to 15 minutes.

</template>

</Response>

