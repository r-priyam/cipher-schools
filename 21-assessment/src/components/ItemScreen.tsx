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
    let map: Map<number, any> = new Map()
    for (let item of InitialData) {
        map.set(item.id, item)
    }
    const [items, setItems] = useState(map)

    function handleCountClick(id: number, count: number) {
        if (count < 0) {
            alert('Not Allowed')
            return;
        }
        let testMap = new Map(items)
        let item = testMap.get(id)
        item.count = count
        setItems(testMap)
    }
    return (
        <div>
            {[...items.values()].map((currentItem, index) => {
                return <Item key={index} item={currentItem} handleCountClick={handleCountClick} />
            })}
        </div>
    )
}
