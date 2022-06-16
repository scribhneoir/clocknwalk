//User Class
export default class Staff {
  _id: string;
  name: string;
  sra: string;
  rd: string;
  staff: Array<string>;
  constructor(staff?: Staff) {
    this._id = staff?._id ? staff._id : "";
    this.name = staff?.name ? staff.name : "";
    this.sra = staff?.sra ? staff.sra : "";
    this.rd = staff?.rd ? staff.rd : "";
    this.staff = staff?.staff ? staff.staff : [];
  }
}
