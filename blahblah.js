const express = require('express');
const morgan = require("morgan");
const path = require('path'); //library ships with node
const gamesList = require('./gamesList');

//app.use(require('morgan')('dev'));
const list = gamesList.list;
const find = gamesList.find;

const app = express();
app.use(morgan('dev'));
app.use('/assets', express.static(path.join(__dirname, 'assets'))); //middleware, if something comes in looking for /assets 
//see if you can find whats after assts in the folder



const nav =(url)=> {
    return `
    <nav>
        <a href='/' class='${url === '/' ? 'selected' : ''}'>Home</a>
        <a href='/users' class='${url.startsWith('/games') ? 'selected' : ''}'>Games</a>
    </nav>
    `;
}

const head =()=> {
    return `
    <head>
        <title>Top 10 Sega Dreamcast Games</title>
        <link rel="stylesheet" href="/style.css" />
    </head>
    `;
}

//const displayGamesList =

app.get('/', (req, res) => {
    const games = list();
    //console.log(games);
    res.send(`
    <!DOCTYPE html>
    <html>
        ${head()}
        ${nav(req.url)}
        <body>
            <h1>Top 10 Sega Dreamcast Games</h1>
            <div id = "games-list">
            <div>
            ${games.map(game => `
            <div class='news-item'>
              <p>
                <a href = '/posts/${game.id}'><span class="news-position">${game.id}. ▲</span>${game.title}</a>
                <small>(by ${game.Publisher})</small>
              </p>
              
              <small class="news-info">
                ${game.title} upvotes 
              </small>
            </div>`
          )}
                </div>
            </div>
        </body>
    </html>
    `);

}); 

/*
app.get('/', (req, res, next) => {
    const bodyHTML = () => {
        return `
        <!DOCTYPE html>
        <html>
        ${head()};
      <body>
        ${nav(req.url)};
      </body>
        </html>
        `;
    }

    res.send(bodyHTML());
    next();
}); */

app.get('/users', (req, res, next) => {
    res.send(`
    <html>
        ${style()}
        ${nav(req.url)}
        <body>
            <h1>Users</h1>
            <h2>Users</h2>
            <ul>
                <li><a href = '/users/1'>Moe</a></li>
                <li><a href = '/users/5'>Lucy</a></li>
                <li><a href = '/users/7'>Ethyl</a></li>
            </ul>
        </body>
    </html>
    `);
});

app.get('/users/:id', (req, res, next) => {
    res.send(`
    <html>
        ${head()}
        ${nav(req.url)}
        <body>
            <h1>Users</h1>
            <h2><a href = '/users'>Users</a></h2>
            To do: information about a user with an id of ${req.params.id}
        </body>
    </html>
    `);
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log(`listening on port ${port}`));