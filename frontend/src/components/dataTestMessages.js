const messages = [
    {
        "_id": "msg1",
        "idChat": "1",
        "sender": {
            "_id": "m1",
            "username": "user1",
            "thumbnail": "https://picsum.photos/200?random=1"
        },
        "mediaUrl": "https://picsum.photos/800?random=1",
        "important": false,
        "createdAt": "2024-08-27T12:00:00Z",
        "text": "Hola, ¿cómo estás?"
    },
    {
        "_id": "msg2",
        "idChat": "1",
        "sender": {
            "_id": "m2",
            "username": "user2",
            "thumbnail": "https://picsum.photos/200?random=2"
        },
        "mediaUrl": "https://picsum.photos/800?random=2",
        "important": true,
        "createdAt": "2024-08-27T12:05:00Z",
        "text": "Todo bien, gracias. ¿Y tú?"
    },
    {
        "_id": "msg3",
        "idChat": "2",
        "sender": {
            "_id": "m3",
            "username": "user3",
            "thumbnail": "https://picsum.photos/200?random=3"
        },
        "mediaUrl": "https://picsum.photos/800?random=3",
        "important": false,
        "createdAt": "2024-08-26T08:10:00Z",
        "text": "Vamos a revisar el proyecto hoy."
    },
    {
        "_id": "msg4",
        "idChat": "2",
        "sender": {
            "_id": "m4",
            "username": "user4",
            "thumbnail": "https://picsum.photos/200?random=4"
        },
        "mediaUrl": "https://picsum.photos/800?random=4",
        "important": false,
        "createdAt": "2024-08-26T08:15:00Z",
        "text": "Claro, ¿a qué hora?"
    },
    {
        "_id": "msg5",
        "idChat": "3",
        "sender": {
            "_id": "m5",
            "username": "user5",
            "thumbnail": "https://picsum.photos/200?random=5"
        },
        "mediaUrl": "https://picsum.photos/800?random=5",
        "important": true,
        "createdAt": "2024-08-25T15:20:00Z",
        "text": "He enviado el informe al equipo."
    },
    {
        "_id": "msg6",
        "idChat": "3",
        "sender": {
            "_id": "m6",
            "username": "user6",
            "thumbnail": "https://picsum.photos/200?random=6"
        },
        "mediaUrl": "",
        "important": false,
        "createdAt": "2024-08-25T15:25:00Z",
        "text": "Perfecto, ¿hay alguna actualización?"
    },
    {
        "_id": "msg7",
        "idChat": "3",
        "sender": {
            "_id": "m7",
            "username": "user7",
            "thumbnail": "https://picsum.photos/200?random=7"
        },
        "mediaUrl": "https://picsum.photos/800?random=7",
        "important": false,
        "createdAt": "2024-08-25T15:30:00Z",
        "text": "Sí, hemos recibido comentarios positivos."
    },
    {
        "_id": "msg8",
        "idChat": "4",
        "sender": {
            "_id": "m8",
            "username": "user8",
            "thumbnail": "https://picsum.photos/200?random=8"
        },
        "mediaUrl": "https://picsum.photos/800?random=8",
        "important": true,
        "createdAt": "2024-08-24T10:35:00Z",
        "text": "No olvides la reunión a las 3 PM."
    },
    {
        "_id": "msg9",
        "idChat": "4",
        "sender": {
            "_id": "m9",
            "username": "user9",
            "thumbnail": "https://picsum.photos/200?random=9"
        },
        "mediaUrl": "https://picsum.photos/800?random=9",
        "important": false,
        "createdAt": "2024-08-24T10:40:00Z",
        "text": "Gracias por el recordatorio. Estaré allí."
    },
    {
        "_id": "msg10",
        "idChat": "4",
        "sender": {
            "_id": "m10",
            "username": "user10",
            "thumbnail": "https://picsum.photos/200?random=10"
        },
        "mediaUrl": "https://picsum.photos/800?random=10",
        "important": false,
        "createdAt": "2024-08-24T10:45:00Z",
        "text": "¿Hay algo más que debamos preparar?"
    },
    {
        "_id": "msg11",
        "idChat": "5",
        "sender": {
            "_id": "m11",
            "username": "user11",
            "thumbnail": "https://picsum.photos/200?random=11"
        },
        "mediaUrl": "https://picsum.photos/800?random=11",
        "important": false,
        "createdAt": "2024-08-23T09:50:00Z",
        "text": "Necesito ayuda con el proyecto."
    },
    {
        "_id": "msg12",
        "idChat": "5",
        "sender": {
            "_id": "m12",
            "username": "user12",
            "thumbnail": "https://picsum.photos/200?random=12"
        },
        "mediaUrl": "https://picsum.photos/800?random=12",
        "important": true,
        "createdAt": "2024-08-23T09:55:00Z",
        "text": "Estoy disponible para ayudarte. ¿Qué necesitas?"
    },
    {
        "_id": "msg13",
        "idChat": "6",
        "sender": {
            "_id": "m13",
            "username": "user13",
            "thumbnail": "https://picsum.photos/200?random=13"
        },
        "mediaUrl": "https://picsum.photos/800?random=13",
        "important": false,
        "createdAt": "2024-08-22T14:00:00Z",
        "text": "El análisis de datos está listo."
    },
    {
        "_id": "msg14",
        "idChat": "6",
        "sender": {
            "_id": "m14",
            "username": "user14",
            "thumbnail": "https://picsum.photos/200?random=14"
        },
        "mediaUrl": "https://picsum.photos/800?random=14",
        "important": false,
        "createdAt": "2024-08-22T14:05:00Z",
        "text": "Perfecto, ¿puedes enviarlo por correo?"
    },
    {
        "_id": "msg15",
        "idChat": "6",
        "sender": {
            "_id": "m15",
            "username": "user15",
            "thumbnail": "https://picsum.photos/200?random=15"
        },
        "mediaUrl": "https://picsum.photos/800?random=15",
        "important": true,
        "createdAt": "2024-08-22T14:10:00Z",
        "text": "Sí, lo enviaré ahora mismo."
    },
    {
        "_id": "msg16",
        "idChat": "7",
        "sender": {
            "_id": "m16",
            "username": "user16",
            "thumbnail": "https://picsum.photos/200?random=16"
        },
        "mediaUrl": "https://picsum.photos/800?random=16",
        "important": false,
        "createdAt": "2024-08-21T18:15:00Z",
        "text": "Reunión programada para mañana."
    },
    {
        "_id": "msg17",
        "idChat": "7",
        "sender": {
            "_id": "m17",
            "username": "user17",
            "thumbnail": "https://picsum.photos/200?random=17"
        },
        "mediaUrl": "https://picsum.photos/800?random=17",
        "important": false,
        "createdAt": "2024-08-21T18:20:00Z",
        "text": "Agradezco la información. ¿A qué hora?"
    },
    {
        "_id": "msg18",
        "idChat": "8",
        "sender": {
            "_id": "m18",
            "username": "user18",
            "thumbnail": "https://picsum.photos/200?random=18"
        },
        "mediaUrl": "https://picsum.photos/800?random=18",
        "important": false,
        "createdAt": "2024-08-20T11:25:00Z",
        "text": "Confirmo mi asistencia al evento."
    },
    {
        "_id": "msg19",
        "idChat": "8",
        "sender": {
            "_id": "m19",
            "username": "user19",
            "thumbnail": "https://picsum.photos/200?random=19"
        },
        "mediaUrl": "https://picsum.photos/800?random=19",
        "important": true,
        "createdAt": "2024-08-20T11:30:00Z",
        "text": "¿Hay algún detalle adicional que deba saber?"
    },
    {
        "_id": "msg20",
        "idChat": "8",
        "sender": {
            "_id": "m20",
            "username": "user20",
            "thumbnail": "https://picsum.photos/200?random=20"
        },
        "mediaUrl": "https://picsum.photos/800?random=20",
        "important": false,
        "createdAt": "2024-08-20T11:35:00Z",
        "text": "Te enviaré los detalles por correo."
    }
]

export default messages;