import Teamcard from "../components/teamImage/teamcard";
import Teamcard2 from "../components/teamImage/teamcard2";
import myTeam from "../data/teamdata";
import Footer from "../components/footer";
import RetroGrid from "../components/magicui/retro-grid-team";

const Team = () => {
  return (
    <>
      <RetroGrid />
      <div className="min-h-screen scale-80 py-36 flex flex-col items-center">
        <h1 className="text-7xl text-white font-bold text-center pb-16">
          Our Team
        </h1>
        <div className="w-full max-w-6xl mb-16 px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-18 md:gap-x-20 p-4 justify-items-center">
            {myTeam.slice(0, 2).map((team, mem) => (
              <Teamcard
                key={team.name}
                name={team.name}
                desig={team.desig}
                imageUrl={team.imageUrl}
                linkUrl={team.linkUrl}
                gitUrl={team.gitUrl}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-18 md:gap-x-20 p-4 justify-items-center">
            {myTeam.slice(2, 8).map((team, mem) => (
              <Teamcard2
                key={team.name}
                name={team.name}
                desig={team.desig}
                imageUrl={team.imageUrl}
                linkUrl={team.linkUrl}
                gitUrl={team.gitUrl}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-18 md:gap-x-20 p-4 justify-items-center">
            {myTeam.slice(8).map((team, mem) => (
              <Teamcard
                key={team.name}
                name={team.name}
                desig={team.desig}
                imageUrl={team.imageUrl}
                linkUrl={team.linkUrl}
                gitUrl={team.gitUrl}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
