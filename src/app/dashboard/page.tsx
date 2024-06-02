
import React from 'react'; 
import DashboardPage from '../../components/DashboardPage';

const Dashboard: React.FC = () => {
  const username ='';
  return (
    <div>
      <DashboardPage username={username} />
    </div>
  );
};

export default Dashboard;