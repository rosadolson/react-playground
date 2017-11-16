const classes = [
  {
    name: 'Knitting for Beginners',
    length: 3,
    cost: 50,
    instructor: 'Suzy Moxley',
    location: 'Beads, Yarns and Threads'
  },
  {
    name: 'How to Tie a Tie',
    length: 1,
    cost: 100,
    instructor: 'Dr. Johnson',
    location: 'UC - 2nd floor, Room 101'
  },
  {
    name: 'Basket Weaving',
    length: 5,
    cost: 300,
    instructor: 'Phylis Taylor',
    location: 'Online'
  },
  {
    name: 'Intro to Guitar',
    length: 3,
    cost: 0,
    instructor: 'Professor Anderson',
    location: 'Music Building, Room 406'
  },
  {
    name: 'How to make Royal Icing for Sugar Cookies',
    length: 2,
    cost: 20,
    instructor: 'Ms. ButterBottom',
    location: 'The Good Food Store'
  },
  {
    name: 'FREE Resume Building Course',
    length: 2,
    cost: 0,
    instructor: 'Professor Haslam',
    location: 'UC - main floor'
  }
]

const mapNames = (arr) => {
  return arr.map(item => {
    return item.name
  })
}
// console.log(mapNames(classes))

const mapClasses = (arr) => {
  return arr.map(item => {
    return `${item.name} is ${item.length} hours long and costs $${item.cost}, it is located in ${item.location} `
  })
}
// console.log(mapClasses(classes))

const freeClasses = classes.filter(item => {
  return item.cost === 0
})
// console.log(freeClasses)

const onlineClasses = classes.filter(item => {
  return item.location === 'Online'
})
// console.log(onlineClasses)

// Use filter and/or map to only return the names of 
// classes that only take two hours or less and cost less than $50

const shortClasses = classes.filter(item => {
  return item.length <= 2 && item.cost < 50
}).map(item => {
  return item.name
})
// console.log(shortClasses)
