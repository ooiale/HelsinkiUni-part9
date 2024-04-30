const Notification = ({ message }: { message: string }) => {
  return (
    <div>
      <p style={{ color: 'red', padding: '2px' }}>{message}</p>
    </div>
  );
};

export default Notification