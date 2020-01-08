import React, {useEffect} from 'react'

import Authorization from "../../Shared/Authorization"
import History from "../../Shared/History"

function Accounts() {

  useEffect(() => {
    Authorization.logout()
    History.push('/')
  }, []);

  return (
    <div>
      logging out..
    </div>
  );
}

export default Accounts;