export class userDataModel {
    email!: string;
    firstname!: string;
    lastname!: string;
    class_in!: string;
    type!: string;
    dob!: string;

    setValues(obj: any) {
        this.email = obj.email;
        this.firstname = obj.firstname;
        this.lastname = obj.lastname;
        this.class_in = obj.class_in;
        this.type = obj.type;
        this.dob = obj.dob;
    }

}