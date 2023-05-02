import { Eventing } from './Eventing';

interface UserProps {
    [key: string]: any;
    id?: number;
    name?: string;
    age?: number;
}

export class User {
    events: Eventing = new Eventing();

    constructor(private data: UserProps) {}

    get(propName: string): number | string {
        if (!(propName in this.data)) {
            throw new Error('Property ${propName} not found');
        }
        return this.data[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update);
    }
}