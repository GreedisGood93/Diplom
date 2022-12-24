import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { NewsFeed } from "./components/NewsFeed";
import SecondBar from "./components/SecondBar";
import { SideBar } from "./components/SideBar";
import { NavBar } from "./components/NavBar";
import { AddNewPost } from "./components/AddNewPost";
function App() {
  return (
    <div>
      <Box>
        <NavBar />
        <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
          <SideBar />
          <NewsFeed />
          <SecondBar />
        </Stack>
        <AddNewPost />
      </Box>
    </div>
  );
}

export default App;
