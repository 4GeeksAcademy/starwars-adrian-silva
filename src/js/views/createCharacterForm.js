import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate, useNavigate } from "react-router";

const CharacterForm = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            height: '',
            mass: '',
            hair_color: '',
            skin_color: '',
            eye_color: '',
            birth_year: '',
            gender: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            height: Yup.number().required('Required'),
            mass: Yup.number().required('Required'),
            hair_color: Yup.string().required('Required'),
            skin_color: Yup.string().required('Required'),
            eye_color: Yup.string().required('Required'),
            birth_year: Yup.string().required('Required'),
            gender: Yup.string().required('Required'),
        }),
        onSubmit: (values, { setSubmitting, resetForm }) => {
            actions.addCharacter(values);
            setSubmitting(false);
            resetForm();
            navigate('/');
        },
    });

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Add New Character</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="invalid-feedback">{formik.errors.name}</div>
                    ) : null}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="height">Height</label>
                    <input
                        id="height"
                        name="height"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.height}
                        className={`form-control ${formik.touched.height && formik.errors.height ? 'is-invalid' : ''}`}
                    />
                    {formik.touched.height && formik.errors.height ? (
                        <div className="invalid-feedback">{formik.errors.height}</div>
                    ) : null}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="mass">Mass</label>
                    <input
                        id="mass"
                        name="mass"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mass}
                        className={`form-control ${formik.touched.mass && formik.errors.mass ? 'is-invalid' : ''}`}
                    />
                    {formik.touched.mass && formik.errors.mass ? (
                        <div className="invalid-feedback">{formik.errors.mass}</div>
                    ) : null}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="hair_color">Hair Color</label>
                    <input
                        id="hair_color"
                        name="hair_color"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.hair_color}
                        className={`form-control ${formik.touched.hair_color && formik.errors.hair_color ? 'is-invalid' : ''}`}
                    />
                    {formik.touched.hair_color && formik.errors.hair_color ? (
                        <div className="invalid-feedback">{formik.errors.hair_color}</div>
                    ) : null}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="skin_color">Skin Color</label>
                    <input
                        id="skin_color"
                        name="skin_color"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.skin_color}
                        className={`form-control ${formik.touched.skin_color && formik.errors.skin_color ? 'is-invalid' : ''}`}
                    />
                    {formik.touched.skin_color && formik.errors.skin_color ? (
                        <div className="invalid-feedback">{formik.errors.skin_color}</div>
                    ) : null}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="eye_color">Eye Color</label>
                    <input
                        id="eye_color"
                        name="eye_color"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.eye_color}
                        className={`form-control ${formik.touched.eye_color && formik.errors.eye_color ? 'is-invalid' : ''}`}
                    />
                    {formik.touched.eye_color && formik.errors.eye_color ? (
                        <div className="invalid-feedback">{formik.errors.eye_color}</div>
                    ) : null}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="birth_year">Birth Year</label>
                    <input
                        id="birth_year"
                        name="birth_year"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.birth_year}
                        className={`form-control ${formik.touched.birth_year && formik.errors.birth_year ? 'is-invalid' : ''}`}
                    />
                    {formik.touched.birth_year && formik.errors.birth_year ? (
                        <div className="invalid-feedback">{formik.errors.birth_year}</div>
                    ) : null}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="gender">Gender</label>
                    <input
                        id="gender"
                        name="gender"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.gender}
                        className={`form-control ${formik.touched.gender && formik.errors.gender ? 'is-invalid' : ''}`}
                    />
                    {formik.touched.gender && formik.errors.gender ? (
                        <div className="invalid-feedback">{formik.errors.gender}</div>
                    ) : null}
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CharacterForm;
