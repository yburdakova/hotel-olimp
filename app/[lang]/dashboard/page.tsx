
import Link from 'next/link';
import '../../../styles/globals.css'
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
        <div className="flex">
          <div className="mr-4">
            <Link href='#hotelcards'>main slider</Link>
          </div>
          <div className="mr-4">
            <Link href='#hotelcards'>hotel cards</Link>
          </div>
          <div className="">
            <Link href='#roomcards'>room cards</Link>
          </div>
        </div>
      </div>
      
      <HotelCards/>
      <RoomsCards/>
    </div>

  );
};

export default Dashboard;
