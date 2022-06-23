import { Component } from 'react'
import Item from './Item'

export default class ItemScreen extends Component {
    initialData = [
        { id: 1, name: 'Item One', price: 10, count: 0 },
        { id: 2, name: 'Item Two', price: 20, count: 0 },
        { id: 3, name: 'Item Three', price: 30, count: 0 },
        { id: 4, name: 'Item Four', price: 40, count: 0 },
        { id: 5, name: 'Item Five', price: 50, count: 0 },
    ]
    map: Map<number, any> = new Map()

    constructor(props: any) {
        super(props)
        for (let item of this.initialData) {
            this.map.set(item.id, item)
        }
        state = {
            items: this.map,
        }
    }

    handleCountClick(id: number, count: number) {
        if (count < 0) {
            alert('Not Allowed')
            return
        }
        let testMap = new Map(this.state.items)
        let item = testMap.get(id)
        item.count = count
        this.setState({ ...this.state, items: testMap })
    }

    render() {
        return (
            <div>
                {[...this.state.items.values()].map((currentItem, index) => {
                    return (
                        <Item
                            key={index}
                            item={currentItem}
                            handleCountClick={this.handleCountClick}
                        />
                    )
                })}
            </div>
        )
    }
}
