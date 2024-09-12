import "./styles.scss";

type ExampleProps = {
  title: string;
};

const Example = ({ title }: ExampleProps) => {
  return <div>{title}</div>;
};

export default Example;
