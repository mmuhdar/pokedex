export default function Button({ title, onClick }) {
  return (
    <button
      className="text-gray-400 font-semibold focus:border-b-4 focus:border-indigo-400 p-5"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
