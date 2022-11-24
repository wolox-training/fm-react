import api from "../config/api"

import { FormSignup } from "../utils/types";

export const registerService = (data : FormSignup) => {
    return api.post("users", data);
}

/*
1-Conseguir la URL correspondiente bajando postman y mirando el link de la card de trello
2-Instalar react query como dependencia,  con -S para que sea dependencia   nota: con -D como devDependencies
3-Usar useMutation en el componente (ver como usarlo) porque es para los POST  nota: useQuery es para los GET
*/