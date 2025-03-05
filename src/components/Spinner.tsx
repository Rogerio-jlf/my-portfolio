export default function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-7 w-7 border-t-4 border-b-4 border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
    </div>
  );
}
