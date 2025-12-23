import { ScrollStory } from "../components/ScrollStory";
import { GOSPEL_CHAPTERS } from "../content/gospelStory";

export function StoryPage() {
  return (
    <div className="storyPage">
      <ScrollStory
        title="The Gospel Story"
        subtitle="Scroll through the major points • tap to jump • built for phone/tablet/desktop"
        chapters={GOSPEL_CHAPTERS}
      />
    </div>
  );
}


