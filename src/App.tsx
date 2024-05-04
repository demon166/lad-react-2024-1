import MyButton from "./components/MyButton/MyButton";
import Profile from "./components/Profile/Profile";
function App() {
  const isLogged = true;
  const message = "asdas";

  return (
    <>
      { !!message.length &&  message }
      { isLogged && <Profile /> }
      <MyButton />
    </>
  )
}

export default App
