import React from "react";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableContainer,
    Grid,
    Typography,
    Paper,
} from "@mui/material";

const ReservationList = ({ roomList, foodList }) => {
    //TODO: use roomList and foodList instead of foodReservations and foomReservations 
    const foodReservations = [
        { id: 1, name: "چلو بادمجان", meal: "نهار" },
        { id: 2, name: "چلو کباب", meal: "شام" }
    ];

    const roomReservations = [
        { id: 1, name: "101", checkIn: "1399/10/10", checkOut: "1399/10/12" },
        { id: 2, name: "201", checkIn: "1399/10/15", checkOut: "1399/10/20" }
    ];

    return (
        <Grid
            container
            spacing={2}
        >
            <Grid item xs={12} sm={7} mt={2}>
                <Paper sx={{ p: 2, background: '#1f1f1f' }}>
                    <Typography variant="h5">لیست رزرو اتاق</Typography>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><Typography>نام اتاق</Typography></TableCell>
                                    <TableCell><Typography>تاریخ ورود</Typography></TableCell>
                                    <TableCell><Typography>تاریخ خروج</Typography></TableCell>
                                </TableRow>
                            </TableHead>


                            <TableBody>
                                {roomReservations.map(row => (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.checkIn}</TableCell>
                                        <TableCell>{row.checkOut}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={5} mt={2}>
                <Paper sx={{ p: 2, background: '#1f1f1f' }}>
                    <Typography variant="h5">لیست رزرو غذا</Typography>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><Typography>نام غذا</Typography></TableCell>
                                    <TableCell><Typography>وعده غذایی</Typography></TableCell>
                                </TableRow>
                            </TableHead>


                            <TableBody>
                                {foodReservations.map(row => (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.meal}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default ReservationList;
