import { User} from "./models/User";

const user = new User({});

user.on('change', () => {
    console.log('Change function triggered');
});

user.on('trigger', () => {
    console.log('trigger function triggered');
});

user.trigger('trigger');
user.trigger('change');
user.trigger('Alaska');

console.log(user);