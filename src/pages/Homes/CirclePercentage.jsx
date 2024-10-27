const CirclePercentage = ({ percentage, color }) => {
  return (
    <div
      className={`flex justify-center items-center w-10 h-10  rounded-full text-white font-bold ${color}`}
    >
      {percentage}%
    </div>
  );
};

export default CirclePercentage;
