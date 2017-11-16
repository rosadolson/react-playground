import React from 'react'
import data from './data'
import ClassInfo from './ClassInfo'

const App = () => {
  console.table(data)
  return (
    <div>
      <div>
        {
          // data.map(item => {
          //   return (
          //     <ClassInfo item={item} />
          //   )
          // })
        }
      </div>
      <div>
        {
          // data.filter(item => {
          //   return item.cost === 0
          // }).map(item => {
          //   return <ClassInfo item={item} />
          // })
        }
      </div>
      <div>
        {
          // data.filter(item => {
          //   return item.length === 1
          // }).map(item => {
          //   return <ClassInfo item={item} />
          // })
        }
      </div>
      <div>
        {
          data.filter(item => {
            return item.instructor.split(' ')[0] === 'Professor'
          }).map(item => {
            return <ClassInfo item={item} />
          })
        }
      </div>
    </div>
  )
}

export default App
