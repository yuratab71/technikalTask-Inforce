import React from 'react'
import { Formik, Field, Form } from "formik";
import { textValidator, numberValidator } from "./validators/validators";
import { connect } from "react-redux";
import { addItem } from "../redux/mainReducer";

function CreateForm(props) {
    return (
        <div>
            <Formik initialValues={{
                name: "Name",
                imageUrl: "imageUrl",
                count: 1,
                weight: "weight",
                width: 200,
                height: 200
            }} 
                onSubmit={
                    async values => {
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
                            props.addItem(obj);
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
                    <button type="submit">Add</button>
                </Form>
            </Formik>
        </div>
    )
}

export const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, { addItem })(CreateForm)
