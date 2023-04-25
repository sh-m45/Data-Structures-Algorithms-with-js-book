function studentGrades() {
    this.grades = {};
    this.add = add;
    this.averageGrades = averageGrades;
}

function add(student){
    Object.assign(this.grades , student);
}

function averageGrades(){
    let allGrades = this.grades
    for(const item in allGrades){
    const totalSubjects = allGrades[item];
    let SumGrades = 0 ;
    for(const subject in totalSubjects){
        SumGrades += totalSubjects[subject]; 
    }
    console.log("Average is : ", SumGrades/Object.keys(totalSubjects).length);
    }
}

var thisWeek = new studentGrades();
thisWeek.add({student1 : {"Math": 90, "English": 95, "programming": 90, "Science": 85}});
thisWeek.add({student2 : {"Math": 80, "English": 75, "programming": 95, "Science": 75}});
thisWeek.add({student3 : {"Math": 85, "English": 90, "programming": 80, "Science": 95}});
thisWeek.averageGrades();
console.log(Object.keys(thisWeek.grades));
