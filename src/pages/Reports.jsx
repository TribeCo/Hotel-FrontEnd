import React from "react";
import {
	Box,
	Divider,
	Grid,
	Typography,
	Paper,
} from "@mui/material";

const Reports = () => {
    return (
        <>
        <Grid
            sx={{
                padding: 2,
            }}
            container
            spacing={2}>

                <Grid
                    item
                    xs={12}
                    md={4}>
                    <Paper
                        sx={{
                            padding: 2,
                        }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                p: 2,
                            }}>

                            <Typography>گزارش سالانه</Typography>
                        </Box>
                        <Divider />
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                p: 2,
                            }}>
                            <Typography>تعداد مهمهانان:‌ </Typography>
                            <Typography> {"-----"} نفر</Typography>           {/* TODO: set value from back-end?? */}
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                p: 2,
                            }}>
                            <Typography>مجموع درآمد رزرو اتاق ها: </Typography>
                            <Typography> {"---------"} تومان</Typography>     {/* TODO: set value from back-end?? */}
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                p: 2,
                            }}>
                            <Typography>مجموع درآمد رزرو غذاها: </Typography>
                            <Typography> {"---------"} تومان</Typography>     {/* TODO: set value from back-end?? */}
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                p: 2,
                            }}>
                            <Typography>مجموع درآمد کل: </Typography>
                            <Typography> {"---------"} تومان</Typography>     {/* TODO: set value from back-end?? */}
                        </Box>
                        <Divider />
                    </Paper>
                </Grid>

                <Grid
                    item
                    xs={12}
                    md={4}>
                    <Paper
                        sx={{
                            padding: 2,
                        }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                p: 2,
                            }}>

                            <Typography>گزارش ماهانه</Typography>
                        </Box>
                        <Divider />
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                p: 2,
                            }}>
                            <Typography>تعداد مهمهانان:‌ </Typography>
                            <Typography> {"-----"} نفر</Typography>           {/* TODO: set value from back-end?? */}
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                p: 2,
                            }}>
                            <Typography>مجموع درآمد رزرو اتاق ها: </Typography>
                            <Typography> {"---------"} تومان</Typography>     {/* TODO: set value from back-end?? */}
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                p: 2,
                            }}>
                            <Typography>مجموع درآمد رزرو غذاها: </Typography>
                            <Typography> {"---------"} تومان</Typography>     {/* TODO: set value from back-end?? */}
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                p: 2,
                            }}>
                            <Typography>مجموع درآمد کل: </Typography>
                            <Typography> {"---------"} تومان</Typography>     {/* TODO: set value from back-end?? */}
                        </Box>
                        <Divider />
                    </Paper>
                </Grid>

                <Grid
                    item
                    xs={12}
                    md={4}>
                    <Paper
                        sx={{
                            padding: 2,
                        }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                p: 2,
                            }}>

                            <Typography>گزارش روزانه</Typography>
                        </Box>
                        <Divider />
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                p: 2,
                            }}>
                            <Typography>تعداد مهمهانان:‌ </Typography>
                            <Typography> {"-----"} نفر</Typography>           {/* TODO: set value from back-end?? */}
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                p: 2,
                            }}>
                            <Typography>مجموع درآمد رزرو اتاق ها: </Typography>
                            <Typography> {"---------"} تومان</Typography>     {/* TODO: set value from back-end?? */}
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                p: 2,
                            }}>
                            <Typography>مجموع درآمد رزرو غذاها: </Typography>
                            <Typography> {"---------"} تومان</Typography>     {/* TODO: set value from back-end?? */}
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                p: 2,
                            }}>
                            <Typography>مجموع درآمد کل: </Typography>
                            <Typography> {"---------"} تومان</Typography>     {/* TODO: set value from back-end?? */}
                        </Box>
                        <Divider />
                    </Paper>
                </Grid>
        </Grid>
        </>
    );

}

export default Reports;