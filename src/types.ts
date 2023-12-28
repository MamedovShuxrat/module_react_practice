export type TGender = 'м' | 'ж'

export interface IUser {
    name: string
    secondName: string
    gender: TGender
    age: number
    rank: number
}

export type TArrayOfUsers = IUser[]