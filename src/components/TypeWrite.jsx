import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'Hi, I am Sean', // Types 'One'
        1000, // Waits 1s
        'Hi, I am a developer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Hi, I am a software engineer', // Types 'Three' without deleting 'Two'
        3000,
        'Hi, I am a software engineer', 
        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
  );
};

export default ExampleComponent;