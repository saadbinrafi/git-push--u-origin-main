import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const User = ({user}) => {

    // eslint-disable-next-line react/prop-types
    const { id, name, email, phone } = user;

    const userStyle = {
        border : '2px solid yellow',
        padding : '10px',
        borderRadius: '20px',
        
        
    

    }

    return (
        <div style={userStyle}>
            <h1>Name: {name}</h1>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            

        </div>
    );
};

export default User;