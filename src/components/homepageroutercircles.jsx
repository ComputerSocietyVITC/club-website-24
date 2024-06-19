import { NavLink } from "react-router-dom";

const HomePageRouterCircles = ({ route }) => {
  console.log(route.title);
  return (
    <>
      <NavLink to={route.href}>
        <section className="rounded-[1000px] p-0.5 bg-gradient-to-b from-b_col3 to-b_col4 w-[200px] h-[200px] shadow-2xl shadow-[#7ac4ec]/30 hover:scale-150 transition duration-200 mx-16 scale-125 my-16">
          <div className="rounded-[calc(1000px-1px)]  bg-gradient-to-b  from-[#061b24] from-2% via-[#072031] to-[#000b11] h-[195px] w-[195px] to-9%">
            <div className="w-full h-full flex items-center justify-center">
              <h2 className="text-4xl font-semibold text-center text-[#7DFEF7]">
                {route.title}
              </h2>
            </div>
          </div>
        </section>
      </NavLink>
    </>
  );
};

export default HomePageRouterCircles;
