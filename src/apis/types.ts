interface Story {
  id: string;
  name: string;
  description: string;
  elements: Element;
}

interface Element {
    id: string; 
    type: string; // paragraph, title, sub-title, list

}