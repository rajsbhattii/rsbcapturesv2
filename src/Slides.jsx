import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Slides() {
    const slideImages = [
        'public/Store/M5Rear.jpg',
        'public/Store/RoverSide.jpg'
        // ... more images
      ];
    return (
    <div>
      <Slide images={slideImages} duration={3000} transitionDuration={1000} />
    </div>
  );
};

