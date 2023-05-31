import React, {useEffect, useState} from 'react';
import {CssBaseline, Rating} from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=1b87765ea4561e23121cdec6f335079b"
const API_IMG = "https://image.tmdb.org/t/p/w500"

type Response = {
    page:number
    results:Movie[]
    total_pages:number
    total_results:number
}

type Movie = {
    "adult":boolean,
    "backdrop_path": string,
    "genre_ids":string[],
    "id":number,
    "original_language":string,
    "original_title":string,
    "overview":string,
    "popularity":number,
    "poster_path":string,
    "release_date":string,
    "title":string,
    "video":boolean,
    "vote_average":number,
    "vote_count":number
}

function App() {
    return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Content />
    </div>
  );
}

const Header = () => {
  return <header></header>
}

const Content = () => {

    const [movies, setMovies] = useState<Movie[]>([])

    const columns: ({field: keyof Movie} & Omit<GridColDef, 'field'>)[] = [
        { field: 'id', headerName: 'ID', width: 90  },
        { field: 'original_title', headerName: 'Title', width: 130 },
        {
            field: 'poster_path',
            headerName: 'Poster',
            width: 220,
            sortable: false,
            renderCell: (data) => <img src={API_IMG+data.value} alt="poster" height={300} />
        },
        {
            field: 'original_language',
            headerName: 'Language',
            type: 'string',
            width: 140,
        },
        {
            field: 'release_date',
            headerName: 'Release date',
            width: 160,
        },
        {
            field: 'vote_average',
            headerName: 'Vote Average',
            width: 160,
            renderCell: (data) => <Rating name="read-only" value={data.value/2} readOnly />
        },
        {
            field: 'vote_count',
            headerName: 'Vote Count',
            width: 160,
        },
        {
            field: 'popularity',
            headerName: 'Popularity',
            width: 160,
        },
    ];

    useEffect(() => {
        (async () => {
            const data = await fetch(API_URL).then(res => res.json()) as Response
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
                      paginationModel: { page: 0, pageSize: 5 },
                  },
              }}
              pageSizeOptions={[5, 10]}
          />
      </div>
  </main>
  )
}

export default App;
