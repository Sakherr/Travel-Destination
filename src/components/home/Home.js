import Tours from "../tours/Tours";
function Home(props) 
{
  return (
    <>
     <Tours data = {props.data}/>;
    </>
  );
}



export default Home;