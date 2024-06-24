import { Client, Account, ID, Avatars , Databases} from 'react-native-appwrite';


export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
  platform: "com.gbemisola.firstApp",
  projectId: "665a13920031168832f4",
  databaseId: '665a19080034e71f7a81',
  userCollectionId: '665a1947002ceba27713',
videoCollectionId: '665a1984003abd1f96df',
storageId: '665a26f900193cd6d183'
};
const {
    endpoint,
    platform,
    projectId,
    databaseId,
    userCollectionId,
    videoCollectionId,
    storageId
} = config;



// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;
const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, username, password) => {
    // Register User
    console.log('email', email)
    console.log('username', username)   
    console.log('password', password)
  try {
    const newAccount = await account.create(
        ID.unique(),
         email,
          username,
           password);

    if (!newAccount) throw Error
    const avatarUrl =  avatars.getInitials(username);
    await signIn(email, password)
const newUser = await databases.createDocument(
    config.databaseId, config.userCollectionId, ID.unique(), {
    userId: newAccount.$id,
    email,
    username,
    avatarUrl,
  });
 return newUser;
  } catch (error) {
    console.log(error)
  }
}

export const signIn = async (email, password) => {
    // Login User
  try {
    const session = await account.createSession(email, password);
    if (!session) throw Error
    return session;
  } catch (error) {
    console.log(error)
    }
}
export const getCurrentUser = async () => {
    // Get Current User
    try {
        const currentAccount = await account.get();
        if (!currentAccount) throw Error

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
        [Query.equal('accountId', currentAccount.$id)]
        );
        if (!currentUser) throw Error

        return currentUser.documents[0];
    } catch (error) {
        console.log(error)
    }
}


export const getAllPosts = async () => {
    // Get All Posts
    try {
        const posts = await databases.listDocuments(
           databaseId,
           videoCollectionId,
        );
        if (!posts) throw Error
        return posts;
    } catch (error) {
        console.log(error)
    }
}