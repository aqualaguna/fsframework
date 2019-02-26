module.exports = {
    session: {
        enabled: true,
        client: "cookie",
        key: "kdasjrio98asud89fjoiasdjiof",
        prefix : "fsframework" ,
        secretKeys: ["Secret 1","Secret 2"],
        httpOnly: true,
        maxAge: 864000000,
        overwrite: true,
        signed: false,
        rolling: false
    },
    logger: {
        level: "info",
        exposeInContext: true,
        request: false,
    },
    parser: {
        enabled: true,
        multipart: true,
    }
}