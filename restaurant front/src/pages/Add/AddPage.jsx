import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./AddPage.scss";
function AddPage() {
  const [search, setSearch] = useState("");
  const [dbData, setDbData] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  async function getFetch() {
    const response = await fetch("http://localhost:3003/");
    const data = await response.json();
    setDbData(data);
  }
  useEffect(() => {
    getFetch();
  }, []);

  async function postItem(values) {
    await fetch("http://localhost:3003/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    await getFetch();
  }
  async function deleteItem(id) {
    await fetch("http://localhost:3003/" + id, {
      method: "delete",
    });
    await getFetch();
  }
  function handleChange(value) {
    if (typeof value == "string") {
      return value.toLowerCase();
    } else {
      return value;
    }
  }
  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <Formik
        initialValues={{ image: "", title: "", detail: "", price: 0 }}
        validationSchema={Yup.object({
          image: Yup.string()
            .max(250, "Must be 15 characters or less")
            .required("Required"),
          title: Yup.string()
            .max(50, "Must be 20 characters or less")
            .required("Required"),
          detail: Yup.string()
            .max(200, "Must be 20 characters or less")
            .required("Required"),
          price: Yup.number()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            postItem(values);
            resetForm();
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="form">
          <label htmlFor="image">Image Url</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="detail">Detail</label>
          <Field name="detail" type="detail" />
          <ErrorMessage name="detail" />
          <label htmlFor="price">Price</label>
          <Field name="price" type="number" />
          <ErrorMessage name="price" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <input
        type="text"
        name=""
        id=" "
        placeholder="search name.."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setSortBy({ field: "title", asc: true })}>
        A-z
      </button>
      <button onClick={() => setSortBy({ field: "title", asc: false })}>
        Z-a
      </button>
      <button onClick={() => setSortBy({ field: "price", asc: true })}>
        Ucuz-Baha
      </button>
      <button onClick={() => setSortBy({ field: "price", asc: false })}>
        Baha-Ucuz
      </button>
      <button onClick={() => setSortBy(null)}>Default</button>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Detail</th>
            <th>Price</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {dbData
            .filter((item) =>
              item.title.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) => {
              if (!sortBy) {
                return 0;
              } else if (sortBy.asc) {
              return  handleChange(a[sortBy.field]) > handleChange(b[sortBy.field])
                  ? 1
                  : handleChange(b[sortBy.field]) > handleChange(a[sortBy.field])
                  ? -1
                  : 0;
              } else if (sortBy.asc == false) {
              return  handleChange(a[sortBy.field]) < handleChange(b[sortBy.field])
                  ? 1
                  : handleChange(b[sortBy.field]) < handleChange(a[sortBy.field])
                  ? -1
                  : 0;
              }
            })
            .map((item) => (
              <tr>
                <td>
                  <img src={item.image} alt="" />
                </td>
                <td>{item.title}</td>
                <td>{item.detail}</td>
                <td>${item.price}</td>
                <td>
                  <button onClick={() => deleteItem(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default AddPage;
