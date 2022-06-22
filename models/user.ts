//User Class
export default class User {
  _id: "";
  email: "";
  name: { first: ""; last: "" };
  staff: "";
  availabillity: {};
  constructor(user?: User) {
    this._id = user?._id ? user._id : "";
    this.email = user?.email ? user.email : "";
    this.name = user?.name ? user.name : { first: "", last: "" };
    this.staff = user?.staff ? user.staff : "";
    this.availabillity = user?.availabillity ? user.availabillity : {};
  }
}
