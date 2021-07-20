import React from 'react';

const PersonCard = ({ firstName, lastName }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://imgr.search.brave.com/9qLEmDG93EU-VN7n0-aEGxZGmRRacno1nGOy_BGFQmM/fit/600/600/no/1/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9hL2FmL1Np/bXBsZWljb25zX0lu/dGVyZmFjZV91c2Vy/LW1hbGUtYmxhY2st/c2lsaG91ZXR0ZS5z/dmcvNjAwcHgtU2lt/cGxlaWNvbnNfSW50/ZXJmYWNlX3VzZXIt/bWFsZS1ibGFjay1z/aWxob3VldHRlLnN2/Zy5wbmc`} height="200px" width="200px" />
      <div>
        <p>{firstName} {lastName}</p>
      </div>
    </div>
  );
}

export default PersonCard;
