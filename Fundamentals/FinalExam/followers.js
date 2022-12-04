function fbFollowers(input) {

    let followers = {};
    let line = input.shift();
    while (line !== "Log out") {
        let [command, name, ...tokens] = line.split(': ');

        switch (command) {
            case 'New follower':
                if (!followers.hasOwnProperty(name)) {
                    followers[name] = { likes: 0, comments: 0 };
                }
                break;
            case 'Like':
                let likes = Number(tokens[0]);
                if (!followers.hasOwnProperty(name)) {
                    followers[name] = { likes: 0, comments: 0 };
                    followers[name].likes +=likes;
                } else {
                    followers[name].likes += likes;
                }

                break;
            case 'Comment':

                if (!followers.hasOwnProperty(name)) {
                    followers[name] = { likes: 0, comments: 1 };
                } else {
                    followers[name].comments ++;
                }
                break;
            case 'Blocked':
                if (!followers.hasOwnProperty(name)) {
                    console.log(`${name} doesn't exist.`);
                } else {
                    delete followers[name];
                }
                break;
        }
        line = input.shift();
    }
    let followersArr = Object.entries(followers);
    console.log(`${followersArr.length} followers`);
    for (const kvp of followersArr) {
        let sum = (kvp[1].likes + kvp[1].comments);

        console.log(`${kvp[0]}: ${sum}`);
    }

}
fbFollowers(["Like: Katy: 3",
    "Comment: Katy",
    "New follower: Bob",
    "Blocked: Bob",
    "New follower: Amy",
    "Like: Amy: 4",
    "Log out"]);
    fbFollowers(["Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"]);
