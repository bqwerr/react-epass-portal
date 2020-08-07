import React, { Component } from "react";
import MyListGroup from "./common/ListGroup";
import MyPagination from "./common/Pagination";
import { getTypes } from "../services/TypeService";
import PermissionsTable from "./PermissionsTable";
import { paginate } from "../services/PaginateService";
import _ from "lodash";
import axios from "axios";
import SearchBox from "./SearchBox";

export default class Dashboard extends Component {
  state = {
    permissions: [],
    types: [],
    currentPage: 1,
    pageSize: 3,
    searchQuery: "",
    sortColumn: { path: "travellers", order: "desc" },
  };

  componentDidMount() {
    if (localStorage.getItem("authToken") != null) {
      var data = "";
      var config = {
        method: "get",
        url: "http://localhost:8080/api/permission/all",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("authToken"),
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          if (response.data != null) {
            const types = [{ _id: "", name: "All Permissions" }, ...getTypes()];
            this.setState({ permissions: response.data, types });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const types = [{ _id: "", name: "All Permissions" }, ...getTypes()];
      this.setState({ permissions: [], types });
    }
  }

  handleTypeSelect = (type) => {
    this.setState({ selectedType: type, searchQuery: "", currentPage: 1 });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleDelete = (permission) => {
    const permissions = this.state.permissions.filter(
      (p) => p.instant !== permission.instant
    );
    this.setState({ permissions });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedType: null, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedType,
      searchQuery,
      permissions: allPermissions,
    } = this.state;

    let filtered = allPermissions;
    if (searchQuery)
      filtered = allPermissions.filter((p) =>
        p.fullname.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedType && selectedType._id)
      filtered = allPermissions.filter((p) => p.reason === selectedType.name);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const permissions = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: permissions };
  };

  render() {
    const { length: count } = this.state.permissions;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    const { totalCount, data: permissions } = this.getPagedData();

    if (count === 150)
      return (
        <p className="text-white">There are no Permissions Registered yet.</p>
      );

    return (
      <div className="row">
        <div className="col-md">
          <MyListGroup
            types={this.state.types}
            selectedType={this.state.selectedType}
            onTypeSelect={this.handleTypeSelect}
          />
        </div>
        <div className={"col-md-9"}>
          <p className={"text-white"}>
            Showing all {totalCount} Permissions in the Database.
          </p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <PermissionsTable
            permissions={permissions}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <MyPagination
            totalCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}
