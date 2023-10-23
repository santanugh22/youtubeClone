CREATE Table users(
    id serial PRIMARY KEY,
    username VARCHAR(80) UNIQUE NOT NULL,
    password VARCHAR(200) NOT NULL,
    email VARCHAR(200) UNIQUE NOT NULL,
    image VARCHAR(255) DEFAULT 'https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg');


CREATE Table videos(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    video_url VARCHAR(255) NOT NULL,
    views INTEGER NOT NULL DEFAULT 0,
    video_title VARCHAR(200) NOT NULL,
    likes INTEGER NOT NULL DEFAULT 0,
    dislikes INTEGER NOT NULL DEFAULT 0);



CREATE TABLE comments(
    id serial PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    video_id INTEGER REFERENCES videos(id),
    comment_text VARCHAR(400) NOT NULL,
    UNIQUE(video_id,user_id)

);