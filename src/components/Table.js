import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { IconButton, Tooltip } from "@mui/material";
import {
  DeleteOutline,
  EditOutlined,
  Sort,
  VisibilityRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { updateData } from "../redux/dataSlice";
import { fetchInstanceList } from '../redux/dataSlice';
import { useEffect,useState } from "react";
import SearchBar from "./searchBar";
import searchFunction from "../utility/searchFunction";
import SwapVertIcon from '@mui/icons-material/SwapVert';
import sortData from "../utility/sort";
import { filterValue } from "../redux/filterReducer";



const columns = [
  { id: "id", label: "id" },
  { id: "title", label: "title" },
  { id: "completed", label: "completed" },
  {
    id: "actions",
    label: "Actions",
    render: (data,dispatch) => {
      return (
        <>
          <Tooltip title="Edit">
            <Link onClick={() => dispatch(updateData(data))} to={"/edit"}>
              <IconButton>
                <EditOutlined />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton>
              <DeleteOutline />
            </IconButton>
          </Tooltip>
          <Tooltip onClick={() => dispatch(updateData(data))} to={"/edit"} >
            <IconButton>
              <VisibilityRounded />
            </IconButton>
          </Tooltip>
        </>
      );
    },
  },
];




export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchInstanceList());
  },[]);
  const state = useSelector((state) => state);
  const searchTerm=useSelector((state)=> state.search.value);
  console.log("state", state.instanceList.data);
  
  const rows= searchFunction(state.instanceList.data, searchTerm);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  
  return ( 
    <>
    <SearchBar/>
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                  <IconButton onClick={()=> dispatch(filterValue({
                                                                key:column.label
                                                                }))}>
                    <SwapVertIcon />
                  </IconButton>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.render ? (
                            column.render(row,dispatch)
                          ) : (
                            <>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </>
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 15, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}
