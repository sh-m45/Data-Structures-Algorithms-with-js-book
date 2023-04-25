var list = [];
var container = 0;
function getItems() {
  this.item = 0;
  this.createList = createList;
}
function createList() {
  for (var i = 0; i < list.length; i++) {
    if (this.item > list[i]) {
      if (list[i] > container) {
        container = list[i];
      }
    }
  }
  if (this.item > container) {
    list.push(this.item);
    console.log(list);
  }
}
var insertItem = new getItems(); 
insertItem.item = 35 ;
insertItem.createList();