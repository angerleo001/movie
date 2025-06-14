import { Client , Databases, ID, Query} from 'appwrite'

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)

const database = new Databases(client);
//console.log(PROJECT_ID, DATABASE_ID, COLLECTION_ID);

export const updateSearchCount = async (searchTerm, movie) => {
    //check if the search term exists in the database
    try {
        const result = await database.listDocuments(
            DATABASE_ID, COLLECTION_ID, [Query.equal(
                'searchTerm', searchTerm),
            ])
    //update the count id saerch term exists
        if(result.documents.length > 0) {
            const doc = result.documents[0];
            await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
                count : doc.count +1,
            })

    //create new document with search term and count as 1 if the search term doesn't exist
        }else {
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm,
                count: 1,
                movie_id: movie.id,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            })
        }
    } catch (error) {
        console.error(error);
    }
}

export const getTrendingMovies = async () => {
    try{
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.limit(5),
            Query.orderDesc("count")
        ])

        return result.documents;
        
    }catch(error){
        console.error(error)
    }
}