import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { NewsFeed } from "./components/NewsFeed";
import SecondBar from "./components/SecondBar";
import { SideBar } from "./components/SideBar";
import { NavBar } from "./components/NavBar";
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
      </Box>
    </div>
  );
}

export default App;
