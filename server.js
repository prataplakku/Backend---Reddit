const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

//***********SAMPLE DATA***********

//users
let users = [
    { user_id: 1, username: 'groot', email: 'groot@gmail.com', password: 'iamgroot', created_at: '2024-08-12T12:58:07.843Z' },
    { user_id: 2, username: 'captainamerica', email: 'captainamerica@gmail.com', password: 'ihatebullies', created_at: '2024-06-12T12:58:07.843Z' },
    { user_id: 3, username: 'thor', email: 'thor@gmail.com', password: 'stormbreaker', created_at: '2024-04-12T12:58:07.843Z' },
    { user_id: 4, username: 'ironman', email: 'ironman@gmail.com', password: 'love3000', created_at: '2024-03-12T12:58:07.843Z' },
];

//subreddits
let subreddits = [
    { subreddit_id: 1, name: 'firstavenger', description: 'marvel movie', created_at: '2024-03-12T12:58:07.843Z' },
    { subreddit_id: 2, name: 'endgame', description: 'end of marvel movies', created_at: '2024-01-12T12:58:07.843Z' }
];


//POSTS
let posts = [
    { post_id: 1, user_id: 4, subreddit_id: 1, title: 'why avengers', content: 'Alien...', created_at: '2024-04-12T12:58:07.843Z' },
    { post_id: 2, user_id: 1, subreddit_id: 2, title: 'DC', content: 'Superman...', created_at: '2024-03-12T12:58:07.843Z' },
    { post_id: 3, user_id: 3, subreddit_id: 1, title: 'falcon', content: 'Sam...', created_at: '2024-01-12T12:58:07.843Z' },
    { post_id: 4, user_id: 2, subreddit_id: 2, title: 'spider sense', content: 'Tom Holland...', created_at: '2024-09-12T12:58:07.843Z' },
    { post_id: 5, user_id: 2, subreddit_id: 1, title: 'Ultron', content: 'Annhilation...', created_at: '2024-04-12T12:34:07.843Z' },
    { post_id: 6, user_id: 3, subreddit_id: 1, title: 'Thanos', content: 'Infinity Stones...', created_at: '2024-03-12T12:47:07.843Z' }
];


//Comments for Posts
let comments = [
    { comment_id: 1, user_id: 1, post_id: 1, content: 'Good explanation!', created_at: '2024-01-12T12:58:07.843Z' },
    { comment_id: 2, user_id: 2, post_id: 2, content: 'Good Thinking!', created_at: '2024-02-12T12:58:07.843Z' },
    { comment_id: 3, user_id: 3, post_id: 3, content: 'Great Work!', created_at: '2024-03-12T12:58:07.843Z' },
    { comment_id: 4, user_id: 4, post_id: 4, content: 'Well Done!', created_at: '2024-04-12T12:28:07.843Z' },
    { comment_id: 5, user_id: 4, post_id: 5, content: 'I agree!', created_at: '2024-04-12T12:58:07.843Z' },
    { comment_id: 6, user_id: 3, post_id: 6, content: 'Diagree!', created_at: '2024-05-12T12:58:07.843Z' },
    { comment_id: 7, user_id: 2, post_id: 4, content: 'I downvope!', created_at: '2024-06-12T12:58:07.843Z' },
    { comment_id: 8, user_id: 1, post_id: 2, content: 'Biased!', created_at: '2024-07-12T12:58:07.843Z' },
    { comment_id: 9, user_id: 1, post_id: 3, content: 'Neutral explanation!', created_at: '2024-08-12T12:58:07.843Z' },
    { comment_id: 10, user_id: 2, post_id: 4, content: 'Scary Throught!', created_at: '2024-09-12T12:58:07.843Z' },
];

//Subscriptions for Subreddits
let subscriptions = [
    { subscription_id: 1, user_id: 1, subreddit_id: 1 },
    { subscription_id: 2, user_id: 2, subreddit_id: 1 },
    { subscription_id: 3, user_id: 2, subreddit_id: 2 },
    { subscription_id: 4, user_id: 3, subreddit_id: 1 },
    { subscription_id: 5, user_id: 3, subreddit_id: 2},
    { subscription_id: 6, user_id: 4, subreddit_id: 1 },
    { subscription_id: 7, user_id: 1, subreddit_id: 2 },
    { subscription_id: 8, user_id: 4, subreddit_id: 2 },

];

//Upvotes made by users to posts
let upvotes = [
    { upvote_id: 1, user_id: 1, post_id: 1 },
    { upvote_id: 2, user_id: 2, post_id: 1 },
    { upvote_id: 3, user_id: 3, post_id: 1 },
    { upvote_id: 4, user_id: 1, post_id: 2 },
    { upvote_id: 5, user_id: 2, post_id: 2 },
    { upvote_id: 6, user_id: 4, post_id: 2 },
    { upvote_id: 7, user_id: 1, post_id: 3 },
    { upvote_id: 8, user_id: 2, post_id: 3 },
    { upvote_id: 9, user_id: 3, post_id: 3 },
    { upvote_id: 10, user_id: 4, post_id: 3 },
    { upvote_id: 11, user_id: 1, post_id: 4 },
    { upvote_id: 12, user_id: 2, post_id: 4 },
    { upvote_id: 13, user_id: 4, post_id: 4 },
    { upvote_id: 14, user_id: 1, post_id: 5 },
    { upvote_id: 15, user_id: 2, post_id: 5 },
    { upvote_id: 16, user_id: 3, post_id: 5 },
    { upvote_id: 17, user_id: 4, post_id: 5 },
    { upvote_id: 18, user_id: 1, post_id: 6 },
    { upvote_id: 19, user_id: 2, post_id: 6 },
    { upvote_id: 20, user_id: 4, post_id: 6 }
];


//APIS

//Register a new USER
app.post('/register', (req, res) => {
    let details = req.body;
    let username = details.username; 
    let email = details.email;
    let password = details.password;

    let userexists = users.find(user => user.username === username);
    let emailexists = users.find(user => user.email === email);

    if (userexists || emailexists) {
        res.send({ message: "username already exists or email already exists" });
    } else {
        users.push({ user_id: users.length + 1, username: username, email: email, password: password, created_at: new Date().toISOString() });
        res.send({ message: "User registered successfully" }); 
    }
});


// subscribe to subreddit
app.post('/subscribe', (req, res) => {
    let subreddit_id = parseInt(req.body.subreddit_id, 10);
    let user_id = parseInt(req.body.user_id, 10);
    let foundsubreddit = subreddits.find(sub => sub.subreddit_id === subreddit_id);
    let subscribed = subscriptions.find(subscription => subscription.user_id === user_id && subscription.subreddit_id === subreddit_id);

    if (foundsubreddit && !subscribed) {
        subscriptions.push({
            subscription_id: subscriptions.length + 1,
            user_id: user_id,
            subreddit_id: subreddit_id,
        });

        res.send({ message: 'Subscribed to Subreddit successfully' });
    } else if (subscribed) {
        subscriptions = subscriptions.filter(subscription => !(subscription.user_id === user_id && subscription.subreddit_id === subreddit_id));
        res.send({ message: 'Successfully unsubscribed' });
    } else {
        res.status(404).send({ error: 'Subreddit does not exist' });
    }
});



//Creating a Post
app.post('/posttosub', (req, res) => {
    const subreddit_id = parseInt(req.body.subreddit_id, 10);
    const user_id = parseInt(req.body.user_id, 10);
    const content = req.body.content;

    let foundsub = subreddits.find(sub => sub.subreddit_id === subreddit_id);
    let userfound = users.find(user => user.user_id === user_id);

    if (foundsub && userfound) {
        const newPost = {
            post_id: posts.length + 1,
            user_id: user_id,
            subreddit_id: subreddit_id,
            title: req.body.title || "Default Title",
            content: content,
            created_at: new Date().toISOString()
        };

        posts.push(newPost);
        res.send({ message: 'Post added to subreddit successfully' });
    } else {
        res.status(404).send({ error: 'subreddit_id does not exist or user_id does not exist' });
    }
});





//COMMENT ON a POST
app.post('/comment', (req, res) => {
    let post_id = parseInt(req.body.post_id, 10);
    let content = req.body.content;
    let user_id = parseInt(req.body.user_id, 10);

    let foundPost = posts.find(post => post.post_id === post_id);
    let founduser = users.find(user => user.user_id === user_id);
    if (foundPost && founduser) {
        comments.push({
            comment_id: comments.length + 1,
            user_id: user_id,
            content: content,
            post_id: post_id,
            created_at: new Date().toISOString()
        });

        res.send({ message: 'Comment added successfully' });
    } else {
        res.status(404).send({ error: 'postId does not exist or User does not exist' });
    }
});



//Upvote a Post
app.post('/upvote', (req, res) => {
    let post_id = parseInt(req.body.post_id, 10);
    let user_id = parseInt(req.body.user_id, 10);

    let upvoted = upvotes.find(upvote => upvote.post_id === post_id && upvote.user_id === user_id);
    let foundPost = posts.find(post => post.post_id === post_id);
    let founduser = users.find(user => user.user_id === user_id);

    if (upvoted && foundPost && founduser) {
        upvotes = upvotes.filter(upvote => upvote !== upvoted);
        res.send({ message: 'Upvote cancelled' });
    } else if(!upvoted && foundPost && founduser){
        upvotes.push({ upvote_id: upvotes.length + 1, user_id: user_id, post_id: post_id });
        res.send({ message: 'Upvote added' });
    }else if (!founduser){
        res.send({message: 'User Not found'})
    }else if (!foundPost){
        res.send({message: 'Post Not found'})
    }
});


//USER FUll PROFILE
app.get('/users/userprofile/:user_id', (req, res) => {
    let user_id = parseInt(req.query.user_id, 10);
    let userSubscriptions = subscriptions
        .filter(sub => sub.user_id === user_id)
        .map(sub => {
            const subreddit = subreddits.find(subreddit => subreddit.subreddit_id === sub.subreddit_id);
            return { subreddit_id: subreddit.subreddit_id, name: subreddit.name };
        });
    let userPosts = posts.filter(post => post.user_id === user_id);
    let upvotesReceived = [];
    userPosts.forEach(post => {
        const postUpvotes = upvotes.filter(upvote => upvote.post_id === post.post_id);
        upvotesReceived = [...upvotesReceived, ...postUpvotes];
    });
    res.send({ userSubscriptions: userSubscriptions, upvotesReceived: upvotesReceived });
});


//GET SUBREDDIT
app.get('/subreddits/subreddit/:subreddit_id', (req, res) => {
    let subreddit_id = parseInt(req.query.subreddit_id, 10);

    let subredditPosts = posts
        .filter(post => post.subreddit_id === subreddit_id)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .map(post => {

            let postComments = comments.filter(comment => comment.post_id === post.post_id);
            let postUpvotes = upvotes.filter(upvote => upvote.post_id === post.post_id);
            return {
                post_id: post.post_id,
                user_id: post.user_id,
                subreddit_id: post.subreddit_id,
                title: post.title,
                content: post.content,
                created_at: post.created_at,
                comments: postComments,
                upvotes: postUpvotes
            };
        });

    res.send(subredditPosts);
});





app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
