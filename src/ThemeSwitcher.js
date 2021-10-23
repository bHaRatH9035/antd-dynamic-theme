import { Switch } from 'antd';
import React, { useEffect, useState } from 'react';

import LIGHT from 'antd/dist/antd.css';
import DARK from 'antd/dist/antd.dark.css';

export const ThemeSwitcher = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      LIGHT.unuse();
      DARK.use();
    } else {
      DARK.unuse();
      LIGHT.use();
    }
  }, [dark]);

  return (
    <Switch
      checked={dark}
      onChange={() => setDark(!dark)}
      checkedChildren={'Light'}
      unCheckedChildren={'Dark'}
    />
  );
};
