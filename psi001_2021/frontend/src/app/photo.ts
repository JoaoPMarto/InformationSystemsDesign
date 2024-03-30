import { User } from "./user";

export interface Photo {
    _id: string;
    name: string;
    description: string;
    image: string;
    like: string;
    user: User;
    date: string;
}
