import React, { useEffect, useState } from 'react'
import { DataGrid, GridColumnVisibilityModel, GridPaginationModel, GridSortModel } from '@mui/x-data-grid'
import { Movie, MovieDBResponse } from './types/api'
import { AppDecorator } from './theme/AppDecorator'
import { columns } from './config/columns'
import { useLocalStorage } from 'usehooks-ts'
import { Toolbar } from './components/Toolbar'

function App() {
    return (
        <div className="App">
            <AppDecorator>
                <Content />
            </AppDecorator>
        </div>
    )
}

const Content = () => {
    const maxHeight = 300
    const minHeight = 100
    const [movies, setMovies] = useState<Movie[]>([])
    const [sortModel, setSortModel] = useLocalStorage<GridSortModel | undefined>('SortModel', undefined)
    const [paginationModel, setPaginationModel] = useLocalStorage<GridPaginationModel | undefined>('PaginationModel', {
        pageSize: 20,
        page: 0,
    })
    const [columnVisibilityModel, setColumnVisibilityModel] = useLocalStorage<GridColumnVisibilityModel | undefined>(
        'ColumnVisibilityModel',
        undefined
    )
    const [rowHeight, setRowHeight] = useLocalStorage('RowHeight', maxHeight)
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    const [rowCount, setRowCount] = useState(0)

    useEffect(() => {
        ;(async () => {
            const page = (paginationModel?.page ? paginationModel.page : 0) + 1
            const data = (await fetch(url + `&page=${page}`).then((res) => res.json())) as MovieDBResponse
            setMovies(data.results)
            setRowCount(data.total_pages)
            if (columnVisibilityModel && 'poster_path' in columnVisibilityModel) {
                setRowHeight(columnVisibilityModel.poster_path ? maxHeight : minHeight)
            }
        })()
    }, [])

    const handleChangePage = async (model: GridPaginationModel) => {
        const data = (await fetch(url + `&page=${Number(model?.page) + 1}`).then((res) =>
            res.json()
        )) as MovieDBResponse
        setMovies(data.results)
        setPaginationModel(model)
    }

    const handleChangeColumnVisible = (model: GridColumnVisibilityModel) => {
        setRowHeight(model.poster_path ? maxHeight : minHeight)
        setColumnVisibilityModel(model)
    }

    const getRowHeight = () => {
        return rowHeight < maxHeight ? 'auto' : rowHeight
    }

    return (
        <main>
            <DataGrid
                rows={movies || []}
                columns={columns}
                rowHeight={rowHeight}
                getRowHeight={getRowHeight}
                onSortModelChange={setSortModel}
                sortModel={sortModel}
                paginationMode="server"
                rowCount={rowCount}
                onPaginationModelChange={handleChangePage}
                paginationModel={paginationModel}
                columnVisibilityModel={columnVisibilityModel}
                onColumnVisibilityModelChange={handleChangeColumnVisible}
                pageSizeOptions={[20]}
                slots={{
                    toolbar: Toolbar,
                }}
            />
        </main>
    )
}

export default App
