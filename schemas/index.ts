import ContentEditor from "./components/ContentEditor"
import SlideEditor from "./components/SlideEditor"
import Settings from "./Settings"
import CollectionItem from "./CollectionItem"
import StoryScene from "./StoryScene"
import Location from "./Location"
import Slide from "./Slide"
import Sequence from "./Sequence"
import GameObjectData from "./components/GameObjectData"
import CutsceneEditor from "./components/CutsceneEditor"
import CutsceneSlide from "./components/CutsceneSlide"
import testObj from "./components/testObj"
import CollectionItemEvent from "./components/CollectionItemEvent"
import TagIntl from "./components/TagIntl"
import SyncDatabase from "./SyncDatabase"

// ...
import SequenceLinkBlock from "./components/blocks/SequenceLinkBlock"
import LocationLinkBlock from "./components/blocks/LocationLinkBlock"
import CollectionItemBlock from "./components/blocks/CollectionItemBlock"
import StorySceneBlock from "./components/blocks/StorySceneBlock"

export const schemaTypes = [
    ContentEditor,
    SlideEditor,
    Settings,
    CollectionItem,
    Location,
    Sequence,
    Slide,
    SequenceLinkBlock,
    LocationLinkBlock,
    CollectionItemBlock,
    StorySceneBlock,
    GameObjectData,
    CutsceneEditor,
    CutsceneSlide,
    testObj,
    CollectionItemEvent,
    TagIntl,
    SyncDatabase,
    StoryScene
]
