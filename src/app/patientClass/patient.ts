export class Patient {
    id!: string;
    username!: string;
    password!: string;
    fullName!: string;
    firstName!: string;;
    lastName!: string;
    email!: string;
    phoneNo!: string;    
    dateOfBirth!: string;;
    roles!: Roles[];
}

export class Roles{
    id!: string;
    name!: string
}

// {
//     "id": "62f7dde9b9e51e0118246f43",
//     "username": "john1",
//     "password": "$2a$10$VHS7D1bjq4.n1P8J6HfDiu/DEqDZ1tqb706pSyw5F1TxatZmn7ffa",
//     "fullName": null,
//     "firstName": null,
//     "lastName": null,
//     "email": "john@email.com",
//     "phoneNo": null,
//     "dateOfBirth": null,
//     "roles": [
//         {
//             "id": "62e9f950b551823c2d20179a",
//             "name": "ROLE_MANAGER"
//         }
//     ]
// },