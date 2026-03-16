import { ScrollStory } from "../components/ScrollStory";
import { GOSPEL_CHAPTERS } from "../content/gospelStory";

export function StoryPage() {
  return (
    <div className="storyPage">
      <ScrollStory
        title="The Gospel Story"
        chapters={GOSPEL_CHAPTERS}
      />
    </div>
  );
}


