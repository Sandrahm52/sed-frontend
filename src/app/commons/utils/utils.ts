export enum ENDPOINT_USERS {
    LIST = '/v1/usuario/lista',
    CREATE = '/v1/usuario/registro',
    DOCUMENTLIST = '/v1/documento/lista',
    ROLLIST = '/v1/rol/lista',
    CREATE_ROLE = '/v1/rol/crear',
    LIST_PRIVILEGIOS = '/v1/privilegio/lista',
}

export enum LOGIN_APIS {
    SIGNIN = '/oauth/token',
}
