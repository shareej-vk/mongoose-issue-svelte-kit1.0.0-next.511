import mongoose from 'mongoose';
const connection = mongoose.connect("mongodb://admin:admin@localhost:27017/suii_db?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false");
export default connection;
