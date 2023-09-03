interface IUser {
    name: string;
    company: {
        name: string;
    };
    posts: [
        {
            body: string;
        }
    ];
}

export interface IUsersData {
    users: IUser[];
}