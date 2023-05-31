import React, {useEffect, useState} from 'react';
import {
    CssBaseline,
    Rating,
    createTheme,
    IconButton,
    PaletteMode,
    ThemeProvider,
    useMediaQuery, Stack
} from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useLocalStorage } from 'usehooks-ts';
import {Movie, MovieDBResponse} from "./types/api";
import {AppDecorator} from "./theme/AppDecorator";
import {ThemeToggleButton} from "./theme/ThemeToggleButton";
import {ImageCell} from "./components/ImageCell";
import {columns} from "./config/columns";

function App() {
    return (
    <div className="App">
        <AppDecorator>
          <Content />
        </AppDecorator>
    </div>
  );
}

const Content = () => {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        (async () => {
            const url = process.env.REACT_APP_API_URL
            if (!url) return
            const data = await fetch(url).then(res => res.json()) as MovieDBResponse
            setMovies(data.results)
        })()
    }, [])
  return (
    <main>
      <div style={{ height: "auto", width: '100%' }}>
          <DataGrid
              rows={movies}
              columns={columns}
              getRowHeight={() => "auto"}
              getEstimatedRowHeight={() => 300}
              initialState={{
                  pagination: {
                      paginationModel: { page: 0, pageSize: 10 },
                  },
              }}
              slots={{
                  toolbar: props => <Stack alignItems='center' justifyContent='center'><ThemeToggleButton /></Stack>
              }}
          />
      </div>
  </main>
  )
}

export default App;
