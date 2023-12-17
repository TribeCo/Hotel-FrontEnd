import { useState, useEffect } from "react";
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
    Fab,
    Container,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";

const Reservations = () => {

    const [openDialog, setOpenDialog] = useState(false);
    const [selectedFoodId, setSelectedFoodId] = useState(null);

    const handleOpenDialog = (foodId) => {
        setOpenDialog(true);
        setSelectedFoodId(foodId);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedFoodId(null);
    };

    const handleStatusChange = (foodId) => {
        setOpenDialog(false);
        setSelectedFoodId(null);
        // Logic to change the status of the selected food item
        console.log(`Status change confirmed for food ${foodId}`);
    };


    const initialFoodList = [
        { id: 1, foodName: 'Burger', foodPrice: '10$', delivered: true },
        { id: 2, foodName: 'Pizza', foodPrice: '15$', delivered: false },
        // Add more food objects as needed
    ];

    const [foodList, setFoodList] = useState(initialFoodList);
    const [checkedRows, setCheckedRows] = useState({});

    // Update the checkedRows state based on the delivered status of the food items
    useState(() => {
        const updatedCheckedRows = {};
        initialFoodList.forEach((food) => {
            if (food.delivered) {
                updatedCheckedRows[food.id] = true;
            }
        });
        setCheckedRows(updatedCheckedRows);
    }, []);

    const handleCheckboxChange = (foodId) => {
        setCheckedRows({ ...checkedRows, [foodId]: !checkedRows[foodId] });
        handleOpenDialog(foodId);
        // Update the 'delivered' status of the food item
        const updatedFoodList = foodList.map((food) =>
            food.id === foodId ? { ...food, delivered: !food.delivered } : food
        );

        // Update the foodList state with the modified delivered status
        setFoodList(updatedFoodList);
    };
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper sx={{ padding: 2 }}>
                <Grid item>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            bgcolor: "#303030",
                            p: 2,
                        }}
                    >
                        <Typography variant="h5">رزرواسیون</Typography>
                    </Box>
                    <Divider />
                    <TableContainer>
                        <Table aria-label="caption table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>وضعیت تحویل</TableCell>
                                    <TableCell align="center">
                                        <Typography variant="h6">نام غذا</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography variant="h6">قیمت غذا</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography variant="h6">عملیات</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {foodList.map((food) => (
                                    <TableRow key={food.id}>
                                        <TableCell component="th" scope="row">
                                            <Checkbox
                                                checked={checkedRows[food.id] || false}
                                                onChange={() => handleCheckboxChange(food.id)}
                                            />
                                        </TableCell>
                                        <TableCell align="center">{food.foodName}</TableCell>
                                        <TableCell align="center">{food.foodPrice}</TableCell>
                                        <TableCell align="center">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                disabled={!checkedRows[food.id]}
                                                sx={{ width: 150 }}
                                            >
                                                {food.delivered ? 'تحویل داده شده' : 'تحویل داده نشده'}
                                            </Button>
                                            <Dialog
                                                open={openDialog && selectedFoodId === food.id}
                                                onClose={handleCloseDialog}
                                            >
                                                <DialogTitle>تغییر وضعیت</DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText>
                                                        آیا مطمئن هستید که می‌خواهید وضعیت را تغییر دهید؟
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={handleCloseDialog}>انصراف</Button>
                                                    <Button
                                                        onClick={() => handleStatusChange(food.id)}
                                                        autoFocus
                                                        color="primary"
                                                    >
                                                        تایید
                                                    </Button>
                                                </DialogActions>
                                            </Dialog>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Paper>
        </Container>
    );
};

export default Reservations;