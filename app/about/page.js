export const metadata = {
  title: 'About',
  description: 'This is the about page',
};

export default function AboutPage() {
  // JSON, JSON.stringify() and JSON.parse() (by Lukas)
  const myComplexObject = { name: 'Karl', age: 40 };

  console.log(myComplexObject);

  const myComplexObjectAsString = JSON.stringify(myComplexObject);

  console.log(myComplexObjectAsString);

  const myComplexObjectAsObject = JSON.parse(myComplexObjectAsString);

  console.log(myComplexObjectAsObject);

  // end

  return (
    <div>
      <h1>AboutPage</h1>
      <div>Render undefined, null, true, false</div>{' '}
      {/* JSON, JSON.stringify() and JSON.parse() (by Lukas) */}
      {/* <div>{{undefined, null, true, false}}</div> */}
      <div>{JSON.stringify([undefined, null, true, false])}</div>{' '}
      {/* JSON, JSON.stringify() and JSON.parse() (by Lukas) */}
      <div>{myComplexObjectAsString}</div>{' '}
      {/* JSON, JSON.stringify() and JSON.parse() (by Lukas) */}
    </div>
  );
}
