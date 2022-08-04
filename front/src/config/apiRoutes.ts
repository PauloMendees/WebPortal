export const apiRoutes = {
    register: {
        start: "/user/startRegister",
        codeVerify: "/user/codeVerify",
        finalize: "/user/register"
    },
    login: "/user/login",
    dolar: {
        getMax: '/dolar/getmax',
        getMin: '/dolar/getmin',
        getMedia: '/dolar/getmedia',
        getAll: '/dolar/getall'
    },
    most: {
        auth: '/user/authenticate',
        contentExtraction: '/process-image/content-extraction',
        liveness: '/liveness/detect',
        faceCompare: '/process-image/biometrics/face-compare'
    },
    clients: {
        register: '/client/post',
        list: '/client/getall'
    }
}