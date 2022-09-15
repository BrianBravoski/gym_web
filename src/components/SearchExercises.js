import React, { useState, useEffect } from 'react';

import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import HorizontalScrollBar from './HorizontalScrollBar';
import { fetchData, exerciseOptions } from '../utils/fetchData';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData]);
        };

        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData
                ('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const SearchedExercises = exercisesData.filter
                ((exercise) => exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
                );

            setSearch('');
            setExercises(SearchedExercises)
        }
    }

    return (
        <Stack alignItems='center' mt="37px"
            justifyContent="center" p="20px"
        >
            <Typography fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: '30px' } }}
                md="50px" textAlign='center'>
                Awesome Exercises You <br />
                Should Know
            </Typography>
            <Box position="relative" mv="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none', borderRadius: '4px'
                        },
                        width: { lg: '800px', xs: '300px' },
                        backgroundColor: '#fff',
                        borderRadius: '40px'
                    }}

                    height="76px"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"

                />
                <Button className="search-btn"
                    sx={{
                        backgroundColor: '#1C3879',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0'


                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollBar data={bodyParts} bodyParts bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        </Stack>
    )
}

export default SearchExercises