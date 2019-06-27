import React, { Component } from "react";

/** React Component used to replicate the structure of a staff member. */
function Member(props) {
  return (
    <div className="entry">
      <h4 className="name">{props.name}</h4>
      <h5 className="role">{props.role}</h5>
      <img className="image" src={props.img} />
    </div>
  );
}

/** React Component used to forumate the staff page. */
class StaffPage extends Component {
  state = {
    members: [
      "John Doe",
      "Yolanda Swan",
      "Mylah Morton",
      "Klay Maxwell",
      "Trevor Russell",
      "Jensen Sutherland",
      "Nala Drummond",
      "Brook Sparks",
      "Rhiann Thorne",
      "Gurpreet Cottrell",
      "Inez Hamilton",
      "Rocco Potter",
      "Libby Dodson",
      "Monika Alvarado",
      "Aliyah Clements",
      "Gurleen Atkinson",
      "Paloma Hooper",
      "Harlan Cline",
      "Jadine Morrison",
      "Fionn Beltran",
      "Zack Bonner",
      "Arjun Rodriquez",
      "Szymon Gonzales",
      "Corbin Wynn",
      "Randy Finley",
      "Tazmin Paine",
      "Verity Lim",
      "Jay Knowles",
      "Saif Carver",
      "Chester Lloyd",
      "Gregory Reyes",
      "Karina Pham",
      "Rian Cartwright",
      "Woody Barnes",
      "Esmai Fields",
      "Yousaf Irving",
      "Raife Lacey",
      "Luther Hines",
      "Jonny Cairns",
      "Rafe Alston",
      "Scarlette Floyd"
    ]
  };

  renderMembers() {
    return this.state.members.map(name => (
      <Member
        name={name}
        role="Accountant"
        img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg"
      />
    ));
  }

  render() {
    return (
      <div id="staffPage">
        <div id="employees">{this.renderMembers()}</div>
      </div>
    );
  }
}

export default StaffPage;
