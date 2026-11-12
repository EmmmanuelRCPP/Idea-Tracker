import { Client, TablesDB, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://sfo.cloud.appwrite.io/v1")
  .setProject("6af56c38000d6fa3cbee"); // Replace with your project ID

export const account = new Account(client);
export const tablesDB = new TablesDB(client);
