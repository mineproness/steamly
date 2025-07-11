// server.ts
import { createServer } from 'http';
import next from 'next';
import { Server  } from 'socket.io';
import { parse } from 'url';
import mongo from './lib/mongo';
let online = 0
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev: false , turbopack: false ,  });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  });
  
  const io = new Server(server, {
    cors: {
      origin: '*',
    },
  });
  
  io.on('connection', (socket) => {
    socket.on("Online" , async function(e){
        const {db} = await mongo() 
        await db.collection("users").updateOne({ token : e } , {
        $set:{status: true}
      })
      io.emit("Update")
    })
    socket.on('update', (id) => {
      io.emit("update" , id)
    });
    socket.on("message" , async(mesg)=>{
      io.emit("message" , mesg)
      const {db} = await mongo() 
      await db.collection("Message").insertOne(mesg)
   })

    socket.on("dis",async (id)=>{
        const {db} = await mongo() 
      await db.collection("users").updateOne({ token : id} , {
        $set:{status: false}
      })
    })
  });

  server.listen(3000, () => {
    console.log('✅ Server running on http://localhost:3000');
  });
});
