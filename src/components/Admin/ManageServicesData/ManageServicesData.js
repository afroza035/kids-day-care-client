import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ManageServicesData = ({classes}) => {
    const handelDelete = (id) => {
        fetch("https://lit-plateau-42557.herokuapp.com/delete/" + id, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((result) => {
              console.log("delete Successfully");
            });
    }
  return (
    <tbody>
      <tr>
        <td>{classes.tittle}</td>
        <td>{classes.age}</td>
        <td>{classes.classes}</td>
        <td>{classes.price}</td>
        <td>
          <button
            onClick={() => handelDelete(classes._id)}
            className="btn btn-danger"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ManageServicesData;
