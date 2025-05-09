import React, { useState } from 'react';

function RoleDropdown() {
  // --- State ---
  // Store the currently selected role. Initialize with a default value.
  const [selectedRole, setSelectedRole] = useState('user'); // Default to 'User'

  // --- Options ---
  // Define the available roles
  const roles = ['User', 'Admin'];

  // --- Event Handler ---
  // This function will be called when the user selects a different option
  const handleRoleChange = (event) => {
    const newRole = event.target.value;
    setSelectedRole(newRole);
    // You can perform other actions here based on the new role,
    // like sending it to an API or updating parent component state.
    console.log('Selected Role:', newRole);
  };

  // --- Render ---
  return (
    <div>
      {/* Label for accessibility */}
      <label htmlFor="role-select" className="block text-gray-700 text-sm font-bold mb-1">Role</label>

      {/* The select dropdown element */}
      <select className='shadow appearance-none border rounded w-50 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id="role-select"
        value={selectedRole} // Controlled component: value is tied to state
        onChange={handleRoleChange} // Call handler when the value changes
      >
        {/* Optional: Add a disabled default option if you don't want a pre-selection */}
        {/* <option value="" disabled>-- Select a Role --</option> */}

        {/* Map over the roles array to create option elements */}
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
     

      {/* Optional: Display the selected role
      <p style={{ marginTop: '10px' }}>
        Current Role: <strong>{selectedRole}</strong>
      </p> */}
    </div>
  );
}

export default RoleDropdown;