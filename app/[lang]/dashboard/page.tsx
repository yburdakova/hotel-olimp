
import Link from 'next/link';
import '../../../styles/global.css'
import HotelCards from './HotelCards/HotelCards';
import RoomsCards from './RoomCards/RoomCards';


const Dashboard = () => {

    return (
        <div className='component'>
        <div className="component_container">
        <div className="flex items-center justify-center mt-10 component_title">
                        <div className='line'></div>
                        <div className='dot'></div>
                        <div className="mx-3 text-center">ADMIN DASHBOARD</div>
                        <div className='dot'></div>
                        <div className='line'></div>
                    </div>
            <div className="flex w-[100%] justify-center">
            {/* <div className="mr-4">
                <Link href='#mainslider' className='mr-4 text-2xl uppercase'>main slider</Link>
            </div> */}
            <div className="mr-4">
                <Link href='#hotelcards'className='mr-4 text-2xl uppercase'>hotel cards</Link>
            </div>
            <div className="">
                <Link href='#roomcards'className='mr-4 text-2xl uppercase'>room cards</Link>
            </div>
            </div>
        </div>
        {/* <SliderCards/> */}
        <HotelCards/>
        <RoomsCards/>
        <div className="flex w-[100%] justify-center mb-20 mt-20">

            <div className="mr-4">
                <Link href='#hotelcards'className='mr-4 text-2xl uppercase'>hotel cards</Link>
            </div>
            <div className="">
                <Link href='#roomcards'className='mr-4 text-2xl uppercase'>room cards</Link>
            </div>
            </div>
        </div>

    );
};

export default Dashboard;