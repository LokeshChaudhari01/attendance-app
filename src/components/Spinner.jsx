function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-10 w-10">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-blue-600 border-r-purple-600" />
      </div>
    </div>
  );
}

export default Spinner;
