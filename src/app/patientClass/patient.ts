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