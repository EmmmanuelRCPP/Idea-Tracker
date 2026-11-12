import { ID, Query } from "appwrite";
import { tablesDB } from "../appwrite";
import { reactive } from "vue";

export const IDEAS_DATABASE_ID = "6af56db6002301c93ad0"; // Replace with your database ID
export const IDEAS_TABLE_ID = "6af56dc600190f86e4cd"; // Replace with your table ID

export const ideas = reactive({
  current: [],
  async init() {
    const response = await tablesDB.listRows({
      databaseId: IDEAS_DATABASE_ID,
      tableId: IDEAS_TABLE_ID,
      queries: [Query.orderDesc("$createdAt"), Query.limit(10)]
    });
    this.current = response.rows;
  },
  async add(idea) {
    const response = await tablesDB.createRow({
      databaseId: IDEAS_DATABASE_ID,
      tableId: IDEAS_TABLE_ID,
      rowId: ID.unique(),
      data: idea
    });
    this.current = [response, ...this.current].slice(0, 10);
  },
  async remove(id) {
    await tablesDB.deleteRow({
      databaseId: IDEAS_DATABASE_ID,
      tableId: IDEAS_TABLE_ID,
      rowId: id
    });
    this.current = this.current.filter((idea) => idea.$id !== id);
    await this.init(); // Refetch ideas to ensure we have 10 items
  },
});
