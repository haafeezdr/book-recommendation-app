
import React from 'react'; 
import DashboardPage from '../../components/DashboardPage';

const Dashboard: React.FC = () => {
  const username ='';
  return (
    <div className='bg-green-50'>
      <DashboardPage username={username} />
    </div>
  );
};

export default Dashboard;