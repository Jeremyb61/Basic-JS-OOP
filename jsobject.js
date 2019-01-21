let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
function object(arr){
  for(var i = 0; i < arr.length; i++){
    Name = arr[i].name;
    Cohort = arr[i].cohort
    console.log('Name:' + ' ' +  Name + ' ' + 'Cohort:' + ' ' + Cohort)
  }

}
console.log(object(students));

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

function employ(arr){
  for(var a in arr){
    console.log(a);
    for(var i = 0; i < arr[a].length; i++){
    console.log(arr[a][i].last_name + ' ' + arr[a][i].first_name);
    }
  }
}
console.log(employ(users))