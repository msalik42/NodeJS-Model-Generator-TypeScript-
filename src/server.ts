import Express, {Request, Response} from 'express';

const APP = Express();
const PORT = 3000

APP.get("/", (req: Request, resp: Response)=>{
    resp.json({
        message: "This is home page"
    })
});

APP.listen(PORT, ()=>{
    console.log(`App is listening on 127.0.0.1:${PORT}`);
    
})