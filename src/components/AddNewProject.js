import React, { useState } from "react";
import Modal from "./Modal";
import ProjectForm from "./ProjectForm";
import { Plus } from "react-bootstrap-icons";
import firebase from "../firebase";

function AddNewProject() {
  // STATE
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (projectName) {
      const projectsRef = firebase.firestore().collection("projects");

      projectsRef
        .where("name", "==", projectName)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            projectsRef.add({
              name: projectName,
            });
          } else {
            alert("Kategori Zaten Mevcut");
          }
        });

      setShowModal(false);
      setProjectName("");
    }
  }

  return (
    <div className="AddNewProject">
      <div className="add-button">
        <span onClick={() => setShowModal(true)}>
          <Plus size="20" />
        </span>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ProjectForm
          handleSubmit={handleSubmit}
          heading="Yeni Kategori!"
          value={projectName}
          setValue={setProjectName}
          setShowModal={setShowModal}
          confirmButtonText="+ Kategoriyi Ekle"
        />
      </Modal>
    </div>
  );
}

export default AddNewProject;
