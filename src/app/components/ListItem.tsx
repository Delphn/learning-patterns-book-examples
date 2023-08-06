import React, {useContext} from 'react';
import { ThemeContext } from '@/app/page'

export default function ListItem() {
  const theme = useContext(ThemeContext);

  return <li style={theme.theme}>hello everybody</li>
}
