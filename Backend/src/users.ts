export type USER_TYPE = {
    id: number,
    name: string
}

export type USERS_TYPE = {
    users: USER_TYPE[]
}

export const USERS = {
    "users": [
        {
            "id": 1,
            "name": "John"
        },
        {
            "id": 2,
            "name": "Jane"
        },
        {
            "id": 3,
            "name": "Bob"
        }
    ]
}

