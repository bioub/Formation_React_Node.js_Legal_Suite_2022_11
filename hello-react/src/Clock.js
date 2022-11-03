function Clock() {
  const now = new Date();
  return (
    <div className="Clock">
      {now.toLocaleTimeString()}
    </div>
  );
}

export default Clock;
