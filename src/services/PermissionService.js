export function start(data) {}

export function getPermissions() {
  return localStorage.getItem("permissions");
}

export function getPermission(id) {
  //return permissions.find((m) => m._id === id);
}

export function deletePermission(id) {
  //   let movieInDb = movies.find((m) => m._id === id);
  //   movies.splice(movies.indexOf(movieInDb), 1);
  //   return movieInDb;
}
