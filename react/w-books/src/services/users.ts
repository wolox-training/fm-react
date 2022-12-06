import api from "../config/api"

import { FormSignup, FormSignupResponse } from "../utils/types";

export const registerService = (data : FormSignup) => {
    return api.post<FormSignupResponse>("users", data);
}