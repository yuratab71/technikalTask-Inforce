import React from 'react'
import { Formik, Field, Form } from "formik";
import { textValidator } from "./validators/validators";
import { connect } from "react-redux";
import { updateItem } from "../redux/detailsReducer";

function CreateForm(props) {
    return (
        <div>
            <Formik initialValues={{
                  comment: "Add comment"
            }} 
                onSubmit={
                    async values => {
                        let { comment } = values;
                        if (textValidator(comment)) {
                            let obj = {
                                name: props.item.name,
                                imageUrl: props.item.imageUrl,
                                count: props.item.count,
                                weight: props.item.weight,
                                size: {
                                    width: props.item.size.width,
                                    height: props.item.size.height,
                                },
                                comments: [...props.item.comments, {productId: props.item._id, description: comment, date: new Date().toString()}]
                            }
                            console.log(obj);
                            props.updateItem(props.item._id, obj);
                        } else {
                            alert("Invalid input");
                        }
                    }
                }
            >
                <Form>
                    <span>Add comment</span><Field name="comment" type="textarea" />
                    <button type="submit">Add</button>
                </Form>
            </Formik>
        </div>
    )
}

export const mapStateToProps = (state) => {
    return {
        item: state.details.item
    }
}

export default connect(mapStateToProps, { updateItem })(CreateForm)
