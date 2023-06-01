import React, {useEffect, useState} from 'react';
import {DataGrid, GridPaginationModel, GridSortModel} from '@mui/x-data-grid';
import {Movie, MovieDBResponse} from "./types/api";
import {AppDecorator} from "./theme/AppDecorator";
import {columns} from "./config/columns";
import {useLocalStorage} from "usehooks-ts";
import {Toolbar} from "./components/Toolbar";

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
    const [sortModel, setSortModel] = useLocalStorage<GridSortModel | undefined>('SortModel', undefined)
    const [paginationModel, setPaginationModel] = useLocalStorage<GridPaginationModel | undefined>('PaginationModel', {pageSize: 20, page: 0})
    const url = process.env.REACT_APP_API_URL || ''
    const [rowCount, setRowCount] = useState(0)
    const [page, setPage] = useState(1)

    useEffect(() => {
        (async () => {
            const page = (paginationModel?.page ? paginationModel.page : 0) + 1;
            const data = await fetch(url + `&page=${page}`).then(res => res.json()) as MovieDBResponse
            setMovies(data.results)
            setRowCount(data.total_pages)
        })()
    }, [])

    const handleChangePage = async (model: GridPaginationModel) => {
        const data = await fetch(url + `&page=${Number(model?.page) + 1}`).then(res => res.json()) as MovieDBResponse
        setMovies(data.results)
        setPaginationModel(model)
    }

  return (
    <main>
      <div style={{ height: "auto", width: '100%' }}>
          <DataGrid
              rows={movies || []}
              columns={columns}
              getRowHeight={(props) => 'auto'}
              onSortModelChange={setSortModel}
              sortModel={sortModel}
              paginationMode='server'
              rowCount={rowCount}
              onPaginationModelChange={handleChangePage}
              paginationModel={paginationModel}
              pageSizeOptions={[20]}
              slots={{
                  toolbar: Toolbar
              }}
          />
      </div>
  </main>
  )
}

export default App;
