// src/pages/Dashboard.js
import RoleBasedContent  from './RoleBasedContent ';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <RoleBasedComponent allowedRoles={['admin']}>
        <button>Add User</button>
      </RoleBasedComponent>
    </div>
  );
};
