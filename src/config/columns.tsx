import { Movie } from '../types/api'
import { GridColDef } from '@mui/x-data-grid'
import { Rating } from '@mui/material'
import React from 'react'
import {
    Cell,
    DefaultCell,
    ImageCell,
    OriginalDateCell,
    OriginalIdCell,
    OriginalLanguageCell,
    OriginalTitleCell,
    OriginalVoteCell,
} from '../components/Cell'

export const columns: ({ field: keyof Movie } & Omit<GridColDef, 'field'>)[] = [
    {
        field: 'id',
        headerName: 'ID',
        flex: 1,
        minWidth: 100,
        renderCell: (data) => <OriginalIdCell>{data.value}</OriginalIdCell>,
    },
    {
        field: 'original_title',
        headerName: 'Title',
        flex: 1,
        minWidth: 100,
        renderCell: (data) => (
            <OriginalTitleCell>{data.value}</OriginalTitleCell>
        ),
    },
    {
        field: 'poster_path',
        headerName: 'Poster',
        flex: 1,
        minWidth: 200,
        sortable: false,
        renderCell: (data) => (
            <DefaultCell>
                <ImageCell src={data.value} />
            </DefaultCell>
        ),
    },
    {
        field: 'original_language',
        headerName: 'Language',
        type: 'string',
        flex: 1,
        minWidth: 100,
        renderCell: (data) => (
            <OriginalLanguageCell>{data.value}</OriginalLanguageCell>
        ),
    },
    {
        field: 'release_date',
        headerName: 'Release date',
        flex: 1,
        minWidth: 100,
        renderCell: (data) => <OriginalDateCell>{data.value}</OriginalDateCell>,
    },
    {
        field: 'vote_average',
        headerName: 'Vote Average',
        flex: 1,
        minWidth: 150,
        renderCell: (data) => (
            <DefaultCell>
                <Rating name="read-only" value={data.value / 2} readOnly />
            </DefaultCell>
        ),
    },
    {
        field: 'vote_count',
        headerName: 'Vote Count',
        flex: 1,
        minWidth: 100,
        renderCell: (data) => <OriginalVoteCell>{data.value}</OriginalVoteCell>,
    },
    {
        field: 'popularity',
        headerName: 'Popularity',
        flex: 1,
        minWidth: 100,
        renderCell: Cell,
    },
]
