import { useState } from 'react'
import Item from './Item'

const InitialData = [
    { id: 1, name: 'Item One', price: 10, count: 0 },
    { id: 2, name: 'Item Two', price: 20, count: 0 },
    { id: 3, name: 'Item Three', price: 30, count: 0 },
    { id: 4, name: 'Item Four', price: 40, count: 0 },
    { id: 5, name: 'Item Five', price: 50, count: 0 },
]

export default function ItemScreen() {
    const [items, setItems] = useState(InitialData)

    function handleCountClick(id: number, count: number) {
        if (count < 0) {
            alert("Count can't be less than 0!")
            return
        }

        let tempData = [...items]
        tempData[id - 1] = {...tempData[id - 1], count}
        setItems(tempData)
    }
    return (
        <div>
            {items.map((i) => {
                return (
                    <Item
                        key={i.id}
                        data={{
                            id: i.id,
                            name: i.name,
                            price: i.price,
                            count: i.count,
                            handleCountClick,
                        }}
                    />
                )
            })}
        </div>
    )
}
