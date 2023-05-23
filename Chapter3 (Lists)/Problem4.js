
function movieName(num, name) {
    this.num = num;
    this.name = name;
}
// var moviesList = [
//     { "1": "The Shawshank Redemption" },
//     { "2": "The Godfather" },
//     { "3": "The Godfather: Part II" },
//     { "4": "Pulp Fiction" },
//     { "5": "The Good, the Bad and the Ugly" },
//     { "6": "12 Angry Men" },
//     { "7": "Schindler’s List" },
//     { "8": "The Dark Knight" },
//     { "9": "The Lord of the Rings: The Return of the King" },
//     { "10": "Fight Club" },
//     { "11": "Star Wars: Episode V - The Empire Strikes Back" },
//     { "12": "One Flew Over the Cuckoo’s Nest" },
// ];
// var markDownData = [];
// function getData() {
//     for (var i = 0; i < moviesList.length; ++i) {
//         moviesList.push(moviesList[i]);
//         console.log(Object.values(customer)[1]);
//         console.log(movies[i]);
//     }
// }

async function getData() {
    await fetch("file:/C:\Users\Shrouk_Mamdoh\Desktop\Data Structures & Algorithms with Javascript (O'REILLY) Book\Chapter3 (Lists)\films.txt").then(function (response) {
        response.text().then(function (text) {
          console.log(text);

            var movies = text.split("\n");
            for (var i = 0; i < movies.length; ++i) {
                moviesList.push(movies[i]);
                console.log(Object.values(customer)[1]);
                console.log(movies[i]);
            }
            for (var i = 0; i < moviesList.length; ++i) {

                if (movies[i].localeCompare(Object.values(customer)[1])) {
                    console.log("Doneeee");
                    // moviesList.splice(i, 1);
                    console.log(moviesList);
                    return;
                }
            }
        });
    });
}

var customer = new movieName("1", "The Shawshank Redemption ");
getData();




// const container = document.getElementsByClassName("container");
// let div ;
// for(let i=0; i<5; i++){
//   div = document.createElement("div");
//   div.onclick = function(){
//     window. alert("this is box #" + i);
//   };
//   container.appendChild(div);
// }