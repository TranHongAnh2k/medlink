import request from "./api";

const authApi = {
    login(data) {
        const url = `/auth/signin`;
        return request.post(url, data);
    },

}

export default authApi