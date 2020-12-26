function identification(user, password) {
    switch (true) {
        case (user == undefined) || (password == undefined):
            console.log('Data required to log in');
            break;
        case (user === 'admin') && (password === 1234):
            console.log("Welcome to our site");
            break;
        case (user === 'admin') && (password !== 1234):
            console.log("Password is incorrect");
            break;
        case (user !== 'admin') && (password === 1234):
            console.log("Username is incorrect");
            break;
        case (user !== 'admin') && (password !== 1234):
            console.log("Username and password are incorrect");
            break;
    }
}


identification();
identification('admin', 1234)
identification('nimda', 1234)
identification('admin', 4321)
identification('nimda', 4321)