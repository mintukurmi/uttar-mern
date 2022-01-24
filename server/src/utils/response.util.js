class Response {
    constructor(code, status, data, msg) {
        this.code = code;
        this.status = status;
        this.data = data;
        this.msg = msg;
    }
}

module.exports = {
    // 200 success
    success: (res, data, msg) => {
        const response = new Response(200, "success", data, "Request Successful");
        if (msg) {
            response.msg = msg;
        }
        res.status(200).json(response);
    },
    // 500 server error
    error: (res, data, msg) => {
        const response = new Response(500, "error", data, "Some error occured");
        if (msg) {
            response.msg = msg;
        }
        res.status(500).json(response);
    },

    // 400 bad request / Malformed request
    badrequest: (res, data, msg) => {
        const response = new Response(400, "badrequest", data, "Bad request");
        if (msg) {
            response.msg = msg;
        }
        res.status(400).json(response);
    },

    // 403 forbidded request
    forbidden: (res, data, msg) => {
        const response = new Response(403, "forbidden", data, "Forbidden");
        if (msg) {
            response.msg = msg;
        }
        res.status(403).json(response);
    },

    notfound: (res, data, msg) => {
        const response = new Response(404, "error", data, "Not found");
        if (msg) {
            response.msg = msg;
        }
        res.status(404).json(response);
    },
};
