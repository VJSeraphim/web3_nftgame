import React from 'react';

import { PageHOC } from '../components';

const CreateBattle = () => {
  return (
    <div>
      <h1 className="text-white text-xl">
        Creating Battle Field...
      </h1>
    </div>
  )
};

export default PageHOC (
  CreateBattle,
  <>
    Create <br /> a New Battle
  </>,
  <>
    Create your own battle field <br /> and wait for your opponent to fight
  </>
)