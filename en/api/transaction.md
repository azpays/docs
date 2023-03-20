---
aside: false
---

<!--@include: /partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/transactions">

# Transactions

Using our transactions Method, users are now able to easily retrieve their transactions information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/transactions
```

</template>

</CodeBox>

<Response jfile="response/azpays/transaction/list" >
<template #result>

- `id` <span>String</span> The ID of transactions.
- `type` <span>Integer</span> Type. Check out [Type Codes Table](#type-codes).
- `amount` <span>Float</span> Amount of transaction.
- `payee_description` <span>String</span> Payee description for the transaction.
- `payer_description` <span>String</span> Payer description for the transaction.
- `authority` <span>String</span> Authority.
- `trace_number` <span>String</span> Trace number.
- `currency` <span>String</span> The currency selected. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `verified_at` <span>Datetime</span> Verified at. Check out [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html).
- `status` <span>Integer</span> Status. Check out [Status Codes Table](#status-codes).
- `payer` <span>String</span> Payer name.
- `payee` <span>String</span> Payee name.
- `transactional` <span>JSON Object</span> Transactional object (Bulut, Bazaar, Subscription and etc.).
- `gateway` <span>JSON Object</span> Gateway. Check out [Gateway Info](https://docs.trader4.net/en/api/gateway/#gateway-details).
- `network` <span>JSON Object</span> Network. Check out [Network Info](https://docs.trader4.net/en/api/network/#network-details).

</template>
</Response>


<CodeBox lang="Restful" method="GET" endpoint="/v1/transactions/{id}">

# Transaction Detail

Using our transaction details method, users are now able to easily retrieve their transactions information.

<!--@include: /partials/authorization.md-->

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/transactions/{id}
```

</template>

</CodeBox>

<Response jfile="response/azpays/transaction/read" >
<template #result>

- `id` <span>String</span> The ID of transactions.
- `type` <span>Integer</span> Type. Check out [Type Codes Table](#type-codes).
- `amount` <span>Float</span> Amount of transaction.
- `payee_description` <span>String</span> Payee description for the transaction.
- `payer_description` <span>String</span> Payer description for the transaction.
- `authority` <span>String</span> Authority.
- `trace_number` <span>String</span> Trace number.
- `currency` <span>String</span> The currency selected. Check out [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).
- `verified_at` <span>Datetime</span> Verified at. Check out [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html).
- `status` <span>Integer</span> Status. Check out [Status Codes Table](#status-codes).
- `payer` <span>String</span> Payer name.
- `payee` <span>String</span> Payee name.
- `transactional` <span>JSON Object</span> Transactional object (Bulut, Bazaar, Subscription and etc.).
- `gateway` <span>JSON Object</span> Gateway. Check out [Gateway Info](https://docs.trader4.net/en/api/gateway/#gateway-details).
- `network` <span>JSON Object</span> Network. Check out [Network Info](https://docs.trader4.net/en/api/network/#network-details).


</template>

</Response>


### Type Codes
| CODE               | CONSTANT                       | DESCRIPTION                                     |
|--------------------|--------------------------------|-------------------------------------------------|
| <code>12400</code> | <pre>DEPOSIT</pre>             | The transaction type is general.                |
| <code>12401</code> | <pre>WITHDRAWAL</pre>          | The transaction type is deposit.                |
| <code>12402</code> | <pre>TRANSFER</pre>            | The transaction type is withdraw.               |
| <code>12403</code> | <pre>CREDIT</pre>              | The transaction type is transfer.               |


### Status Codes
| CODE               | CONSTANT            | DESCRIPTION                                      |
|--------------------|---------------------|--------------------------------------------------|
| <code>12300</code> | <pre>DEFAULT</pre>  | Default transaction status.                      |
