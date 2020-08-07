import React, { Component } from "react";
import MyTable from "./common/MyTable";
import { Link } from "react-router-dom";

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
        <button
          onClick={() => this.props.onDelete(permission)}
          className="btn btn-danger btn-sm"
        >
          Remove
        </button>
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
