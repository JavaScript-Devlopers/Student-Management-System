import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const ReusableForm = ({
  fields,
  formik,
  btn_name,
  title,
  additional_field,
  closeBtn,
}) => {
  const location = useLocation();
  const [passwordVisible, setPasswordVisible] = useState({});
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (event, index, name) => {
    if (event.target.files[0].size > 420000) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please  Select file less then 420KB",
      });
      event.target.value = "";
      return;
    } else {
      const file = event.target.files[0];
      const newPreviews = [...previews];

      newPreviews[index] = URL.createObjectURL(file);
      setPreviews(newPreviews);

      const reader = new FileReader();
      reader.onload = () => {
        formik.setFieldValue(name, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        className="row"
        style={{
          height: `${title === "addgroup" ? "65vh" : ""}`,
          overflowY: `${title === "addgroup" ? "scroll" : ""}`,
        }}
      >
        <div className={`row`}>
          {fields?.map((field, index) => (
            <>
              {field.type === "text" ? (
                <>
                  <div className={`col-lg-${field.col_size}`}>
                    <div className="mb-3 row flex-column">
                      <label
                        className={`col-lg-${field.label_size}`}
                        htmlFor={field.name}
                      >
                        {field.label}
                        <span className="text-danger">*</span>
                      </label>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          style={{ background: field.disable ? "#eeeeee" : "" }}
                          id={field.name}
                          placeholder={`Enter ${field.label}`}
                          {...formik.getFieldProps(field.name)}
                          readOnly={field.disable}
                        />
                        <div className="invalid-feedback">
                          Please enter {field.label}
                        </div>
                        {formik.touched[field.name] &&
                          formik.errors[field.name] && (
                            <div className="error-text">
                              {formik.errors[field.name]}
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                </>
              ) : field.type === "number" ? (
                <>
                  <div className={`col-lg-${field.col_size}`}>
                    <div className="mb-3 row flex-column">
                      <label
                        className={`col-lg-${field.label_size}`}
                        htmlFor={field.name}
                      >
                        {field.label}
                        <span className="text-danger">*</span>
                      </label>
                      <div>
                        <input
                          type="number"
                          className="form-control"
                          style={{ background: field.disable ? "#eeeeee" : "" }}
                          id={field.name}
                          placeholder={`Enter ${field.label}`}
                          {...formik.getFieldProps(field.name)}
                          readOnly={field.disable}
                        />
                        <div className="invalid-feedback">
                          Please enter {field.label}
                        </div>
                        {formik.touched[field.name] &&
                          formik.errors[field.name] && (
                            <div className="error-text">
                              {formik.errors[field.name]}
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                </>
              ) : field.type === "email" ? (
                <>
                  <div className={`col-lg-${field.col_size}`}>
                    <div className="mb-3 row flex-column">
                      <label
                        className={`col-lg-${field.label_size}`}
                        htmlFor={field.name}
                      >
                        {field.label}
                        <span className="text-danger">*</span>
                      </label>
                      <div>
                        <input
                          type="email"
                          className="form-control"
                          style={{ background: field.disable ? "#eeeeee" : "" }}
                          id={field.name}
                          placeholder={`Enter ${field.label}`}
                          {...formik.getFieldProps(field.name)}
                          readOnly={field.disable}
                        />
                        <div className="invalid-feedback">
                          Please enter {field.label}
                        </div>
                        {formik.touched[field.name] &&
                          formik.errors[field.name] && (
                            <div className="error-text">
                              {formik.errors[field.name]}
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                </>
              ) : field.type === "password" ? (
                <>
                  <div className={`col-lg-${field.col_size}`}>
                    <div className="mb-3 row">
                      <label
                        className={`col-lg-${field.label_size}`}
                        htmlFor={field.name}
                      >
                        {field.label}
                        <span className="text-danger">*</span>
                      </label>
                      <div style={{ position: "relative" }}>
                        <input
                          id={field.name}
                          autoFocus={index === 0 ? true : false}
                          type={
                            passwordVisible[field.name] ? "text" : field.type
                          }
                          placeholder={field.label}
                          {...formik.getFieldProps(field.name)}
                          className="form-control"
                        />
                        <i
                          className={`fa-solid ${
                            passwordVisible[field.name]
                              ? "fa-eye-slash"
                              : "fa-eye"
                          }`}
                          style={{
                            position: "absolute",
                            top: "1.5px",
                            right: "20px",
                            padding: "12.4px 6.6px",
                            borderRadius: "3px",
                          }}
                          onClick={() =>
                            setPasswordVisible((prevState) => ({
                              ...prevState,
                              [field.name]: !prevState[field.name],
                            }))
                          }
                        ></i>
                        {formik.touched[field.name] &&
                          formik.errors[field.name] && (
                            <div className="error-text">
                              {formik.errors[field.name]}
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                </>
              ) : field.type === "select" ? (
                <>
                  <div
                    className={`col-lg-${
                      title === "update_theme" ? 12 : field.col_size
                    }`}
                  >
                    <div className=" row">
                      <label
                        className={`col-lg-${field.label_size}`}
                        htmlFor={field.name}
                      >
                        {field.label}
                        <span className="text-danger">*</span>
                      </label>
                      <div
                        className={`col-lg-${title === "addgroup" ? 12 : 12}`}
                      >
                        <select
                          className="default-select wide form-select"
                          id={field.name}
                          autoFocus={index === 0 ? true : false}
                          style={{ background: field.disable ? "#eeeeee" : "" }}
                          {...formik.getFieldProps(field.name)}
                          disabled={field.disable}
                        >
                          <option value="" selected disable={field.disable}>
                            {" "}
                            Please Select {field.label}{" "}
                          </option>
                          {field.options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {formik.touched[field.name] &&
                          formik.errors[field.name] && (
                            <div className="error-text">
                              {formik.errors[field.name]}
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                </>
              ) : field.type === "checkbox" ? (
                <>
                  {field.options && field.options.length > 0 ? (
                    <>
                      {field.options &&
                        field.options.map((option, index) => (
                          <>
                            <div
                              className={`col-lg-${field.col_size}`}
                              key={option.id}
                            >
                              <div className="row d-flex">
                                <div className={`col-lg-${field.col_size}`}>
                                  <div className="form-check custom-checkbox mb-3">
                                    <input
                                      type={field.type}
                                      className="form-check-input"
                                      id={option.label}
                                      {...formik.getFieldProps(option.name)}
                                    />
                                    <label
                                      className="form-check-label"
                                      for={option.label}
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                  {formik.touched[field.name] &&
                                    formik.errors[field.name] && (
                                      <div className="error-text">
                                        {formik.errors[field.name]}
                                      </div>
                                    )}
                                </div>
                              </div>
                            </div>
                          </>
                        ))}
                    </>
                  ) : (
                    <>
                      <div className={`col-lg-${field.col_size}`}>
                        <div className="row d-flex">
                          <div>
                            <div className="form-check custom-checkbox mb-3">
                              <input
                                type={field.type}
                                className="form-check-input"
                                id={field.label}
                                {...formik.getFieldProps(field.name)}
                                checked={field.check_box_true}
                              />
                              <label
                                className="form-check-label"
                                for={field.label}
                              >
                                {field.label}
                              </label>
                            </div>
                            {formik.touched[field.name] &&
                              formik.errors[field.name] && (
                                <div className="error-text">
                                  {formik.errors[field.name]}
                                </div>
                              )}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </>
              ) : field.type === "radio" ? (
                <>
                  <label
                    className={`col-lg-${field.label_size} col-form-label fw-bold text-decoration-underline`}
                    htmlFor={field.parent_label}
                  >
                    {field.parent_label}
                  </label>

                  <div className={`d-flex`}>
                    <div
                      className={`col-lg-${field.col_size} form-check custom-checkbox my-3`}
                    >
                      <input
                        type={field.type}
                        name={field.name}
                        value={field.value1}
                        className=" form-check-input"
                        id={field.title1}
                        {...formik.getFieldProps(field.name)}
                      />
                      <label
                        className={`col-lg-${field.label_size} col-form-label mx-2`}
                        for={field.title1}
                      >
                        {field.title1}
                      </label>
                    </div>
                    <div
                      className={`col-lg-${field.col_size} form-check custom-checkbox my-3`}
                    >
                      <input
                        type={field.type}
                        name={field.name}
                        value={field.value2}
                        className={
                          formik.touched[field.name] &&
                          formik.errors[field.name]
                            ? "form-check-input error-field"
                            : " form-check-input"
                        }
                        id={field.title2}
                        {...formik.getFieldProps(field.name)}
                      />
                      <label
                        className={`col-lg-${field.label_size} col-form-label  mx-2`}
                        for={field.name}
                      >
                        {field.title2}
                      </label>
                    </div>
                  </div>
                </>
              ) : field.type === "date" ? (
                <>
                  <div className="col-lg-3">
                    <div className="row d-flex">
                      <div className="col-lg-12 ">
                        <div className="form-check custom-checkbox mb-3">
                          <label className="col-lg-6 " for={field.name}>
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            name={field.name}
                            className=" form-control"
                            id={field.name}
                            {...formik.getFieldProps(field.name)}
                            readOnly={field.disable}
                          />
                        </div>
                        {formik.touched[field.name] &&
                          formik.errors[field.name] && (
                            <div className="error-text">
                              {formik.errors[field.name]}
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                </>
              ) : field.type === "file" ? (
                <>
                  <div className={`col-lg-${field.col_size}`}>
                    <div className="row d-flex">
                      <div className="mb-3">
                        <label
                          className={`col-form-${field.label_size}`}
                          htmlFor={field.name}
                        >
                          {field.label}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="file"
                          id={field.name}
                          onChange={(e) =>
                            handleFileChange(e, index, field.name)
                          }
                          className=" form-control"
                        />
                      </div>
                      <img
                        src={formik.getFieldProps(field.name).value}
                        name={field.name}
                        id={field.name}
                        alt={`Preview ${index}`}
                        className={`col-lg-11 ms-3 mb-3 border border-2`}
                        style={{
                          height: formik.getFieldProps(field.name).value
                            ? "150px"
                            : "",
                          width: "95%",
                        }}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className={` col-lg-${field.col_size}`}>
                    <div className="mb-3  mt-4 row flex-column">
                      <label
                        className={`col-lg-${field.label_size}`}
                        htmlFor={field.name}
                      >
                        {field.label}
                      </label>
                      <div></div>
                    </div>
                  </div>
                </>
              )}
            </>
          ))}
        </div>
        {additional_field}
        <div className="modal-footer mt-4 mb-0">
          <button
            type="button"
            className="btn btn-outline-secondary rounded  "
            onClick={closeBtn}
          >
            <i className="fa fa-xmark"></i> Cancel
          </button>
          <button
            className={`btn btn-pink rounded  ${
              location.pathname === "resetpassword" ? "col-md-11" : ""
            }`}
            type="submit"
            disabled={formik.isSubmitting}
          >
            <i className="far fa-save"></i> {btn_name}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReusableForm;