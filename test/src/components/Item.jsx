import DemoImage from './image.png'

export default function Item(props) {
    const { data } = props
    return (
        <div className="w-full h-42 border m-4 border-black grid grid-cols-4">
            <div>
                <img src={DemoImage} className="h-20"></img>
                <span className="absolute ml-24 -mt-16">{data.name}</span>
                <span className="absolute ml-24 -mt-8">{data.tags}</span>
            </div>
            <div>
                <span className="relative -mt-16">{data.company}</span>
                <p>{data.companyAddress}</p>
            </div>
            <div>
                <span>${data.price}Aud</span>
                <p className="ml-4">+ ${data.shipping} Shipping</p>
            </div>
            <div className="absolute top-auto right-2 ml-auto inline-flex flex-col items-end justify-end">
                <button>Add To Cart</button>
                <button>Make Offer</button>
            </div>
        </div>
    )
}
