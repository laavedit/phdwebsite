import React from 'react';
import './Team.css';

const teamMembers = [
  {
    name: 'Sandeep Minhas',
    role: 'Mananging Trustee',
    imageUrl: 'path_to_image_1.jpg',
  },
  {
    name: 'Aditi Chanchani',
    role: 'Trustee',
    imageUrl: 'path_to_image_2.jpg',
  },
  {
    name: 'Divya Verma',
    role: 'Trustee',
    imageUrl: 'path_to_image_3.jpg',
  },
  {
    name: 'Manu',
    role: 'Trustee',
    imageUrl: 'path_to_image_2.jpg',
  },
  {
    name: 'Avinash',
    role: 'Programme Incharge',
    imageUrl: 'path_to_image_3.jpg',
  },
  {
    name: 'Lalita Waldia',
    role: 'Programme Coordinator',
    imageUrl: 'path_to_image_3.jpg',
  },
  {
    name: 'Ushman Sharma',
    role: 'Community Specialist',
    imageUrl: 'path_to_image_3.jpg',
  },
  {
    name: 'Devender Sethi',
    role: 'IEC Material',
    imageUrl: 'path_to_image_3.jpg',
  },
  {
    name: 'Deepak Bharti',
    role: 'Admin Incharge',
    imageUrl: 'path_to_image_3.jpg',
  },
  {
    name: 'Guman Singh',
    role: 'Advisory Board',
    imageUrl: 'path_to_image_3.jpg',
  },
  {
    name: 'Kulbhushan Upamanyu',
    role: 'Advisory Board',
    imageUrl: 'path_to_image_3.jpg',
  },
  // Add more team members as needed
];


const Team = () => {
  return (
    <div className="team">
      <h2 className="team__title">Our Team</h2>
      <div className="team__members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team__member">
            {/* <img src={member.imageUrl} alt={member.name} className="team__member-image" />  */}
            <h3 className="team__member-name">{member.name}</h3>
            <p className="team__member-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
