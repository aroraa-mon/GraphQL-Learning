class Friend {
    constructor(id, {firstname, lastname, gender, language,  contacts, age}){
        this.id = id;
        this.firstname = firstname,
        this.lastname = lastname,
        this.gender = gender,
        this.language = language,
        this.contacts = contacts,
        this.age = age

    }
}

const FriendDb = {};

const resolver = { 
    /* friend: () => {
        return {
            "id": 114,
            "firstname": "Rahul",
            "lastname": "Gupta",
            "gender": "Male",
            "language": "Hindi",
            "emails": "abc.com"
        }
    }, */
    getFriend: ({id}) => {
        console.log(id);
        console.log(FriendDb);
        return new Friend(id,FriendDb[id]);
    },
    createFriend: ({input})  =>  {
        let id = "a1b2b3";
        FriendDb[id] = input;
        return new Friend(id, input);
    }

};

export default resolver;

