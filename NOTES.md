# HealthBook Agents

## BCSC Information

URL: localhost:6000/bcsc/issue-credential
Payload:
```
[
    {
        "schema": "BCSC Information",
        "version": "1.0.7",
        "attributes": {
            "user_id": "this-is-a-user-id",
            "hpdid": "this-is-a-hpid",
            "first_name": "this-is-a-first-name",
            "last_name": "this-is-a-last-name"
        }
    }
]
```

## CPBC Information

URL: localhost:6000/cpbc/issue-credential
Payload:
```
[
    {
        "schema": "Registered Pharmacist",
        "version": "1.0.1",
        "attributes": {
            "licence_num": "this-is-a-licence-num",
            "licence_class": "this-is-a-hpid",
            "legal_name": "this-is-a-first-name"
        }
    }
]
```

## GPID Information

URL: localhost:6000/gpid/issue-credential
Payload:
```
[
    {
        "schema": "General Practitioner ID",
        "version": "1.0.1",
        "attributes": {
            "gpid": "this-is-a-gpid"
        }
    }
]
```