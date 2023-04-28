export interface IUserDto {
    email: string;
    password: string;
}

export interface IUser {
    id: number;
    email: string;
    password: string;
    baned: boolean;
    banReason: string;
}
