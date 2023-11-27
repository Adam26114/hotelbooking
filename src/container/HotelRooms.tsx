import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

const HotelRooms = ({ data }) => {
    if (data.length === 0) return <p className="text-center py-6 text-2xl">No Result Found</p>;
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-5 px-10">
            {data?.map((data, idx) => (
                <li key={`room${idx + 1}`}>
                    <Card>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={data.img}
                            title={`room${idx + 1}`}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {data.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                className=" line-clamp-3"
                            >
                                {data.description}
                            </Typography>
                        </CardContent>
                        <CardActions className=" flex justify-end">
                            <Button size="small">
                                <Link to={`/rooms/${data.id}`}>Read More</Link>
                            </Button>
                        </CardActions>
                    </Card>
                </li>
            ))}
        </ul>
    );
};

export default HotelRooms;
