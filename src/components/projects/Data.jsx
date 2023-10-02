import Image1 from "../../assets/project1.png";
import Image2 from "../../assets/project2.png";
import Image3 from "../../assets/project3.png";
import { useTranslation } from 'react-i18next';

const Data = [
  {
    id: 1,
    image: Image1,
    title: "projects.title.one",
    description:
    "projects.description.one",
  },
  {
    id: 2,
    image: Image2,
    title: "projects.title.two",
    description:
    "projects.description.two",
  },
  {
    id: 3,
    image: Image3,
    title:"projects.title.three",
    description:
    "projects.description.three",  },
];

export default Data;

export const TranslatedData = () => {
  const { t } = useTranslation();

  return Data.map((project) => ({
    ...project,
    title: t(project.title),
    description: t(project.description),
  }));
};
