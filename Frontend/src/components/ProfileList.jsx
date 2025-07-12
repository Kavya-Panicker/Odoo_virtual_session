import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import { useNavigate } from 'react-router-dom';

export const mockProfiles = [
  { id: 1, name: 'Marc Demo', photo: 'https://randomuser.me/api/portraits/men/32.jpg', skillsOffered: ['JavaScript', 'Python'], skillsWanted: ['Musician', 'Graphic designer'], rating: 3.9, isPublic: true, about: 'Experienced developer and musician.', availability: 'available', visibility: 'public', location: 'New York' },
  { id: 2, name: 'Michell', photo: 'https://randomuser.me/api/portraits/women/44.jpg', skillsOffered: ['JavaScript', 'Python'], skillsWanted: ['Musician', 'Graphic designer'], rating: 2.5, isPublic: true, about: 'Designer and coder.', availability: 'available', visibility: 'public', location: 'London' },
  { id: 3, name: 'Joe wills', photo: 'https://randomuser.me/api/portraits/men/65.jpg', skillsOffered: ['JavaScript', 'Python'], skillsWanted: ['Musician', 'Graphic designer'], rating: 4.0, isPublic: true, about: 'Full-stack developer with passion for music.', availability: 'weekends', visibility: 'public', location: 'Los Angeles' },
  { id: 4, name: 'Anna Smith', photo: 'https://randomuser.me/api/portraits/women/68.jpg', skillsOffered: ['React', 'Node.js'], skillsWanted: ['UI Designer'], rating: 4.2, isPublic: true, about: 'Frontend developer looking to learn UI design.', availability: 'available', visibility: 'public', location: 'Chicago' },
  { id: 5, name: 'John Doe', photo: 'https://randomuser.me/api/portraits/men/12.jpg', skillsOffered: ['Java', 'Spring'], skillsWanted: ['DevOps'], rating: 3.7, isPublic: true, about: 'Backend developer interested in DevOps practices.', availability: 'weekdays', visibility: 'public', location: 'Boston' },
  { id: 6, name: 'Priya Patel', photo: 'https://randomuser.me/api/portraits/women/21.jpg', skillsOffered: ['Python', 'Django'], skillsWanted: ['Frontend'], rating: 4.5, isPublic: true, about: 'Python developer wanting to learn frontend technologies.', availability: 'available', visibility: 'public', location: 'San Francisco' },
  { id: 7, name: 'Carlos Ruiz', photo: 'https://randomuser.me/api/portraits/men/23.jpg', skillsOffered: ['PHP', 'Laravel'], skillsWanted: ['React'], rating: 3.8, isPublic: true, about: 'PHP developer looking to expand into React development.', availability: 'weekends', visibility: 'public', location: 'Miami' },
  { id: 8, name: 'Sara Lee', photo: 'https://randomuser.me/api/portraits/women/50.jpg', skillsOffered: ['C#', '.NET'], skillsWanted: ['UX Researcher'], rating: 4.1, isPublic: true, about: '.NET developer interested in UX research methodologies.', availability: 'available', visibility: 'public', location: 'Seattle' },
  { id: 9, name: 'David Chen', photo: 'https://randomuser.me/api/portraits/men/45.jpg', skillsOffered: ['Python', 'Machine Learning'], skillsWanted: ['Web Development'], rating: 4.3, isPublic: true, about: 'ML engineer wanting to learn web development.', availability: 'weekdays', visibility: 'public', location: 'Austin' },
  { id: 10, name: 'Emma Wilson', photo: 'https://randomuser.me/api/portraits/women/33.jpg', skillsOffered: ['UI/UX Design', 'Figma'], skillsWanted: ['JavaScript'], rating: 4.0, isPublic: true, about: 'UI/UX designer looking to learn JavaScript programming.', availability: 'available', visibility: 'public', location: 'Portland' },
  { id: 11, name: 'Michael Brown', photo: 'https://randomuser.me/api/portraits/men/67.jpg', skillsOffered: ['DevOps', 'AWS'], skillsWanted: ['Python'], rating: 3.9, isPublic: true, about: 'DevOps engineer wanting to learn Python for automation.', availability: 'weekends', visibility: 'public', location: 'Denver' },
  { id: 12, name: 'Lisa Garcia', photo: 'https://randomuser.me/api/portraits/women/22.jpg', skillsOffered: ['Graphic Design', 'Illustration'], skillsWanted: ['Web Development'], rating: 4.4, isPublic: true, about: 'Graphic designer looking to learn web development.', availability: 'available', visibility: 'public', location: 'Phoenix' },
  { id: 13, name: 'James Taylor', photo: 'https://randomuser.me/api/portraits/men/89.jpg', skillsOffered: ['Mobile Development', 'React Native'], skillsWanted: ['Backend Development'], rating: 3.6, isPublic: true, about: 'Mobile developer wanting to learn backend development.', availability: 'weekdays', visibility: 'public', location: 'Nashville' },
  { id: 14, name: 'Sophie Martin', photo: 'https://randomuser.me/api/portraits/women/55.jpg', skillsOffered: ['Data Science', 'R'], skillsWanted: ['UI Design'], rating: 4.1, isPublic: true, about: 'Data scientist interested in learning UI design principles.', availability: 'available', visibility: 'public', location: 'Atlanta' },
  { id: 15, name: 'Robert Johnson', photo: 'https://randomuser.me/api/portraits/men/78.jpg', skillsOffered: ['Angular', 'TypeScript'], skillsWanted: ['Python'], rating: 3.8, isPublic: true, about: 'Angular developer wanting to learn Python for data analysis.', availability: 'weekends', visibility: 'public', location: 'Dallas' },
  { id: 16, name: 'Maria Rodriguez', photo: 'https://randomuser.me/api/portraits/women/41.jpg', skillsOffered: ['Vue.js', 'CSS'], skillsWanted: ['Node.js'], rating: 4.2, isPublic: true, about: 'Vue.js developer looking to learn Node.js backend development.', availability: 'available', visibility: 'public', location: 'Houston' },
  { id: 17, name: 'Thomas Anderson', photo: 'https://randomuser.me/api/portraits/men/91.jpg', skillsOffered: ['Docker', 'Kubernetes'], skillsWanted: ['Frontend Development'], rating: 3.9, isPublic: true, about: 'DevOps engineer wanting to learn frontend development.', availability: 'weekdays', visibility: 'public', location: 'Philadelphia' },
  { id: 18, name: 'Jennifer Lee', photo: 'https://randomuser.me/api/portraits/women/63.jpg', skillsOffered: ['WordPress', 'PHP'], skillsWanted: ['React'], rating: 3.7, isPublic: true, about: 'WordPress developer looking to learn React for modern web development.', availability: 'available', visibility: 'public', location: 'San Diego' },
  { id: 19, name: 'Marta Rossi', photo: 'https://randomuser.me/api/portraits/women/14.jpg', skillsOffered: ['PHP', 'Symfony'], skillsWanted: ['Laravel'], rating: 4.1, isPublic: true, about: 'PHP developer wanting to learn Laravel framework.', availability: 'weekends', visibility: 'public', location: 'Orlando' },
  { id: 20, name: 'Chen Wei', photo: 'https://randomuser.me/api/portraits/men/52.jpg', skillsOffered: ['Go', 'Microservices'], skillsWanted: ['DevOps'], rating: 4.0, isPublic: true, about: 'Go developer interested in learning DevOps practices.', availability: 'available', visibility: 'public', location: 'Las Vegas' },
];

const PROFILES_PER_PAGE = 10;

const ProfileList = ({ user, profiles, setProfiles }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(profiles.length / PROFILES_PER_PAGE);
  const startIdx = (currentPage - 1) * PROFILES_PER_PAGE;
  const paginatedProfiles = profiles.filter(p => p.isPublic).slice(startIdx, startIdx + PROFILES_PER_PAGE);

  return (
    <>
      <div className="users-heading">Users</div>
      <div className="profile-list scrollable-list">
        {paginatedProfiles.map(profile => (
          <ProfileCard 
            key={profile.id} 
            profile={profile} 
            onUserClick={() => navigate(`/user/${profile.id}`)} 
            clickable 
            user={user}
          />
        ))}
      </div>
      <div className="pagination">
        <button className="page-arrow" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>{'<'}</button>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx + 1}
            className={`page-btn${currentPage === idx + 1 ? ' active' : ''}`}
            onClick={() => handlePageChange(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
        <button className="page-arrow" disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>{'>'}</button>
      </div>
    </>
  );
};

export default ProfileList; 