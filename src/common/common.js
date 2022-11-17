export default function save_to_local_json(items) {
  var items_json = JSON.stringify(items);

  localStorage.setItem("cat_feed", items_json);
}

// export default function read_from_local_json() {
//   var items_json = localStorage.getItem("cat_feed");
//   items = JSON.parse(items_json);

//   if (!items) {
//     items = [];
//   }
// }
