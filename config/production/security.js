module.exports = {
    csrf: {
        enabled: false,
        key: "_csrf",
        secred: "_csrfSecret"
    },
    xss: {
        enabled: true,
        mode: "block",
    },
    cors: {
        enabled: true,
        origin: "*",
        expose: [
            "Authorized",
        ],
        maxAge: 31536000,
        credentials: true,
        methods: [
            "GET",
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
            "OPTIONS",
            "HEAD"
        ],
        headers: [
            "Content-Type",
            "Authorization",
            "X-Frame-Options",
            "Origin"
        ]
    }
}