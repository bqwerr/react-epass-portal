import React, { Component } from "react";
import MyTable from "./common/MyTable";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

class PermissionsTable extends Component {
  columns = [
    {
      path: "fullname",
      label: "Full Name",
      content: (permission) => (
        <Link
          to={{
            pathname: `/dashboard/${permission.permission_id}`,
            state: { permission },
          }}
          permission={permission}
        >
          {permission.fullname}
        </Link>
      ),
    },
    { path: "phone", label: "Phone" },
    { path: "document_type", label: "Proof Provided" },
    { path: "document_ref", label: "Proof Ref" },
    { path: "travellers", label: "Travellers" },
    { path: "permission_name", label: "Type" },
    { path: "instant", label: "Date" },
    {
      key: "Delete",
      content: (permission) => (
        <div>
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            className="text-danger"
            icon={faTrash}
            title="trash"
            onClick={() => this.props.onDelete(permission)}
          ></FontAwesomeIcon>
          <br />
          <br />
          {permission.status === "accepted" ? (
            <span className="text-success text-center" title="accepted">
              <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
            </span>
          ) : null}
        </div>
      ),
    },
  ];

  render() {
    const { permissions, onSort, sortColumn } = this.props;

    return (
      <MyTable
        columns={this.columns}
        data={permissions}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default PermissionsTable;
