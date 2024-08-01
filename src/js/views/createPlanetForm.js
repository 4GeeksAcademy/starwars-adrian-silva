import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { Context } from "../store/appContext";

const CreatePlanetForm = () => {
  const { actions } = useContext(Context);

  const initialValues = {
    name: "",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "",
    gravity: "",
    terrain: "",
    surface_water: "",
    population: ""
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    rotation_period: Yup.number().required("Required"),
    orbital_period: Yup.number().required("Required"),
    diameter: Yup.number().required("Required"),
    climate: Yup.string().required("Required"),
    gravity: Yup.string().required("Required"),
    terrain: Yup.string().required("Required"),
    surface_water: Yup.number().required("Required"),
    population: Yup.number().required("Required")
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    actions.addPlanet(values).then(() => {
      setSubmitting(false);
      resetForm();
    });
  };

  return (
    <div>
      <h1>Create New Planet</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="rotation_period">Rotation Period</label>
            <Field name="rotation_period" type="number" />
            <ErrorMessage name="rotation_period" component="div" />
          </div>
          <div>
            <label htmlFor="orbital_period">Orbital Period</label>
            <Field name="orbital_period" type="number" />
            <ErrorMessage name="orbital_period" component="div" />
          </div>
          <div>
            <label htmlFor="diameter">Diameter</label>
            <Field name="diameter" type="number" />
            <ErrorMessage name="diameter" component="div" />
          </div>
          <div>
            <label htmlFor="climate">Climate</label>
            <Field name="climate" type="text" />
            <ErrorMessage name="climate" component="div" />
          </div>
          <div>
            <label htmlFor="gravity">Gravity</label>
            <Field name="gravity" type="text" />
            <ErrorMessage name="gravity" component="div" />
          </div>
          <div>
            <label htmlFor="terrain">Terrain</label>
            <Field name="terrain" type="text" />
            <ErrorMessage name="terrain" component="div" />
          </div>
          <div>
            <label htmlFor="surface_water">Surface Water</label>
            <Field name="surface_water" type="number" />
            <ErrorMessage name="surface_water" component="div" />
          </div>
          <div>
            <label htmlFor="population">Population</label>
            <Field name="population" type="number" />
            <ErrorMessage name="population" component="div" />
          </div>
          <button type="submit">Create Planet</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreatePlanetForm;
