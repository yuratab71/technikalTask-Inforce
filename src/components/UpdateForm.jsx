import React from 'react'
import { Formik, Field, Form } from "formik";
import { textValidator, numberValidator } from "./validators/validators";
import { connect } from "react-redux";
import { updateItem } from "../redux/detailsReducer";
import "./card.css";

function CreateForm(props) {

    let obj = {
        name: props.item.name,
        imageUrl: props.item.imageUrl,
        count: props.item.count,
        weight: props.item.weight,
        width: props.item.size.width,
        height: props.item.size
    }

    return (
        <div className="form-update">
            <Formik initialValues={{
                  name: "name",
                  imageUrl: "image",
                  count: 1,
                  weight: "200g",
                  width: 200,
                  height: 200
            }} 
                onSubmit={
                    async values => {
                        console.log(values)
                        let {name, count, imageUrl, weight, width, height} = values;
                        if (textValidator(name, imageUrl, weight) && numberValidator(count, height, width)) {
                            let obj = {
                                name: name,
                                imageUrl: imageUrl,
                                count: count,
                                weight: weight,
                                size: {
                                    width: width,
                                    height: height,
                                },
                                comments: []
                            }
                            props.updateItem(props.item._id, obj);
                        } else {
                            alert("Invalid input");
                        }
                    }
                }
            >
                <Form>
                    <span>name</span><Field name="name" type="text" />
                    <span>imageUrl</span><Field name="imageUrl" type="text" />
                    <span>count</span><Field name="count" type="number" />
                    <span>weight</span><Field name="weight" type="text" />
                    <span>width</span><Field name="width" type="number" />
                    <span>height</span><Field name="height" type="number" />
                    <button type="submit">Update</button>
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
