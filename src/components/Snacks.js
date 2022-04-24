import { Button, Card, CardActions, CardMedia, MenuItem, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './snacks.css'
import axios from 'axios'

function Snacks() {
  const getData = 'http://localhost:8081/shop/getItem'
  const [items, setitem] = useState([])
  const [quantity, setQuantity] = useState([])
  const [itemName, setitemName] = useState([])
  // value set hora hai bss...
  console.log(quantity);


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await axios.get(getData)
    setitem(res.data)
  }

  const handleInput = (event) => {
    // setQ(event.target.value)
    let newitem = []
    newitem = newitem.concat(quantity, event.target.value)
    setQuantity(newitem)

  }
  const handleClick = (e) => {
    let newItem = []
    newItem = newItem.concat(itemName, e)
    setitemName(newItem)
  }

  return (
    <div className='snack'>
      {
        items.map((i, index) => (
          <Card key={index} sx={{ width: 160, height: 200, marginLeft: '15px', marginBottom: '10px' }} elevation={5}>
            <CardMedia
              component='img'
              sx={{ height: 100, objectFit: 'contain', marginTop: '8px' }}
              image={i.img}
              alt=''
            />
            <div className='itemName'>
              <h3>{i.name}</h3>
              <span>₹{i.price}</span>
            </div>
            <div className='bottomPart'>
              <div className='select'>
                <Select size='small' input={0} onChange={handleInput}>
                  <MenuItem value={1 * i.price}>1</MenuItem>
                  <MenuItem value={2 * i.price}>2</MenuItem>
                  <MenuItem value={3 * i.price}>3</MenuItem>
                  <MenuItem value={5 * i.price}>5</MenuItem>
                  <MenuItem value={10 * i.price}>10</MenuItem>
                </Select>
              </div>

              <div className='addBtn'>
                <CardActions>
                  <Button variant='outlined' size='small' onClick={() => handleClick(i.name)}>Add</Button>
                </CardActions>
              </div>
            </div>
          </Card>
        ))

      }
    </div>
  )
}

export default Snacks