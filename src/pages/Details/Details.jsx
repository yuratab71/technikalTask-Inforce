import React from 'react';
import "./details.css";
import { connect } from "react-redux";
import { setItem, updateItem } from "../../redux/detailsReducer";
import UpdateForm from  "../../components/CommentForm";
import CommentForm from "../../components/UpdateForm";

const Details = (props) => {
    React.useEffect(() => {
        props.setItem(`${props.location.pathname.split("/")[2]}`);
    }, []);


    const removeComment = (e) => {
        const id = e.target.id;
        let obj = {
            name: props.item.name,
            imageUrl: props.item.imageUrl,
            count: props.item.count,
            weight: props.item.weight,
            size: {
                width: props.item.size.width,
                height: props.item.size.height,
            },
            comments: [...props.item.comments.filter((el) => el._id !== id)]
        }
        props.updateItem(props.item._id, obj);
    }

    console.log(props.item)

    return (
        <div>
            <div className="wrapper">
            <div>
                <div><img className="photo" src={props.item.imageUrl} alt="product photo"/></div>
                <div><span>Name:</span><span>{props.item.name}</span></div>
                <div><span>Count:</span><span>{props.item.count}</span></div>
                <div><span>Weight:</span><span>{props.item.weight}</span></div>
                <div><span>Width:</span><span>{props.item.size.width}</span></div>
                <div><span>Height:</span><span>{props.item.size.height}</span></div>
            </div>
            <div className="comment-wrapper">
            {props.item.comments.map((el) => {
                    return <div><div>{el.description}</div><button onClick={removeComment} id={el._id}>Remove</button></div>
                })}
            </div>
            </div>
            <div className="form-wrapper">
                <CommentForm/>
                <UpdateForm />
            </div>
            
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        item: state.details.item
    }
}

export default connect(mapStateToProps, { setItem, updateItem })(Details);
