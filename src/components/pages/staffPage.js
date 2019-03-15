import React, { Component } from 'react';

function Member(props) {
    return (<div className="entry">
        <h4 className="name">{props.name}</h4>
        <h5 className="role">{props.role}</h5>
        <img className="image" src={props.img} />
    </div>)
}


class StaffPage extends Component {
    state = {  }
    render() { 
        return (<div id="staffPage">
           <div id="employees">
               <Member name="John Doe" role="Accountant" img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg" />
               <Member name="John Doe" role="Accountant" img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg" />
               <Member name="John Doe" role="Accountant" img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg" />
               <Member name="John Doe" role="Accountant" img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg" />
               <Member name="John Doe" role="Accountant" img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg" />
               <Member name="John Doe" role="Accountant" img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg" />
               <Member name="John Doe" role="Accountant" img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg" />
               <Member name="John Doe" role="Accountant" img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg" />
               <Member name="John Doe" role="Accountant" img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg" />
               <Member name="John Doe" role="Accountant" img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg" />
               <Member name="John Doe" role="Accountant" img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg" />
               <Member name="John Doe" role="Accountant" img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg" />
               <Member name="John Doe" role="Accountant" img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg" />
               <Member name="John Doe" role="Accountant" img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg" />
               <Member name="John Doe" role="Accountant" img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg" />
               <Member name="John Doe" role="Accountant" img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg" />
               <Member name="John Doe" role="Accountant" img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg" />
               <Member name="John Doe" role="Accountant" img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg" />
               <Member name="John Doe" role="Accountant" img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg" />
               <Member name="John Doe" role="Accountant" img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg" />
               <Member name="John Doe" role="Accountant" img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg" />
               <Member name="John Doe" role="Accountant" img="https://www.theglobeandmail.com/resizer/uH7cHWKkNtoB_O6YxYWKIsmxs9Y=/1900x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/UTUX7QNEGJFCFKDUUNTNLAJ4UM.jpg" />

           </div>
        </div>);
    }
}
 
export default StaffPage;