
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
            main slider
          </div>
          <div className="mr-4">
            hotel cards
          </div>
          <div className="">
            room cards
          </div>
        </div>
      </div>
      
      <HotelCards/>
      <RoomsCards/>
    </div>

  );
};

export default Dashboard;
