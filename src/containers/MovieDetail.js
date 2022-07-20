import { Container, Card, CardMedia, Box, CardContent, Typography, Rating } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import Tmdb from '../apis/Tmdb';

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const MovieDetail = () => {
    const [movie, setMovie] = useState([]);
    const params = useParams();
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                if(params)
                {
                    const fetchedMovie = await Tmdb.get("movie/" + params.movieId);
                    setMovie(fetchedMovie.data);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovie();
    }, [params]);

    return (
        <Container sx={{ py: 8 }}>
            <Card sx={{ display: 'flex' }}>
                
                <CardMedia
                    component="img"
                    sx={{
                        width: 1/2
                    }}
                    image={`${BASE_IMAGE_URL}${movie.poster_path}`}
                    alt="Movie poster"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5">
                        {movie.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {new Date(movie.release_date).getFullYear()}
                    </Typography>
                    <Box
                        sx={{
                        width: 175,
                        display: 'flex',
                        alignItems: 'center',
                        }}
                    >
                        <Rating name="read-only" precision={0.1} value={movie.vote_average / 2} max={5} readOnly />
                        <Box sx={{ ml: 2 }}>{movie.vote_average}</Box>
                    </Box>
                    <Typography variant="h7">
                        {movie.overview}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}

export default MovieDetail;