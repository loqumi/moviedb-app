import {Movie} from "../types/api";
import {GridColDef} from "@mui/x-data-grid";
import {ImageCell} from "../components/ImageCell";
import {Rating} from "@mui/material";
import React from "react";

export const columns: ({field: keyof Movie} & Omit<GridColDef, 'field'>)[] = [
    { field: 'id', headerName: 'ID', width: 90  },
    { field: 'original_title', headerName: 'Title', width: 130 },
    {
        field: 'poster_path',
        headerName: 'Poster',
        width: 220,
        sortable: false,
        renderCell: (data) => <ImageCell src={data.value} />
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