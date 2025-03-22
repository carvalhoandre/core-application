const Button = () => {
  return (
    <div className="fixed bottom-5 right-5 cursor-pointer">
      <img src="/chat.svg" alt="chat" width={50} height={50} />
      <button className="btn">Click me</button>
    </div>
  );
};

export default Button;
