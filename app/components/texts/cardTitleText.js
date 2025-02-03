
import { CardTitle } from '../cards/style.js';

export const CardTitleText = (options) => {

  return (
    options.title && 
    <CardTitle {...options.style}>
      {options.title}
    </CardTitle>
  );
}