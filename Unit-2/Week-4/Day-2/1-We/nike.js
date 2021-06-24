// function product(n,p) {
//     var obj = {}
//     obj.name = n
//     obj.price = p
//     return obj
// }

// var pro1 = product('shoes', '2300')
// var pro2 = product('football', '1000')
// console.log(pro1,pro2)



// function product(n,p,d) {
    
//     this.name = n
//     this.price = p
//     this.desc = d

//     //return obj
// }

// console.log(new product('shoes', '2300', 'hjhdfgfg'))
// // var pro2 = new product('football', '1000','djgddgg')
// // console.log(pro1,pro2)



//Create a Newspaper factory pusblishing newspapapers. each newspaper should have a timestamp, random id, day of news, name of publisher.

// function newsPaper(time, id, news, name) {
//     this.time = time
//     this.id = id
//     this.news = news
//     this.name = name
// }
// day = ['sun','mon','tue','wed','thus','fri','sat']
// for (var i = 0; i < 10; i++) {
//     var id = Math.floor(Math.random() * 1000);
//     var d = new Date()
//     var pub = new newsPaper(d, id, day[d.getDay()], 'TOI')
//     console.log(pub)
// }


// function getDay1() {
//     var date = new Date();
//     return date.toString().substring(0,4)
// }

// function newsPaper(h) {
    
//     this.headline = h
//     this.id = Math.floor(Math.random()*1000)
//     this.day = getDay1();
//     this.publisher = 'TOI'
// }

// for (let i = 0; i < 10; i++){
//     var paper = new newsPaper('Ronaldo to leave juventus')
//     console.log(paper)
// }



//call, apply, bind


//call-------------
// var person1 = {

//     name: 'Jonny kumar',
    
// }

// var person2 = {

//     name: 'Happy Singh',
    
// }
// function createAddharId(n) {
//     this.id = Math.round(Math.random() * 1000);
//     this.name = n
//     }

// // person1.createAddharId()
// // person2.createAddharId()
// createAddharId.call(person1,'my name')
// createAddharId.call(person2,'your name')

// console.log(person1,person2)


//Q1----n is not defined
// function person(){
// this.name=n;
// this.time=t;
// }
// var newPerson = person(2,'Raj')
// console.log(newPerson)


// // Q2 --- no output
// function person(n){
// this.name = n;
// }
// person.call(person,'n');