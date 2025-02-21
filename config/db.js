import mongoose from 'mongoose';

export const  connectDB = async () => {
    await mongoose.connect('mongodb+srv://ptut5050:Abrakadabra1@cluster0.uislz.mongodb.net/food-del')
    .then(() => {
        console.log('DB Connected')
    })
}
