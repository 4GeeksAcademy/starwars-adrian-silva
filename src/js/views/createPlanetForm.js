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
		<div className="container mt-5">
			<h1 className="text-center mb-4">Create New Planet</h1>
			<div className="row justify-content-center">
				<div className="col-md-6">
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}
					>
						<Form>
							<div className="mb-3">
								<label htmlFor="name" className="form-label">Name</label>
								<Field name="name" type="text" className="form-control" />
								<ErrorMessage name="name" component="div" className="text-danger" />
							</div>
							<div className="mb-3">
								<label htmlFor="rotation_period" className="form-label">Rotation Period</label>
								<Field name="rotation_period" type="number" className="form-control" />
								<ErrorMessage name="rotation_period" component="div" className="text-danger" />
							</div>
							<div className="mb-3">
								<label htmlFor="orbital_period" className="form-label">Orbital Period</label>
								<Field name="orbital_period" type="number" className="form-control" />
								<ErrorMessage name="orbital_period" component="div" className="text-danger" />
							</div>
							<div className="mb-3">
								<label htmlFor="diameter" className="form-label">Diameter</label>
								<Field name="diameter" type="number" className="form-control" />
								<ErrorMessage name="diameter" component="div" className="text-danger" />
							</div>
							<div className="mb-3">
								<label htmlFor="climate" className="form-label">Climate</label>
								<Field name="climate" type="text" className="form-control" />
								<ErrorMessage name="climate" component="div" className="text-danger" />
							</div>
							<div className="mb-3">
								<label htmlFor="gravity" className="form-label">Gravity</label>
								<Field name="gravity" type="text" className="form-control" />
								<ErrorMessage name="gravity" component="div" className="text-danger" />
							</div>
							<div className="mb-3">
								<label htmlFor="terrain" className="form-label">Terrain</label>
								<Field name="terrain" type="text" className="form-control" />
								<ErrorMessage name="terrain" component="div" className="text-danger" />
							</div>
							<div className="mb-3">
								<label htmlFor="surface_water" className="form-label">Surface Water</label>
								<Field name="surface_water" type="number" className="form-control" />
								<ErrorMessage name="surface_water" component="div" className="text-danger" />
							</div>
							<div className="mb-3">
								<label htmlFor="population" className="form-label">Population</label>
								<Field name="population" type="number" className="form-control" />
								<ErrorMessage name="population" component="div" className="text-danger" />
							</div>
							<div className="d-grid">
								<button type="submit" className="btn btn-primary">Create Planet</button>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default CreatePlanetForm;
