import mongoose from 'mongoose';
import { Friends } from './dbConnectors';
/* class Friend {
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

const FriendDb = {}; */

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
    getOneFriend: ({id}) => {
        return new Promise((resolve, reject) => {
            Friends.findById(id, (err, friend) => {
                if(err) reject(err);
                else resolve(friend);
            });
        });
    },
    createFriend: ({input})  =>  {
        /* let id = "a1b2b3";
        FriendDb[id] = input;
        return new Friend(id, input); */
        const newFriend = new Friends({
            firstname: input.firstname,
            lastname: input.lastname,
            gender: input.gender,
            language: input.language,
            age: input.age,
            emails: input.emails,
            contacts: input.contacts,
        });

        newFriend.id = newFriend._id;

        return new Promise((resolve, reject) => {
            newFriend.save((err) => {
                if(err) reject(err);
                else resolve(newFriend);
            })
        })
    },
    updateFriend: ({input}) => {
        return new Promise((resolve, reject) => {
            Friends.findOneAndUpdate({_id: input.id}, input, {new: true}, (err, friend) => {
                if(err) reject(err);
                else resolve(friend);
            });
        })
    },
    deleteFriend: ({id}) => {
        return new Promise((resolve, reject) => {
            Friends.remove({_id: id}, (err) => {
                if(err) reject(err);
                else resolve("Data deleted succfully");
            });
        })
    }
};

export default resolver;

