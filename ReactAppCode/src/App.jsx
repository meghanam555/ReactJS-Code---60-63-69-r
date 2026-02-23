// import Javascriptusage from "./Components/Javascriptusage"
// import React1 from "./Components/React1"

import { ClassComponentProps } from "./Props/ClassComponentProps"
// import FunctionalProps from "./Props/FunctionalProps"

// import { CounterApp } from "./StateManagement/CounterApp"

// import ConstructorBinding from "./StateManagement/ConstructorBinding"





// import Image from "./Multimedia/Image"

// import { ListRendering } from "./NestedComponents/ListRendering"
// import { NestedComponents } from "./NestedComponents/NestedComponents"



// import ClassComponent from "./Components1/ClassComponent"
// import Functional from "./Components1/Functional"

// import Styling2 from "./Styling/Styling2"

// import ExternalStyling from "./Styling/ExternalStyling"

// import Styling from "./Styling/Styling"




function App() {

  return (
    <>
    {/* <React1 /> */}
     {/* <Javascriptusage /> */}
     {/* <Styling /> */}
     {/* <ExternalStyling /> */}
     {/* <Styling2 /> */}
     {/* <Functional /> */}
     {/* <ClassComponent /> */}
{/* <NestedComponents /> */}
{/* <ListRendering /> */}
    {/* <Image /> */}
    {/* <ConstructorBinding /> */}
    {/* <CounterApp /> */}
    {/* <FunctionalProps name="Bunty"/> */}
    <ClassComponentProps name="Sundra" age={99} designation="Java Developer" place="Mumbai" ishadfood={false} skills={["HTML", "CSS", "JS", "React", "Java", "SQL"]} />
    <ClassComponentProps name="Sundri" age= {96} designation="Python Developer" place="Nellore" ishadfood={true} skills={["Java", "Python", "C", "C++" ]} / >
    <ClassComponentProps />
    <ClassComponentProps />
    <ClassComponentProps />
    </>
  )
}

export default App
