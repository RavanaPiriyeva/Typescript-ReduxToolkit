import { CircularProgress ,Paper } from '@mui/material';
import  {DataGrid } from "@mui/x-data-grid";
import React from 'react'
import { useSelector } from 'react-redux';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IUser } from '../models/User';

const User = () => {
    const { users, loading } = useSelector((state:any) => state.userReducer);
    
        return (
        <>
      {loading ? (
        <CircularProgress />
      ) : (
        <div style={{ height: 600, width: "100%" }}>

          <div className="adminorder">
            <TableContainer
                sx={{ width: "80%", margin: "100px auto 30px" }}
                component={Paper}
            >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Id</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>User name</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Addres</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Company</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users &&
                            users.map((row:IUser , index:number) => (
                                <TableRow key={index} >
                                    <TableCell>{index}</TableCell>
                                    <TableCell>{row.username}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.address.city+ " ," + row.address.street}</TableCell>
                                    <TableCell>{row.company.name}</TableCell>

                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        </div>
      )}
    </>
    )
}

export default User
