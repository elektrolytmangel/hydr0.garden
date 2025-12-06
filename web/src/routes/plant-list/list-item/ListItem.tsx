import plantPot from "../../../assets/plant-pot.svg";
import { Paragraph } from "../../../components/ui/paragraph/Paragraph";

export const ListItem = () => {
  return (
    <div className="flex flex-col items-center cursor-pointer">
      <img
        src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"
        alt="Plant"
        className="w-full h-30 object-cover rounded-md mb-1"
      />
      <div className="relative">
        <img
          src={plantPot}
          className="opacity-30 inset-0 object-cover h-50 blur"
        />
        <img
          src={plantPot}
          className="absolute opacity-90 inset-0 object-cover h-50"
        />
        <div className="absolute inset-0 flex flex-col justify-start items-center pt-2">
          <Paragraph className="font-bold text-black">Lyania</Paragraph>
          <Paragraph>latin name / species</Paragraph>
          <Paragraph>status</Paragraph>
        </div>
      </div>
    </div>
  );
};
