import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';

import Tmdb from '../apis/Tmdb';
import MovieCard from '../components/MovieCard';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await Tmdb.get("trending/movie/week");
                setMovies(fetchedMovies.data.results);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovies();
    }, []);

    return (
        <Grid container>
            {
                movies.map((movie, key) => (
                    <Grid item key={key} sm={12} md={6} lg={4}>
                        <MovieCard movie={movie}></MovieCard>
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default MovieList;