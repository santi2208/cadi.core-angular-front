export interface Command{
    email:string
}

export interface LoginResponse{
    command: Command,
    token: string
}