export function read_from_local_json() {
  var items_json = localStorage.getItem("cat_feed");
  var items = JSON.parse(items_json);

  if (!items) {
    items = [];
  }

  return items;
}
