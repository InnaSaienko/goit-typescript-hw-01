type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
}

const newUser : User = {
    name: "Alex",
    surname: "Kobzar",
    email: "kobzar@gmail.com",
    password: "123456",
};

function createOrUpdateUser(updateUser: Partial<User>) : User {
    return { ...updateUser, ...newUser};
}

createOrUpdateUser({
    email: 'user@mail.com',
    password: 'password123'
});
