import React from 'react'

const HogCard = ({hog}) => {
  return (
    <div className="hidden">
      <p>Name: {hog.name}</p>
      <p>Specialty: {hog.specialty}</p>
      <p>Greased: {hog.greased}</p>
      <p>Weight: {hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
      <p>Medal: {hog['highest medal achieved']}</p>
    </div>
  )
}

export default HogCard
