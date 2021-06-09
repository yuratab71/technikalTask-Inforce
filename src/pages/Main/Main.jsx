import React from 'react';
import "./main.css";
import { connect } from "react-redux";
import { setGoods, deleteItem } from "../../redux/mainReducer";
import CardSmall from "../../components/CardSmall";
import CreateForm from "../../components/CreateForm";

const Main = (props) => {
    React.useEffect(() => {
        props.setGoods();
    }, []);

    const onDeleteClick = (e) => {
        props.deleteItem(e.target.id);
    }

    return (
        <>
        <div>
            {props.items.map((el) => {
                return <div>
                    <CardSmall data={el}/>
                    <button onClick={onDeleteClick} id={el._id}>Delete item</button>
                </div>
            })}
        </div>
        <CreateForm />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.main.goods,
    }
}



export default connect(mapStateToProps, { setGoods, deleteItem })(Main);
