
import React from 'react';
import { useContext } from 'react';
import Layout from '../../layout/layout';
import { UserContext } from '../../layout/context/usercontext';
import { useEffect } from 'react';
import { response } from 'express';

const Profile = () => {
    const {UserDetails,setUserDetails}=useContext(UserContext)
    console.log(UserDetails,"userDetails")
    
  return (
    <Layout>
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* <img src="/profile-image.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" /> */}
        <h1 className="text-2xl font-bold text-center">{UserDetails.name}</h1>
        <p className="text-gray-600 text-center">User</p>
        <div className="mt-6">
          <p className="text-gray-800 font-semibold">Bio:</p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean euismod bibendum laoreet.
          </p>
        </div>
        <div className="mt-6">
          <p className="text-gray-800 font-semibold">Contact:</p>
          <p className="text-gray-600">Email: {UserDetails.email}</p>
          <p className="text-gray-600">Phone: (123) 456-7890</p>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Profile;
