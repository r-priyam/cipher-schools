interface ItemProp {
    data: {
        id: number
        name: string
        price: number
        count: number
        handleCountClick: (id: number, count: number) => any
    }
}

export default function Item(prop: ItemProp) {
    const { data } = prop
    return (
        <div>
            <h1>{data.name}</h1>
            <p>{`Count: ${data.count}`}</p>
            <p>{`Final Price: ${data.price * data.count}`}</p>
            <div>
                <button onClick={() => data.handleCountClick(data.id, data.count + 1)}>
                    Increase
                </button>
                <button onClick={() => data.handleCountClick(data.id, data.count - 1)}>
                    Decrease
                </button>
            </div>
        </div>
    )
}
