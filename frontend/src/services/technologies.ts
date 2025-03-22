import { httpGet } from ".";
import { Technology } from "@core";

export async function getTechnologies() {
  const technologies = await httpGet<Array<Technology>>("technology");

  return {
    all: technologies,
    get emphasis() {
      return technologies.filter((technology) => technology.emphasis);
    },
  };
}
