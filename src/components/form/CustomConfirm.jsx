import Button from './Button';

const CustomConfirm = (props) => {
  const handleConfirm = () => {
    props.confirm();
    props.setShowConfirm(false);
  };

  const handleCancel = () => {
    props.cancel();
    props.setShowConfirm(false);
  };
  return (
    <div className="custom-confirm">
      <div className="custom-confirm-content">
        <p>{props.message}</p>
        <Button
          className={'confirm-btn'}
          label={'저장'}
          clickHandler={handleConfirm}
        />
        <Button
          className={'confirm-btn'}
          label={'취소'}
          clickHandler={handleCancel}
        />
      </div>
    </div>
  );
};
export default CustomConfirm;
