import Item from './Item'

const ItemsData = [
    {
        name: 'Nord Stage 3 88 Keys',
        tags: ['Brand New', 'Free Shipping', '15 % Off'],
        company: 'E.M.L.A Music',
        companyAddress: 'Le Havre, France',
        price: 5738.0,
        shipping: 195,
    },
    {
        name: 'Line 6 Helix Rack Guitar',
        tags: ['Brand New'],
        company: 'ProMusicTools',
        companyAddress: 'Germany',
        price: 1831.57,
        shipping: 244.36,
    },
    {
        name: 'Nord Lead A1',
        tags: ['Brand New', 'Free Shipping'],
        company: 'Gear Garage',
        companyAddress: 'Dulwich Hill, Australia',
        price: 1700,
        shipping: 205,
    },
    {
        name: 'Moog Subsequent 37',
        tags: ['Free Shipping'],
        company: 'TURNLAB',
        companyAddress: 'Antwerpen, Belgium',
        price: 1700,
        shipping: 205,
    },
    {
        name: 'Moog Minitaur 2010s Black',
        tags: [],
        company: 'Andrew Gear Outlet',
        companyAddress: 'CA, United States',
        price: 682.8,
        shipping: 42,
    },
]

export default function ItemScreen() {
    return (
        <div>
            {ItemsData.map((item) => (
                <Item data={item} />
            ))}
        </div>
    )
}
