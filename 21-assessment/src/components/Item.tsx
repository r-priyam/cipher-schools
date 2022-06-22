export default function Item(props: any) {
    const { item, handleCountClick } = props
    return (
        <div>
            <h1>{item.name}</h1>
            <p>{`Count: ${item.count}`}</p>
            <p>{`Final Price: ${item.price * item.count}`}</p>
            <div>
                <button onClick={() => handleCountClick(item.id, item.count + 1)}>Increase</button>
                <button onClick={() => handleCountClick(item.id, item.count - 1)}>Decrease</button>
            </div>
        </div>
    )
}
