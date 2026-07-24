import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

function PageTable({ pages, loading, onDelete }) {
  const columns = [
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },
    {
      field: "slug",
      headerName: "Slug",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={
            params.value === "Published"
              ? "success"
              : "warning"
          }
          size="small"
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1.5,
      sortable: false,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <Link to={`/pages/edit/${params.row._id}`}>
            <Button
              variant="contained"
              size="small"
            >
              Edit
            </Button>
          </Link>

          <Button
            color="error"
            variant="contained"
            size="small"
            onClick={() => onDelete(params.row._id)}
          >
            Delete
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <DataGrid
      rows={pages}
      columns={columns}
      loading={loading}
      getRowId={(row) => row._id}
      autoHeight
      disableRowSelectionOnClick
      pageSizeOptions={[5]}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
    />
  );
}

export default PageTable;