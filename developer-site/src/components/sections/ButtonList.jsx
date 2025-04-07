
export const ButtonList = ({ categories, filterCategory }) => {
  return (
    <div className="mx-12 mt-5 flex justify-center items-center sm:justify-start space-x-6 lg:space-x-8 pb-1 border-b-2  border-gray-400">
      {categories?.map((category) => (
        <ul key={category} className="">
          <li
            onClick={() => filterCategory(category)}
            className="hover:text-RED_LIGHT transition ease-in duration-150 hover:cursor-pointer font-semibold text-sm md:text-base text-center"
          >
            {category}
          </li>
        </ul>
      ))}
    </div>
  );
};