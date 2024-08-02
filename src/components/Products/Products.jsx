import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import drinksData from '../../utils/data'
import { Select, MenuItem, InputLabel, FormControl, Box } from '@mui/material'

const Products = () => {
    // State to manage selected drink
    const [selectedDrink, setSelectedDrink] = useState('')

    // Handle dropdown change
    const handleChange = (event) => {
        setSelectedDrink(event.target.value)
    }

    // Filter drinks based on selected drink
    const filteredDrinks = selectedDrink
        ? drinksData.filter((drink) => drink.Drink === selectedDrink)
        : drinksData

    return (
        <div className='p-6 ' id='products'>
          
            
            <div className='grid grid-cols-1 sm:col-span-12 md:col-span-12 sm:grid-cols-12 gap-4 p-3 rounded-lg' style={{
                background: 'linear-gradient(to bottom right, #cb7601, #552c00, #422e15)',
                boxShadow: '0 0 10px 5px rgb(255, 178, 0,0.7)' // Gold glow shadow
            }}>
                <div
                    className='col-span-1 sm:col-span-12 md:col-span-12 lg:col-span-3 flex justify-center px-4 py-3'
                //   style={{
                //     background: 'linear-gradient(to bottom right, #cb7601, #552c00, #422e15)',
                //     boxShadow: '0 0 10px 5px rgb(255, 178, 0,0.2)', // Gold glow shadow
                //   }}
                >
                    
                    
                    <FormControl fullWidth variant="filled" className='px-4'>
                        <InputLabel id="drink-select-label">Select Drink</InputLabel>
                        <Select
                            labelId="drink-select-label"
                            id="drink-select"
                            value={selectedDrink}
                            onChange={handleChange}
                            label="Select Drink"
                        >
                            <MenuItem value="">All</MenuItem> {/* Option to show all */}
                            <MenuItem value="gin">Gin</MenuItem>
                            <MenuItem value="rum">Rum</MenuItem>
                            <MenuItem value="whisky">Whisky</MenuItem>
                            <MenuItem value="brandy">Brandy</MenuItem>
                            <MenuItem value="vodka">Vodka</MenuItem>
                        </Select>
                    </FormControl>
                   
                   
                </div>

                <div className='col-span-1 sm:col-span-12 md:col-span-12 lg:col-span-8 flex'>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                        {filteredDrinks.map((drink, index) => (
                            <Card
                                
                                key={index}
                                sx={{ maxWidth: 345 }}
                                style={{
                                    background: 'linear-gradient(to bottom right, #cb7601, #552c00, #422e15)',
                                    boxShadow: '0 0 10px 5px rgb(255, 178, 0,0.2)', // Gold glow shadow
                                }}
                            >
                                {/* Uncomment the following line if you want to display images */}
                                {/* <CardMedia
                  component="img"
                  height="140"
                  image={drink.Image}
                  alt={drink.Name}
                /> */}
                                <CardContent>
                                    <Typography variant="h5" component="div" color="white">
                                        {drink.Name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                                    <strong>Drink:</strong> {drink.Drink}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                                    <strong>Description:</strong> {drink.Description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
           
           
        </div>
    )
}

export default Products
