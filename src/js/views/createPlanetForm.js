import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CreatePlanetForm = () => {
  // Define el esquema de validación con Yup
  const PlanetSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    rotation_period: Yup.number().required("Rotation period is required"),
    orbital_period: Yup.number().required("Orbital period is required"),
    diameter: Yup.number().required("Diameter is required"),
    climate: Yup.string().required("Climate is required"),
    gravity: Yup.string().required("Gravity is required"),
    terrain: Yup.string().required("Terrain is required"),
    surface_water: Yup.number().required("Surface water is required"),
    population: Yup.number().required("Population is required"),
  });

  // Función para manejar el envío del formulario
  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      const response = await fetch(process.env.BACKEND_URL + "/planet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus({ msg: data.msg });
      } else {
        setStatus({ error: data.msg });
      }
    } catch (error) {
      setStatus({ error: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Create a New Planet</h2>
      <Formik
        initialValues={{
          name: "",
          rotation_period: "",
          orbital_period: "",
          diameter: "",
          climate: "",
          gravity: "",
          terrain: "",
          surface_water: "",
          population: "",
        }}
        validationSchema={PlanetSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>

            <div>
              <label htmlFor="rotation_period">Rotation Period</label>
              <Field type="number" name="rotation_period" />
              <ErrorMessage name="rotation_period" component="div" />
            </div>

            <div>
              <label htmlFor="orbital_period">Orbital Period</label>
              <Field type="number" name="orbital_period" />
              <ErrorMessage name="orbital_period" component="div" />
            </div>

            <div>
              <label htmlFor="diameter">Diameter</label>
              <Field type="number" name="diameter" />
              <ErrorMessage name="diameter" component="div" />
            </div>

            <div>
              <label htmlFor="climate">Climate</label>
              <Field type="text" name="climate" />
              <ErrorMessage name="climate" component="div" />
            </div>

            <div>
              <label htmlFor="gravity">Gravity</label>
              <Field type="text" name="gravity" />
              <ErrorMessage name="gravity" component="div" />
            </div>

            <div>
              <label htmlFor="terrain">Terrain</label>
              <Field type="text" name="terrain" />
              <ErrorMessage name="terrain" component="div" />
            </div>

            <div>
              <label htmlFor="surface_water">Surface Water</label>
              <Field type="number" name="surface_water" />
              <ErrorMessage name="surface_water" component="div" />
            </div>

            <div>
              <label htmlFor="population">Population</label>
              <Field type="number" name="population" />
              <ErrorMessage name="population" component="div" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Create Planet
            </button>
            {status && status.msg && <div className="success-message">{status.msg}</div>}
            {status && status.error && <div className="error-message">{status.error}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreatePlanetForm;
