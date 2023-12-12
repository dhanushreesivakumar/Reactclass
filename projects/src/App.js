
import ArrowPromps from "./Day4/ArrowPromps";
import Parent from "./Day4/Parentchildcom";
import PropsClass from "./Day4/PropsClass";
import PropsFunction from "./Day4/PropsFunction";
import TwowayBinding from "./Day4/Twowaybinding";
import DefaultProps from "./Day4/defaultprops";
import Multiprops from "./Day4/multiprops";
import StateClass from "./Day4/stateclass";
import Classcom from "./components/classcom";
import Functionalcom from "./components/functionalcom";
import Hello from "./components/twocom";
export default function App()
{
  return(
    <div>
      <Functionalcom/>
      <Classcom/>
      <Hello/>
      <PropsFunction name="dhanu"/>
      <PropsClass name="anu"/>
      <Multiprops name="rithivika" college="IIT kanpur"/>
      <StateClass/>
      <ArrowPromps place="coimbatore"/>
      <TwowayBinding/>
      <DefaultProps/>
      <Parent/>
    </div>
  )
}