const fs=require('fs');

module.exports=class chatBox {
    static save(uname,txtmsg)
    {
        const message = `${uname} : ${txtmsg} \n`;
        fs.appendFileSync("message.txt", message);
    }

    static fetchMsg(cb)
    {
        fs.readFile("message.txt", (err, data) => {
            //if there is an error like of a file doesn't exist it will say "No chat exist"
            if (err) 
            {
                 data = "No chat exist" 
            }
            cb(data);
            
        })
    }
}