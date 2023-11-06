import './Frame.css';
const Frame = (props) => {
  const className = 'FrameForm ' + props.className;
  return <div className={className}>{props.children}</div>;
};
export default Frame;
