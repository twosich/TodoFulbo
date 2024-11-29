import { MongoClient, Db, Collection } from "mongodb";

const uri = "mongodb://mongo:hLtTsygwGIbGIfBnmvJVoQIUaSNwkhtI@autorack.proxy.rlwy.net:14791"
const dbName = "todofulbo"
let db: Db;
const collections: Map<string, Collection<any>> = new Map();

export async function connetcToMongoDB(): Promise<void> {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        db = client.db(dbName);
    } catch (error) {
        throw error;
    }
}

export function getCollection<T>(name: string): Collection<any> {
    if (!db) {
        throw new Error("Sin conexion a la DB");
    }
    if (collections.has(name)) {
        return collections.get(name) as Collection<any>;
    }
    const collection = db.collection<any>(name);
    collections.set(name, collection);
    return collection;
}