import connection from "$lib/db/mongo-connection.server";
import { TestData } from "$lib/db/testDataModel.server";



export async function load({ params }) {
    let date = new Date();
    let res = await TestData.addData({entry:date});
    
    return {
        entry:res.data.entry
    }

}