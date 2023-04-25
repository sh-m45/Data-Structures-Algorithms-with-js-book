function getItems() {
    this.item = 0;
    this.createList = createList;
   ;
  }
  var list = [20, 5, 15, 30]; 
  function createList (){
      for (var i = 0; i < list.length; i++) {
          if (this.item > list[i]) {
            return ;
          }
          else if(this.item < list[i]){
              if(list.indexOf(list[i]) == list.length-1){
                  list.push(this.item);
              }
         }
   }
   
  }
  var insertItem = new getItems(); 
  insertItem.item = 2 ;
  insertItem.createList();
  console.log(list)