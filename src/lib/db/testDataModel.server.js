import mongoose from 'mongoose';

var Schema = mongoose.Schema;
var testDataSchema = new Schema({
    entry:String
});

testDataSchema.statics.addData = async function (payload) {
    try{
    let response = await this.create(payload);
    return { status: "success", data: response }
    }
    catch (error){
        return { status: "error", data: error }
    }
}

export const TestData = mongoose.model('testdatacollections', testDataSchema);