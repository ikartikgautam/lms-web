export class userDataModel {
    email!: string;
    firstname!: string;
    lastname!: string;
    class_in!: string;
    type!: string;
    dob!: string;
    _id!: string;
    courses_enrolled!: any[];

    setValues(obj: any) {
        this._id = obj._id;
        this.email = obj.email;
        this.firstname = obj.firstname;
        this.lastname = obj.lastname;
        this.class_in = obj.class_in;
        this.type = obj.type;
        this.dob = obj.dob;
        if (obj.courses_enrolled) {
            this.courses_enrolled = obj.courses_enrolled;
        }
    }

}