import './Item.css'
import DemoImage from './image.png'

export default function Item(props) {
    const { data } = props
    return (
        <div className="itembox">
            <div>
                <img src={DemoImage} height={100}></img>
                <span
                    style={{
                        float: 'left',
                        marginLeft: '10px',
                        position: 'absolute',
                        marginTop: '18px',
                    }}
                >
                    {data.name}
                </span>
            </div>
            <div style={{ display: 'block', position: 'absolute' }}>
                <span
                    style={{
                        float: 'left',
                        marginLeft: '400px',
                    }}
                >
                    {data.company}
                </span>
                <p
                    style={{
                        float: 'left',
                        marginLeft: '400px',
                    }}
                >
                    {data.companyAddress}
                </p>
            </div>
            <div>
                <span>{data.price}</span>
                <p>{data.shipping}</p>
            </div>
            <div>
                <button style={{ display: 'block', float: 'right', marginBottom: '10px' }}>Add To Cart</button>
                <button style={{ display: 'block', float: 'right' }}>Make Offer</button>
            </div>
        </div>
    )
}
