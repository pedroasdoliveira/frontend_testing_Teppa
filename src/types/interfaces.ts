export interface LoginUser {
    email: string;
    password: string;
}

export type LoginContextType = {
    login: LoginUser;
    valuesLogin?: (login: LoginUser) => void
}