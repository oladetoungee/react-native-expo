import { Client, Account, ID } from 'react-native-appwrite';


export const config = {
endpoint: 'https://api.appwrite.io/v1',
  platform: "com.gbemisola.firstApp",
  projectId: "665a13920031168832f4",
  databaseId: '665a19080034e71f7a81',
  userCollectionId: '665a1947002ceba27713',
videoCollectionId: '665a1984003abd1f96df',
storageId: '665a26f900193cd6d183'
};


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
export const createUser = () => {
// Register User
account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
}
