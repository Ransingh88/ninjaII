function Family(fn,mn) {
    this.fatherName = fn;
    this.motherName = mn;
}

let greatGrandParent = new Object;
Family.call(greatGrandParent,'Rama','Sita')

let grandParent = Object.create(greatGrandParent)
Family.call(grandParent, 'Rahul', 'Priya')

let parent = Object.create(grandParent)
Family.apply(parent,['Raj','sona'])

//console.log('parent: ', parent);
// console.log('grandParent: ', grandParent);
// console.log('greatGrandParent: ', greatGrandParent);
console.log(parent.__proto__.__proto__.__proto__.__proto__)