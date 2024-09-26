import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { NYTimesProvider } from "./context/nytimescontext";
import { ArticleDetailPage } from "./pages/ArticleDetailPage/ArticleDetailPage";
import { ArticlePage } from "./pages/ArticlePage/ArticlePage";
import createTheme from "@mui/material/styles/createTheme";
import { ThemeProvider } from "@mui/material/styles";
// Create a custom theme with dark background
const theme = createTheme({
  palette: {
      mode: 'dark', // Enable dark mode
      background: {
          default: '#121212', // Dark background color
      },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <NYTimesProvider>
        <Routes>
          <Route path="/" element={<ArticlePage></ArticlePage>}></Route>
          <Route
            path="/article/:id"
            element={<ArticleDetailPage></ArticleDetailPage>}
          ></Route>
        </Routes>
      </NYTimesProvider>
    </div>
    </ThemeProvider>
  );
};

export default App;
