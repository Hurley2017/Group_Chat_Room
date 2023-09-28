const { app } = require('./main.js');
async function startApp(){
    
    const port = process.env.PORT || 8080

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}
startApp();