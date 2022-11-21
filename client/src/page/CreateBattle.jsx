import React from 'react';

import { PageHOC } from '../components';

const CreateBattle = () => {
  return (
    <div>
      
    </div>
  )
};

export default PageHOC(
  CreateBattle,
  <>
    Create <br/>
    a New Battle
  </>,
  <>
    Creacte your own Deck and <br />
    wait for your opponent!
  </>
)