import React from 'react';

const TileCard = ({ tileName, clickEvent }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5' onClick={clickEvent}>
      <img alt='robots' src={`https://imgr.search.brave.com/K8a1EpwJcvod8iYwcrYzH1QftHGS_-M-y6mAR287Xdc/fit/512/512/no/1/aHR0cHM6Ly9pbWFn/ZXMudmV4ZWxzLmNv/bS9tZWRpYS91c2Vy/cy8zLzEyNjYyMy9p/c29sYXRlZC9wcmV2/aWV3LzRmMDdmODVh/Mzc1OTIwZThmNjEy/MzM0MWY2NDVlZDIw/LXRyaXNrZWxpb24t/aWNvbm8tYnVkaXN0/YS1ieS12ZXhlbHMu/cG5n`} height="200px" width="200px" />
      <div>
        <p>{tileName}</p>
      </div>
    </div>
  );
}

export default TileCard;
