
import { CardDescription } from '../cards/style.js';

export const CardDescriptionText = (options) => {
  var text = options.description || '';

  return (
    <CardDescription {...options.style}>
      {text}
    </CardDescription>
  );
}