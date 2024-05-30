import React, { useEffect, useMemo, useState } from "react";

import {Modal} from "bootstrap";

export default function AddEditBlogModal({addBlog, editBlog}) {

    const [blog, setBlog ] = useState();

    const modalEl = document.getElementById("addEditModalLabel");
    const addEditModal = useMemo(() => {
        return modalEl ? new Modal(modalEl) : null;
      }, [modalEl]);

    useEffect(() => {
        if (addBlog) {
            addEditModal.show();
        } 
    }, []);



  return (
    <div
      class="modal fade"
      id="addEditModal"
      tabindex="-1"
      aria-labelledby="addEditModalLabel"
      aria-hidden="true"
    >
        Launch Model
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="addEditModalLabel">
              Modal title
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
