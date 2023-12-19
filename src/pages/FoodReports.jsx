import React from "react";
import {
	Box,
	Divider,
	Grid,
	Typography,
	Button,
	Paper,
	TableRow,
	TableHead,
	TableContainer,
	TableCell,
	TableBody,
	Table,
} from "@mui/material";
import { AttachMoneyOutlined, ListRounded } from '@mui/icons-material';

const FoodReports = () => {
    const rows = [
        { earnedMoney: '$4000', soldFood: '15 items' },
        { earnedMoney: '$2500', soldFood: '10 items' },
        { earnedMoney: '$6000', soldFood: '20 items' },
    ];

    return (
        <Grid container spacing={2} mt={1}>
            <Grid item xs={12} md={4}>
                <Paper sx={{ padding: 2 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            p: 2,
                        }}
                    >
                        <Typography> گزارش سالانه </Typography>
                    </Box>
                    <Divider />
                    <TableContainer>
                        <Table aria-label="caption table 1">
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography mb={3}>تعداد غذا های رزرو شده:</Typography>
                                        <Typography >مجموع درآمد رزرو غذا ها:</Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Box mb={3}>{rows[0].soldFood}</Box>
                                        <Box >{rows[0].earnedMoney}</Box>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
                <Paper sx={{ padding: 2 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            p: 2,
                        }}
                    >

                        <Typography> گزارش ماهانه </Typography>
                    </Box>
                    <Divider />
                    <TableContainer>
                        <Table aria-label="caption table 1">
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography mb={3}>تعداد غذا های رزرو شده:</Typography>
                                        <Typography >مجموع درآمد رزرو غذا ها:</Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Box mb={3}>{rows[1].soldFood}</Box>
                                        <Box >{rows[1].earnedMoney}</Box>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
            <Paper sx={{ padding: 2 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            p: 2,
                        }}
                    >

                        <Typography> گزارش روزانه </Typography>
                    </Box>
                    <Divider />
                    <TableContainer>
                        <Table aria-label="caption table 1">
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography mb={3}>تعداد غذا های رزرو شده:</Typography>
                                        <Typography >مجموع درآمد رزرو غذا ها:</Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Box mb={3}>{rows[2].soldFood}</Box>
                                        <Box >{rows[2].earnedMoney}</Box>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default FoodReports;