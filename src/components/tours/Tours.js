import Tour from './tour/Tour';

const Tours = ({ data }) => (
  <div>
    {data.map(({ id, name, image }) => (
      <div key={id}>
        <Tour id={id} name={name} image={image} />
      </div>
    ))}
  </div>
);

export default Tours;
