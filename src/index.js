// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({
    path: './env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is listening at port : ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGODB connection failed !!! ", err);
})






/* first approach
( async() =>{
    try{
        await mongoose.connect(`${process.env.MONGO_URI}
        /${DB_NAME}`)
        app.on("error", (error) =>{
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(`App is listening on port ${prcoess.env.PORT}`)

    } catch(error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/