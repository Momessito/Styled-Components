import {ButtonStyled} from './Components/Buttons.Style'
import {WrapperMain} from './Components/Wrapper.style'
function App() {
  return (
   <WrapperMain>
   <ButtonStyled ColorButton='green'>Hello World</ButtonStyled>
   <ButtonStyled>Hello World</ButtonStyled>
   </WrapperMain>
  );
}

export default App;
