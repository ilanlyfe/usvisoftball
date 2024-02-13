import mock_data from "@/mock/data.json";
export function getStory(id: string) {
  return mock_data.stories.filter((s) => {
    if (s.id == id) {
      return s;
    }
  })[0];
}
