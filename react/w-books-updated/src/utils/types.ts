export type Nullable<T> = T | null;
export interface FormSignup{
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    password_confirmation: string;
    locale: string;
}

export interface FormSignupResponse{
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    locale: string;
}