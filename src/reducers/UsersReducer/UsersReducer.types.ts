import { Action } from "../../types";

interface Address {
    street: string;
    suite: string;
    city: string;
    ['zip-code']: string;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface User {
    name: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

interface PairUser{
    [key: number]: User;
}

interface BaseUserStore {
    fetchingData: boolean;
    users: PairUser;
}

export type  UserStore = BaseUserStore;