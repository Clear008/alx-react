import './styles.css';
import myImage from './holberton-logo.jpg';

console.log('Hello, Webpack!');

// Create and append an image to the body
const img = document.createElement('img');
img.src = myImage;
document.body.appendChild(img);

