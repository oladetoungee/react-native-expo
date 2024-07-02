import { Alert } from 'react-native';
import { Client, Account, ID, Avatars , Databases, Permission, Role, Query} from 'react-native-appwrite';


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
let promise = databases.createDocument(
databaseId,
videoCollectionId,  
ID.unique(),
    [
        Permission.read(Role.any()),        
        Permission.update(Role.any()),  
        Permission.delete(Role.any()),  
      
    ]
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});

export const createUser = async (email: any, username: any, password: any) => {
    // Register User
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
    accountId: newAccount.$id,
    email,
    username,
    avatar: avatarUrl,
  });
  Alert.alert('User Created', 'Your user has been created successfully');
 return newUser;
  } catch (error) {
    console.log(error)
  }
}

export const signIn = async (email: string, password: string) => {
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
    try {
        const posts = await databases.listDocuments(databaseId, videoCollectionId);
        if (!posts) throw new Error('No posts found');
        
        // Assuming posts contain an array of documents
        const documents = posts.documents.map((doc: any) => ({
            $id: doc.$id,
            title: doc.title,
            thumbnail: doc.thumbnail,
            prompt: doc.prompt,
            video: doc.video,
            $createdAt: doc.$createdAt,
            $updatedAt: doc.$updatedAt,
        }));

        return { documents };
    } catch (error) {
        console.log(error);
        return { documents: [] }; // Return empty array or handle error state
    }
};