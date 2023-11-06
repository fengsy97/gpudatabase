// import GPU from "./gpu/GPU";
import Nva from "./navigation/Navigation";
import Datatable from "./database/Datatable";
import Container from "react-bootstrap/Container";
import Counter from "./counter/Counter";
import './style/bootstrap.min.css';
function App() {
  return (
    <>
    <Nva />
    {/* <Counter /> */}
    <Container as="main" className="py-4 px-3 mx-auto">
    <hr className="mt-5 mb-4" />
      <Datatable />
    </Container>
    
    </>
  );
}

export default App;
