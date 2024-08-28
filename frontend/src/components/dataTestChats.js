const chats = [
    {
        "_id": "1",
        "members": [
            {"_id": "m1", "username": "user1", "thumbnail": "https://picsum.photos/200?random=1"},
            {"_id": "m2", "username": "user2", "thumbnail": "https://picsum.photos/200?random=2"}
        ],
        "createdAt": "2024-08-27T12:00:00Z",
        "importants": ["imp1", "imp2", "imp3"],
        "description": "Descripción del grupo o chat privado.",
        "name": "",
        "type": "private",
        "lastMessage": [
            {
                "_id": "msg1",
                "idChat": "1",
                "sender": {
                    "_id": "m1",
                    "username": "user1",
                    "thumbnail": "https://picsum.photos/200?random=1"
                },
                "text": "HOLa! Este es el contenido del mensaje es recontra largooooooooooooooooooo o oo o o o o o oo.",
                "mediaUrl": "https://picsum.photos/800?random=1",
                "important": false,
                "createdAt": "2024-08-27T12:00:00Z"
            }
        ]
    },
    {
        "_id": "2",
        "members": [
            {"_id": "m3", "username": "user3", "thumbnail": "https://picsum.photos/200?random=3"},
            {"_id": "m4", "username": "user4", "thumbnail": "https://picsum.photos/200?random=4"}
        ],
        "createdAt": "2024-08-26T08:00:00Z",
        "importants": ["imp4", "imp5"],
        "description": "Otro chat privado con descripción.",
        "name": "",
        "type": "private",
        "lastMessage": [
            {
                "_id": "msg2",
                "idChat": "2",
                "sender": {
                    "_id": "m3",
                    "username": "user3",
                    "thumbnail": "https://picsum.photos/200?random=3"
                },
                "text": "HOLa! Este es el contenido del mensaje.",
                "mediaUrl": "https://picsum.photos/800?random=2",
                "important": true,
                "createdAt": "2024-08-26T08:05:00Z"
            }
        ]
    },
    {
        "_id": "3",
        "members": [
            {"_id": "m5", "username": "user5", "thumbnail": "https://picsum.photos/200?random=5"},
            {"_id": "m6", "username": "user6", "thumbnail": "https://picsum.photos/200?random=6"},
            {"_id": "m7", "username": "user7", "thumbnail": "https://picsum.photos/200?random=7"}
        ],
        "createdAt": "2024-08-25T15:00:00Z",
        "importants": ["imp6", "imp7", "imp8"],
        "description": "Grupo de discusión general.",
        "name": "Grupo de Discusión 1",
        "type": "group",
        "imgUrl": "https://picsum.photos/800?random=1",
        "lastMessage": [
            {
                "_id": "msg5",
                "idChat": "3",
                "sender": {
                    "_id": "m5",
                    "username": "user5",
                    "thumbnail": "https://picsum.photos/200?random=5"
                },
                "text": "HOLa! Este es el contenido del mensaje es recontra largooooooooooooooooooo o oo o o o o o oo.",
                "mediaUrl": "https://picsum.photos/800?random=5",
                "important": true,
                "createdAt": "2024-08-25T15:20:00Z"
            }
        ]
    },
    {
        "_id": "4",
        "members": [
            {"_id": "m8", "username": "user8", "thumbnail": "https://picsum.photos/200?random=8"},
            {"_id": "m9", "username": "user9", "thumbnail": "https://picsum.photos/200?random=9"},
            {"_id": "m10", "username": "user10", "thumbnail": "https://picsum.photos/200?random=10"},
            {"_id": "m11", "username": "user11", "thumbnail": "https://picsum.photos/200?random=11"}
        ],
        "createdAt": "2024-08-24T10:00:00Z",
        "importants": ["imp9", "imp10"],
        "description": "Un grupo de trabajo colaborativo.",
        "name": "Grupo de Trabajo 2",
        "type": "group",
        "imgUrl": "https://picsum.photos/800?random=2",
        "lastMessage": [
            {
                "_id": "msg8",
                "idChat": "4",
                "sender": {
                    "_id": "m8",
                    "username": "user8",
                    "thumbnail": "https://picsum.photos/200?random=8"
                },
                "text": "HOLa! Este es el contenido del mensaje es recontra largooooooooooooooooooo o oo o o o o o oo.",
                "mediaUrl": "https://picsum.photos/800?random=8",
                "important": true,
                "createdAt": "2024-08-24T10:35:00Z"
            }
        ]
    },
    {
        "_id": "5",
        "members": [
            {"_id": "m12", "username": "user12", "thumbnail": "https://picsum.photos/200?random=12"},
            {"_id": "m13", "username": "user13", "thumbnail": "https://picsum.photos/200?random=13"},
            {"_id": "m14", "username": "user14", "thumbnail": "https://picsum.photos/200?random=14"}
        ],
        "createdAt": "2024-08-23T09:00:00Z",
        "importants": ["imp11"],
        "description": "Grupo de estudio.",
        "name": "Grupo de Estudio 3",
        "type": "group",
        "imgUrl": "https://picsum.photos/800?random=3",
        "lastMessage": [
            {
                "_id": "msg11",
                "idChat": "5",
                "sender": {
                    "_id": "m11",
                    "username": "user11",
                    "thumbnail": "https://picsum.photos/200?random=11"
                },
                "text": "HOLa! Este es el contenido del mensaje.",
                "mediaUrl": "https://picsum.photos/800?random=11",
                "important": false,
                "createdAt": "2024-08-23T09:50:00Z"
            }
        ]
    },
    {
        "_id": "6",
        "members": [
            {"_id": "m15", "username": "user15", "thumbnail": "https://picsum.photos/200?random=15"},
            {"_id": "m16", "username": "user16", "thumbnail": "https://picsum.photos/200?random=16"},
            {"_id": "m17", "username": "user17", "thumbnail": "https://picsum.photos/200?random=17"},
            {"_id": "m18", "username": "user18", "thumbnail": "https://picsum.photos/200?random=18"}
        ],
        "createdAt": "2024-08-22T14:00:00Z",
        "importants": ["imp12", "imp13"],
        "description": "Grupo de interés común.",
        "name": "Grupo de Interés 4",
        "type": "group",
        "imgUrl": "https://picsum.photos/800?random=4",
        "lastMessage": [
            {
                "_id": "msg13",
                "idChat": "6",
                "sender": {
                    "_id": "m13",
                    "username": "user13",
                    "thumbnail": "https://picsum.photos/200?random=13"
                },
                "text": "HOLa! Este es el contenido del mensaje.",
                "mediaUrl": "https://picsum.photos/800?random=13",
                "important": false,
                "createdAt": "2024-08-22T14:00:00Z"
            }
        ]
    },
    {
        "_id": "7",
        "members": [
            {"_id": "m19", "username": "user19", "thumbnail": "https://picsum.photos/200?random=19"},
            {"_id": "m20", "username": "user20", "thumbnail": "https://picsum.photos/200?random=20"}
        ],
        "createdAt": "2024-08-21T18:00:00Z",
        "importants": ["imp14"],
        "description": "Chat privado sobre un tema específico.",
        "name": "",
        "type": "private",
        "lastMessage": [
            {
                "_id": "msg16",
                "idChat": "7",
                "sender": {
                    "_id": "m19",
                    "username": "user19",
                    "thumbnail": "https://picsum.photos/200?random=19"
                },
                "text": "HOLa! Este es el contenido del mensaje.",
                "mediaUrl": "https://picsum.photos/800?random=19",
                "important": false,
                "createdAt": "2024-08-21T18:15:00Z"
            }
        ]
    },
    {
        "_id": "8",
        "members": [
            {"_id": "m21", "username": "user21", "thumbnail": "https://picsum.photos/200?random=21"},
            {"_id": "m22", "username": "user22", "thumbnail": "https://picsum.photos/200?random=22"},
            {"_id": "m23", "username": "user23", "thumbnail": "https://picsum.photos/200?random=23"},
            {"_id": "m24", "username": "user24", "thumbnail": "https://picsum.photos/200?random=24"}
        ],
        "createdAt": "2024-08-20T11:00:00Z",
        "importants": ["imp15", "imp16"],
        "description": "Grupo para eventos.",
        "name": "Grupo de Eventos 5",
        "type": "group",
        "imgUrl": "https://picsum.photos/800?random=5",
        "lastMessage": [
            {
                "_id": "msg18",
                "idChat": "8",
                "sender": {
                    "_id": "m21",
                    "username": "user21",
                    "thumbnail": "https://picsum.photos/200?random=21"
                },
                "text": "HOLa! Este es el contenido del mensaje.",
                "mediaUrl": "https://picsum.photos/800?random=21",
                "important": false,
                "createdAt": "2024-08-20T11:25:00Z"
            }
        ]
    },
    {
        "_id": "8",
        "members": [
            {"_id": "m21", "username": "user21", "thumbnail": "https://picsum.photos/200?random=21"},
            {"_id": "m22", "username": "user22", "thumbnail": "https://picsum.photos/200?random=22"},
            {"_id": "m23", "username": "user23", "thumbnail": "https://picsum.photos/200?random=23"},
            {"_id": "m24", "username": "user24", "thumbnail": "https://picsum.photos/200?random=24"}
        ],
        "createdAt": "2024-08-20T11:00:00Z",
        "importants": ["imp15", "imp16"],
        "description": "Grupo para eventos.",
        "name": "Grupo de Eventos 5",
        "type": "group",
        "imgUrl": "https://picsum.photos/800?random=5",
        "lastMessage": [
            {
                "_id": "msg18",
                "idChat": "8",
                "sender": {
                    "_id": "m21",
                    "username": "user21",
                    "thumbnail": "https://picsum.photos/200?random=21"
                },
                "text": "HOLa! Este es el contenido del mensaje.",
                "mediaUrl": "https://picsum.photos/800?random=21",
                "important": false,
                "createdAt": "2024-08-20T11:25:00Z"
            }
        ]
    },
    {
        "_id": "8",
        "members": [
            {"_id": "m21", "username": "user21", "thumbnail": "https://picsum.photos/200?random=21"},
            {"_id": "m22", "username": "user22", "thumbnail": "https://picsum.photos/200?random=22"},
            {"_id": "m23", "username": "user23", "thumbnail": "https://picsum.photos/200?random=23"},
            {"_id": "m24", "username": "user24", "thumbnail": "https://picsum.photos/200?random=24"}
        ],
        "createdAt": "2024-08-20T11:00:00Z",
        "importants": ["imp15", "imp16"],
        "description": "Grupo para eventos.",
        "name": "Grupo de Eventos 5",
        "type": "group",
        "imgUrl": "https://picsum.photos/800?random=5",
        "lastMessage": [
            {
                "_id": "msg18",
                "idChat": "8",
                "sender": {
                    "_id": "m21",
                    "username": "user21",
                    "thumbnail": "https://picsum.photos/200?random=21"
                },
                "text": "HOLa! Este es el contenido del mensaje.",
                "mediaUrl": "https://picsum.photos/800?random=21",
                "important": false,
                "createdAt": "2024-08-20T11:25:00Z"
            }
        ]
    },
    {
        "_id": "8",
        "members": [
            {"_id": "m21", "username": "user21", "thumbnail": "https://picsum.photos/200?random=21"},
            {"_id": "m22", "username": "user22", "thumbnail": "https://picsum.photos/200?random=22"},
            {"_id": "m23", "username": "user23", "thumbnail": "https://picsum.photos/200?random=23"},
            {"_id": "m24", "username": "user24", "thumbnail": "https://picsum.photos/200?random=24"}
        ],
        "createdAt": "2024-08-20T11:00:00Z",
        "importants": ["imp15", "imp16"],
        "description": "Grupo para eventos.",
        "name": "Grupo de Eventos 5",
        "type": "group",
        "imgUrl": "https://picsum.photos/800?random=5",
        "lastMessage": [
            {
                "_id": "msg18",
                "idChat": "8",
                "sender": {
                    "_id": "m21",
                    "username": "user21",
                    "thumbnail": "https://picsum.photos/200?random=21"
                },
                "text": "HOLa! Este es el contenido del mensaje.",
                "mediaUrl": "https://picsum.photos/800?random=21",
                "important": false,
                "createdAt": "2024-08-20T11:25:00Z"
            }
        ]
    },
    {
        "_id": "8",
        "members": [
            {"_id": "m21", "username": "user21", "thumbnail": "https://picsum.photos/200?random=21"},
            {"_id": "m22", "username": "user22", "thumbnail": "https://picsum.photos/200?random=22"},
            {"_id": "m23", "username": "user23", "thumbnail": "https://picsum.photos/200?random=23"},
            {"_id": "m24", "username": "user24", "thumbnail": "https://picsum.photos/200?random=24"}
        ],
        "createdAt": "2024-08-20T11:00:00Z",
        "importants": ["imp15", "imp16"],
        "description": "Grupo para eventos.",
        "name": "Grupo de Eventos 5",
        "type": "group",
        "imgUrl": "https://picsum.photos/800?random=5",
        "lastMessage": [
            {
                "_id": "msg18",
                "idChat": "8",
                "sender": {
                    "_id": "m21",
                    "username": "user21",
                    "thumbnail": "https://picsum.photos/200?random=21"
                },
                "text": "HOLa! Este es el contenido del mensaje.",
                "mediaUrl": "https://picsum.photos/800?random=21",
                "important": false,
                "createdAt": "2024-08-20T11:25:00Z"
            }
        ]
    },
    {
        "_id": "8",
        "members": [
            {"_id": "m21", "username": "user21", "thumbnail": "https://picsum.photos/200?random=21"},
            {"_id": "m22", "username": "user22", "thumbnail": "https://picsum.photos/200?random=22"},
            {"_id": "m23", "username": "user23", "thumbnail": "https://picsum.photos/200?random=23"},
            {"_id": "m24", "username": "user24", "thumbnail": "https://picsum.photos/200?random=24"}
        ],
        "createdAt": "2024-08-20T11:00:00Z",
        "importants": ["imp15", "imp16"],
        "description": "Grupo para eventos.",
        "name": "Grupo de Eventos 5",
        "type": "group",
        "imgUrl": "https://picsum.photos/800?random=5",
        "lastMessage": [
            {
                "_id": "msg18",
                "idChat": "8",
                "sender": {
                    "_id": "m21",
                    "username": "user21",
                    "thumbnail": "https://picsum.photos/200?random=21"
                },
                "text": "HOLa! Este es el contenido del mensaje.",
                "mediaUrl": "https://picsum.photos/800?random=21",
                "important": false,
                "createdAt": "2024-08-20T11:25:00Z"
            }
        ]
    },
    {
        "_id": "8",
        "members": [
            {"_id": "m21", "username": "user21", "thumbnail": "https://picsum.photos/200?random=21"},
            {"_id": "m22", "username": "user22", "thumbnail": "https://picsum.photos/200?random=22"},
            {"_id": "m23", "username": "user23", "thumbnail": "https://picsum.photos/200?random=23"},
            {"_id": "m24", "username": "user24", "thumbnail": "https://picsum.photos/200?random=24"}
        ],
        "createdAt": "2024-08-20T11:00:00Z",
        "importants": ["imp15", "imp16"],
        "description": "Grupo para eventos.",
        "name": "Grupo de Eventos 5",
        "type": "group",
        "imgUrl": "https://picsum.photos/800?random=5",
        "lastMessage": [
            {
                "_id": "msg18",
                "idChat": "8",
                "sender": {
                    "_id": "m21",
                    "username": "user21",
                    "thumbnail": "https://picsum.photos/200?random=21"
                },
                "text": "HOLa! Este es el contenido del mensaje.",
                "mediaUrl": "https://picsum.photos/800?random=21",
                "important": false,
                "createdAt": "2024-08-20T11:25:00Z"
            }
        ]
    },
    {
        "_id": "8",
        "members": [
            {"_id": "m21", "username": "user21", "thumbnail": "https://picsum.photos/200?random=21"},
            {"_id": "m22", "username": "user22", "thumbnail": "https://picsum.photos/200?random=22"},
            {"_id": "m23", "username": "user23", "thumbnail": "https://picsum.photos/200?random=23"},
            {"_id": "m24", "username": "user24", "thumbnail": "https://picsum.photos/200?random=24"}
        ],
        "createdAt": "2024-08-20T11:00:00Z",
        "importants": ["imp15", "imp16"],
        "description": "Grupo para eventos.",
        "name": "Grupo de Eventos 5",
        "type": "group",
        "imgUrl": "https://picsum.photos/800?random=5",
        "lastMessage": [
            {
                "_id": "msg18",
                "idChat": "8",
                "sender": {
                    "_id": "m21",
                    "username": "user21",
                    "thumbnail": "https://picsum.photos/200?random=21"
                },
                "text": "HOLa! Este es el contenido del mensaje.",
                "mediaUrl": "https://picsum.photos/800?random=21",
                "important": false,
                "createdAt": "2024-08-20T11:25:00Z"
            }
        ]
    },
    {
        "_id": "8",
        "members": [
            {"_id": "m21", "username": "user21", "thumbnail": "https://picsum.photos/200?random=21"},
            {"_id": "m22", "username": "user22", "thumbnail": "https://picsum.photos/200?random=22"},
            {"_id": "m23", "username": "user23", "thumbnail": "https://picsum.photos/200?random=23"},
            {"_id": "m24", "username": "user24", "thumbnail": "https://picsum.photos/200?random=24"}
        ],
        "createdAt": "2024-08-20T11:00:00Z",
        "importants": ["imp15", "imp16"],
        "description": "Grupo para eventos.",
        "name": "Grupo de Eventos 5",
        "type": "group",
        "imgUrl": "https://picsum.photos/800?random=5",
        "lastMessage": [
            {
                "_id": "msg18",
                "idChat": "8",
                "sender": {
                    "_id": "m21",
                    "username": "user21",
                    "thumbnail": "https://picsum.photos/200?random=21"
                },
                "text": "HOLa! Este es el contenido del mensaje.",
                "mediaUrl": "https://picsum.photos/800?random=21",
                "important": false,
                "createdAt": "2024-08-20T11:25:00Z"
            }
        ]
    },
    {
        "_id": "8",
        "members": [
            {"_id": "m21", "username": "user21", "thumbnail": "https://picsum.photos/200?random=21"},
            {"_id": "m22", "username": "user22", "thumbnail": "https://picsum.photos/200?random=22"},
            {"_id": "m23", "username": "user23", "thumbnail": "https://picsum.photos/200?random=23"},
            {"_id": "m24", "username": "user24", "thumbnail": "https://picsum.photos/200?random=24"}
        ],
        "createdAt": "2024-08-20T11:00:00Z",
        "importants": ["imp15", "imp16"],
        "description": "Grupo para eventos.",
        "name": "Grupo de Eventos 5",
        "type": "group",
        "imgUrl": "https://picsum.photos/800?random=5",
        "lastMessage": [
            {
                "_id": "msg18",
                "idChat": "8",
                "sender": {
                    "_id": "m21",
                    "username": "user21",
                    "thumbnail": "https://picsum.photos/200?random=21"
                },
                "text": "HOLa! Este es el contenido del mensaje.",
                "mediaUrl": "https://picsum.photos/800?random=21",
                "important": false,
                "createdAt": "2024-08-20T11:25:00Z"
            }
        ]
    },
    {
        "_id": "8",
        "members": [
            {"_id": "m21", "username": "user21", "thumbnail": "https://picsum.photos/200?random=21"},
            {"_id": "m22", "username": "user22", "thumbnail": "https://picsum.photos/200?random=22"},
            {"_id": "m23", "username": "user23", "thumbnail": "https://picsum.photos/200?random=23"},
            {"_id": "m24", "username": "user24", "thumbnail": "https://picsum.photos/200?random=24"}
        ],
        "createdAt": "2024-08-20T11:00:00Z",
        "importants": ["imp15", "imp16"],
        "description": "Grupo para eventos.",
        "name": "Grupo de Eventos 5",
        "type": "group",
        "imgUrl": "https://picsum.photos/800?random=5",
        "lastMessage": [
            {
                "_id": "msg18",
                "idChat": "8",
                "sender": {
                    "_id": "m21",
                    "username": "user21",
                    "thumbnail": "https://picsum.photos/200?random=21"
                },
                "text": "HOLa! Este es el contenido del mensaje.",
                "mediaUrl": "https://picsum.photos/800?random=21",
                "important": false,
                "createdAt": "2024-08-20T11:25:00Z"
            }
        ]
    },
    {
        "_id": "8",
        "members": [
            {"_id": "m21", "username": "user21", "thumbnail": "https://picsum.photos/200?random=21"},
            {"_id": "m22", "username": "user22", "thumbnail": "https://picsum.photos/200?random=22"},
            {"_id": "m23", "username": "user23", "thumbnail": "https://picsum.photos/200?random=23"},
            {"_id": "m24", "username": "user24", "thumbnail": "https://picsum.photos/200?random=24"}
        ],
        "createdAt": "2024-08-20T11:00:00Z",
        "importants": ["imp15", "imp16"],
        "description": "Grupo para eventos.",
        "name": "Grupo de Eventos 5",
        "type": "group",
        "imgUrl": "https://picsum.photos/800?random=5",
        "lastMessage": [
            {
                "_id": "msg18",
                "idChat": "8",
                "sender": {
                    "_id": "m21",
                    "username": "user21",
                    "thumbnail": "https://picsum.photos/200?random=21"
                },
                "text": "HOLa! Este es el contenido del mensaje.",
                "mediaUrl": "https://picsum.photos/800?random=21",
                "important": false,
                "createdAt": "2024-08-20T11:25:00Z"
            }
        ]
    },
    {
        "_id": "8",
        "members": [
            {"_id": "m21", "username": "user21", "thumbnail": "https://picsum.photos/200?random=21"},
            {"_id": "m22", "username": "user22", "thumbnail": "https://picsum.photos/200?random=22"},
            {"_id": "m23", "username": "user23", "thumbnail": "https://picsum.photos/200?random=23"},
            {"_id": "m24", "username": "user24", "thumbnail": "https://picsum.photos/200?random=24"}
        ],
        "createdAt": "2024-08-20T11:00:00Z",
        "importants": ["imp15", "imp16"],
        "description": "Grupo para eventos.",
        "name": "Grupo de Eventos 5",
        "type": "group",
        "imgUrl": "https://picsum.photos/800?random=5",
        "lastMessage": [
            {
                "_id": "msg18",
                "idChat": "8",
                "sender": {
                    "_id": "m21",
                    "username": "user21",
                    "thumbnail": "https://picsum.photos/200?random=21"
                },
                "text": "HOLa! Este es el contenido del mensaje.",
                "mediaUrl": "https://picsum.photos/800?random=21",
                "important": false,
                "createdAt": "2024-08-20T11:25:00Z"
            }
        ]
    }
]


export default chats;