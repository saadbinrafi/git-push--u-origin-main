import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Post = ({post}) => {

    // eslint-disable-next-line react/prop-types
    const {id, title} = post;

    const postStyle = {
        border : '2px solid yellow',
        padding : '10px',
        borderRadius: '20px',
        margin: '5px',

    }

    return (
        <div style={postStyle}>
            <h4>Post of Id : {id}</h4>
            <p>Title : {title}</p>
            <Link to={`/post/${id}`}>Post Detail: </Link>

        </div>
    );
};

export default Post;