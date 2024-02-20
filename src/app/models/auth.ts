
export interface CreateUserInput {
    name: string;
    email: string;
    description?: string;
    password: string;
}

export interface LoginUserInput {
    email: string;

    password: string;
}
