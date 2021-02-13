const express = require('express');
const morgan = require("morgan");
const path = require('path'); //library ships with node
const gamesList = require('./gamesList');
const html = require("html-template-tag");

const list = gamesList.list;
const find = gamesList.find;

const app = express();
app.use(morgan('dev'));
app.use('/assets', express.static(path.join(__dirname, 'assets'))); //middleware, if something comes in looking for /assets 
//see if you can find whats after assets in the folder



const nav =(url)=> {
    return `
    <nav>
        <a href='/' class='${url === '/' ? 'selected' : ''}'>Home</a>
    
    </nav>
    `;
}

const head =()=> {
    return `
    <head>
        <title>Top 10 Sega Dreamcast Games</title>
        <link rel="stylesheet" href="/assets/style.css" />
    </head>
    `;
}

const displayData = () => {
    var gameList = ''; 
    var game;
    
        for(let i = 10; i>0; i--)
        {
            game = gamesList.find(i);
            gameList += 
            `<div id= "game-item"> 
                <div id="rank"><rankID>${game.id}</rankID></div>           
                <div class="game-info">
                    <div id= "title"><a href = '/games/${game.id}'>${game.title}</a></div>
                    <div id= "details"><small><red>Publisher: </red>${game.Publisher} | <red>Developer: </red>${game.Developer.join(', ')} | <red>Released: </red>${game.releaseDate}</small></div>
                </div>
            </div>
            `;
        }
    return gameList;
}

const displayGame = (id) =>{
    var gameList = ''; 
    game = gamesList.find(id);
    gameList += 
        `<div id= "game-itemB"> 
            <img src="/assets/${game.gameArt}"/>   
            <div class="game-item2">
                <div id="rank">${game.id}</div>   
                <div id="content"><p>${game.content}</p></div>
                <div id= "details2"><small><red>Publisher: </red>${game.Publisher} | <red>Developer: </red>${game.Developer.join(', ')} | <red>Released: </red>${game.releaseDate}</small></div>
            </div>  
        </div>
        `;
    return gameList;
}

const displayControls = (id) => {
    var gameList;
    var previous = parseInt(id) + 1;
    var next = parseInt(id) - 1;
    if(next === 0)
    {
        gameList = `

    <div id = "arrow"><a href = '/games/${previous}'> < </a></div>
    <div><img src="/assets/segaSwirl3.jpeg"width="30" height="30"></div>
    `
    }
    else if(previous === 11)
    {
        gameList = `
    <div><img src="/assets/segaSwirl3.jpeg"width="30" height="30"></div>
    <div id = "arrow"><a href = '/games/${next}'> > </a></div>
    `
    }
    else{
        gameList = `

    <div id = "arrow"><a href = '/games/${previous}'> < </a></div>
    <div><img src="/assets/segaSwirl3.jpeg"width="30" height="30"></div>
    <div id = "arrow"><a href = '/games/${next}'> > </a></div>
    `
    }
    return gameList;
}

app.get('/', (req, res) => {
    res.send( `
    <html>
        ${head()}
        <body>
            <h1>Top 10 Sega Dreamcast Games</h1>
            ${nav(req.url)}
            <div id = "games-list">
            ${displayData()}    
            </div>
        </body>
    </html>
    `);

}); 

app.get('/games', async(req, res, next)=>{
    res.redirect('/');
});

app.get('/games/:id', (req, res, next) => {
    res.send( `
    <html>
        ${head()}
        <body>
            <h1>Top 10 Sega Dreamcast Games</h1>
            ${nav(req.url)}
            <div id = "games-list">
            ${displayGame(req.params.id)}    
            </div>
            <div class="controls">
            ${displayControls(req.params.id)}
            </div>
        </body>
    </html>
    `);
   
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log(`listening on port ${port}`));