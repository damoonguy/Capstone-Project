import React, { useEffect, useState, useMemo } from "react";
import { Modal } from "bootstrap";

import PropTypes from "prop-types";

import {
    updateUser,
    setEditUser,
} from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import FormImage from "../FormImage";

export default function EditProfileModal() {

  const dispatch = useDispatch();

  const { editUser } = useSelector((state) => state.auth);

  const user = JSON.parse(localStorage.getItem("user"));
  const modalEl = document.getElementById("editProfileModal");
  const editProfileModal = useMemo(() => {
    return modalEl ? new Modal(modalEl) : null;
  }, [modalEl]);

  const [authorEdit, setAuthorEdit] = useState();
  const [authImage, setAuthImage] = useState();

  useEffect(() => {
    if (editUser) {
      setAuthorEdit(editUser);
      setAuthImage(editUser?.image);
      editProfileModal?.show();
    }
  }, [editProfileModal, editUser]);

  const resetAuthor = () => {
    setAuthorEdit({
      firstName: "",
      lastName: "",
      bio: "",
      image: "",
    });
  };

  const buildFormData = () => {
    const formData = new FormData();
    formData.append("id", authorEdit._id);
    formData.append("image", authorEdit.image);
    formData.append("firstName", authorEdit.firstName);
    formData.append("lastName", authorEdit.lastName);
    formData.append("bio", authorEdit.bio);
    return formData;
  };

  const onSubmit = (e) => {
    e?.preventDefault();
    if (isFormValid()) {
      const authForm = buildFormData();
      dispatch(updateUser(authForm));
      resetAuthor();
      dispatch(setEditUser(null));
      editProfileModal?.hide();
    }
  };

  

  const onCloseModal = () => {
    resetAuthor();
    dispatch(setEditUser(null));
    editProfileModal.hide();
  };

  const isFormValid = () => {
    const form = document.getElementById("profileForm");
    form?.classList?.add("was-validated");
    return form?.checkValidity();
  };

  const onImageChange = (e) => {
    if (e?.target?.files?.length) {
      const file = e.target.files[0];
      setAuthImage(URL.createObjectURL(file));
      setAuthorEdit({ ...authorEdit, image: file });
    }
  };

  

  return (
    <div
      className="modal fade"
      id="editProfileModal"
      aria-labelledby="editProfileModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="editProfileModalLabel">
              Edit Profile
            </h1>
            <button
              type="button"
              className="btn-close"
              onClick={onCloseModal}
            ></button>
          </div>
          <FormImage image={authImage} onChange={onImageChange}/>
          <div className="modal-body">
            <form id="profileForm">
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={authorEdit?.firstName}
                  onChange={(e) => {
                    setAuthorEdit({ ...authorEdit, firstName: e.target.value });
                  }}
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={authorEdit?.lastName}
                  onChange={(e) => {
                    setAuthorEdit({ ...authorEdit, lastName: e.target.value });
                  }}
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="mb-3">
                <label htmlFor="bio" className="form-label">
                  Bio
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bio"
                  value={authorEdit?.bio}
                  onChange={(e) => {
                    setAuthorEdit({ ...authorEdit, bio: e.target.value });
                  }}
                ></input>
                <div className="valid-feedback">Looks good!</div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCloseModal}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={onSubmit}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
